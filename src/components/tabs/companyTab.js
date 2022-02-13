import React from "react";
import { Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import * as Queries from "../../queries/queries";

let Company = (prop) => {
  let { loading, data, error } = useQuery(Queries.getCompanies, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
  });

  if (loading) {
    console.log("Companies Loading");
    return "Loading...";
  }
  if (error) return `Error! ${error.message}`;

  let {
    companyName,
    ceo,
    coo,
    cto_propulsion,
    cto,
    employees,
    founded,
    founder,
    headquarters,
    vehicles,
    valuation,
    summary,
  } = data.company;

  return (
    <>
      <Row>
        <Col className="card">
          <h2>Company: {companyName}</h2>
          <h5>
            Fonder: {founder} - {founded}
          </h5>
          <p className="mt-4">{summary}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>CEO: {ceo}</p>
        </Col>
        <Col>
          <p>COO: {coo}</p>
        </Col>
        <Col>
          <p>CTO: {cto}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>Cto Propulsion: {cto_propulsion}</p>
        </Col>
        <Col>
          <p>Valuation: {valuation}</p>
        </Col>
        <Col>
          <p>Employees: {employees}</p>
        </Col>
      </Row>
      <div>Vehicles: {vehicles}</div>
      <footer className="mt-15">
        <h4>
          HQ: {headquarters.address}, {headquarters.city}, {headquarters.state}.
        </h4>
      </footer>
    </>
  );
};

export default Company;
