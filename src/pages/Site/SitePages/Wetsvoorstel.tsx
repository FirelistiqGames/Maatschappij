import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Footer } from "@/pages/layout/footer";
import { SidebarApp } from "@/pages/layout/SidebarApp";
import { Helmet } from "react-helmet";
import { WetsvoorstelHeader } from "../Headers/WetsvoorstelHeader";
import { WetsvoorstelInhoud } from "./SiteInhoud/WetsvoorstelInhoud";




export function Wetsvoorstel() {
    return (
        <>
            <Helmet>
                <title>PvG - Wetsvoorstel</title>
                <link rel="icon" type="ico" href="/logo2.ico" />
            </Helmet>
            <SidebarProvider>
                <SidebarApp />
                <SidebarInset>
                    <WetsvoorstelHeader />
                    <WetsvoorstelInhoud />
                    <Footer />
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}