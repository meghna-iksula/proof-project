import { useEffect, useState } from "react";
import IndividualArticle from "./IndividualArticle";

function Article(props) {
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    fetchArticlesHandler();
  });

  async function fetchArticlesHandler() {
    const response = await fetch("/photos.json");
    const data = await response.json();
    console.log(data);
    setDataSet(data);
  }

  return (
    <div className="w-full lg:max-w-[650px] h-[90vh] overflow-scroll">
      {dataSet.map((data) => (
        <IndividualArticle
          key={data.id}
          title={data.title}
          date={data.date}
          image={data.url}
        />
      ))}
    </div>
  );
}

export default Article;
