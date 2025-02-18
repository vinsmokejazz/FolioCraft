
import AddCircleIcon from "../assets/add-circle-svgrepo-com.svg";
import CalenderIcon from "../assets/calender-svgrepo-com.svg";
import VideoIcon from "../assets/video-frame-play-horizontal-svgrepo-com.svg";


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
          SPIDEY KUMAR
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
      <div className="  transition-all ease-in-out flex flex-grid m-1 mt-7 p-4 md:p-2 bg-gray-200 rounded-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
        </svg>
        <input className="px-7 w-full" type="date" /></div>

      <div className=" p-5">
        <div className="grid mt-2  grid-cols-5 p-1 gap-8 border-b border-gray-300  ">
          <div className=" col-span-1 md:p-5  md:border-r-1 mb-2 border-gray-300">
            11:30 AM
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
          <div className=" col-span-1  md:p-5 md:border-r-1 mb-2 border-gray-300">
            11:30 AM
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
          <div className=" col-span-1  md:p-5 md:border-r-1 mb-2 border-gray-300">
            2:00 PM
          </div>
          <div className="col-span-4">
            <div className="p-2 flex text-md ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              <label className="ml-2 text-md"> Upcoming</label>
            </div>
            <div className="text-2xl truncate font-medium">
              Important Webinar
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export const LastBar = () => {

  return (
    <div className="grid grid-cols-2 gap-8 p-10 ml-8">

      <div className="flex flex-col  items-center">
        <div className="flex flex-col  items-center mb-8">
          <img
            className="w-20  bg-gray-300 rounded-2xl mb-2"
            src={CalenderIcon}
            alt="calendar"
          />
          <label className="text-md font-medium text-center">Schedule & Webinar</label>
        </div>


        <div className="flex flex-col items-center">
          <img
            className="w-20 bg-gray-300 rounded-2xl mb-2"
            src={VideoIcon}
            alt="video"
          />
          <label className="text-md truncate font-medium text-center">Open Recordings</label>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <img
          className="w-20 bg-gray-300 rounded-2xl mb-2"
          src={AddCircleIcon}
          alt="add-circle"
        />
        <label className="text-md font-medium  text-center">Jobs & Webinar</label>
      </div>
    </div>
  )

}

