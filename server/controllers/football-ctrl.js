const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
const axios = require('axios');

async function getInfo(req, res) {
  
  const url = "https://api.football-data.org/v2/competitions/2021/teams?season=2018"

  try {
    const response = await axios.get(url, {
      headers: {
        'X-Auth-Token': process.env.MY_TOKEN
      }
      })
    console.log(response.data);
    res.status(200).send(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

async function getStats(req, res) {
  
  const url = "https://api.football-data.org/v2/competitions/2021/standings?season=2018"

  try {
    const response = await axios.get(url, {
      headers: {
        'X-Auth-Token': process.env.MY_TOKEN
      }
      })
    console.log(response.data);
    res.status(200).send(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getInfo,
  getStats,
};
