import  { TopBox, LastBar, MainBar } from "./TopBox"


export function MainContent(){
  return <div className="w-full">

    <div className="h-40 bg-black hidden md:block "></div>

    <div className="grid grid-cols-10 gap-8 p-7">

      <div className="h-80 rounded-2xl  shadow-2xl bg-gray-100  md:col-span-2 
       col-span-8 -translate-y-10 hidden md:block">
        <TopBox/>
      </div>


    <div className="h-100 rounded-2xl shadow-2xl border-1 border-gray-200 md:mt-20 bg-gray-100 md:col-span-5  col-span-8 ">
      <MainBar/>
    </div>


    <div className="h-80 md:mt-20 rounded-2xl shadow-2xl bg-gray-100 md:col-span-3 col-span-8">
      <LastBar/>
    </div>
  </div>
  </div>
  
}