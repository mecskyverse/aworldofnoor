'use client';
import { useUser } from "@/context";
import { RxAvatar } from "react-icons/rx";

export default function UserItem() {
    const { currentUser } = useUser();
    if (currentUser) {
        return <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
            {
                currentUser.identity_data?.avatar_url ?
                    <div className=" w-10 h-10 overflow-hidden rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
                        <img src={currentUser.identity_data.avatar_url} className='w-full h-full object-cover' />
                    </div>
                    :
                    <RxAvatar className='w-10 h-10 cursor-pointer bg-[#e4f4f6] rounded-full' />
            }
            <div className="grow">
                <p className="text-[16px] font-bold">{currentUser.identity_data.full_name}</p>
                <p className="text-[12px] text-neutral-500">{currentUser.email}</p>
            </div>
        </div>;
    }
    else return null
}