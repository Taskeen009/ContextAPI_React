import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  // Conditional rendering
  if (!user) return <div>Please log in.</div>; // Show this if no user is logged in

  return <div>Welcome, {user.username}</div>; // Show this if user is logged in
};

export default Profile;
