import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center p-4 mt-10">
      <p>&copy; {new Date().getFullYear()} Cheshire Construction. All rights reserved. Designed by <a href="https://ceala.vercel.app/">Ceala Digital Media</a></p>
    </footer>
  );
};

export default Footer;
