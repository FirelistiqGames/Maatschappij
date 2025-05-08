import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem
} from "@/components/ui/sidebar"
import { ChevronDown, Home, PersonStanding, Newspaper, Gavel } from "lucide-react"

import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'



const Landelijks = [
    {
        title: "Preventieve Gezondheidszorg",
        url: "/preventieve-gezondheidszorg",

    },
    {
        title: "Mentale Gezondheid",
        url: "/mentale-gezondheid",
    },
    {
        title: "Subsidies Medische Studies",
        url: "/subsidies-medische-studies",
    },
]



const Stedelijks = [
    {
        title: "Stedelijk1",
        url: "Stedelijk1",

    },
    {
        title: "Stedelijk2",
        url: "Stedelijk2",

    },
    {
        title: "Stedelijk3",
        url: "Stedelijk3",

    },
]


const items = [
    {
        title: "Home",
        url: "/home",
        icon: Home,
    },
    {
        title: "Over Ons",
        url: "/over-ons",
        icon: PersonStanding,
    },
    {
        title: "Nieuws",
        url: "/nieuws",
        icon: Newspaper,
    },
    {
        title: "Wetsvoorstel",
        url: "#",
        icon: Gavel,
    },

]

export function SidebarApp() {
    const location = useLocation();

    // Check if current path matches any submenu items
    const isLandelijkOpen = Landelijks.some((item) =>
        location.pathname.includes(item.url)
    );
    const isStedelijkOpen = Stedelijks.some((item) =>
        location.pathname.includes(item.url)
    );
    return (


        <Sidebar variant="sidebar">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarHeader className="justify-center items-center text-xl text-red-700 font-bold">Partij voor Gezondheid</SidebarHeader>
                    {/* <SidebarGroupLabel className="justify-center items-center text-xl">Menu</SidebarGroupLabel> */}
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url} className="flex items-center gap-2">
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <Collapsible className="group/collapsible" defaultOpen={isLandelijkOpen}>
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            <ChevronDown className=" transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                            Landelijke Standpunten
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {Landelijks.map((Landelijk) => (
                                                <SidebarMenuSubItem key={Landelijk.title}>
                                                    <SidebarMenuButton size="ts" asChild>
                                                        <Link to={Landelijk.url}>
                                                            <span>{Landelijk.title}</span>
                                                        </Link>
                                                    </SidebarMenuButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                            <Collapsible className="group/collapsible" defaultOpen={isStedelijkOpen}>
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            <ChevronDown className=" transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                            Lokale Standpunten
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {Stedelijks.map((Stedelijk) => (
                                                <SidebarMenuSubItem key={Stedelijk.title}>
                                                    <SidebarMenuButton size="ts" asChild>
                                                        <Link to={Stedelijk.url}>
                                                            <span>{Stedelijk.title}</span>
                                                        </Link>
                                                    </SidebarMenuButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>



    )
}