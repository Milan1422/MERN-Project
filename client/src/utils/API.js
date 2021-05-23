import axios from "axios";

export default {
  // Gets all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id

  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },

  signUser: function (values) {
    return axios.post("/api/login/", values);
  },
  
  // Gets all meets
  getMeets: function() {
    return axios.get("/api/meets");
  },
  // Gets a meet with the given id
  getMeet: function(id) {
    return axios.get("/api/meets/" + id);
  },
  // Deletes a meet with the given id
  deleteMeet: function(id) {
    return axios.delete("/api/meets/" + id);
  },
  // Saves a meet to the database
  saveMeet: function(meetData) {
    return axios.post("/api/meets", meetData);
  }
};
