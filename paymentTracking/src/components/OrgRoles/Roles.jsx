import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Roles = () => {
  const [roles, setRoles] = useState([]); 
  const [error, setError] = useState(null); 
  const [createbtn, setCreatebtn] = useState(false); 
  const [tempRoles, setTempRoles] = useState([]); 
  const [tempRole, setTempRole] = useState(''); 

  const setRoledata = async (event) => {
      event.preventDefault();
      const data = {
        rolesName: tempRoles,
      };
      console.log(data)
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
  }
  

  const getUserData = async () => {
    try {
      const response = await axios.get(
        'https://paymenttracking-backend.onrender.com/api/v1/roles/getRoles',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Response:', response.data.data);
      setRoles(response.data.data); 
      setError(null); 
    } catch (err) {
      console.error('Error fetching roles:', err);
      setError('Failed to fetch roles. Please try again.');
    }
  };

  
  const addTempRoles = (event) => {
    event.preventDefault(); 
    if (tempRole.trim() === '') {
      alert('Please enter a valid role');
      return;
    }
    setTempRoles((prev) => [...prev, tempRole]); 
    setTempRole(''); 
  };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  return (
    <>
        <button onClick={()=> setCreatebtn(true)}> Add Roles</button>
        {
            createbtn ? (
                <div className='border-b p-4'>
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

                <h3>Created Roles are:</h3>
                {tempRoles.length > 0 ? (
                <ul>
                  <form onclick={setRoledata}>
                    {tempRoles.map((role, index) => (
                    <li key={index}>{role}</li>
                    ))}
                    <button>Save Roles</button>
                  </form>
                </ul>
                ) : (
                <p>No temporary roles added.</p>
                )}
                </div>
            ) : (<p></p>) 
            }

        

        <div className='border-b p-4'>
            <h2>Fetch Roles from API</h2>
            <button onClick={getUserData}>Get Roles</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <h3>Fetched Roles:</h3>
            {roles.length > 0 ? (
            roles.map((role, index) => (
                <p key={index}>{role.name || `Role ${index + 1}`}</p>
            ))
            ) : (
            <p>No roles found.</p>
            )}
        </div>
    </>
  );
};

export default Roles;
