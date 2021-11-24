export const ThanksGreet = ({ title = "¡Muchas gracias por tu donacion!" }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1> {title} </h1>
    </div>
  );
};
