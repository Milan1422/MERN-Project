import React, { useEffect } from "react";
import Navbar from "../../components/NavBar/Navbar";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { SET_CURRENT_MEET, ADD_JOIN, REMOVE_JOIN } from "../../utils/actions";
import "./meets.css";

const SingleMeet = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getMeet(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_MEET, meet: res.data }))
      .catch(err => console.log(err));
  }, []);

  const addJoin = () => {
    dispatch({
      type: ADD_JOIN,
      meet: state.currentMeet
    });
  };

  const removeJoin = () => {
    dispatch({
      type: REMOVE_JOIN,
      _id: state.currentMeet._id
    });
  };

  return (
    <>
    <Navbar/>
    {state.currentMeet ? (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <jumbotron>
              <h1>
                {state.currentMeet.title} by {state.currentMeet.username}
              </h1>
            </jumbotron>
          </div>
        </div>
        <div classname="row">
          <div classname="col-md-10 md-offset-1">
            <article>
              <h1>Topic:</h1>
              <p>{state.currentMeet.description}</p>
            </article>
          </div>
          {state.joins.indexOf(state.currentMeet) !== -1 ? (
            <button className="btn btn-danger" onClick={removeJoin}>
                Remove
            </button>
          ) : (
            <button className="btn btn-success" onClick={addJoin}>
                Join!
            </button>
          )}
        </div>
        <div classname="row">
          <div classname="col-md-2">
            <Link to="/meets">← Back to Posts</Link>
          </div>
        </div>
      </div>
    ) : (
      <div>loading...</div>
    )}</>
  );
};

export default SingleMeet;
