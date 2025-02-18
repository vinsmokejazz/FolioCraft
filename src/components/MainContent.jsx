import { useEffect, useState } from "react"
import { TopBox, LastBar, MainBar } from "./TopBox"


export function MainContent() {

  const [wish, setWish] = useState("Morning");
  const [currTime, setCurrTime] = useState("00:00 AM");

  useEffect(() => {
    const d = new Date();
    const currHR = d.getHours();
    const greeting = currHR < 12 ? "Morning" : currHR < 18 ? "Afternoon" : "Evening";
    setWish(greeting);

    const formattedTime = d.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    setCurrTime(formattedTime);
  }, []);


  return <div className="w-full">

    <div className="h-40 bg-black hidden md:block "></div>

    <div className="relative top-1  left-20 md:relative md:top-23 md:left-90  ">
      <span>{currTime}</span>
      <h1 className="text-2xl font-bold text-black">Good {wish}..SPIDY!</h1>
    </div>

    <div className="grid grid-cols-10 gap-8 p-7">
      <div className="h-80 rounded-2xl  shadow-2xl bg-gray-100  md:col-span-2 
       col-span-8 -translate-y-10 hidden md:block">
        <TopBox />
      </div>


      <div className="h-105 rounded-2xl shadow-2xl border-1 border-gray-200 md:mt-20 bg-gray-100 md:col-span-5  col-span-8 ">
        <MainBar />
      </div>


      <div className="h-80 md:mt-20 rounded-2xl shadow-2xl bg-gray-100 md:col-span-3 col-span-8">
        <LastBar />
      </div>
    </div>
  </div>

}



