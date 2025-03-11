import React from "react";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, profilePicture, age, gender, about, city } =
    user;

  return (
    <div className="card bg-gray-100 w-96 shadow-lg rounded-2xl transition-transform duration-300 hover:scale-105">
      <figure className="p-4 flex justify-center ">
        <img
          src={profilePicture}
          alt="photo"
          className="w-64 h-64 rounded-full border-4 border-gray-300 object-cover"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title text-xl font-bold text-gray-800">
          {firstName + " " + lastName}
        </h2>
        {age && gender && (
          <p className="text-gray-600 text-lg">{age + ", " + gender}</p>
        )}
        <p className="text-gray-500 text-lg">{city || "City not provided."}</p>
        <p className="text-gray-700 mt-1 text-sm">
          {about || "No bio available"}
        </p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
