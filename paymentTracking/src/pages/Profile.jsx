import { useAuth } from "../hooks/useAuth";
export default function Profile() {
    const { user, logout } = useAuth();
  return (
    <>
        <p className='text-red-500 text-2xl'> 
            Page on maintain
        </p>
        <div className="profile border-2 bg-gray-200 p-4 m-4">
            <h1>Profile</h1>
            <p>Role: {JSON.stringify(user)} </p>
        </div>
        <div>
            <button onClick={logout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
        </div>
      
    </>
  )
}
