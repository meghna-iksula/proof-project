import { useEffect, useState } from "react";
import IndividualArticle from "./IndividualArticle";
import { Link } from "react-router-dom";

function Article(props) {
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    fetch("./photos.json")
      .then((response) => response.json())
      .then((data) => {
        setDataSet(data);
      });
  }, []);

  return (
    <div className="w-full lg:max-w-[650px] h-[90vh] overflow-scroll">
      <Link to="/proof-project/article">
        {dataSet.map((data) => (
          <IndividualArticle
            key={data.id}
            title={data.title}
            date={data.date}
            image={data.url}
          />
        ))}
      </Link>
    </div>
  );
}

export default Article;
