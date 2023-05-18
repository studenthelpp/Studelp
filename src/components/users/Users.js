import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../navigationBar/NavBar";
import { ipAddress } from "../../address";
import UserModal from "./userModal";

function Users() {
  const [users, setUsers] = useState([]);
  const [filterTitle, setFilterTitle] = useState([]);
  const [filterLocation, setFilterLocation] = useState([]);
  const [filterUserName, setFilterUserName] = useState([]);

  const [filteredUsers, setFilteredUsers] = useState([]);

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    axios
      .get(ipAddress + "/api/getusers", {
        responseType: "json",
      })
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
        setSpinner(false);
      })
      .catch((error) => {
        console.log("No profiles found");
      });
  }, []);

  // function to filter jobs
  function filterUsers(e) {
    e.preventDefault();

    const filteredUsers = users.filter(
      (user) =>
        (user.u_title.toLowerCase().includes(filterTitle) ||
          filterTitle.length === 0) &&
        (user.u_location.toLowerCase().includes(filterLocation) ||
          filterLocation.length === 0) &&
        (user.u_firstname === filterUserName ||
          user.u_lastname === filterUserName ||
          filterUserName.length === 0)
    );

    setFilteredUsers(filteredUsers);
  }

  return (
    <div className="filter-container">
      <link rel="stylesheet" href="profile.css"></link>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      ></link>
      {<NavBar />}

      <div className="filter-jobs">
        <form type="filter-job" onSubmit={filterUsers}>
          <label className="filter">
            <span className="icon">
              <i className="fa-solid fa-user-doctor"></i>
            </span>
            <input
              type="text"
              id="job-title"
              name="job-title"
              onChange={(e) => {
                setFilterTitle(e.target.value.toLowerCase());
              }}
              placeholder="Job Title"
            />
          </label>
          <label>
            <span className="icon">
              <i className="fa-solid fa-map-location-dot"></i>
            </span>
            <input
              type="text"
              id="location"
              name="location"
              onChange={(e) => {
                setFilterLocation(e.target.value.toLowerCase());
              }}
              placeholder="Location"
            />
          </label>
          <br />

          <label>
            <span className="icon">
              <i className="fa-solid fa-user-doctor"></i>
            </span>
            <input
              type="text"
              id="job-type"
              name="user-name"
              placeholder="Name"
              onChange={(event) => {
                setFilterUserName(event.target.value.toLowerCase());
              }}
            />
          </label>

          <button type="submit" value="Filter" id="filter-submit">
            Filter
          </button>
        </form>
      </div>

      <br />
      {spinner === true ? (
        <ul id="all-jobs-list">
          <span className="spinner">
            <i className="fa-solid fa-spinner"></i>
          </span>
        </ul>
      ) : (
        <UserModal filteredUsers={filteredUsers} />
      )}
    </div>
  );
}

export default Users;
