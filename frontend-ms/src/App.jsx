import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showExtraText, setShowExtraText] = useState(false);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL ?? "";
    fetch(`${baseUrl}/bootdata`)
      .then((res) => {
        if (!res.ok) throw new Error("Bootdata fetch failed");
        return res.json();
      })
      .then((featureFlags) => {
        setDarkMode(featureFlags.darkMode === true);
        setShowContact(featureFlags.contactUs === true);
        setShowExtraText(featureFlags.enableExtraText === true);
      })
      .catch((err) => console.error("Failed to fetch bootdata", err));
  }, []);

  const containerStyle = {
    padding: "2rem",
    fontFamily: "sans-serif",
    backgroundColor: darkMode ? "#1e1e1e" : "#fff",
    color: darkMode ? "#f5f5f5" : "#000",
    minHeight: "100vh",
    transition: "all 0.3s ease",
  };
  const messageStyle = {
    fontSize: "1.2rem",
    color: darkMode ? "#a5d6ff" : "navy",
    marginTop: "2rem",
    marginleft: "2rem",
    textAlign: "justify",
    maxWidth: "600px",
    margin: "2rem auto",
  };
  const contactBoxStyle = {
    margin: "4rem auto 0",
    width: "300px",
    padding: "1rem",
    backgroundColor: darkMode ? "#333" : "#f4f4f4",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <h2>Demo Feature Consumer (MS2)</h2>

      <p style={messageStyle}>
        Flexible, lightweight architecture that enables implementing an
        internal, modular feature-flag system that can be easily extended to
        meet the team’s evolving needs. Shows how to design a proprietary
        feature-flag system that adapts to new requirements while remaining
        low-maintenance.
      </p>
      {/* párrafo extra sólo si la flag enableExtraText está ON */}
      {showExtraText && (
        <p style={messageStyle}>
          Microservice that dynamically adapts behavior to feature flag states,
          simulating real-world gradual rollouts and supporting instant
          rollbacks. Demonstrates building an internal feature-flag system with
          a structure that simplifies future expansion and evolution
        </p>
      )}

      {showContact && (
        <div style={contactBoxStyle}>
          <h3>📬 Contact Us</h3>
          <p>We'd love to hear from you!</p>
          <p>Email us at support@example.com</p>
        </div>
      )}
    </div>
  );
}

export default App;
