import { useLocation } from "react-router-dom";

// hook to return true of false  if the current page is a specific route.
const isActive = (path) => {
  // path is the item path that we have assigned to it
  let location = useLocation();
  return location.pathname === path || location.pathname === path + "/";
};

export default isActive;
