export const TopBox = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-6 space-y-2 md:space-y-3">
      <div className="w-30 overflow-hidden rounded-xl mb-4 md:mb-6">
        <img
          className="w-full h-20  truncate"
          src="https://deadline.com/wp-content/uploads/2024/04/spider-man-sam-raimi.jpg"
          alt="profile-pic"
        />
      </div>

      <div className="w-full text-center">
        <p className="text-xl md:text-2xl font-bold text-center truncate w-full">
          SPIDY KUMAR
        </p>
        <p className="text-md md:text-base m-2 text-gray-500 text-center truncate w-full">
          freindyneighbour@gmail.com
        </p>
        <p className="text-md text-gray-500  truncate w-full">
          +91 9999999999
        </p>
        <p className="text-md mt-4 text-gray-500 truncate w-full">
          JP Nagar, Bae'luru
        </p>
      </div>
    </div>
  );
};



export const MainBar = () => {
  return (
    <>
    <div className="flex flex-grid m-1 mt-7 p-4 shadow-amber-300  bg-gray-100 rounded-2xl">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
</svg>
 <input className="px-7 w-full" type="date"/></div>
  
<div className="p-5">
 <div className="grid mt-2 grid-cols-5 p-1 gap-8 border-b border-gray-300  "> 
  <div className=" col-span-1 p-2  md:p-5 border-r-1 mb-2 border-gray-300">
    11:30AM 
  </div>
  <div className="col-span-4">
    <div className="p-2 flex text-md ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg> 
<label className="ml-2 text-md"> LIVE</label>
</div>
     <div className="text-2xl font-medium">
    UX Webinar
    </div>
  </div>
 </div>

 <div className="grid mt-2 grid-cols-5  p-2 gap-8 border-b border-gray-300  "> 
  <div className=" col-span-1  p-5 border-r-1 mb-2 border-gray-300">
    11:30AM 
  </div>
  <div className="col-span-4">
    <div className="p-2 flex text-md ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg> 
<label className="ml-2 text-md"> Upcoming</label>
</div>
     <div className="text-2xl font-medium">
    My First Webinar
    </div>
  </div>
 </div>

 <div className="grid mt-2 grid-cols-5 gap-8 p-2 border-gray-300  "> 
  <div className=" col-span-1  p-5 border-r-1 mb-2 border-gray-300">
    2:00 PM
  </div>
  <div className="col-span-4">
    <div className="p-2 flex text-md ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg> 
<label className="ml-2 text-md"> Upcoming</label>
</div>
     <div className="text-2xl font-medium">
    Important Webinar
    </div>
  </div>
 </div>


</div>
    </>
  )
}

export const LastBar=()=>{

  return(
    <div className="">
      <div className="w-7 h-7 bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
      </div>
     
<div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</div>

<div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg></div>


    </div>
  )

}

