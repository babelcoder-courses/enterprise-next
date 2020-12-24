import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

function AdminLink(props) {
  const profile = useSelector((state) => state.auth.profile);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(profile?.role === "admin");
  }, [profile]);

  if (!isShown) return null;

  return <Link {...props} />;
}

export default AdminLink;
