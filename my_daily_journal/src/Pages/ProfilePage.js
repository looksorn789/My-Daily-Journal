import React, { useRef } from "react";
import Header from "../components/Header";
import "../css/ProfilePage.css";

function ProfilePage() {
    const fileInputRef = useRef(null);
    const handleEditClick = () => {
        fileInputRef.current.click();
      };
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          // handle upload or preview logic here
          console.log("Selected file:", file.name);
        }
      };
  return (
    <div>
      <Header />
      <div className="profile-container">
        {/* Left Section: Avatar & Theme Toggle */}
        <div className="profile-left">
          <div className="avatar-wrapper">
            <div className="avatar-circle">
              <img src="/images/jeff.jpg" alt="Avatar" />
              <div className="edit-icon" onClick={handleEditClick}>✏️</div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="theme-toggle">
            <span>☀️</span>
            <span>/</span>
            <span>🌙</span>
          </div>
        </div>

        {/* Right Section: User Info */}
        <div className="profile-right">
          <div className="input-row">
            <label>Name:</label>
            <input type="text" placeholder="User’s Name" />
          </div>
          <div className="input-row">
            <label>Email:</label>
            <input type="email" placeholder="User’s Email" />
          </div>
          <div className="input-row">
            <label>Gender:</label>
            <input type="text" placeholder="User’s Gender" />
          </div>
          <div className="input-row">
            <label>Country:</label>
            <input type="text" placeholder="User’s Country Location" />
          </div>

          <div className="password-reset">
            <p>Want to Change Your Password?</p>
            <button className="reset-btn">Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
