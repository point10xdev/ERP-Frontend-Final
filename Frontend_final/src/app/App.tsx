// Destructuring import from react-router-dom with aliasing
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// Recoil root provider
import { RecoilRoot } from "recoil";
// Auth initializer component
import { AuthInitializer } from "../features/auth/store/AuthInitializer";
// Route guard for protected routes
import { PrivateRoute } from "../shared/PrivateRoute";
// Dark Mode Context Provider
import { DarkModeProvider } from "../shared/layouts/DarkModeContext";
import { DarkModeToggle } from "../shared/layouts/DarkModeToggle";

import { PublicLayout } from "../shared/layouts/PublicLayout";


import { Login, ResetPassword, ResetPasswordForm, SetPasswordForm } from "../features/auth";

import { HomePage } from "../features/dashboard/Home";
import { DashboardLayout } from "../shared/layouts/dashboard";

import { ProfileRouter } from "../features/profile";

import { MyStudentsPage } from "../features/faculty/myStudents/MyStudents";
import DepartmentFacultyPage from "../features/faculty/departmentFaculty/DepartmentFaculty";

import { ManageScholarship } from "../features/faculty/scholarship/ManageScholarship";
import { ApproveScholarship } from "../features/faculty/scholarship/ApproveScholarship";


import { ScholarshipPage } from "../features/faculty/scholarship/Scholarship";

import { CurrentScholarship, PreviousScholarships } from "../features/students/scholarship";

   import { Export } from "../features/export/Export";

import { ROUTES } from "./routes";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <RecoilRoot>
      <DarkModeProvider>
        <Router>
          <AuthInitializer />
          <ToastContainer />
          <DarkModeToggle />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Navigate to={ROUTES.LOGIN} replace />} />
            <Route
              path={ROUTES.LOGIN}
              element={
                <PublicLayout>
                  <Login />
                </PublicLayout>
              }
            />
            <Route
              path={ROUTES.RESET_PASSWORD}
              element={
                <PublicLayout>
                  <ResetPassword />
                </PublicLayout>
              }
            />
            <Route
              path={ROUTES.RESET_PASSWORD_LINK}
              element={
                <PublicLayout>
                  <ResetPasswordForm />
                </PublicLayout>
              }
            />
            <Route
              path={ROUTES.SET_PASSWORD}
              element={
                <PublicLayout>
                  <SetPasswordForm />
                </PublicLayout>
              }
            />

            {/* Dashboard routes - flat structure */}
            <Route
              path={ROUTES.DASHBOARD}
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <HomePage />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />

            <Route
              path={ROUTES.MY_PROFILE}
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <ProfileRouter />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />

            <Route
              path={ROUTES.MY_STUDENTS}
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <MyStudentsPage />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />

            <Route
              path={ROUTES.DEPARTMENT_FACULTY}
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <DepartmentFacultyPage />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path={ROUTES.SCHOLARSHIP}
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <ScholarshipPage />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path={ROUTES.APPROVE_SCHOLARSHIP}
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    < ApproveScholarship/>
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path={ROUTES.SCHOLARSHIP_MANAGEMENT}
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    < ManageScholarship/>
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
            <Route
              path={ROUTES.STUDENT_SCHOLARSHIP}
              element={
                <PrivateRoute>
                  <DashboardLayout>
                    <CurrentScholarship />
                    <PreviousScholarships/>
                  </DashboardLayout>
                </PrivateRoute>
              }              
            />
            <Route
              path={ROUTES.EXPORT}
              element={
                <PrivateRoute allowedRoles={["AC"]}>
                  <DashboardLayout>
                    <Export />
                  </DashboardLayout>
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </DarkModeProvider>
    </RecoilRoot>
  );
}

export default App;