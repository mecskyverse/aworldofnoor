'use client';

import { BellIcon, Inbox, User, Users } from "lucide-react";
import UserItem from "./UserItem";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";
import Link from 'next/link'
import { usePathname } from "next/navigation";
export default function Sidebar() {
    const pathname = usePathname();
    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/user/profile",
                    icon: <User />,
                    text: "Profile"
                },
                {
                    link: "/user/subscription",
                    icon: <Inbox />,
                    text: "Subscription Box"
                },
                {
                    link: "/user/community",
                    icon: <Users />,
                    text: "Community"
                },
                {
                    link: "/",
                    icon: <BellIcon />,
                    text: "Notifications"
                }
            ]
        },

    ]

    return <div className="absolute border-r top-0 z-10 flex flex-col gap-4 w-[300px] min-w-[300px] min-h-screen p-4">
        <div>
            <UserItem />
        </div>
        <div className="grow">
            <Command style={{ overflow: 'visible' }}>
                <CommandList style={{ overflow: 'visible' }}>
                    {menuList.map((menu, key) => (
                        <CommandGroup key={key} heading={menu.group}>
                            {menu.items.map((option, optionKey) => {
                                return (
                                    <Link href={`${option.link}`} >
                                        <CommandItem key={optionKey} className={`flex gap-2 ${pathname === option.link ? 'bg-[#f5f5f5] font-bold' : '' } cursor-pointer`}>
                                            {option.icon}
                                            {option.text}
                                        </CommandItem>
                                    </Link>
                                )
                            }
                            )}
                        </CommandGroup>
                    ))}
                </CommandList>
            </Command>
        </div>
    </div >;
}