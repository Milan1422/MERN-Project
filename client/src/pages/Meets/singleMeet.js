import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import API from "../../utils/API";
import "./meets.css";

function singleMeet() {
  // sets inital meet state
  const [meet, setMeet] = useState({});

  useEffect(() => {
    loadMeet();
  });

  function loadMeet() {
    // here we make a axios api call to get the meet by id
    API.getMeet()
      // then we set the state with the received data
      .then((res) => setMeet(res.data))
      .catch((err) => console.log(err));
  }

  //   here is we return JSX using the data received from MongoDB
  return (
    <div className="container">
      <Navbar />
      <div className="container">
        <div className="modal" tabindex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{meet.title}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{meet.description}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Message
                </button>
                <button type="button" className="btn btn-primary">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default singleMeet;