import Sidebar from "@/components/Sidebar"

export default function DashboardLayout({children}) {
    return(
    <section className="flex items-start justify-between">
        <Sidebar />
        <div className="p-8 grid w-full h-full pl-[300px]">
            {children}
          </div>
    </section>
  
)}