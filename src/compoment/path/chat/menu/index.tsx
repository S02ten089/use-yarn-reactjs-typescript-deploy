import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AppMenu: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // giả lập loading 2s
  };

  return (
    <div className="menu-container">
      {/* Nút mở menu */}
      <button className="menu-button" onClick={() => setOpen(!open)}>
        ☰ Menu
      </button>

      {/* Menu */}
      {open && (
        <div className="task-menu">
            <div className="menu-dropdown">
                {/* Ngôn ngữ */}
                <button className="menu-item">🌐 Ngôn ngữ
                  <select>
                            <option value="vi">Tiếng Việt</option>
                            <option value="en">English</option>
                            <option value="jp">日本語</option>
                            <option value="cn">中国人</option>
                  </select>
                </button>

                {/* Loading */}
                <div className="menu-item" onClick={handleLoading}>
                    {loading ? "⏳ Loading..." : "⚡ Loading"}
                </div>

                {/* Sáng/Tối */}
                <div className="menu-item" onClick={toggleTheme}>
                    {darkMode ? "🌙 Chế độ tối" : "☀️ Chế độ sáng"}
                </div>

                {/* Hỗ trợ */}
                <div className="menu-item"
                onClick={() => navigate("/contact")}>
                    💬 Hỗ trợ
                </div>
            </div>
        </div>
      )}

      {/* CSS */}
      <style>{`
        .menu-container {
          position: relative;
          display: inline-block;
        }
        .menu-button {
            display: none; // Ẩn nút trên desktop
          background: #eee;
          border: none;
          padding: 8px 12px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 6px;
        }
        .menu-dropdown {
          position: absolute;
          top: 40px;
          left: 0;
          background: white;
          border: 1px solid #ccc;
          border-radius: 6px;
          min-width: 180px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          z-index: 100;
        }
        .menu-item {
          padding: 10px;
          cursor: pointer;
          font-size: 14px;
        }
        .menu-item:hover {
          background: #f0f0f0;
        }

        /* Dark mode */
        .dark-mode {
          background: #222;
          color: white;
        }
        .dark-mode .menu-dropdown {
          background: #333;
          border-color: #555;
        }
        .dark-mode .menu-item:hover {
          background: #444;
        }
          /* Task menu responsive */
        @media (min-width: 1440px) {
          .task-menu {
            top: 230px;
            left: 200px;
            z-index: 999;
            position: fixed;
          }
        }
        @media (min-width: 1024px) and (max-width: 1439px) {
          .task-menu {
            top: 230px;
            left: 28px;
            z-index: 999;
            position: fixed;
          }
        }
        @media (max-width: 1023px) {
          .task-menu {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default AppMenu;
