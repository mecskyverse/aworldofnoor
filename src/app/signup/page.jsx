'use client'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'


const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
const getUserDetail = async (router) => {
  const {
    data: { user },
    error
  } = await supabase.auth.getUser()
  if (error || !user) {
    // console.log(error)
  }
  else {
    router.push('/')
  }
}
const page = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [login, setLogin] = useState(false);
  const router = useRouter()
  const handleSetLogin = () => {
    setLogin(true)
  }
  useEffect(() => {
    setDomLoaded(true);
    getUserDetail(router)
  }, []);


  return (
    <>
      {
        domLoaded &&
        (<div className='w-full flex px-8 py-8 justify-center items-center'>

          <span className='bg-[#E4F4F6] rounded-xl p-7'>
            <Auth
              supabaseClient={supabase}
              providers={['google']}
              appearance={{
                theme: ThemeSupa,
                extend: true,
                className: {
                  container: 'md:w-[400px] sm:w-[300px] w-[250px]',
                }
              }}
              queryParams={{
                access_type: 'offline',
                prompt: 'consent',
                hd: 'domain.com',
              }}
              providerScopes={{
                google: 'https://www.googleapis.com/auth/calendar.readonly',
              }}
              redirectTo='https://aworldofnoor.vercel.app/'
            />
          </span>
        </div>)

      }
    </>
  )
}

export default page