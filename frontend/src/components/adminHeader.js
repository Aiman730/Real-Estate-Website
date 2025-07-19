import React, { useState } from "react";
import logo from "../assets/Home/logo.png";
import SidePanel from "./adminSidePanel";
import { FaBars } from "react-icons/fa";

const AdminHeader = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
  
    const togglePanel = () => {
      setIsPanelOpen(!isPanelOpen);
    };
  
    return (
      <header style={styles.header}>
        <div style={styles.logo}>
          <img src={logo} alt="Logo" style={styles.logoImage} />
          <span style={styles.span}>PrimeDeals</span>
        </div>
  
        <div>
          <button onClick={togglePanel} style={styles.menuButton}>
            <FaBars style={styles.icon} />
          </button>
        </div>
  
        {isPanelOpen && <SidePanel togglePanel={togglePanel} />}
      </header>
    );
  };
  
  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#1B4C7F",
      color: "white",
    },
    logo: {
      display: "flex",
      alignItems: "center",
    },
    logoImage: {
      width: "40px",
      marginRight: "8px",
    },
    span: {
      fontWeight: "bold",
      fontSize: "20px",
    },
    menuButton: {
      fontSize: "24px",
      color: "white",
      background: "none",
      border: "none",
      cursor: "pointer",
    },

    navItem: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: '16px',
        padding: '10px 20px',
        cursor: 'pointer',
        textAlign: 'left',
        width: '100%',
      },
      signOut: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: '16px',
        padding: '10px 20px',
        cursor: 'pointer',
        marginTop: '20px',
      },
      icon: {
        marginRight: '10px',
        fontSize: '20px',
      },

  };
  
  export default AdminHeader;