// components/LoadingModal.js
import React from "react";
import Lottie from "lottie-react";
import circularProgress from "../public/circular.json";
import paperPlane from "../public/plane.json";

const LoadingModal = ({ isOpen, loadings }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-120">
        <h2 className="text-lg font-semibold mb-4 h-32 w-32 mx-auto">
          <Lottie animationData={paperPlane} loop={true} />
        </h2>
        <div className="space-y-2">
          <p
            className={`${
              loadings >= 0 ? "text-blue-600" : "text-gray-400"
            } flex items-center space-x-2`}
          >
            {loadings == 0 ? (
              <Lottie
                animationData={circularProgress}
                loop={true}
                className="w-12 h-10"
              />
            ) : (
              <div className="w-12 h-10" />
            )}{" "}
            Searching 400+ flights
          </p>
          <p
            className={`${
              loadings >= 1 ? "text-blue-600" : "text-gray-400"
            } flex items-center space-x-2`}
          >
            {loadings == 1 ? (
              <Lottie
                animationData={circularProgress}
                loop={true}
                className="w-12 h-10"
              />
            ) : (
              <div className="w-12 h-10" />
            )}{" "}
            Attaching company rules
          </p>
          <p
            className={`${
              loadings >= 2 ? "text-blue-600" : "text-gray-400"
            } flex items-center space-x-2`}
          >
            {loadings == 2 ? (
              <Lottie
                animationData={circularProgress}
                loop={true}
                className="w-12 h-10"
              />
            ) : (
              <div className="w-12 h-10" />
            )}{" "}
            Serving best results
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
