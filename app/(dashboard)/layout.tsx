import Navbar from "@/components/navbar";

const DashboardLayout =({children}:{
    children:React.ReactNode;
})=>{
    return (
       <div className="h-full relative">
        <div className="hidden h-full md:flex md:flex-col
        md:w-72 md:fixed md:inset-y-0 z-[82]
        bg-gray-900
        ">
           <div>hELLO sidebar</div>
        </div>
        <main className="md:pl-72">
            <Navbar/>
            {children}
        </main>
       </div>
    );
}
export default DashboardLayout;