"use client"
import LoadingModal from "@/components/LoadingModals";
import { useState } from "react";

export default function Home() {
  const [loadings, setLoadings] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const clickHandler = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setLoadings((prevState) => prevState + 1);
      setTimeout(() => {
        setLoadings((prevState) => prevState + 1);
        setTimeout(() => {
          setLoadings((prevState) => prevState + 1);
          setTimeout(() => {
            setIsModalOpen(false);
            setLoadings(0);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 1000);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LoadingModal isOpen={isModalOpen} loadings={loadings} />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={clickHandler}
      >
        Click for loading
      </button>
    </div>
  );
}
