import React from "react";
import { FaUser , FaTachometerAlt, FaHome, FaUserTie, FaSignOutAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';

const SidePanel = ({ togglePanel }) => {
  return (
    <div style={styles.overlay}>

      <div style={styles.panel}>

        <div style={styles.profileSection}>

          <div style={styles.profilePic}>
            <span style={styles.Usericon}>
              <FaUser/> 
            </span>
          </div>

          <p>Admin Name</p>
          <p>Admin Email ID</p>
        </div>
        <div style={styles.nav}>
          <Link to="/dashboard" style={styles.navItem}>
            <FaTachometerAlt style={styles.icon} /> Dashboard
          </Link>
          <Link to="/properties" style={styles.navItem}>
            <FaHome style={styles.icon} /> Property Lists
          </Link>
          <Link style={styles.signOut}>
            <FaSignOutAlt style={styles.icon} /> Sign Out
          </Link>
        </div>

        <button onClick={togglePanel} style={styles.closeButton}>
          ✕
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },

  panel: {
    position: "fixed",
    width: "200px",
    height: "95%",
    backgroundColor: "#1B4C7F",
    color: "white",
    padding: "10px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 1001,
    transform: "translateX(0)",
    transition: "transform 0.3s ease-in-out",
  },

  profileSection: {
    textAlign: "center",
    marginBottom: "20px",
    marginTop: "20px",
  },

  profilePic: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#1B4C7F",
    margin: "0 auto 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    fontSize: "24px",
  },

  Usericon: {
    width: '800rem',
    height: '50px',
    padding: '1rem 2rem',
    borderRadius: '50%',
    backgroundColor: '#1B4C7F', // White fill
    border: '3px solid #fff', // White border
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 10px', // Center the icon
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  navItem: {
    background: "none",
    border: "none",
    color: "white",
    textAlign: "left",
    padding: "5px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
    transition: "background 0.3s",
  },

  signOut: {
    background: "none",
    border: "none",
    color: "#ff5555",
    padding: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },

  closeButton: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
    alignSelf: "flex-start",
  },
};

export default SidePanel;
