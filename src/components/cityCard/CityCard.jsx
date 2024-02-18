const Card = ({ data }) => {
  const { name, image, date } = data;
  return (
    <>
      {name}
      {image}
    </>
  );
};

export default Card;
