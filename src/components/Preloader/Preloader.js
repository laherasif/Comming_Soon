import React, { useEffect } from "react";
import "./Preloader.css";

const Preloader = () => {
  function preloader() {
    let preload = document.querySelector(".preloader");
    setTimeout(() => {
      preload.style.opacity = "0";
      setTimeout(() => {
        preload.style.display = "none";
      }, 1000);
    }, 3000);
  }

  useEffect(() => {
    preloader();
  }, [])

  return (
    <div className="preloader">
      <div class="spinner_wrap">
        <div class="spinner" />
      </div>
    </div>
  );
}

export default Preloader;
