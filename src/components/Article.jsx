import { useState } from "react";
import IndividualArticle from "./IndividualArticle";

function Article() {
  const [dataSet, setDataSet] = useState([]);

  async function fetchArticlesHandler() {
    const response = await fetch("/photos.json");
    const data = await response.json();
    console.log(data);
    setDataSet(data);
  }
  return (
    <div className="max-w-[500px] h-[90vh] overflow-scroll">
      <p onClick={fetchArticlesHandler}>hello</p>
      {dataSet.map((data) => (
        <IndividualArticle key={data.id} title={data.title} image={data.url} />
      ))}
    </div>
  );
}

export default Article;
