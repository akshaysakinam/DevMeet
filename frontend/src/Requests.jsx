import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "./utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "./utils/requestsSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id))
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="flex flex-col items-center py-6">
      {requests && requests.length > 0 ? (
        requests.map((request) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            request.fromUserId;

          return (
            <div
              key={_id}
              className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-4 mb-6 flex items-center justify-between hover:shadow-2xl transition-all duration-300"
            >
              {/* Left: Profile Image */}
              <div className="flex items-center gap-4">
                <img
                  className="w-20 h-20 object-cover rounded-full border-4 border-gray-300 shadow-md"
                  src={photoUrl || "https://via.placeholder.com/100"}
                  alt={firstName}
                />

                {/* Middle: User Details */}
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    {firstName} {lastName}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {age}, {gender}
                  </p>
                  <p className="text-gray-600 mt-1 text-sm">{about}</p>
                </div>
              </div>

              {/* Right: Buttons */}
              <div className="flex  gap-2">
                <button
                  onClick={()=>reviewRequest("accepted",request._id)}
                  className="px-3 py-2 bg-green-500 text-white rounded-lg font-semibold shadow-md hover:bg-green-600 transition"
                >
                  Accept
                </button>
                <button onClick={()=>reviewRequest("rejected",request._id)} className="px-3 py-2 bg-red-500 text-white rounded-lg font-semibold shadow-md hover:bg-red-600 transition">
                  Reject
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-500 text-center">No requests found.</p>
      )}
    </div>
  );
};

export default Requests;
