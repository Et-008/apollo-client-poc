import React from "react";
import { Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import * as Queries from "../../queries/queries";

let Rockets = (prop) => {
  let { loading, data, error } = useQuery(Queries.getRockets);

  if (loading) {
    console.log("Rockets Loading");
    return "Loading...";
  }
  if (error) return `Error! ${error.message}`;

  return (
    <Row>
      {data.rockets.map((rocket, i) => {
        return (
          <Col key={i} lg={4} className="card">
            <h4>{rocket.name}</h4>
            <h6>
              weight: {rocket.mass.kg} kgs{" "}
              {rocket.height && ", height: " + rocket.height + " mts"}
            </h6>
            <p className="mt-4">{rocket.description}</p>
            <p>Company: {rocket.company}</p>
            <p>
              Cost: <strong>{rocket.cost_per_launch}$</strong>
            </p>
            <div>
              <p>{rocket.timestamp}</p>
              <p>{rocket.twitter}</p>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default Rockets;
