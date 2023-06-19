import React from "react"

const Home = ({ parlays = 
[
  {"commence_time":"2023-01-05T01:15:00Z","home_team":"Green Bay Packers","price":-110,"point":-7},{"away_team":"Los Angeles Rams","price":-110,"point":7},
  {"commence_time":"2023-01-05T01:15:00Z","home_team":"Jacksonville Jaguars","price":100,"point":-1.5},{"away_team":"New York Jets","price":-122,"point":1.5},
  {"commence_time":"2023-01-05T01:15:00Z","home_team":"Atlanta Falcons","price":-110,"point":7},{"away_team":"Baltimore Ravens","price":-110,"point":-7},
  {"commence_time":"2023-01-05T01:15:00Z","home_team":"Buffalo Bills","price":-114,"point":-8},{"away_team":"Chicago Bears","price":-106,"point":8},
  {"commence_time":"2023-01-05T01:15:00Z","home_team":"Carolina Panthers","price":-110,"point":3},{"away_team":"Detroit Lions","price":-110,"point":-3},
  {"commence_time":"2023-01-05T01:15:00Z","home_team":"Cincinnati Bengals","price":-115,"point":-3.5},{"away_team":"New England Patriots","price":-105,"point":3.5},
  {"commence_time":"2023-01-05T01:15:00Z","home_team":"Cleveland Browns","price":-115,"point":-3},{"away_team":"New Orleans Saints","price":-105,"point":3},
  {"commence_time":"2023-01-05T01:15:00Z","home_team":"Houston Texans","price":-110,"point":7},{"away_team":"Tennessee Titans","price":-110,"point":-7},
  {"commence_time":"2023-01-05T01:15:00Z","home_team":"Kansas City Chiefs","price":-110,"point":-10},{"away_team":"Seattle Seahawks","price":-110,"point":10},
  {"commence_time":"2023-01-05T01:15:00Z","home_team":"Dallas Cowboys","price":-110,"point":-1.5},{"away_team":"Philadelphia Eagles","price":-110,"point":1.5},
  {"commence_time":"2023-01-05T01:15:00Z","home_team":"Las Vegas Raiders","price":-106,"point":1.5},{"away_team":"Pittsburgh Steelers","price":-114,"point":-1.5},
  {"commence_time":"2023-01-05T01:15:00Z","home_team":"Green Bay Packers","price":-114,"point":4.5},{"away_team":"Miami Dolphins","price":-106,"point":-4.5},
  {"commence_time":"2023-01-05T01:15:00Z","home_team":"Denver Broncos","price":-110,"point":-1},{"away_team":"Los Angeles Rams","price":-110,"point":1},
  {"commence_time":"2023-01-05T01:15:00Z","home_team":"Arizona Cardinals","price":-110,"point":4.5},{"away_team":"Tampa Bay Buccaneers","price":-110,"point":-4.5},
  {"commence_time":"2023-01-05T01:15:00Z","home_team":"Indianapolis Colts","price":-106,"point":3},{"away_team":"Los Angeles Chargers","price":-114,"point":-3}
] 
}) => {
    if (!parlays.length) {
      return <h3>No Parlays Yet</h3>;
    }

return (
  <div className="flex-row justify-center home" id="sport">
   
  <tbody id="sport-body">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
      <h1 id="title-head"><i className="fa-solid fa-football" id="football"></i><img id="par-list" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1670251085/cooltext424908928422040_lyvsia.png" alt="parlays"></img><i className="fa-solid fa-football" id="football"></i></h1>
        <tr id="par-t">
          <th id="main-t">Home <i className="fa-solid fa-house-chimney" id="icon"></i> Team</th>
          <th id="main-t">Away <i className="fa-solid fa-signs-post" id="icon"></i> Team</th>
          <th id="main-t"><i className="fa-regular fa-clock" id="icon"></i> Date & Time</th>
          <th id="main-t">Spread <i className="fa-solid fa-dice" id="dice"></i></th>
          <th id="main-t">Money-Line<i className="fa-solid fa-dice" id="dice"></i></th>
        </tr>

          {parlays && parlays.map(parlay => (
            
      
        <tr key={parlay.id}>
  
          <td className="card" id="prices">{parlay.home_team}</td>
          <td className="card" id="prices">{parlay.away_team}</td>
   
          <td className="card" id="clock">{parlay.commence_time}</td>
   
          <td className="card" id="prices">{parlay.point}</td>
          <td className="card" id="prices">{parlay.price}</td>
    
        </tr>
      ))}
      </tbody>
  </div>
  )}

export default Home