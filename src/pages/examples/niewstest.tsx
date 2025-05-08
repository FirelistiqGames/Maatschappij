import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"

const newsItems = [
    {
      title: "Partij voor Gezondheid Opgericht!",
      content:
        "Partij voor Gezondheid is opgericht! De partij zet zich in voor de gezondheid van Nederlanders. Gezondheid is geen luxe, het is een recht!",
      image: `${import.meta.env.BASE_URL}banner-light.png`,
      link: "/nieuws/opgericht",
    },
    {
      title: "Partij voor Gezondheid Opgericht2222!",
      content:
        "Partij voor Gezondheid is opgericht! De partij zet zich in voor de gezondheid van Nederlanders. Gezondheid is geen luxe, het is een recht!",
      image: `${import.meta.env.BASE_URL}banner-light.png`,
      link: "/nieuws/opgericht2222",
    },
    // Add more articles here...
  ]



export function NieuwsOverzicht() {
  return (
    <div className="flex flex-wrap justify-start gap-4 px-4">
      {newsItems.map((item, index) => (
        <div key={index} className="w-full sm:w-1/3 lg:w-1/3">
          <Link to={item.link} className="block hover:shadow-lg transition-shadow">
            <Card className="gap-2 cursor-pointer">
              <CardHeader>
                <img src={item.image} alt={item.title} className="rounded-md" />
                <CardTitle className="text-2xl text-red-700 font-bold">{item.title}</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.content}</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  )
}
