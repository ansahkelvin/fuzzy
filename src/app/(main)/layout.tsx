import React from "react";
import {Sidebar} from "lucide-react";
import MenuOptions from "@/components/sidebar";
import InfoBar from "@/components/infobar";

type Props = {children: React.ReactNode}
const Layout = ({children}: Props) => {
    return <div className={"flex overflow-hidden h-screen"}>
        <MenuOptions/>
        <div className="w-full">
            <InfoBar/>
            {children}
        </div>
    </div>
}



export default Layout