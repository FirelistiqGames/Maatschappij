import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { SidebarApp } from "@/pages/layout/SidebarApp";
import { Stedelijk2Header } from "../../Headers/Stedelijk/Stedelijk2Header";
import { Stedelijk2Inhoud } from "../SiteInhoud/Stedelijk/Stedelijk2Inhoud";
import { Helmet } from "react-helmet";
import { Footer } from "@/pages/layout/footer";



export function Stedelijk2() {
    return (
        <>
            <Helmet>
                <title>PvG - Vertrouwenspersoon op School</title>
                <link rel="icon" type="ico" href="/logo.ico" />
            </Helmet>
            <SidebarProvider>
                <SidebarApp />
                <SidebarInset>
                    <Stedelijk2Header />
                    <Stedelijk2Inhoud />
                    <Footer/>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}