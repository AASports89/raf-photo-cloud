import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_PICTURES } from '../utils/queries';

import { ADD_PICTURE } from '../utils/mutations';
import Auth from '../utils/auth';

const PostForm = () => {
 
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [comment, setCommentSchema] = useState('');

  const [addPicture, { error }] = useMutation(ADD_PICTURE);

  const { loading, data } = useQuery(QUERY_PICTURES);
  const pictures = data?.pictures || [];

  if (loading) {
    return <div>Loading...<i id="login_icon" class="fa-regular fa-image"></i>...</div>;
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { pictures } = await addPicture({
        pictures: {
        title,
        image,
        comment,
        username: Auth.getProfile().data.username,
        },
      });
      setTitle('');
      setImage('');
      setCommentSchema('');
    } catch (err) {
      console.error(err);
    }
 
  };
  const handleChange = (event) => {
    const { checkbox, value } = event.target;

    if (checkbox === false) {
      setTitle(value);
      setImage(value);
      setCommentSchema(value);
    }
  };

  return (
    
    <div>
      <h4><i class="fa-solid fa-cloud"></i> Pictures Posted <i class="fa-regular fa-image"></i></h4>

      {Auth.loggedIn() ? (
        <>
            Picture Posted <i class="fa-solid fa-circle-check"></i>: {false}
            {pictures && pictures.map((picture) => 
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9" data="slide-right" key={picture._id}>
              <input
                checkbox={false}
                value={picture.title}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
              <label forHtml={picture.title}>{picture.title}</label>
            </div>
            <div className="col-12 col-lg-9" data="slide-right" key={picture._id}>
             <div id="inline_container"></div>
              <label forHtml={picture.image}>{picture.image}</label>
            </div>
            <div className="col-12 col-lg-9" data="slide-left">
              <input
                checkbox={false}
                value={picture.comment}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
               <label forHtml={picture.comment}>{picture.comment}</label>
            </div>
            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Picture(s) <i class="fa-solid fa-file-import"></i>
              </button>
            </div>
          </form>
            )}
        </>
      ) : (
        <p>
           ⛔ Log in to post picture(s)❗ Please❗{' '}
          <Link to="/login">Login <i id="login_icon" class="fa-solid fa-users-rectangle"></i></Link> or <Link to="/signup">Sign Up <i class="fa-solid fa-user-plus"></i></Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;