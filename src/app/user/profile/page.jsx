'use client'
// import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { useState } from 'react';
import { useUser } from '@/context';
import { redirect } from 'next/navigation'
import { createNewClient } from '@/utils/supabase/client';
const page = () => {
  const [open, setOpen] = useState(false);
  const { currentUser: user } = useUser();

  const supabase = createNewClient()


  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (!error) {
      redirect('/signin')
    }
    console.log('Logging out...');
  };

  if (user) {
    return (
      <div className='min-h-screen '>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
          <div className="flex items-center space-x-4">
            {/* <Avatar className="w-16 h-16 rounded-full">
              <AvatarImage src={user.identity_data.avatar_url} alt={user.identity_data.full_name} />
              <AvatarFallback className="flex items-center justify-center bg-gray-400 text-white font-bold">
                {user.identity_data.full_name.charAt(0)}
              </AvatarFallback>
            </Avatar> */}
            <div>
              <h1 className="text-xl font-semibold">{user.identity_data.full_name}</h1>
              <p className="text-gray-500">{user.identity_data.email}</p>
            </div>
          </div>

          <div className="text-gray-700">
            <p><strong>Provider:</strong> {user.provider}</p>
            <p><strong>Last Sign In:</strong> {new Date(user.last_sign_in_at).toLocaleString()}</p>
            <p><strong>Account Created:</strong> {new Date(user.created_at).toLocaleString()}</p>
          </div>
          <div className='flex justify-between'>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="mt-4 bg-[#e6038a] text-white py-2 px-4 rounded hover:bg-[#e641a3] focus:outline-none focus:ring-2 focus:ring-blue-300">
                  More Info
                </button>
              </DialogTrigger>
              <DialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
                <DialogTitle className="text-lg font-semibold mb-2">User Information</DialogTitle>
                <DialogDescription className="text-gray-700 space-y-2">
                  <p><strong>Full Name:</strong> {user.identity_data.full_name}</p>
                  <p><strong>Email:</strong> {user.identity_data.email}</p>
                  <p><strong>Email Verified:</strong> {user.identity_data.email_verified ? 'Yes' : 'No'}</p>
                  <p><strong>Provider:</strong> {user.provider}</p>
                  <p><strong>Last Sign In:</strong> {new Date(user.last_sign_in_at).toLocaleString()}</p>
                  <p><strong>Account Created:</strong> {new Date(user.created_at).toLocaleString()}</p>
                  <p><strong>Updated At:</strong> {new Date(user.updated_at).toLocaleString()}</p>
                </DialogDescription>
                <DialogClose asChild>
                  <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
                    Close
                  </button>
                </DialogClose>
              </DialogContent>
            </Dialog>
            <button onClick={handleLogout} className="mt-4 bg-[#dc2626] text-white py-2 px-4 rounded hover:bg-[#dc2626] focus:outline-none focus:ring-2 focus:ring-blue-300">
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <div className='min-h-screen'>
    <ReactLoading type='spinningBubbles' color='#416072' height={100} width={55} />

  </div>
};

export default page;
