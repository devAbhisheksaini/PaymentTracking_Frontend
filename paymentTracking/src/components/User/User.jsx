import { useState } from 'preact/hooks';
import React from 'react';

export function User({ users }) {
  const [openForm, setForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingUserIndex, setEditingUserIndex] = useState(null);

  const [newUser, setNewUser] = useState({
    name: '',
    isActive: true,
    email: '',
    phone_no: '',
    address: '',
  });

  const tableHeading = ['Name', 'Status', 'Email', 'Phone', 'Address', 'Actions'];

  function showAddUserForm() {
    setEditMode(false);
    setForm(true);
    setNewUser({
      name: '',
      isActive: true,
      email: '',
      phone_no: '',
      address: '',
    });
  }

  function handleEdit(index) {
    setEditMode(true);
    setForm(true);
    setEditingUserIndex(index);
    setNewUser(users[index]);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleToggle() {
    setNewUser((prev) => ({
      ...prev,
      isActive: !prev.isActive,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (editMode) {
      // Save edited user
      users[editingUserIndex] = newUser;
    } else {
      // Add new user
      users.push(newUser);
    }

    // Clear the form
    setNewUser({
      name: '',
      isActive: true,
      email: '',
      phone_no: '',
      address: '',
    });
    setForm(false);
    setEditMode(false);
    setEditingUserIndex(null);
  }

  return (
    <div className="border-2 bg-slate-50 rounded-md shadow-md">
      <div className="px-6 mb-4">
        <div className="p-4 text-center text-lg font-bold text-indigo-500 mt-2">
          Existing Users
        </div>
        <div className="border-2 overflow-x-auto rounded-lg bg-slate-200 shadow-sm">
          <table className="w-full text-sm text-slate-700">
            <thead className="border-b bg-slate-100 text-left">
              <tr>
                {tableHeading.map((heading, index) => (
                  <th key={index} className="px-4 py-2 font-semibold">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((data, index) => (
                <tr key={index} className="border-b hover:bg-slate-50">
                  <td className="px-4 py-2">{data.name}</td>
                  <td className="px-4 py-2">
                    {data.isActive ? (
                      <span className="text-green-600 font-medium">Active</span>
                    ) : (
                      <span className="text-red-600 font-medium">Inactive</span>
                    )}
                  </td>
                  <td className="px-4 py-2">{data.email}</td>
                  <td className="px-4 py-2">{data.phone_no}</td>
                  <td className="px-4 py-2">{data.address}</td>
                  <td className="px-4 py-2">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="my-6">
          {!openForm ? (
            <button
              className="bg-indigo-500 px-4 py-2 rounded-full text-white font-medium shadow hover:bg-indigo-600"
              onClick={showAddUserForm}
            >
              Add User
            </button>
          ) : (
            <div className="border-2 overflow-x-auto rounded-lg bg-slate-100 shadow-sm">
              <div className="p-2 text-center font-bold text-indigo-500 mt-2">
                {editMode ? 'Edit User' : 'Add User'}
              </div>
              <div className="p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-slate-700 font-medium" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newUser.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-700 font-medium mb-2">Status</label>
                    <div className="flex items-center space-x-2">
                      <div
                        onClick={handleToggle}
                        className={`relative inline-block w-10 h-5 cursor-pointer rounded-full transition ${
                          newUser.isActive ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition transform ${
                            newUser.isActive ? 'translate-x-5' : ''
                          }`}
                        />
                      </div>
                      <span className="text-sm text-slate-600">
                        {newUser.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-700 font-medium" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={newUser.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-700 font-medium" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone_no"
                      value={newUser.phone_no}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-slate-700 font-medium" htmlFor="address">
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={newUser.address}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="bg-indigo-500 px-4 py-2 rounded-full text-white font-medium shadow hover:bg-indigo-600"
                    >
                      {editMode ? 'Save Changes' : 'Save User'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
