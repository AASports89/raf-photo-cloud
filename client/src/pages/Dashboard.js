import React from 'react';
import { useQuery } from '@apollo/client';
import PictureList from '../components/PictureList';
import { QUERY_PICTURES } from '../utils/queries';

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_PICTURES);
  const pictures = data?.pictures || [];
 
    if (loading) {
      return <div>Loading...<i id="login_icon" class="fa-regular fa-image"></i>...</div>;
    }
    
  return (
  <main>
      <div className="flex-row justify-center">
      <div id="parlay-form"
            className="col-12 col-md-10 mb-3 p-3"
          >
          </div>
      <div className="flex-row justify-center">
        {loading ? (
          <div>Loading...<i id="login_icon" class="fa-regular fa-image"></i>...</div>
          ) : (
        <PictureList 
        pictures={pictures}
        title= "Post w/ friends & family!"
        />
        
        )}
        </div>
        </div>
  </main>
     

  );
};

export default Dashboard;
