const TopBox = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-6 space-y-2 md:space-y-3">
      <div className="w-full overflow-hidden rounded-xl mb-4 md:mb-6">
        <img 
          className="w-full h-auto aspect-video object-cover"
          src="https://deadline.com/wp-content/uploads/2024/04/spider-man-sam-raimi.jpg"
          alt="profile-pic"
        />
      </div>
      

      <p className="text-xl md:text-2xl font-bold text-center truncate w-full">
        SPIDY KUMAR
      </p>
      <p className="text-sm md:text-base text-gray-500 text-center truncate w-full">
        freindyneighbour@gmail.com
      </p>
      <p className="text-sm text-gray-500 truncate w-full">
        +91 9999999999
      </p>
      <p className="text-sm text-gray-500 truncate w-full">
        JP Nagar, Bae'luru
      </p>
    </div>
  );
};




export const MainBar=()=>{


}

export default TopBox