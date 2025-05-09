import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Footer } from "@/pages/layout/footer";
import { SidebarApp } from "@/pages/layout/SidebarApp";
import { Helmet } from "react-helmet";
import { OpgerichtHeader } from "@/pages/Site/Headers/OpgerichtHeader";
import { OpgerichtInhoud } from "./NieuwsArtikelen/OpgerichtInhoud";



export function Opgericht(){
    return(
        <>
        <Helmet>
        <title>PvG - Opgericht</title>
        <link rel="icon" type="ico" href="/logo2.ico"/>
      </Helmet>
        <SidebarProvider>
          <SidebarApp />
          <SidebarInset>
            <OpgerichtHeader />
            <OpgerichtInhoud />
            <Footer/>
          </SidebarInset>
        </SidebarProvider>
        </>
    )
}