import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div className="container">
    <header className="jumbotron">
        <h3>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

          <strong>Profile</strong> {currentUser.Username}
        </h3>
      </header>
     
      <p>
        <strong>Username:</strong> {currentUser.Username}
      </p>
      <p>
        <strong>Email</strong> {currentUser.Email}
      </p>
      <p>
        <strong>Mobile_no</strong> {currentUser.Mobile_no}
      </p>
      
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>

 <Link to="/multi">
          <button>Complete Your Profile</button>
        </Link>
     
    </div>
  );
};
export default Profile;