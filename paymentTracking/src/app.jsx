import { useState } from 'preact/hooks'
import './app.css'
import {Routes, Route } from 'react-router-dom';
import {Navbar} from './components/Navbar'
import User from './components/User/User'
import Organization from './components/Organization/Organization'
import Dailyreport from './components/Daily_Report/Dailyreport'
import Roles from './components/OrgRoles/Roles'
import NotFound from './components/NotFound'
import { createContext } from 'react';
import LeftMenu from './components/LeftMenu';

export const ThemeContext = createContext(null);

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
      ]
    };

    const {users} = {
      "users": [
        {
          "id": 1,
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
    
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
      setTheme ( (curr) => (curr ==="light" ? "dark": "light"))

    } 

  return (
    <>
      {/* <ThemeContext.Provider value= {{theme, toggleTheme}}> */}
        {/* <div className= "App" id={theme}> */}
        <LeftMenu />
          <Routes>
            <Route path = "/" element = {<Navbar/>}>
              {/* <Route index element = {<Dashboard/>} /> */}
              <Route index element = {<Dailyreport weekDaysData={weekDaysData}/>} />
              <Route path= "/user" element = {<User users={users} />} />
              <Route path= "/organization" element = {<Organization/>} />
              <Route path= "/roles" element = {<Roles/>} />
              <Route path="*" element = {<NotFound/>} />
            </Route>
          </Routes>
        {/* </div> */}

      {/* </ThemeContext.Provider> */}

      
    </>
  )
}

export default App
