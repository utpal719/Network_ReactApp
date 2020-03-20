import React, { useState } from "react";
import "./style.css";

const Preloader = props => {
  let [isLoading, setLoading] = useState(true);

  let startLoading = _ => setLoading(true);
  let stopLoading = _ => setLoading(false);

  return (
    <>
      {isLoading && (
        <div className="drawing">
          <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
        </div>
      )}

      <props.Component
        startLoading={startLoading}
        stopLoading={stopLoading}
        {...props}
      ></props.Component>
    </>
  );
};

export default Preloader;
