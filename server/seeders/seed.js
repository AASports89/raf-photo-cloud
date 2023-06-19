const db = require('../config/connection');
const { User, Parlay, Game } = require('../models');
const userSeeds = require('./userSeeds.json');
const picks = require('./game.json');
// const gameList = require('./gamelist.json');
// const gameSeeds = require('./gameList.json');
// const parlaySeeds = require('./parlayBets.json');

// const reformattedGames = gameSeeds.map(element => {

//   const home_team = element.home_team;
//   const away_team = element.away_team;
//   const home_price = element.home_price;
//   const away_price = element.away_price;
//   const home_point = element.home_point;
//   const away_point = element.away_point;
//   const commence_time = element.commence_time;

//   const gameObj = {
//     home_team: home_team,
//     away_team: away_team,
//     home_odds: home_price,
//     away_odds: away_price,
//     home_spread: home_point,
//     away_spread: away_point,
//     commence_time: commence_time,
//   }

//   return gameObj;
// });

db.once('open', async () => {

  try { 
    await Parlay.deleteMany({});
    await User.deleteMany({});
    await User.create(userSeeds);
    for (let i = 0;  i < picks.length; i++) {
    const { _id, username }= await Parlay.create(picks[i]);
    const user = await User.findOneAndUpdate(
      {username:username},
      {
        $addToSet: {
          parlays: _id,
        }
      }
    )
    console.log(userSeeds);
  }
  //   await Parlay.create(picks);
  //   console.log(picks);
  //   for (let i = 0;  i < picks.length; i++) {
  //   const { _id, username } = await Parlay.create(picks[i]);
  //   const user = await User.findOneAndUpdate(
  //     { username: username },
  //     { outcomeId: _id, parlayId: _id },
  //     {
  //       $addToSet: {
  //         parlays: {outcomes: _id},
  //       },
  //     }
  //   );
  //   console.log(picks);
  // }

} catch (err) {
    console.error(err);
    process.exit(1);
}
  console.log('Success ✅ Seeds planted 🎄');
    process.exit(0);
});