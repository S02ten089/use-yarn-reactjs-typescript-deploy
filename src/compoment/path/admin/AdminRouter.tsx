import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import ManageUsers from "./dashboard/manage/ManageUsers";
import ManagePosts from "./dashboard/manage/ManagePosts";

const AdminRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="manage-users" element={<ManageUsers />} />
      <Route path="manage-posts" element={<ManagePosts />} />
      {/* Redirect tất cả các đường dẫn admin không hợp lệ về dashboard */}
      <Route path="*" element={<Navigate to="dashboard" />} />
    </Routes>
  );
};

export default AdminRouter;
