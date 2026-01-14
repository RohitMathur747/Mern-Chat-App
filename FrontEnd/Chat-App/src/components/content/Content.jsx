import React, { useState, useEffect } from "react";
import "./Content.css";
import Todo from "../Todo/Todo";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const Content = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    const handleLogin = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    const handleLogout = () => {
      setUser(null);
    };

    window.addEventListener("login", handleLogin);
    window.addEventListener("logout", handleLogout);

    return () => {
      window.removeEventListener("login", handleLogin);
      window.removeEventListener("logout", handleLogout);
    };
  }, []);

  // Sample data for graphs
  const barData = [
    { name: "2020", value: 400 },
    { name: "2021", value: 300 },
    { name: "2022", value: 200 },
    { name: "2023", value: 278 },
    { name: "2024", value: 189 },
    { name: "2025", value: 289 },
  ];

  const radarData = [
    { subject: "Sales", A: 120, B: 110, fullMark: 150 },
    { subject: "Marketing", A: 98, B: 130, fullMark: 150 },
    { subject: "Development", A: 86, B: 130, fullMark: 150 },
    { subject: "Customer Support", A: 99, B: 100, fullMark: 150 },
    { subject: "Research", A: 85, B: 90, fullMark: 150 },
    { subject: "Admin", A: 65, B: 85, fullMark: 150 },
  ];

  return (
    <main className="content-main flex-grow p-8 bg-gray-100">
      {user ? (
        <Todo user={user} />
      ) : (
        <div className="container mx-auto">
          <section className="content-section mb-8">
            <h2 className="section-title text-3xl font-bold mb-4">
              Company Details
            </h2>
            <p className="section-text text-lg">
              Our company is a leading provider of innovative solutions in the
              tech industry. Founded in 2010, we have been dedicated to
              delivering high-quality products and services to our clients
              worldwide. Our mission is to empower businesses through
              technology, fostering growth and innovation.
            </p>
          </section>

          <section className="content-section mb-8">
            <h2 className="section-title text-3xl font-bold mb-4">
              Annual Reports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="report-card bg-white p-6 rounded-lg shadow-md">
                <h3 className="report-title text-xl font-semibold mb-2">
                  2023 Annual Report
                </h3>
                <p>Revenue: $10M</p>
                <p>Employees: 500</p>
                <p>Projects Completed: 150</p>
              </div>
              <div className="report-card bg-white p-6 rounded-lg shadow-md">
                <h3 className="report-title text-xl font-semibold mb-2">
                  2024 Annual Report
                </h3>
                <p>Revenue: $12M</p>
                <p>Employees: 550</p>
                <p>Projects Completed: 180</p>
              </div>
              <div className="report-card bg-white p-6 rounded-lg shadow-md">
                <h3 className="report-title text-xl font-semibold mb-2">
                  2025 Annual Report
                </h3>
                <p>Revenue: $15M</p>
                <p>Employees: 700</p>
                <p>Projects Completed: 210</p>
              </div>
            </div>
          </section>

          <section className="content-section mb-8">
            <h2 className="section-title text-3xl font-bold mb-4">Graphs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="graph-container bg-white p-6 rounded-lg shadow-md">
                <h3 className="graph-title text-xl font-semibold mb-4">
                  Bar Chart - Revenue Over Years
                </h3>
                <BarChart width={400} height={300} data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </div>
              <div className="graph-container bg-white p-6 rounded-lg shadow-md">
                <h3 className="graph-title text-xl font-semibold mb-4">
                  Radar Chart - Department Performance
                </h3>
                <RadarChart
                  cx={200}
                  cy={150}
                  outerRadius={100}
                  width={400}
                  height={300}
                  data={radarData}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis />
                  <Radar
                    name="A"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="B"
                    dataKey="B"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default Content;
