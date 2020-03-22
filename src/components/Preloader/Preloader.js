import React, { useState, useEffect } from "react";
import "./style.css";

const Preloader = props => {
  let [isLoading, setLoading] = useState(true);

  let startLoading = _ => setLoading(true);
  let stopLoading = _ => setLoading(false);

  useEffect(() => {
    if (props.defaultLoading === false) {
      stopLoading();
    }
  }, [props.defaultLoading]);

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
        {...props}
        startLoading={startLoading}
        stopLoading={stopLoading}
      ></props.Component>
    </>
  );
};

export default Preloader;
