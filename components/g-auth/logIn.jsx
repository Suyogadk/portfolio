import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate(); // hook

  const handleSuccess = (response) => {
    console.log("Login Success:", response);

    // Saave in local storage
    localStorage.setItem("user", JSON.stringify(response));
    //redirect to bolg page
    window.location.href = "./blog";
    const decoded = jwtDecode(Response.credential);
    setUserData({
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
    });
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="m-5 flex flex-col items-center border-2 border-gray-600 rounded-lg p-10 bg-white shadow-lg max-w-md mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 text-center">
        Continue with Google Login
      </h2>

      {/* Go Back Button */}
      <div className="w-full flex justify-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="w-full px-6 py-3 bg-cyan-900 text-white font-semibold rounded-lg shadow-md 
                     hover:bg-black hover:text-white transition duration-300"
        >
          Go Back
        </button>
      </div>

      {/* Divider */}
      <div className="w-full flex items-center my-4">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-2 text-gray-500 font-medium">OR</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {/* Google Login */}
      <div className="w-full flex justify-center">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          className="w-full border-2 rounded-lg hover:bg-gray-200 transition duration-300"
        />
      </div>
    </div>
  );
}

export default LogIn;
