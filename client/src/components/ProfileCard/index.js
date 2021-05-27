import React, {useState, useEffect } from "react";
import img from "../../Style/assets/SMOOVE.jpg";
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
    <div className="card" stylee={{ left:"40%" }}>
        <div className="userinfo">
        <img src={img} alt="smoove" style={{ width: "200px" }} />
            <ul>
                <li>
                    <strong>{user.username} Jbsmoove</strong>
                </li>
                <li>
                    <strong>{user.skill} React</strong>
                </li>
                <li>
                    <strong>{user.location} Detriot</strong>
                </li>
            </ul>
        </div>
    </div>
)

}

export default ProfileCard;