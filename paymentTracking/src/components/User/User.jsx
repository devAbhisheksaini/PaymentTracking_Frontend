import { useState } from 'preact/hooks';
import React from 'react';
import axios from "axios";
export function User({ users, addUser }) {
  const [openForm, setForm] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    isActive: true,
    email: '',
    phone_no: '',
    address: '',
  });

  function showAddUserForm() {
    setForm(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleStatusChange(event) {
    setNewUser((prev) => ({
      ...prev,
      isActive: event.target.value === 'active',
    }));
  }
  // JSON.stringify(userData)
  async function createUser(rolesName) {
    try {
      console.log(userData);


      const data = {
        rolesName,
      }; // This should be an array or an object, depending on what your API expects.

      const response = await axios.post(
        "http://localhost:3000/api/v1/roles/create",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      console.log(response);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const createdUser = await response.json(); // Parse the JSON response

      console.log("User created successfully:", createdUser); // Log the created user

      return createdUser; // Optionally return the created user data for further processing
    } catch (error) {
      console.error("Error creating user:", error); // Handle errors gracefully
    }
  }
  
  // Example usage:
  
  const rolesName = ["roles1", "roles2"];
  const userData=[];
  
  

  function handleSubmit(event) {
    event.preventDefault();
    // addUser(newUser);
    console.log(userData);
    createUser(rolesName).then((createdUser) => {
      console.log("test Done");
    });
    setNewUser({
      name: '',
      isActive: true,
      email: '',
      phone_no: '',
      address: '',
    });
    setForm(false);
  }

  return (
    <div className='m-6'>
    <p className=''> Users </p>
      <div className="overflow-x-auto rounded-lg bg-gray-100">
        
        <table className="min-w-full table-auto border-collapse">
          <thead className="border-b">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Created</th>
              <th className="px-4 py-2">Updated</th>
              <th className="px-4 py-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{data.name}</td>
                <td className="px-4 py-2">{data.isActive ? 'Active' : 'Inactive'}</td>
                <td className="px-4 py-2">{data.email}</td>
                <td className="px-4 py-2">{data.phone_no}</td>
                <td className="px-4 py-2">{new Date(data.created).toLocaleString()}</td>
                <td className="px-4 py-2">{new Date(data.updated).toLocaleString()}</td>
                <td className="px-4 py-2">{data.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg my-4">
        {!openForm ? (
          <span className="bg-gray-500 p-2 rounded-full text-white">
            <button onClick={showAddUserForm}>Add User</button>
          </span>
        ) : (
          <div className="p-4 min-w-full table-auto border-collapse">
            <form onSubmit={handleSubmit}>
            <button onClick={handleSubmit}> test api</button>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newUser.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="status">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={newUser.isActive ? 'active' : 'inactive'}
                  onChange={handleStatusChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone_no"
                  value={newUser.phone_no}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="b  " htmlFor="address">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={newUser.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default User;
