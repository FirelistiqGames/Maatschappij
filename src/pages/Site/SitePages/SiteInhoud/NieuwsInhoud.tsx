import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { newsItems } from "@/components/ui/data/newsItems";

import { Link } from "react-router-dom";




export function NieuwsOverzicht() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {newsItems.map((item, index) => (
                <Link to={item.link} key={index} className="block">
                    <Card className="rounded-xl overflow-hidden transition-shadow hover:shadow-lg">
                        <CardHeader>
                            <img src={item.image} alt={item.title} className="rounded-t-xl" />
                            <CardTitle className="text-2xl text-red-700 font-bold">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{item.content}</p>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    )
}
