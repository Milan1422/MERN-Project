import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import API from "../../utils/API";

function Meets() {
  // sets inital meets state
  const [meets, setMeets] = useState([]);

  useEffect(() => {
    loadMeets();
  }, []);

  //   function that loads all meets using axios
  function loadMeets() {
    // here we make a axios api call to get all meets
    API.getMeets()
      // then we set the state with the received data
      .then((res) => setMeets(res.data))
      .catch((err) => console.log(err));
  }

  //   here is we return JSX using the data received from MongoDB
  return (
    <div>
      <Navbar />
      {meets.length ? (
        <div>
          {meets.map((meet) => {
            return (
              <div key={meet._id}>
                <div className="list-group">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{meet.title}</h5>
                      <small>Posted {meet.date}</small>
                    </div>
                    <p>Description: {meet.description} </p>
                    <small>Location: {meet.location}</small>
                  </a>
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

export default Meets;
