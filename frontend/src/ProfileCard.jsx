import axios from "axios";
import React from "react";
import { BASE_URL } from "./utils/Constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "./utils/feedSlice";

const ProfileCard = ({ user, showActions = true }) => {
  const { _id, firstName, lastName, about, age, gender, photoUrl } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="w-80 bg-gray-800 text-white p-5 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <img
          src={photoUrl}
          alt="#"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
        />
        <h2 className="text-xl font-semibold mt-3">{`${firstName} ${lastName}`}</h2>
        <p className="text-gray-400 mt-2 text-center">{about}</p>
        <div className="mt-4 space-y-2">
          {gender && <p className="text-gray-300">Gender: {gender}</p>}
          {age && <p className="text-gray-300">Age: {age}</p>}
        </div>
        {showActions && (
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => handleSendRequest("ignored", _id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Ignore
            </button>
            <button onClick={()=>handleSendRequest("interested",_id)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
              Interested
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
