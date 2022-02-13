import React, { useState } from "react";
import { useMutation, useSubscription } from "@apollo/client";
import { Col } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import * as Queries from "../../queries/queries";

let AddUser = (props) => {
  const [username, setName] = useState("");

  const [mutateFunction, { data, loading, error }] = useMutation(
    Queries.addUser
  );

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  data && console.log(data)

  return (
    <Col lg={4} className="card">
      <input
        type="text"
        value={username}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          mutateFunction({
            variables: {
              objects: { name: username },
            },
          });
          setName("");
        }}
      >
        Add User
      </button>
    </Col>
  );
};

function EditName({ postID }) {
  const { data, loading } = useSubscription(Queries.user_subscription, {
    variables: { postID },
  });
  // return ;
  return <MdEdit />;
}

let DeleteUser = (props) => {
  const [delete_User, { data, loading, error }] = useMutation(
    Queries.deleteUser,
    {}
  );

  if (loading) return "..";
  if (error) return `!!`;

  return (
    <RiDeleteBin5Line
      onClick={() =>
        delete_User({
          variables: { where: { id: { _eq: props.Id } } },
        })
      }
    />
  );
};

let DeleteAllUser = (props) => {
  const [delete_User, { data, loading, error }] = useMutation(
    Queries.deleteUser,
    {
      refetchQueries: [
        Queries.getUser, // DocumentNode object parsed with gql
      ],
    }
  );

  if (loading) return "Deleting...";
  if (error) return `Error Delete all not success`;
  data && props.Refetch();

  return (
    <button
      onClick={() =>
        delete_User({
          variables: { where: {} },
        })
      }
    >
      Delete All Users
    </button>
  );
};

let AddUserAndUpdateCache = (props) => {
  const [username, setName] = useState("");

  const [mutateFunction, { data, loading, error }] = useMutation(
    Queries.addUser
  );

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <Col lg={4} className="card">
      <input
        type="text"
        value={username}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          mutateFunction({
            variables: {
              objects: { name: username },
            },
          });
          setName("");
        }}
      >
        Add User and Update Cache
      </button>
    </Col>
  );
};

export { AddUser, DeleteUser, DeleteAllUser, AddUserAndUpdateCache };
