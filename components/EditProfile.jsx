import React from "react";
import { useSelector } from "react-redux";
import Profile from "./Profile";
const EditProfile = () => {
  const user = useSelector((store) => store.user);

  return (
    user && (
      <div>
        <Profile user={user} />
      </div>
    )
  );
};

export default EditProfile;
