'use client'
import { useState, useEffect } from 'react'
import { redirect } from 'next/navigation'
import { createNewClient } from '@/utils/supabase/client'


const getUserDetail = async (setIsLoggedIn) => {
    const supabase = createNewClient()
    const {
        data: { user },
        error
    } = await supabase.auth.getUser()
    if (error || !user) {
        redirect('/signin')
    }
    else {
        setIsLoggedIn(true)
    }
}

export default function page() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        getUserDetail(setIsLoggedIn)
    }, [])

    return (
        <div className='min-h-screen'>User Section</div>
    )


}

