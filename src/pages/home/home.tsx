
import { SidebarInset, SidebarProvider, } from "@/components/ui/sidebar"
import { SidebarApp } from "../layout/SidebarApp"
import { SiteHeader } from "../Site/Headers/SiteHeader"
import { HomePage } from "../Site/SitePages/SiteInhoud/HomePage"
import { Helmet } from "react-helmet"
import { Footer } from "../layout/footer"


function Home() {

  return (
    <>
    <Helmet>
      <title>PvG - Home </title>
      <link rel="icon" type="ico" href="/logo2.ico"/>
    </Helmet>
      <SidebarProvider>
        <SidebarApp/>
        <SidebarInset>
        <SiteHeader/>
        <HomePage/>
        <Footer />
        </SidebarInset>
      </SidebarProvider>
        

    </>
  )
}

export default Home

