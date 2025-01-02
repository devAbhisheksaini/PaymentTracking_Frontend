import React, { useState, useEffect } from "react";
import axios from "axios";

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState(null);
  const [createbtn, setCreatebtn] = useState(false);
  const [tempRoles, setTempRoles] = useState([]);
  const [tempRole, setTempRole] = useState("");

  const setRoledata = async (event) => {
    event.preventDefault();
    const data = {
      rolesName: tempRoles,
    };
    console.log(data);
    // const response = await axios.post(
    // "https://paymenttracking-backend.onrender.com/api/v1/roles/create",
    // data,
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    setTempRoles([]);
    // getUserData();
  };

  const getUserData = async () => {
    try {
      const response = await axios.get(
        "https://paymenttracking-backend.onrender.com/api/v1/roles/getRoles",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data.data);
      const roles = response.data.data;

      setRoles(roles);
      setError(null);
    } catch (err) {
      console.error("Error fetching roles:", err);
      setError("Failed to fetch roles. Please try again.");
    }
  };

  const addTempRoles = (event) => {
    event.preventDefault();
    if (tempRole.trim() === "") {
      alert("Please enter a valid role");
      return;
    }
    setTempRoles((prev) => [...prev, tempRole]);
    setTempRole("");
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      {createbtn && (
        <div className="border-2 bg-slate-50 rounded-md shadow-md mb-4">
          <div className="my-3 ml-1 text-md font-bold ">Roles</div>
          <div className="border-2 rounded-lg bg-slate-100 shadow-sm flex flex-wrap">
            <form onSubmit={addTempRoles}>
              <label htmlFor="roles">Create Role:</label>
              <input
                id="roles"
                value={tempRole}
                onChange={(e) => setTempRole(e.target.value)}
                placeholder="Enter a role"
              />
              <button type="submit">Add Role</button>
            </form>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}

      <div className="border-2 bg-slate-50 rounded-md shadow-md pb-4">
      
        <div className="px-6 py-2 space-y-4">
          <div className="flex justify-between my-3">
            <div className="ml-1 text-md font-bold m-auto">
            Roles
            </div>
            {!createbtn && (
              <button
                className="bg-indigo-500 px-4 mr-1 py-1 rounded-full text-white font-medium shadow hover:bg-indigo-600"
                onClick={setCreatebtn}
              >
                Add Roles
              </button>
            )}

          </div>
          
          {error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : roles.length === 0 ? (
            <div className="animate-pulse bg-gray-400 rounded-lg px-2 py-1 h-10"></div>
          ) : (
            <div className="flex flex-wrap bg-gray-200 rounded-lg px-2 py-1">
              {roles.map((role, index) => (
                  <p
                    key={index}
                    className={
                      `bg-green-700 px-2 py-1 rounded-lg text-white m-1 ` +
                      (!role.isActive && "bg-red-400")
                    }
                  >
                    {role.name || `Role ${index + 1}`}
                  </p>
                  
              ))}
            </div>
          )}

          <div className="flex justify-between px-2">
            <button
              className="bg-indigo-500 px-4 py-1 rounded-full text-white shadow hover:bg-indigo-600"
              onClick = {getUserData}
            >
            Refresh Roles
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roles;
