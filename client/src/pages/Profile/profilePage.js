import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Navbar from "../../components/NavBar/Navbar";
import "../Profile/profilePage.css";

function Profile() {
  const [users, setUsers] = useState([]);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    // Add code here to get all users from the database and store them using setUsers
    API.getUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Navbar />
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <div className="card-deck scroll" key={user._id}>
                <div className="card">
                  <img
                    src={user.image}
                    className="card-img-top"
                    alt="profile pic"
                  />
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
        <h3>No Results to Display</h3>
      )}
    </div>
  );
}

export default Profile;
