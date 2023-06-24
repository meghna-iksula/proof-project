function IndividualArticle(props) {
  return (
    <div>
      <p>{props.title}</p>
      <img src={props.image}></img>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
        reprehenderit amet magnam quos alias, iusto qui fuga ullam quidem
        incidunt.
      </p>
    </div>
  );
}

export default IndividualArticle;
