import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Footer } from "@/pages/layout/footer";
import { SidebarApp } from "@/pages/layout/SidebarApp";
import { Helmet } from "react-helmet";
import { NieuwsHeader } from "../Headers/NieuwsHeader";
import { NieuwsOverzicht } from "./SiteInhoud/NieuwsInhoud";




export function Nieuws(){
    return(
        <>
        <Helmet>
        <title>PvG - Nieuws</title>
        <link rel="icon" type="ico" href="/logo2.ico"/>
      </Helmet>
        <SidebarProvider>
          <SidebarApp />
          <SidebarInset>
            <NieuwsHeader />
            <NieuwsOverzicht />
            <Footer/>
          </SidebarInset>
        </SidebarProvider>
        </>
    )
}