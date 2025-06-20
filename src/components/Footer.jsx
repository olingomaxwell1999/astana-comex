"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="fade-up" className="main-footer">
      <div className="top">
        <div className="footer-section">
          <Image
            src="/ASTANA-RESIDENCE-LOGO-BLACK.png"
            height={80}
            width={120}
            className="footer-image"
            priority
            alt="Astana Residence Logo"
          />
        </div>

        <div className="footer-divider"></div>

        <div className="footer-section">
          <h3>Office Hours</h3>
          <p>Monday - Friday: 08:30 AM to 4:30 PM</p>
          <p>Saturday - Sunday: Closed</p>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-section">
          <h3>Comex Homes</h3>
          <p>Hurligham Telkom Plaza, 1st Floor</p>
          <p>Phone: +254 709 501 501</p>
          <p>Email: info@comexhomes.ke</p>
        </div>
      </div>

      <div className="bottom">
        <p>Astana Residence &copy; {currentYear}</p>
      </div>
    </div>
  );
}

export default Footer;
