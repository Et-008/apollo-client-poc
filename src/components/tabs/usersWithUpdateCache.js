import React from "react";
import { Row, Col } from "react-bootstrap";
import { useQuery, NetworkStatus, useMutation } from "@apollo/client";
import * as Queries from "../../queries/queries";
import {
  AddUser,
  DeleteUser,
  DeleteAllUser,
} from "../mutation/mutation";

let HomeTab = (prop) => {
  let { loading, data, error, refetch, networkStatus } = useQuery(
    Queries.getUser
  );

  if (loading) {
    console.log("Users Loading");
    return "Loading...";
  }
  if (networkStatus === NetworkStatus.refetch) {
    console.log("Users Refetching");
    return "Refetching!";
  }
  if (error) return `Error! ${error.message}`;

  return (
    <Row>
      {data.users.map((user, i) => {
        return (
          <Col key={i} lg={4} className="card">
            <h4>
              ID: {user.id}{" "}
              <DeleteUser Id={user.id} Refetch={() => refetch()} />
            </h4>
            <h6>Name: {user.name}</h6>
            <div>
              <p>Created at: {user.timestamp}</p>
              <p>{user.twitter}</p>
            </div>
          </Col>
        );
      })}
      <AddUser />
      <DeleteAllUser />
      <button onClick={() => refetch()}>Refetch!</button>
    </Row>
  );
};

export default HomeTab;
