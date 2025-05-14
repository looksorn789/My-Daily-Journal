import React, { useRef, useState, useContext } from "react";
import Header from "../components/Header";
import "../css/ProfilePage.css";
import { ThemeContext } from "../context/ThemeContext";
import ForgotPasswordModal from "../components/ForgotPassword";

function ProfilePage() {
  const fileInputRef = useRef(null);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [isEditing, setIsEditing] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("/images/jeff.jpg");
  const [formData, setFormData] = useState({
    name: "User's Name",
    email: "User's Email",
    gender: "User's Gender",
    country: "User's Country Location"
  });

  const [tempData, setTempData] = useState({ ...formData });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setTempData({ ...formData });
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleConfirm = () => {
    setFormData({ ...tempData });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarEdit = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };

  const handleResetPasswordClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <Header />
      <div className={`profile-container ${darkMode ? "dark" : ""}`}>
        <div className="profile-left">
          <div className="avatar-wrapper">
            <div className="avatar-circle">
              <img src={avatarUrl} alt="Avatar" />
              {isEditing && (
                <div className="edit-icon" onClick={handleAvatarEdit}>✏️</div>
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="theme-toggle" onClick={toggleTheme} style={{ cursor: "pointer" }}>
            <span>{darkMode ? "🌙" : "☀️"}</span>
            <span>/</span>
            <span>{darkMode ? "☀️" : "🌙"}</span>
          </div>
        </div>

        <div className="profile-right">
          {["name", "email", "gender", "country"].map((field) => (
            <div className="input-row" key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={isEditing ? tempData[field] : formData[field]}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
          ))}

          {isEditing ? (
            <div className="edit-buttons">
              <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
              <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
            </div>
          ) : (
            <button className="edit-profile-btn" onClick={handleEditClick}>
              Edit Profile
            </button>
          )}

          <div className="password-reset">
            <p>Want to Change Your Password?</p>
            <button className="reset-btn" onClick={handleResetPasswordClick}>Reset Password</button>
          </div>
        </div>
      </div>

      <ForgotPasswordModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default ProfilePage;
