import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </p>
      <p className="text-xs text-gray-400 mt-1">Made with ❤️ by MyStore Team</p>
    </footer>
  );
};

export default Footer;
