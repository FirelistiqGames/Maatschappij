// src/pages/NieuwsOverzicht.tsx
import { newsItems } from "../../../../data/newsitems"
import { NewsCard } from "../../../../components/ui/NewsCard"

export function NieuwsOverzicht() {
  return (
    <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {newsItems.map((item, index) => (
        <NewsCard key={index} item={item} />
      ))}
    </div>
  )
}
