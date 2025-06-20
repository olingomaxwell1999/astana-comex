import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ResidencesFirst() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div data-aos="fade-up" className="amenities-first">
      <div className="amenities-first-heading">
        <h3>LINKING YOU</h3>
        <h2>WITH THE FINEST</h2>
      </div>
      <div className="amenities-first-text">
        <p>
          Discover Urban Living, deeply rooted in modernity yet effortlessly
          connected in the green heart of Kilimani, surrounded by world class
          amenities.
        </p>
      </div>

      <div className="btn-area mt-5">
        <button className="btn">amenities plan</button>
      </div>
    </div>
  );
}

export default ResidencesFirst;
