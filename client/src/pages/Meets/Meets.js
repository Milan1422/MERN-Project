import React, { useEffect } from "react";
import Navbar from "../../components/NavBar/Navbar";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_MEET, UPDATE_MEETS, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import "./meets.css";

function Meets() {
  const [state, dispatch] = useStoreContext();

  const removeMeet = id => {
    API.deleteMeet(id)
      .then(() => {
        dispatch({
          type: REMOVE_MEET,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };

  const getMeets = () => {
    dispatch({ type: LOADING });
    API.getMeets()
      .then(results => {
        dispatch({
          type: UPDATE_MEETS,
          meets: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getMeets();
  }, []);

  return (
    <div>
      <Navbar/>
      <h1>All Current Meets</h1>
      <h3 className="mb-5 mt-5">Click on a meet to learn more!</h3>
      {state.meets.length ? (
        <ul className="list-group">
          {state.meets.map(meet => (
            <li className="list-group-item" key={meet._id}>
              <Link to={"/meets/" + meet._id}>
                <strong>
                  {meet.title} by {meet.username}
                </strong>
              </Link>
              <button className="btn btn-outline-secondary" onClick={() => removeMeet(meet._id)}></button>
            </li>
          ))}
        </ul>
      ) : (
        <h3>You haven't joined any meets yet!</h3>
      )}
      <div className="mt-5">
        <Link to="joinedMeets">View Joined Meets!</Link>
      </div>
    </div>
  );
}

export default Meets;