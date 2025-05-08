import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarTrigger

} from "@/components/ui/sidebar"
import { Item } from "@radix-ui/react-dropdown-menu"
import { url } from "inspector"
import { Calendar, ChevronDown, Home, Inbox, Settings, PersonStanding, PersonStandingIcon, User2, Newspaper, Gavel } from "lucide-react"
import { title } from "process"

import { Outlet, useLocation } from "react-router-dom"



const Landelijks = [
    {
        title: "Preventieve Gezondheidszorg",
        url: "preventieve-gezondheidszorg",

    },
    {
        title: "Mentale Gezondheid",
        url: "mentale-gezondheid",
    },
    {
        title: "Subsidies Medische Studies",
        url: "subsidies-medische-studies",
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
        url: "home",
        icon: Home,
    },
    {
        title: "Over Ons",
        url: "over-ons",
        icon: PersonStanding,
    },
    {
        title: "Nieuws",
        url: "nieuws",
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
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
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
                                                        <a href={Landelijk.url}>
                                                            <span>{Landelijk.title}</span>
                                                        </a>
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
                                                        <a href={Stedelijk.url}>
                                                            <span>{Stedelijk.title}</span>
                                                        </a>
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