import React from 'react';
import { Link } from 'react-router-dom';

const ParlayList = ({
  parlays,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!parlays.length) {
    return <h3>No Parlays Created...Yet❗🚫</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {parlays &&
        parlays.map((parlay) => (
          <div key={parlay._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${parlay.username}`}
                >
                  {parlay.username} <br />
                  <span style={{ fontSize: '1rem' }}>
                    will cash in @: {parlay.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                  You will cash in on this party after: {parlay.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2" data="zoom-in">
              <p>{parlay.outcomes}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/parlays/${parlay._id}`}
            >
              Pick The Next Winner...💰...Winner...💰...Chicken...🐔...Dinner!
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ParlayList;