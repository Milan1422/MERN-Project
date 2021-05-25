import React, { useRef } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_MEET, LOADING } from '../../utils/actions';
import API from '../../utils/API';
import Navbar from '../../components/NavBar/Navbar';

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
      <Navbar/>
      <h1 className="text-center mt-3">Create a new meet</h1>
      <form className="form-group" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          className="form-control mb-3"
          required
          ref={titleRef}
          id="title"
          placeholder="Title"
        />
        <label htmlFor="description">Description:</label>
        <textarea
          className="form-control mb-3"
          required
          ref={descriptionRef}
          id="body"
          placeholder="Description"
        />
        <label htmlFor="screen name">Screen Name:</label>
        <input
          className="form-control mb-3"
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
          className="btn btn-success text-center justify-content-center"
          disabled={state.loading}
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateNewMeet;