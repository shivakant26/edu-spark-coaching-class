"use client";

import { useRouter } from "next/navigation";
import "./dashboard.css";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
  };
  return (
    <html>
      <body>
        <div className="dashboard-container">
          <aside className="sidebar">
            <h2 className="sidebar-title">Dashboard</h2>
            <ul className="menu">
              <li>📊 Overview</li>
              <li>👥 Users</li>
              <li>📚 Courses</li>
              <li>🧑‍🏫 Teachers</li>
              <li>⚙️ Settings</li>
              <li onClick={handleLogout}>🚪 Logout</li>
            </ul>
          </aside>
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
