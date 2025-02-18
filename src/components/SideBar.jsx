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
        <div className="grid grid-rows-5 mt-10 p-6 ">
          <div className={`row-span-2 py-5 px-3 ${sideBarOpen ? "hover:bg-gray-100" : "hover:none"}  rounded-2xl items-center flex justify-between`}>
            <div className={`flex-1 font-semibold hidden ${sideBarOpen && "md:block"}`}>HOME</div>
            <div className="w-6 h-6 flex "><svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            </div>
          </div>

          <div className={`row-span-2 py-5 px-3 ${sideBarOpen ? "hover:bg-gray-100" : "hover:none"}  rounded-2xl items-center flex justify-between`}>
            <div className={`flex-1 font-semibold hidden ${sideBarOpen && "md:block"}`}>WEBINARS</div>
            <div className="w-6 h-6 flex "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
            </svg>

            </div>
          </div>


        </div>


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
