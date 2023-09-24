import axios from "axios";

// Function to send a POST request for login
export function login(username, password) {
  return axios
    .post("https://three-points.herokuapp.com/api/login", {
      username,
      password,
    })
    .then((response) => response.data);
}

// Function to get the list of posts
export function getPostList() {
  return axios
    .get("http://localhost:3000/postList", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => response.data);
}

// Function to get the user profile
export function getProfile() {
  return axios
    .get("http://localhost:3000/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => response.data);
}
