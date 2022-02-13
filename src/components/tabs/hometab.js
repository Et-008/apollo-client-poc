import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { useQuery, NetworkStatus, useMutation } from "@apollo/client";
import * as Queries from "../../queries/queries";
import { AddUser, DeleteUser, DeleteAllUser } from "../mutation/mutation";

let HomeTab = (prop) => {
  let { loading, data, error, refetch, networkStatus, subscribeToMore } =
    useQuery(Queries.getUser, {
      fetchPolicy: "cache-and-network",
      nextFetchPolicy: "cache-first",
    });

  function subscribeToNewUser() {
    subscribeToMore({
      document: Queries.user_subscription,
      // variables: { where: { id: data.id } },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        console.log(subscriptionData.data);
        const newFeedItem = subscriptionData.data.commentAdded;
        return Object.assign({}, prev, {
          post: {
            comments: [newFeedItem, ...prev.post.comments],
          },
        });
      },
    });
  }

  useEffect(() => {
    // subscribeToNewUser();
    subscribeToMore({
      document: Queries.user_subscription,
      // variables: { where: { id: data.id } },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        console.log(subscriptionData.data);
        const newFeedItem = subscriptionData.data.commentAdded;
        return Object.assign({}, prev, {
          post: {
            comments: [newFeedItem, ...prev.post.comments],
          },
        });
      },
    });
  }, []);

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
            <h6>
              Name: {user.name}{" "}
              <span>
                <MdEdit />
              </span>
            </h6>
            <div>
              <p>Created at: {user.timestamp}</p>
              <p>{user.twitter}</p>
            </div>
          </Col>
        );
      })}
      <AddUser Refetch={() => refetch()} />
      <DeleteAllUser Refetch={() => refetch()} />
      <button onClick={() => refetch()}>Refetch!</button>
    </Row>
  );
};

export default HomeTab;
