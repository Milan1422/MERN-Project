import React, {useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";


function ProfileCard () {
    const [user, setUser] = useState([]);

    useEffect(() => {
      loadUser();
    }, []);
  
    function loadUser() {
      // Add code here to get all users from the database and store them using setUsers
      API.getUser()
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err));
    }
  
return (
    <div className="card">
        <div className="img-container">
            <img  src={user.image} alt="userimage"/>
        </div>
        <div className="userinfo">
            <ul>
                <li>
                    <strong>{user.username}</strong>
                </li>
            </ul>
        </div>
    </div>
)

}

export default ProfileCard;