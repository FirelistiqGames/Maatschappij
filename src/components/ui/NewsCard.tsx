// src/components/NewsCard.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import type { NewsItem } from "../../data/newsitems"

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <div >
      <Link to={item.link} className="block ">
        <Card className="gap-2 cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <img src={item.image} alt={item.title} className="rounded-md" />
            <CardTitle className="text-2xl text-red-700 font-bold">{item.title}</CardTitle>
            <CardDescription />
          </CardHeader>
          <CardContent>
            <p>{item.content}</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
