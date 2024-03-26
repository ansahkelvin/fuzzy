import Home from "@/components/icons/home";
import Workflows from "@/components/icons/workflows";
import Settings from "@/components/icons/settings";
import Category from "@/components/icons/category";
import Payment from "@/components/icons/payment";
import Templates from "@/components/icons/cloud_download";
import Logs from "@/components/icons/clipboard";

export const clients = [...new Array(10)].map((client, index) => ({
    href: `/${index + 1}.png`,
}))


export const products = [
    {
        title: 'Moonbeam',
        link: 'https://gomoonbeam.com',
        thumbnail: '/p1.png',
    },
    {
        title: 'Cursor',
        link: 'https://cursor.so',
        thumbnail: '/p2.png',
    },
    {
        title: 'Rogue',
        link: 'https://userogue.com',
        thumbnail: '/p3.png',
    },

    {
        title: 'Editorially',
        link: 'https://editorially.org',
        thumbnail: '/p4.png',
    },
    {
        title: 'Editrix AI',
        link: 'https://editrix.ai',
        thumbnail: '/p5.png',
    },
    {
        title: 'Pixel Perfect',
        link: 'https://app.pixelperfect.quest',
        thumbnail: '/p6.png',
    },

    {
        title: 'Algochurn',
        link: 'https://algochurn.com',
        thumbnail: '/p1.png',
    },
    {
        title: 'Aceternity UI',
        link: 'https://ui.aceternity.com',
        thumbnail: '/p2.png',
    },
    {
        title: 'Tailwind Master Kit',
        link: 'https://tailwindmasterkit.com',
        thumbnail: '/p3.png',
    },
    {
        title: 'SmartBridge',
        link: 'https://smartbridgetech.com',
        thumbnail: '/p4.png',
    },
    {
        title: 'Renderwork Studio',
        link: 'https://renderwork.studio',
        thumbnail: '/p5.png',
    },

    {
        title: 'Creme Digital',
        link: 'https://cremedigital.com',
        thumbnail: '/p6.png',
    },
    {
        title: 'Golden Bells Academy',
        link: 'https://goldenbellsacademy.com',
        thumbnail: '/p1.png',
    },
    {
        title: 'Invoker Labs',
        link: 'https://invoker.lol',
        thumbnail: '/p2.png',
    },
    {
        title: 'E Free Invoice',
        link: 'https://efreeinvoice.com',
        thumbnail: '/p3.png',
    },
]


export const menuOptions = [
    {id: 1, name: 'Dashboard', Component: Home, href: '/dashboard'},
    {id: 2, name: 'Workflows', Component: Workflows, href: '/workflows'},
    {id: 3, name: 'Settings', Component: Settings, href: '/settings'},
    {id: 4, name: 'Connections', Component: Category, href: '/connections'},
    {id: 5, name: 'Billing', Component: Payment, href: '/billing'},
    {id: 6, name: 'Templates', Component: Templates, href: '/templates'},
    {id: 7, name: 'Logs', Component: Logs, href: '/logs'},
]