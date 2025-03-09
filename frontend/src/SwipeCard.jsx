import { motion } from "framer-motion";
import { useState } from "react";

const SwipeCard = ({ user, onSwipe }) => {
  const [exitX, setExitX] = useState(0);

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 150) {
      setExitX(500); // Swipe right
      onSwipe("interested", user._id);
    } else if (info.offset.x < -150) {
      setExitX(-500); // Swipe left
      onSwipe("ignored", user._id);
    } else {
      setExitX(0); // Reset
    }
  };

  return (
    <motion.div
      className="absolute w-80 bg-gray-800 text-white p-5 rounded-lg shadow-lg"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      initial={{ x: 0, opacity: 1 }}
      animate={{ x: exitX, opacity: exitX ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <img
          src={user.photoUrl}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
        />
        <h2 className="text-xl font-semibold mt-3">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-400 mt-2 text-center">{user.about}</p>
        <div className="mt-4 space-y-2">
          {user.gender && <p className="text-gray-300">Gender: {user.gender}</p>}
          {user.age && <p className="text-gray-300">Age: {user.age}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default SwipeCard;
