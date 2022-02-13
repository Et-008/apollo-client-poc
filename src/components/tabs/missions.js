import React from "react";
import { Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import * as Queries from "../../queries/queries";

let Missions = (prop) => {
  let { loading, data, error } = useQuery(Queries.getMissions);

  if (loading) {
    console.log("Missions Loading");
    return "Loading...";
  }
  if (error) return `Error! ${error.message}`;

  return (
    <Row>
      {data.missions.map((mission, i) => {
        return (
          <Col key={i} lg={4} className="card">
            <h4>{mission.name}</h4>
            <h6>{mission.description}</h6>
            {/* <h6>Id: {mission.id}</h6> */}
            <p>Manufacturers: {mission.manufacturers}</p>
            {/* <div>
              Payload details:
              {mission.payloads.map((p, i) => {
                <div className="card">
                  <p></p>
                </div>;
              })}
            </div> */}
            <div>
              <p>{mission.website}</p>
              <p>{mission.twitter}</p>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default Missions;
