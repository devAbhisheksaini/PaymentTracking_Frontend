import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import User from "./pages/User";
import Organization from "./pages/Organization";
import Dailyreport from "./pages/Dailyreport";
import Roles from "./pages/Roles";
import NotAuthorized from "./pages/NotAuthorized";  
import NotFound from "./components/NotFound";
import Login from "./pages/Login";
import ProtectedRoute from "./features/ProtectedRoute"
import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/Profile";

export function App() {
  const { weekDaysData } = {
    weekDaysData: [
      {
        organizationName: "Tech Solutions Ltd.",
        amount: 1500.75,
        orderId: "ORD12345",
      },
    ],
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

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <ProtectedRoute>
                <Dailyreport weekDaysData={weekDaysData} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute requiredRole="admin">
                <User users={users} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/organization"
            element={
              <ProtectedRoute requiredRole="test">
                <Organization />
              </ProtectedRoute>
            }
          />
          <Route
            path="/roles"
            element={
              <ProtectedRoute requiredRole="admin">
                <Roles />
              </ProtectedRoute>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
