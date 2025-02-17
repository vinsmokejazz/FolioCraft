import TopBox from "./TopBox"

export function MainContent(){
  return <div className="w-full">
    <div className="h-40 bg-black hidden md:block "></div>
    <div className="grid grid-cols-10 gap-8 p-7">
      <div className="h-80 rounded-2xl  shadow-2xl bg-red-100  md:col-span-2 
       col-span-8 -translate-y-10 hidden md:block">
        <TopBox/>

      </div>

  
    <div className="h-100 rounded-2xl shadow-2xl md:mt-20 bg-blue-500 md:col-span-5  col-span-8 ">
      
    </div>
    <div className="h-80 md:mt-20 rounded-2xl shadow-2xl bg-yellow-400 md:col-span-3 col-span-8">

    </div>
  </div>
  </div>
  
}