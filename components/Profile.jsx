import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body rounded-lg bg-blue-200 shadow-xl">
          <h2 className="card-title">Edit Profile</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend"> First Name:</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter First Name"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Last Name:</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter Last Name"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Age</legend>
            <input type="text" className="input" placeholder="Age" />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Gender:</legend>
            <input type="text" className="input" placeholder="Gender" />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Profile Picture:</legend>
            <input
              type="text"
              className="input"
              placeholder="Profile Picture"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Address:</legend>
            <input type="text" className="input" placeholder="Address" />
          </fieldset>

          <div className="card-actions justify-center">
            <button className="btn btn-primary">Save Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
