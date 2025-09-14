import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 md:bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-blue-600 text-white transition-opacity duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Back to top"
      style={{ fontSize: 24 }}
    >
      ↑
    </button>
  );
};

export default BackToTopButton;
