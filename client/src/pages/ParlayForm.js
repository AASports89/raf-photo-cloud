import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_PARLAYS } from '../utils/queries';

import { ADD_PARLAY } from '../utils/mutations';
import Auth from '../utils/auth';

const ParlayForm = () => {
 
  const [home_team, setHomeChoice] = useState('');
  const [away_team, setAwayChoice] = useState('');
  const [point, setPoint] = useState('');
  const [price, setPrice] = useState('');

  const [addParlay, { error }] = useMutation(ADD_PARLAY);

  const { loading, data } = useQuery(QUERY_PARLAYS);
  const parlays = data?.parlays || [];

  if (loading) {
    return <div>Loading...💸...</div>;
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { parlays } = await addParlay({
        parlays: {
         home_team,
         away_team,
         price,
         point,
          username: Auth.getProfile().data.username,
        },
      });
      setHomeChoice('');
      setAwayChoice('');
      setPrice('');
      setPoint(' ');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { checkbox, value } = event.target;

    if (checkbox === false) {
      setHomeChoice(value);
      setAwayChoice(value);
      setPrice(value);
      setPoint(value);
    }
  };

  return (
    <div>
      <h4>💸...Which Picks Look Like A Lock 🔒❔...💸</h4>

      {Auth.loggedIn() ? (
        <>
            Parlay Selections Confirmed ✅: {false}
            {parlays && parlays.map((parlay) => 
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9" data="slide-right" key={parlay._id}>
              <input
                checkbox={false}
                value={parlay.home_team}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
              <label forHtml={parlay.home_team}>{parlay.home_team}</label>
            </div>
            <div className="col-12 col-lg-9" data="slide-right" key={parlay._id}>
              <input
                checkbox={false}
                value={parlay.away_team}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
              <label forHtml={parlay.away_team}>{parlay.away_team}</label>
            </div>
            <div className="col-12 col-lg-9" data="slide-left">
              <input
                checkbox={false}
                value={parlay.price}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
               <label forHtml={parlay.price}>{parlay.price}</label>
            </div>
            <div className="col-12 col-lg-9" data="slide-right">
              <input
                checkbox={false}
                value={parlay.point}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
               <label forHtml={parlay.point}>{parlay.point}</label>
            </div>
            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Selections 💸
              </button>
            </div>
          </form>
            )}
        </>
      ) : (
        <p>
           ⛔ You need to be logged in to make picks❗ Please❗{' '}
          <Link to="/login">Login 📡</Link> or <Link to="/signup">Sign Up 🔏</Link>
        </p>
      )}
    </div>
  );
};

export default ParlayForm;