import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userName } = useParams();
  console.log(userName);

  let user1 = {
    name: "sakib",
    age: 22,
  };

  let user2 = {
    name: "sakib",
    age: 24,
  };
  if (userName === "sakib") {
    return (
      <div>
        <h1>User: {user1.name}</h1>
        <h1>User: {user1.age}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>User: {user2.name}</h1>
        <h1>User: {user2.age}</h1>
      </div>
    );
  }
}

export default User;
