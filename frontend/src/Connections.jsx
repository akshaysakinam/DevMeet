import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "./utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "./utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className="flex flex-col items-center py-6">
      {connections && connections.length > 0 ? (
        connections.map(({ _id, firstName, lastName, photoUrl, age, gender, about }) => (
          <div
            key={_id}
            className=" w-2/3 bg-white shadow-lg rounded-2xl p-6 mb-6 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex justify-center">
              <img
                className="w-24 h-24 object-cover rounded-full border-4 border-gray-300 shadow-md"
                src={photoUrl || "https://via.placeholder.com/100"}
                alt={firstName}
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 text-center mt-3">
              {firstName} {lastName}
            </h2>
            <p className="text-gray-500 text-sm text-center">{age}, {gender}</p>
            <p className="text-gray-600 text-center mt-2">{about}</p>
            
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No connections found.</p>
      )}
    </div>
  );
};

export default Connections;
