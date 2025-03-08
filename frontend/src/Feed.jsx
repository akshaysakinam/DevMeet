import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "./utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./utils/feedSlice";
import ProfileCard from "./ProfileCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);

  if(!feed) return;

  if(feed.length<=0){
    return <h1 className="flex justify-center">No more users found</h1>
  }

  return (feed && (
  <div className="flex justify-center my-10">
    <ProfileCard user={feed[0]}/>
  </div>));
};

export default Feed;
