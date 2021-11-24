export const DonationsGreet = ({
  title = "Se parte del cambio para las familias de La Cava",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: 'center'
      }}
    >
      <h1> {title} </h1>
        <a
          href="..."
          style={{
            backgroundColor: "#009ee3",
            padding: "10px 20px",
            borderRadius: "3px",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          Mercado Pago
        </a>
    </div>
  );
};
