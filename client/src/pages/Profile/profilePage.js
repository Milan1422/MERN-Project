import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Navbar from "../../components/NavBar/Navbar";
import ProfileCard from "../../components/ProfileCard/index";
import "../Profile/profilePage.css"

function Profile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    // Add code here to get all users from the database and store them using setUsers
    API.getUsers()
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Navbar />
      <ProfileCard />
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <div className="card-deck scroll" key={user._id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{user.username}</h5>
                    <p className="card-text">
                      {user.skill} {user.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h3></h3>
      )}
    </div>
  );
}

export default Profile;
