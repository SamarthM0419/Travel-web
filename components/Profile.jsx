import React, { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL, DEFAULT_PROFILE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";

const Profile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [age, setAge] = useState(user?.age || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [profilePicture, setProfilePicture] = useState(
    user?.profilePicture || DEFAULT_PROFILE_URL
  );
  const [about, setAbout] = useState(user?.about || "");
  const [city, setCity] = useState(user?.city || "");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          profilePicture,
          city,
          about,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res?.data?.data);
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err || "Failed to update profile");
    }
  };

  return (
    <>
      <div className="flex justify-center my-10 gap-14">
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body rounded-lg bg-blue-200 shadow-xl">
            <h2 className="card-title font-extrabold text-lg">Edit Profile</h2>
            <fieldset className="fieldset">
              <legend className="fieldset-legend"> First Name:</legend>
              <input
                type="text"
                className="input"
                value={firstName}
                placeholder="Enter First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Last Name:</legend>
              <input
                type="text"
                value={lastName}
                className="input"
                placeholder="Enter Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Age:</legend>
              <input
                type="number"
                className="input"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Gender:</legend>
              <input
                type="text"
                className="input"
                value={gender}
                placeholder="Gender"
                onChange={(e) => setGender(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Profile Picture:</legend>
              <input
                type="text"
                value={profilePicture}
                className="input"
                placeholder="Profile Picture"
                onChange={(e) => setProfilePicture(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">City:</legend>
              <input
                type="text"
                value={city}
                className="input"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">About</legend>
              <textarea
                className="textarea"
                placeholder="Bio"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>
            </fieldset>

            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={saveProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>

        <UserCard
          user={{
            firstName,
            lastName,
            age,
            gender,
            city,
            about,
            profilePicture,
          }}
        />
      </div>
      {showToast && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <span>Profile Updated Successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
