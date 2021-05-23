import React, { useRef } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_MEET, LOADING } from '../../utils/actions';
import API from '../../utils/API';

function CreateNewMeet() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const usernameRef = useRef();
  const locationRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveMeet({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      username: usernameRef.current.value,
      location: locationRef.current.value,
    })
      .then((result) => {
        dispatch({
          type: ADD_MEET,
          meet: result.data,
        });
      })
      .catch((err) => console.log(err));

    titleRef.current.value = '';
    descriptionRef.current.value = '';
    locationRef.current.value = '';
    usernameRef.current.value = '';
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <h1>Create a new meet</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          className="form-control mb-5"
          required
          ref={titleRef}
          id="title"
          placeholder="Title"
        />
        <label htmlFor="description">Description:</label>
        <textarea
          className="form-control mb-5"
          required
          ref={descriptionRef}
          id="body"
          placeholder="Description"
        />
        <label htmlFor="screen name">Screen Name:</label>
        <input
          className="form-control mb-5"
          ref={usernameRef}
          id="screen name"
          placeholder="Screen name"
        />
        <label htmlFor="location">Location:</label>
        <input
          className="form-control mb-5"
          ref={locationRef}
          id="location"
          placeholder="Where is the location?"
        />
        <button
          className="btn btn-success mt-3 mb-5"
          disabled={state.loading}
          type="submit"
        >
          Create Meet
        </button>
      </form>
    </div>
  );
}

export default CreateNewMeet;