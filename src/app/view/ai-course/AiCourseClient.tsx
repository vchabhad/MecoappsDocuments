"use client";

import React, { useEffect, useState } from "react";
import App from "./app/App.jsx";
// Import the Vite app's CSS
import "./app/index.css";

export default function AiCourseClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch for browser-specific rendering like HashRouter
  if (!mounted) return null;

  return (
    <div className="ai-course-container min-h-screen">
      <App />
    </div>
  );
}
