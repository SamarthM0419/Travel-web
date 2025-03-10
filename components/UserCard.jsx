import React from "react";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, profilePicture, age, gender, about, city } =
    user;
  

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={profilePicture} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{city}</p>
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
