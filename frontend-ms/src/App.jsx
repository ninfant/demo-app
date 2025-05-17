import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL ?? "loading";
    // Fetch bootdata
    fetch(`${baseUrl}/bootdata`)
      .then((res) => {
        if (!res.ok) throw new Error("Bootdata fetch failed");
        return res.json();
      })
      .then((data) => {
        const { featureFlags } = data;
        console.log({ featureFlags });
        setDarkMode(featureFlags?.darkMode === true);
      })
      .catch(() => {
        console.error("Failed to fetch bootdata");
      });

    // Fetch main message
    fetch(`${baseUrl}/demo1`)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.text();
      })
      .then((data) => {
        setMessage(data);
        console.log({ data });
      })
      .catch(() =>
        setMessage("❌ Could not connect to demo microservice backend.")
      );
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
  };

  return (
    <div style={containerStyle}>
      <h2>Demo Feature Consumer (MS2)</h2>
      <p style={messageStyle}>{message}</p>
    </div>
  );
}

export default App;
