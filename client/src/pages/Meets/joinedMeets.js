import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_JOIN, LOADING, UPDATE_JOINS } from "../../utils/actions";
import Navbar from "../../components/NavBar/Navbar";

const JoinedList = () => {
  const [state, dispatch] = useStoreContext();

  const getJoins = () => {
    dispatch({ type: LOADING });
    dispatch({ type: UPDATE_JOINS });
  };

  const removeFromJoins = (id) => {
    dispatch({
      type: REMOVE_JOIN,
      _id: id,
    });
  };

  useEffect(() => {
    getJoins();
  }, []);

  return (
    <>
      <Navbar />
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's All of Your Joined Meets!</h1>
      {state.joins.length ? (
        <ul className="list-group">
          <h3 className="mb-5 mt-5">Click on a meet to view details</h3>
          {state.joins.map((meet) => (
            <li className="list-item" key={meet._id}>
              <Link to={"/meets/" + meet._id}>
                <div className="row">
                  <div className="col-sm-10">
                    <strong>
                      {meet.title} by {meet.username}
                    </strong>
                  </div>
                  <div className="col-sm-2">
                    <button
                      className="btn btn-danger d-flex flex-row-reverse bd-highlight"
                      onClick={() => removeFromJoins(meet._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h3>You haven't joined any meets yet!</h3>
      )}
      <div className="mt-5">
        <Link to="Meets">Back to all view all meets</Link>
      </div>
    </div>
    </>
  );
};

export default JoinedList;
