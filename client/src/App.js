import "./styles.css";
import Search from "./components/search";
import InfoUI from "./components/infoUI";
//import { allTeams } from "./api/allTeams";
//import { allGoals } from "./api/totalGoals";
import api from "./api/api"
import { useCallback, useEffect, useState } from "react";

export default function App() {
  const [searchItem, setSearchItem] = useState("");
  const [info, setInfo] = useState([]);
  const [standings, setStandings] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    console.log("inside this effecto.....")

    
    async function fetchInfo() {
      const response = await api.getInfo();
      setInfo(response.data.teams);
    }

    async function fetchStats() {
      const response = await api.getStats();
      setStandings(response.data.standings[0].table);
    }

    fetchInfo().then(() => fetchStats())
  }, []);

  const mergeData = useCallback((allData, allStats) => {
    // merging

    let obj = {};
    allData.forEach((x) => {
      obj[x.id] = x;
    });

    let result = allStats.map((x) => {
      //console.log("x is: ", x);
      return {
        id: x.id,
        name: obj[x.id].name,
        address: obj[x.id].address,
        website: obj[x.id].website,
        phone: obj[x.id].phone,
        won: x.won,
        lost: x.lost,
        goalsFor: x.goalsFor
      };
    });
    return result;
  }, []);

  const filterData = useCallback(
    // filtering
    () => {
      //console.log("inside filterData", info);
      let dataFormat = {
        id: "",
        name: "",
        address: "",
        website: "",
        phone: ""
      };
      let stats = {
        id: "",
        won: "",
        lost: "",
        goalsFor: ""
      };
      let allData = [];
      let allStats = [];

      info
        .filter((x) => {
          return x.id === searchItem;
        })
        .map((x) => {
          //console.log("inside mapper", x);
          dataFormat.id = x.id;
          dataFormat.name = x.name;
          dataFormat.address = x.address;
          dataFormat.website = x.website;
          dataFormat.phone = x.phone;

          return allData.push(dataFormat);
        });

      // filtering stats

      standings
        .filter((x) => {
          return x.team.id === searchItem;
        })
        .map((x) => {
          stats.id = x.team.id;
          stats.won = x.won;
          stats.lost = x.lost;
          stats.goalsFor = x.goalsFor;

          return allStats.push(stats);
        });

      console.log("allStats, allData", allData, allStats);

      return [allData, allStats];
    },
    [info, searchItem, standings]
  );

  useEffect(() => {
    if (searchItem) {
      let [allData, allStats] = filterData();
      console.log("dataArrays is: ", allData, allStats);
      let result = mergeData(allData, allStats);
      setFilteredData(result);
    } else {
      console.log("empty");
    }
  }, [searchItem, filterData, mergeData]);

  function handleSearchChange(key) {
    setSearchItem(key);
  }

  return (
    <div className="App">
      <h2>Football Stats</h2>
      <Search options={info} onChange={handleSearchChange} />
      <InfoUI teamData={filteredData} />
    </div>
  );
}
