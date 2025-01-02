import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import {
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";


export function User({ users }) {
  const [openForm, setForm] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    isActive: true,
    email: "",
    phone_no: "",
    address: "",
  });


  function showAddUserForm() {
    setForm(true);
    setNewUser({
      name: "",
      isActive: true,
      email: "",
      phone_no: "",
      address: "",
    });
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
    console.log(event);
    // users.push(newUser); // Add new user
    setNewUser({
      name: "",
      isActive: true,
      email: "",
      phone_no: "",
      address: "",
    });
    setForm(false);
  }

  function handleEdit(index) {
    setForm(true);
    console.log("Edit clicked", index);
    console.log(users[index]);
    const userdata = users[index];
    setNewUser({
      name: userdata.name,
      isActive: userdata.isActive,
      email: userdata.email,
      phone_no: userdata.phone_no,
      address: userdata.address,
    });

    // setForm(false);
  }

  return (
    <div className="border-2 bg-slate-50 rounded-md shadow-md ">
      <div className="px-6 py-4">
        {openForm && (
          <div className="add-new-user border-b mb-6">
            <div className="my-3 ">
              <div className="ml-1 text-md font-bold my-3">Add New User</div>
              <div className="border-2 overflow-x-auto rounded-lg bg-slate-100 shadow-sm p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-slate-700 font-medium"
                      htmlFor="name"
                    >
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
                    <label className="block text-slate-700 font-medium mb-2">
                      Status
                    </label>
                    <div className="flex items-center space-x-2">
                      <div
                        onClick={handleToggle}
                        className={`relative inline-block w-10 h-5 cursor-pointer rounded-full transition ${
                          newUser.isActive ? "bg-blue-500" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition transform ${
                            newUser.isActive ? "translate-x-5" : ""
                          }`}
                        />
                      </div>
                      <span className="text-sm text-slate-600">
                        {newUser.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-slate-700 font-medium"
                      htmlFor="email"
                    >
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
                    <label
                      className="block text-slate-700 font-medium"
                      htmlFor="phone"
                    >
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
                    <label
                      className="block text-slate-700 font-medium"
                      htmlFor="address"
                    >
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
                  <div className="mb-4 space-x-4">
                    <button
                      className="bg-indigo-500 px-4 py-1 rounded-full text-white font-medium shadow hover:bg-indigo-600"
                    >
                      Save User
                    </button>
                    <button
                      onClick={() => setForm(false)}
                      className="bg-indigo-500 px-4 py-1 rounded-full text-white font-medium shadow hover:bg-indigo-600"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between my-3">
          <div className="ml-1 text-md font-bold m-auto">Existing Users</div>
          {!openForm && (
            <button
              className="bg-indigo-500 px-4 py-1 rounded-full text-white font-medium shadow hover:bg-indigo-600"
              onClick={showAddUserForm}
            >
              Add New User
            </button>
          )}
        </div>

        <div className="rounded-lg bg-slate-200 shadow-sm text-sm">
          {users.map((data, index) => (
            <span key={index}>
              <div className="p-1">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel-${index}-content`}
                    id={`panel-${index}-header`}
                  >
                    <div className="flex justify-between w-full">
                      <div className="flex space-x-5">
                        <div>{data.name} </div>
                        <div>
                          {data.isActive ? (
                            <span className="text-green-600 font-medium">
                              Active
                            </span>
                          ) : (
                            <span className="text-red-600 font-medium">
                              Inactive
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <span>More</span>
                      </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="flex flex-col space-y-1 ">
                      <div>
                        <strong>Email:</strong> {data.email}
                      </div>
                      <div>
                        <strong>Phone:</strong> {data.phone_no}
                      </div>
                      <div>
                        <strong>Address:</strong> {data.address}
                      </div>
                    </div>
                  </AccordionDetails>
                  <AccordionActions >
                    <EditIcon
                      className="cursor-pointer font-large m-0 mr-2 mb-2"
                      onClick={() => handleEdit(index)}
                    />
                  </AccordionActions>
                </Accordion>
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default User;
