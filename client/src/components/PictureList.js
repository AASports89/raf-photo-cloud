import React from 'react';
import { Link } from 'react-router-dom';

const PictureList = ({
  pictures,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!pictures.length) {
    return <h3>No Pictures Created...Yet❗🚫</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {pictures &&
        pictures.map((picture) => (
          <div key={picture._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${picture.username}`}
                >
                  {picture.username} <br />
                  <span style={{ fontSize: '1rem' }}>
                    photo posted @: {picture.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                  Photo posted @: {picture.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2" data="zoom-in">
              <p>{picture.comment}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/pictures/${picture._id}`}
            >
              Post pictures!
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PictureList;