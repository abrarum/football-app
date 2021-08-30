import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:5000/api/',
});

export const getInfo = () => api.get('/get-info')
export const getStats = () => api.get('/get-stats');


const apis = {
  getInfo,
  getStats
};

export default apis;


/*
export const allTeams = [
  {
    count: 20,
    filters: {},
    competition: {
      id: 2021,
      area: {
        id: 2072,
        name: "England"
      },
      name: "Premier League",
      code: "PL",
      plan: "TIER_ONE",
      lastUpdated: "2021-04-17T02:20:14Z"
    },
    season: {
      id: 151,
      startDate: "2018-08-10",
      endDate: "2019-05-12",
      currentMatchday: 38,
      winner: {
        id: 65,
        name: "Manchester City FC",
        shortName: "Man City",
        tla: "MCI",
        crestUrl: "https://crests.football-data.org/65.svg"
      }
    },
    teams: [
      {
        id: 57,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Arsenal FC",
        shortName: "Arsenal",
        tla: "ARS",
        crestUrl: "https://crests.football-data.org/57.svg",
        address: "75 Drayton Park London N5 1BU",
        phone: "+44 (020) 76195003",
        website: "http://www.arsenal.com",
        email: "info@arsenal.co.uk",
        founded: 1886,
        clubColors: "Red / White",
        venue: "Emirates Stadium",
        lastUpdated: "2020-11-26T02:15:20Z"
      },
      {
        id: 61,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Chelsea FC",
        shortName: "Chelsea",
        tla: "CHE",
        crestUrl: "https://crests.football-data.org/61.svg",
        address: "Fulham Road London SW6 1HS",
        phone: "+44 (0871) 9841955",
        website: "http://www.chelseafc.com",
        email: null,
        founded: 1905,
        clubColors: "Royal Blue / White",
        venue: "Stamford Bridge",
        lastUpdated: "2020-11-26T02:14:18Z"
      },
      {
        id: 62,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Everton FC",
        shortName: "Everton",
        tla: "EVE",
        crestUrl: "https://crests.football-data.org/62.svg",
        address: "Goodison Park Liverpool L4 4EL",
        phone: "+44 (0871) 6631878",
        website: "http://www.evertonfc.com",
        email: "everton@evertonfc.com",
        founded: 1878,
        clubColors: "Blue / White",
        venue: "Goodison Park",
        lastUpdated: "2021-04-12T13:10:14Z"
      },
      {
        id: 63,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Fulham FC",
        shortName: "Fulham",
        tla: "FUL",
        crestUrl: "https://crests.football-data.org/63.svg",
        address: "Craven Cottage, Stevenage Road London SW6 6HH",
        phone: "+44 (0870) 4421222",
        website: "http://www.fulhamfc.com",
        email: "enquiries@fulhamfc.com",
        founded: 1879,
        clubColors: "White / Black",
        venue: "Craven Cottage",
        lastUpdated: "2021-04-09T02:26:44Z"
      },
      {
        id: 64,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Liverpool FC",
        shortName: "Liverpool",
        tla: "LIV",
        crestUrl: "https://crests.football-data.org/64.svg",
        address: "Anfield Road Liverpool L4 0TH",
        phone: "+44 (0844) 4993000",
        website: "http://www.liverpoolfc.tv",
        email: "customercontact@liverpoolfc.tv",
        founded: 1892,
        clubColors: "Red / White",
        venue: "Anfield",
        lastUpdated: "2021-04-14T07:42:22Z"
      },
      {
        id: 65,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Manchester City FC",
        shortName: "Man City",
        tla: "MCI",
        crestUrl: "https://crests.football-data.org/65.svg",
        address: "SportCity Manchester M11 3FF",
        phone: "+44 (0870) 0621894",
        website: "https://www.mancity.com",
        email: "mancity@mancity.com",
        founded: 1880,
        clubColors: "Sky Blue / White",
        venue: "Etihad Stadium",
        lastUpdated: "2021-04-14T07:43:27Z"
      },
      {
        id: 66,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Manchester United FC",
        shortName: "Man United",
        tla: "MUN",
        crestUrl: "https://crests.football-data.org/66.svg",
        address: "Sir Matt Busby Way Manchester M16 0RA",
        phone: "+44 (0161) 8688000",
        website: "http://www.manutd.com",
        email: "enquiries@manutd.co.uk",
        founded: 1878,
        clubColors: "Red / White",
        venue: "Old Trafford",
        lastUpdated: "2021-04-08T22:19:28Z"
      },
      {
        id: 67,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Newcastle United FC",
        shortName: "Newcastle",
        tla: "NEW",
        crestUrl: "https://crests.football-data.org/67.svg",
        address: "Sports Direct Arena Newcastle upon Tyne NE1 4ST",
        phone: null,
        website: "http://www.nufc.co.uk",
        email: "admin@nufc.co.uk",
        founded: 1881,
        clubColors: "Black / White",
        venue: "St. James' Park",
        lastUpdated: "2020-11-26T02:14:26Z"
      },
      {
        id: 73,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Tottenham Hotspur FC",
        shortName: "Tottenham",
        tla: "TOT",
        crestUrl: "https://crests.football-data.org/73.svg",
        address: "Bill Nicholson Way, 748 High Road London N17 0AP",
        phone: "+44 (0844) 4995000",
        website: "http://www.tottenhamhotspur.com",
        email: "customer.care@tottenhamhotspur.com",
        founded: 1882,
        clubColors: "Navy Blue / White",
        venue: "Tottenham Hotspur Stadium",
        lastUpdated: "2020-11-20T07:12:32Z"
      },
      {
        id: 76,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Wolverhampton Wanderers FC",
        shortName: "Wolverhampton",
        tla: "WOL",
        crestUrl: "https://crests.football-data.org/76.svg",
        address: "Waterloo Road Wolverhampton WV1 4QR",
        phone: "+44 (0871) 2222220",
        website: "http://www.wolves.co.uk",
        email: "info@wolves.co.uk",
        founded: 1877,
        clubColors: "Black / Gold",
        venue: "Molineux Stadium",
        lastUpdated: "2021-04-09T02:25:24Z"
      },
      {
        id: 328,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Burnley FC",
        shortName: "Burnley",
        tla: "BUR",
        crestUrl: "https://crests.football-data.org/328.svg",
        address: "Harry Potts Way Burnley BB10 4BX",
        phone: "+44 (0871) 2211882",
        website: "http://www.burnleyfootballclub.com",
        email: "info@burnleyfc.com",
        founded: 1881,
        clubColors: "Claret / Sky Blue",
        venue: "Turf Moor",
        lastUpdated: "2020-11-26T02:14:29Z"
      },
      {
        id: 338,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Leicester City FC",
        shortName: "Leicester City",
        tla: "LEI",
        crestUrl: "https://crests.football-data.org/338.svg",
        address: "The Walkers Stadium, Filbert Way Leicester LE2 7FL",
        phone: "+44 (0844) 8156000",
        website: "http://www.lcfc.com",
        email: null,
        founded: 1884,
        clubColors: "Royal Blue / White",
        venue: "King Power Stadium",
        lastUpdated: "2020-11-26T02:14:30Z"
      },
      {
        id: 340,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Southampton FC",
        shortName: "Southampton",
        tla: "SOU",
        crestUrl: "https://crests.football-data.org/340.svg",
        address: "Britannia Road Southampton SO14 5FP",
        phone: null,
        website: "http://www.saintsfc.co.uk",
        email: "sfc@saintsfc.co.uk",
        founded: 1885,
        clubColors: "Red / White / Black",
        venue: "St. Mary's Stadium",
        lastUpdated: "2021-04-12T13:03:01Z"
      },
      {
        id: 346,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Watford FC",
        shortName: "Watford",
        tla: "WAT",
        crestUrl: "https://crests.football-data.org/346.svg",
        address: "Vicarage Road Watford WD18 0ER",
        phone: null,
        website: "http://www.watfordfc.com",
        email: "yourvoice@watfordfc.com",
        founded: 1881,
        clubColors: "Yellow / Black",
        venue: "Vicarage Road Stadium",
        lastUpdated: "2020-11-26T02:16:48Z"
      },
      {
        id: 354,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Crystal Palace FC",
        shortName: "Crystal Palace",
        tla: "CRY",
        crestUrl: "https://crests.football-data.org/354.svg",
        address: "Whitehorse Lane London SE25 6PU",
        phone: "+44 (020) 87686000",
        website: "http://www.cpfc.co.uk",
        email: "info@cpfc.co.uk",
        founded: 1905,
        clubColors: "Red / Blue",
        venue: "Selhurst Park",
        lastUpdated: "2020-11-26T02:14:34Z"
      },
      {
        id: 394,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Huddersfield Town AFC",
        shortName: "Huddersfield",
        tla: "HUD",
        crestUrl: "https://crests.football-data.org/394.svg",
        address: "Stadium Way Huddersfield HD1 6PX",
        phone: "+44 (0148) 4484112",
        website: "http://www.htafc.com",
        email: "info@htafc.com",
        founded: 1908,
        clubColors: "Blue / White",
        venue: "The John Smith's Stadium",
        lastUpdated: "2021-04-13T10:14:58Z"
      },
      {
        id: 397,
        area: {
          id: 2072,
          name: "England"
        },
        name: "Brighton & Hove Albion FC",
        shortName: "Brighton Hove",
        tla: "BHA",
        crestUrl: "https://crests.football-data.org/397.svg",
        address: "44 North Road Brighton & Hove BN1 1YR",
        phone: "+44 (01273) 878288",
        website: "http://www.seagulls.co.uk",
        email: "seagulls@bhafc.co.uk",
        founded: 1898,
        clubColors: "Blue / White",
        venue: "The American Express Community Stadium",
        lastUpdated: "2021-04-12T13:10:44Z"
      },
      {
        id: 563,
        area: {
          id: 2072,
          name: "England"
        },
        name: "West Ham United FC",
        shortName: "West Ham",
        tla: "WHU",
        crestUrl: "https://crests.football-data.org/563.svg",
        address: "Queen Elizabeth Olympic Park, London London E20 2ST",
        phone: "+44 (020) 85482794",
        website: "http://www.whufc.com",
        email: "yourcomments@westhamunited.co.uk",
        founded: 1895,
        clubColors: "Claret / Sky Blue",
        venue: "London Stadium",
        lastUpdated: "2021-01-22T16:56:20Z"
      },
      {
        id: 715,
        area: {
          id: 2264,
          name: "Wales"
        },
        name: "Cardiff City FC",
        shortName: "Cardiff",
        tla: "CAR",
        crestUrl: "https://crests.football-data.org/715.svg",
        address: "Cardiff City Stadium, Leckwith Road Cardiff CF11 8AZ",
        phone: "+44 (0845) 3651115",
        website: "http://www.cardiffcityfc.co.uk",
        email: "club@cardiffcityfc.co.uk",
        founded: 1899,
        clubColors: "Blue / White",
        venue: "Cardiff City Stadium",
        lastUpdated: "2021-04-16T10:38:53Z"
      },
      {
        id: 1044,
        area: {
          id: 2072,
          name: "England"
        },
        name: "AFC Bournemouth",
        shortName: "Bournemouth",
        tla: "BOU",
        crestUrl: "https://crests.football-data.org/1044.svg",
        address: "Dean Court, Kings Park Bournemouth BH7 7AF",
        phone: "+44 (01202) 726300",
        website: "http://www.afcb.co.uk",
        email: "admin@afcb.co.uk",
        founded: 1890,
        clubColors: "Red / Black",
        venue: "Vitality Stadium",
        lastUpdated: "2021-04-13T10:09:48Z"
      }
    ]
  }
]
*/