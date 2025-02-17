import React, { useState } from "react";

export function SideBar() {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <div className="relative">
  
      <div
        className={`h-screen fixed md:relative bg-white transition-transform duration-200 w-30
          ${sideBarOpen ? "md:w-80" : "md:w-20"}
          ${sideBarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
     
      </div>
      
      <div
        className="absolute top-4 left-4 z-50 p-2 bg-white rounded-full shadow cursor-pointer"
        onClick={() => setSideBarOpen(!sideBarOpen)}
      >
        <SideBarToggle />
      </div>
    </div>
  );
}

export function SideBarToggle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}
