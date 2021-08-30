import React from "react";
import "../styles.css";

export default function InfoUI({ teamData }) {
  //if (teamData) teamData.map((x) => console.log(x));
  return (
    <table id="table-stats">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Won</th>
          <th>Lost</th>
          <th>Goals</th>
        </tr>
      </thead>
      <tbody>
        {teamData[0] ? (
          teamData.map((x) => (
            <tr key={x.id}>
              <td>{x.name}</td>
              <td>{x.address}</td>
              <td>{x.phone}</td>
              <td>{x.website}</td>
              <td>{x.won}</td>
              <td>{x.lost}</td>
              <td>{x.goalsFor}</td>
            </tr>
          ))
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
}
