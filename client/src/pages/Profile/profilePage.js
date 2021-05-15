import React, { useState, useEffect } from 'react';
import * as API from "./utils/API";
import Navbar from '../../components/NavBar/Navbar'

function Profile () {
    
    const [userState, setUserState] = useState([]);

    useEffect(() => {
        API.getUser.then((res) => {
          setUserState(res);
          console.log(developerState);
        });
      }, [userState]);

    function loadUser() {

    }


    return (
        <div>
            <Navbar/>
            <image />
        </div>
    )
}

export default Profile;