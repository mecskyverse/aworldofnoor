'use client'
import {useEffect} from 'react'
import Sidebar from "@/components/Sidebar"
import { createNewClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export default function DashboardLayout({children}) {
  const router = useRouter()
    const supabase = createNewClient()
    useEffect(() => {
        const getUserDetails = async () => {
            const {
              data: { user },
              error
            } = await supabase.auth.getUser()
            if (error || !user) {
                router.push('/signin')
             
            }  
        } 
        getUserDetails()
    }, [])
    return(
    <section className="flex items-start justify-between">
        <Sidebar />
        <div className="p-8 flex w-full h-full pl-[300px]">
            {children}
          </div>
    </section>
  
)}