import axios from "axios";
import React, { useState } from "react";

const Users = () => {
  const [user, setUser] = useState([]);

  const callUserEndpoint = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://creek.onrender.com/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      setUser(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {console.log(user?.length)}
      <button onClick={callUserEndpoint}>Get current user details</button>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
      {user !== undefined && <img src={user?.photoUrl} alt="profile" />}
    </div>
  );
};

export default Users;
