import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Preloader = ({ children }) => {
  let isLoading = useSelector(state => state.isLoading);
  return (
    <>
      {isLoading ? (
        <div class="drawing" id="loading">
          <div class="loading-dot"></div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Preloader;
