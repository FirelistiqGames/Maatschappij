import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { SidebarApp } from "@/pages/layout/SidebarApp";
import { Stedelijk1Header } from "../../Headers/Stedelijk/Stedelijk1Header";
import { Stedelijk1Inhoud } from "../SiteInhoud/Stedelijk/Stedelijk1Inhoud";
import { Helmet } from "react-helmet";
import { Footer } from "@/pages/layout/footer";



export function Stedelijk1() {
    return (
        <>
            <Helmet>
                <title>PvG - Sportprogramma Ouderen</title>
                <link rel="icon" type="ico" href="/logo2.ico" />
            </Helmet>
            <SidebarProvider>
                <SidebarApp />
                <SidebarInset>
                    <Stedelijk1Header />
                    <Stedelijk1Inhoud />
                    <Footer/>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}