'use client'
import {usePathname} from "next/navigation";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {menuOptions} from "@/lib/constants";
import {AnimatedTooltip} from "@/components/globals/tooltip";
import {clsx} from "clsx";

const MenuOptions = () => {
    const pathname = usePathname();

    return <nav
        className='dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2'>
        <div className="flex items-center justify-center flex-col gap-8">
            <Link className='flex font-bold flex-row' href={'/'}>
                Fuzzy
            </Link>
            <TooltipProvider>
                {menuOptions.map((menuItem) => <ul key={menuItem.name}>
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger>
                            <li>
                                <Link
                                    href={menuItem.href}
                                    className={clsx(
                                        'group h-8 w-8 flex items-center justify-center  scale-[1.5] rounded-lg p-[3px]  cursor-pointer',
                                        {
                                            'dark:bg-[#2F006B] bg-[#EEE0FF] ':
                                                pathname === menuItem.href,
                                        }
                                    )}
                                >
                                    <menuItem.Component
                                        selected={pathname === menuItem.href}
                                    />
                                </Link>
                            </li>
                        </TooltipTrigger>
                    </Tooltip>
                </ul>)}
            </TooltipProvider>
        </div>
    </nav>
}

export default MenuOptions