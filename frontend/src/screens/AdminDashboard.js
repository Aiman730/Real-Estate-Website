import React from "react";
import logo from '../assets/Home/logo.png';
import AdminHeader from "../components/adminHeader";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer } from "recharts";

// Dummy data for charts
const trafficData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  users: Math.floor(Math.random() * 6000),
}));

const buyRentData = [
  { name: "Houses", Rent: 100, Buy: 250 },
  { name: "Apartments", Rent: 300, Buy: 150 },
];

// Table data
const properties = [
  {
    id: 1,
    type: "Apartment",
    location: "Bahria Town - Sector N",
    buy: "1.2 Crore",
    rent: "60,000",
    beds: 2,
    baths: 3,
    agent: "Ahmed Ali",
    description: "This is a beautiful Apartment in Bahria Town - Sector N.",
    features: "2 bedrooms, 3 bathrooms, Spacious rooms, Modern Architecture, Beautiful Location",
  },
  {
    id: 2,
    type: "House",
    location: "F-8, Islamabad",
    buy: "32 Crore",
    rent: "5 Lac",
    beds: 5,
    baths: 6,
    agent: "Asaad Khan",
    description: "This is a beautiful House in F-8, Islamabad.",
    features: "2 bedrooms, 3 bathrooms, Spacious rooms, Lawn, Modern Architecture, Beautiful Location",
  },
];

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <AdminHeader />

      {/* Main Content */}
      <div style={styles.content}>

        <div style={styles.titleContainer}>
        <h2 style={styles.title}>Admin Dashboard</h2>
        </div>

        {/* Properties Table */}
        <div style={styles.tableContainer}>
          <h3 style={styles.tableTitle}>Properties</h3>
          <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Type</th>
                  <th style={styles.th}>Location</th>
                  <th style={styles.th}>Buy</th>
                  <th style={styles.th}>Rent</th>
                  <th style={styles.th}>Beds</th>
                  <th style={styles.th}>Baths</th>
                  <th style={styles.th}>Agent</th>
                  <th style={styles.th}>Description</th>
                  <th style={styles.th}>Features</th>
                </tr>
              </thead>
              <tbody>
              {properties.map((property) => (
                <tr key={property.id} style={styles.tr}>
                  <td style={styles.td}>{property.id}</td>
                  <td style={styles.td}>{property.type}</td>
                  <td style={styles.td}>{property.location}</td>
                  <td style={styles.td}>{property.buy}</td>
                  <td style={styles.td}>{property.rent}</td>
                  <td style={styles.td}>{property.beds}</td>
                  <td style={styles.td}>{property.baths}</td>
                  <td style={styles.td}>{property.agent}</td>
                  <td style={styles.td}>{property.description}</td>
                  <td style={styles.td}>{property.features}</td>
                </tr>
              ))}
            </tbody>
            </table>
              <button style={styles.viewAllButton}>View All</button>
          </div>

        {/* Charts */}
        <div style={styles.charts}>
          <div style={styles.chart}>
            <h3>Website Traffic</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" label={{ value: "Days", position: "insideBottom" }} />
                <YAxis label={{ value: "Users", angle: -90, position: "insideLeft" }} />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div style={styles.chart}>
            <h3>Buy and Rent</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={buyRentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Rent" fill="#8884d8" />
                <Bar dataKey="Buy" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      </div>
  );
};

const styles = {
  header: {
    display: "flex",
    padding: "10px 20px",
    backgroundColor: "#1B4C7F",
    color: "white",
    borderBottom: "1px solid #ddd",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
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

  content: {
    marginTop: "80px",
    padding: "20px",
  },

  titleContainer:{
    border: "1px solid black",
    marginBottom: "70px",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  },

  tableContainer: {
    overflowX: "auto",
    marginBottom: "90px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    paddingTop: "20px",
    paddingBottom: '30px'
  },

  tableTitle: {
    fontSize: "25px",
    fontWeight: "bold",
    paddingLeft: "60px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
    paddingBottom: "20px",
  },

  th: {
    padding: "15px 15px", // Add padding inside header cells
    backgroundColor: "#f4f4f4", // Optional: Header background
    borderBottom: "2px solid #ddd", // Add a bottom border for headers
  },

  td: {
    padding: "15px 15px", // Add padding inside cells for spacing
    borderBottom: "1px solid #ddd", // Add a subtle border between rows
  },

  trHover: {
    "&:hover": {
      backgroundColor: "#f9f9f9", // Optional: Highlight row on hover
    },
  },

  viewAllButton: {
    marginTop: "30px",
    padding: "8px 18px",
    backgroundColor: "#1B4C7F",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "10px",
    fontWeight: 'bold',
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginLeft: "80rem"
  },

  charts: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
  },


  chart: {
    width: "45%",
    backgroundColor: "#f9f9f9",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default App;
