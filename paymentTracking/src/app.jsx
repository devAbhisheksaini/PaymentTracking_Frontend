import {Routes, Route } from 'react-router-dom';
import {Layout} from './components/Layout'
import User from './pages/User'
import Organization from './pages/Organization'
import Dailyreport from './pages/Dailyreport'
import Roles from './pages/Roles'
import NotFound from './components/NotFound'
import Login from './components/Login';
// import { createContext } from 'react';

// export const ThemeContext = createContext(null);

export function App() {
  const {weekDaysData} = {
    "weekDaysData": [
        {
          "organizationName": "Tech Solutions Ltd.",
          "amount": 1500.75,
          "orderId": "ORD12345"
        },
        {
          "organizationName": "Innovative Labs Inc.",
          "amount": 3200.50,
          "orderId": "ORD67890"
        },
        {
          "organizationName": "Innovative Labs Inc.",
          "amount": 3200.50,
          "orderId": "ORD67890"
        },
        {
          "organizationName": "Innovative Labs Inc.",
          "amount": 3200.50,
          "orderId": "ORD67890"
        },
      ]
    };

    const {users} = {
      "users": [
        {
          "id": 1,
          "name": "John Doe",
          "email": "johndoe@example.com",
          "phone_no": "89849845165",
          "isActive": false,
          "created": "2023-01-15T10:00:00Z",
          "updated": "2023-06-20T14:30:00Z",
          "address": "123 Main Street, Springfield, IL, 62704"
        },
        {
          "id": 2,
          "name": "John Doe",
          "email": "johndoe@example.com",
          "phone_no": "89849845165",
          "isActive": true,
          "created": "2023-01-15T10:00:00Z",
          "updated": "2023-06-20T14:30:00Z",
          "address": "123 Main Street, Springfield, IL, 62704"
        },
        {
          "id": 3,
          "name": "John Doe",
          "email": "johndoe@example.com",
          "phone_no": "89849845165",
          "isActive": true,
          "created": "2023-01-15T10:00:00Z",
          "updated": "2023-06-20T14:30:00Z",
          "address": "123 Main Street, Springfield, IL, 62704"
        },
        {
          "id": 4,
          "name": "John Doe",
          "email": "johndoe@example.com",
          "phone_no": "89849845165",
          "isActive": true,
          "created": "2023-01-15T10:00:00Z",
          "updated": "2023-06-20T14:30:00Z",
          "address": "123 Main Street, Springfield, IL, 62704"
        },
        {
          "id": 5,
          "name": "John Doe",
          "email": "johndoe@example.com",
          "phone_no": "89849845165",
          "isActive": true,
          "created": "2023-01-15T10:00:00Z",
          "updated": "2023-06-20T14:30:00Z",
          "address": "123 Main Street, Springfield, IL, 62704"
        },
        {
          "id": 6,
          "name": "John Doe",
          "email": "johndoe@example.com",
          "phone_no": "89849845165",
          "isActive": true,
          "created": "2023-01-15T10:00:00Z",
          "updated": "2023-06-20T14:30:00Z",
          "address": "123 Main Street, Springfield, IL, 62704"
        },
        {
          "id": 7,
          "name": "John Doe",
          "email": "johndoe@example.com",
          "phone_no": "89849845165",
          "isActive": true,
          "created": "2023-01-15T10:00:00Z",
          "updated": "2023-06-20T14:30:00Z",
          "address": "123 Main Street, Springfield, IL, 62704"
        },
      ]
    }
    
    // const [theme, setTheme] = useState("light");
    // const toggleTheme = () => {
    //   setTheme ( (curr) => (curr ==="light" ? "dark": "light"))

    // } 

  return (
    <>
      <div>
        <Routes>
          <Route path= "/login" 
            element = {<Login/>} />
          <Route path = "/" element = {<Layout/>}>
            <Route index element = {<Dailyreport weekDaysData={weekDaysData}/>} />
            <Route path= "/user" element = {<User users={users} />} />
            <Route path= "/organization" element = {<Organization/>} />
            <Route path= "/roles" element = {<Roles/>} />
            <Route path="*" element = {<NotFound/>} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
