// src/data/newsItems.ts

export interface NewsItem {
    title: string
    content: string
    image: string
    link: string
  }
  
  export const newsItems: NewsItem[] = [
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
    {
        title: "Partij voor Gezondheid Opgericht2222!",
        content:
          "Partij voor Gezondheid is opgericht! De partij zet zich in voor de gezondheid van Nederlanders. Gezondheid is geen luxe, het is een recht!",
        image: `${import.meta.env.BASE_URL}banner-light.png`,
        link: "/nieuws/opgericht3333",
      },
    {
        title: "Partij voor Gezondheid Opgericht2222!",
        content:
          "Partij voor Gezondheid is opgericht! De partij zet zich in voor de gezondheid van Nederlanders. Gezondheid is geen luxe, het is een recht!",
        image: `${import.meta.env.BASE_URL}banner-light.png`,
        link: "/nieuws/opgericht4444",
      },
    {
        title: "Partij voor Gezondheid Opgericht2222!",
        content:
          "Partij voor Gezondheid is opgericht! De partij zet zich in voor de gezondheid van Nederlanders. Gezondheid is geen luxe, het is een recht!",
        image: `${import.meta.env.BASE_URL}banner-light.png`,
        link: "/nieuws/opgericht455555444",
      },

  ]
  