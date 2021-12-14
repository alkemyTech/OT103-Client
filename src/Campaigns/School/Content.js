import React from "react";
import Countdown from "react-countdown";

const Content = ({ event = 20000 * 4324 }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <h3>
          <strong className="highschool__content-countdown-text fs-2">
            Finalizado!
          </strong>
        </h3>
      );
    } else {
      return (
        <strong className="highschool__content-countdown-text fs-4">
          Te quedan {days}d:{hours}h:{minutes}m para participar!
        </strong>
      );
    }
  };
  return (
    <div className="highschool__content-">
      <div className="highschool__content-box mt-5">
        <h1>13-12-2021 / 13:15hrs Calle 123, Localidad, Provincia</h1>
        <hr />
        <div className="highschool__content-countdown">
          <img
            className="highschool__content-img countdown-img-left"
            src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
            alt="img-campaign"
          />
          <div className="highschool__content-countdown-container">
            <Countdown
              date={Date.now() + event}
              renderer={renderer}
              daysInHours={false}
            />
          </div>

          <img
            className="highschool__content-img countdown-img-right "
            src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
            alt="img-campaign"
          />
        </div>
        <p className="highschool__content-description">
              Zúmbale mambo pa que mis gatas prendan los motores Zúmbale mambo
              pa que mis gatas prendan los motores Zúmbale mambo pa que mis
              gatas prendan los motores Que se preparen que lo que viene es pa
              que le den (¡duro!)
            </p>
        <div className="highschool__content-img-container">
          <img
            className="highschool__content-img countdown-img-left"
            src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
            alt="img-campaign"
          />
          <img
            className="highschool__content-img"
            src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
            alt="img-campaign"
          />
          <img
            className="highschool__content-img countdown-img-right"
            src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
            alt="img-campaign"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
