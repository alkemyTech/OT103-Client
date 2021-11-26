import defaultImage from "../../assets/images/404.png";

export const Title = ({ title, image }) => {
  return (
    <div>
      <img src={(!image ? defaultImage : image.default) || image} alt="" />
      <h1 style={{ textAlign: "center" }}>{title}</h1>
    </div>
  );
};
