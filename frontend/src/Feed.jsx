import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "./utils/Constants";
import { useDispatch } from "react-redux";
import { addFeed, removeUserFromFeed } from "./utils/feedSlice";
import SwipeCard from "./SwipeCard";

const Feed = () => {
  const dispatch = useDispatch();
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const getFeed = async () => {
      try {
        const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });
        setFeed(res?.data?.data);
        dispatch(addFeed(res?.data?.data));
      } catch (error) {
        console.log(error);
      }
    };
    getFeed();
  }, [dispatch]);

  const handleSwipe = (status, userId) => {
    axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {}, { withCredentials: true })
      .then(() => {
        setFeed(feed.filter(user => user._id !== userId));
        dispatch(removeUserFromFeed(userId));
      })
      .catch(err => console.log(err.response.data));
  };

  if (feed.length === 0) return <h1 className="flex justify-center">No more users found</h1>;

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      {feed.map((user, index) => (
        <SwipeCard key={user._id} user={user} onSwipe={handleSwipe} />
      ))}
    </div>
  );
};

export default Feed;
