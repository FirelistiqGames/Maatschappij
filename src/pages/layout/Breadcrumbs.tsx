import { useLocation, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // adjust if custom components

const routeConfig: Record<string, string> = {
  "/home": "Home",
  "/over-ons": "Over Ons",
  "/settings": "Settings",
  "/preventieve-gezondheidszorg": "Preventieve Gezondheidszorg",
  "/mentale-gezondheid": "Mentale Gezondheid",
  "/subsidies-medische-studies": "Subsidies Medische Studies",
  "/Stedelijk1": "Stedelijk1",
  "/Stedelijk2": "Stedelijk2",
  "/Stedelijk3": "Stedelijk3",
  "/nieuws": "Nieuws",

};

export const Breadcrumbs = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link to="/">Home</Link>
          
        </BreadcrumbLink>
        <BreadcrumbSeparator>
        </BreadcrumbSeparator>
      </BreadcrumbItem>

      {segments.map((segment, index) => {
        const path = "/" + segments.slice(0, index + 1).join("/");
        const isLast = index === segments.length - 1;
        const label = routeConfig[segment] || segment;

        return (
          <BreadcrumbItem key={path}>
            {isLast ? (
              <span className="text-muted-foreground">{label}</span>
            ) : (
              <>
                <BreadcrumbLink asChild>
                  <Link to={path}>{label}</Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator>
                
                </BreadcrumbSeparator>
              </>
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};
