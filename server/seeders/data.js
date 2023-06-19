const axios = require('axios').default;
const fs = require('fs');
// const path = require("path");
// const OUTPUT_DIR = path.resolve(__dirname, "pages");
// const outputPath = path.join(OUTPUT_DIR, "GameData.html");
// const render = require("../../client/src/components/gamesData");
// const SPORT_KEYS = ['americanfootball_nfl', 'soccer_epl'] // For a list of sport keys, see https://the-odds-api.com/sports-odds-data/sports-apis.html

/**
 * Calls v4 of The Odds API and returns odds data in a tabular structure
 * For details, see https://the-odds-api.com/liveapi/guides/v4/#parameters-2
 *
 * @param {string} apiKey Get an API key from https://the-odds-api.com/#get-access
 * @param {string} sportKey For a list of sport keys, see https://the-odds-api.com/sports-odds-data/sports-apis.html
 * @param {string} markets Comma separated list of betting markets. Valid values are h2h, spreads & totals
 * @param {string} regions Comma separated list of bookmaker regions. Valid values are us, uk, eu and au
 * @param {string} oddsFormat Valid values are american and decimal.
 * @param {string} dateFormat Valid values are unix and iso.
 * @return {object} A dictionary containing keys for metaData and eventData, each with a value as a 2D array (tabular) for easy output to a spreadsheet. If the request fails, event_data will be null.
 */

function fetchOdds() {
  const url = `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds`;
  const apiKey = '1c05f13d59aa4e673bdbbb19db1a1d7d' // Get an API key from https://the-odds-api.com/#get-access
  const markets = 'spreads' // Comma separated list of betting markets. Valid values are h2h, spreads & totals
  const regions = 'us' // Comma separated list of bookmaker regions. Valid values are us, uk, eu and au
  const oddsFormat = 'american' // Valid values are american and decimal.
  const dateFormat = 'unix' // Valid values are unix and iso.
  const bookmakers = 'fanduel'

  axios.get(url, {
    params: {
        apiKey,
        markets,
        bookmakers,
        oddsFormat,
        dateFormat,
    }
  })
  .then(response => {
      fs.writeFile('./game.json', JSON.stringify(response.data),
        function (err) {
          if (err) {
              return console.log(err);
          }
        })
          console.log("File written succesfully");
          console.log('Remaining requests',response.headers['x-requests-remaining'])
          console.log('Used requests',response.headers['x-requests-used'])
        });
      }
fetchOdds();