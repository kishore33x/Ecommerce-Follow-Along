import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState([]);
  const [address, setAddress] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setGender([e.target.value]); // Allow only one selection
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("gender", gender[0] || "");
    formData.append("address", address);
    if (profilePic) formData.append("profilePic", profilePic);

    try {
      const response = await axios.post("http://localhost:8000/user/signup", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        console.log("Signup successful!");
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-4 text-gray-700">Sign Up</h2>

        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-gray-700 font-medium text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded text-sm focus:outline-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-sm">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded text-sm focus:outline-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-sm">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded text-sm focus:outline-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-sm">Gender</label>
            <div className="flex gap-3">
              {["Male", "Female", "Other"].map((option) => (
                <label key={option} className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    value={option}
                    checked={gender.includes(option)}
                    onChange={handleCheckboxChange}
                    className="mr-1"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-sm">Address</label>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border rounded text-sm focus:outline-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-sm">Profile Picture</label>
            <input
              type="file"
              onChange={(e) => setProfilePic(e.target.files[0])}
              className="w-full p-1 border rounded text-sm focus:outline-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition text-sm"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-3 text-gray-600 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
