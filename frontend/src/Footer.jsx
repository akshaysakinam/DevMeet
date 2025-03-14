import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-300 text-base-content rounded p-10 relative">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover" to="/about">About Us</Link>
        <Link className="link link-hover" to="/contact">Contact</Link>
     
        <Link className="link link-hover" to="/privacy-policy">Privacy Policy</Link>
        <Link className="link link-hover" to="/terms-of-service">Terms of Service</Link>
        <Link className="link link-hover" to="/refund-policy">Refund & Cancellation</Link>
        <Link className="link link-hover" to="/faqs">FAQs</Link>
      </nav>
      
      <nav className="grid grid-flow-col gap-4">
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M24 4.557c-0.883 0.392-1.832 0.656-2.828 0.775..."></path>
          </svg>
        </a>
        <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M19.615 3.184c-3.604-0.246-11.631-0.245..."></path>
          </svg>
        </a>
       
      </nav>

      <aside>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved by DevMeet</p>
      </aside>
    </footer>
  );
};

export default Footer;
