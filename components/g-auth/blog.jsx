import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Blog() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.credential) {
      const decoded = jwtDecode(storedUser.credential);
      setUserData({
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
      });
    } else {
      navigate("/"); // redirect to login if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserData(null);
    navigate("/"); // redirect to home/landing page after logout
  };

  if (!userData) return null; //stopping rendering unlessuserData is ready

  return (
    <>
      {/* <BlogPage /> //was not working */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <img
            src={userData.picture}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-xl font-bold mb-1">{userData.name}</h3>
          <p className="text-gray-600 mb-4">{userData.email}</p>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
// export {userData} to BlogPage;s

export default Blog;
