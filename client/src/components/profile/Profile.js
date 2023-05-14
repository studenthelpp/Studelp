import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../navigationBar/NavBar";
import { ipAddress } from "../../address";
import UserModal from "../users/userModal";

function Profile() {
  const [users, setUsers] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    axios
      .get(ipAddress + "/api/getrecentusers", {
        responseType: "json",
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("No profile found");
      });
    setSpinner(false);
  }, []);

  return (
    <div className="profile">
      <link rel="stylesheet" href="profile.css"></link>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      ></link>
      {<NavBar />}

      <br />
      {spinner === true ? (
        <ul id="jobs-list">
          <span className="spinner">
            <i className="fa-solid fa-spinner"></i>
          </span>
        </ul>
      ) : (
        <UserModal filteredUsers={users} />
      )}
    </div>
  );
}
export default Profile;
