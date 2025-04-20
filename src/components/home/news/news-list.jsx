"use client";
import NewsItem from "./news-item";

function NewsList({ data }) {
  return (
    <div className="news-cards grid grid-cols-1 md:grid-cols-2 gap-8">
      {data.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default NewsList;
