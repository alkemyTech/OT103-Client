import React from 'react';

<<<<<<< HEAD
const Content = ({ event = 20000 * 4324 }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <h3>
          <strong className="campaign__countdown-text fs-2">
            Finalizado!
          </strong>
        </h3>
      );
    } else {
      return (
        <strong className="campaign__countdown-text fs-4">
          Te quedan {days}d:{hours}h:{minutes}m: {seconds}s para participar!
        </strong>
      );
    }
  };
  return (
    <div className="campaign__container">
      <div className="campaign__box mt-5">
        <h1 className="m-auto">13-12-2021 / 13:15hrs Calle 123, Localidad, Provincia</h1>
        <hr />
        <div className="campaign__countdown">
          <img
            className="campaign__img countdown-img-left"
            src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
            alt="img-campaign"
          />
          <div className="campaign__countdown-container m-auto">
            <Countdown
              date={Date.now() + event}
              renderer={renderer}
              daysInHours={false}
            />
          </div>

          <img
            className="campaign__img countdown-img-right "
            src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
            alt="img-campaign"
          />
        </div>
        <p className="campaign__description">
              Zúmbale mambo pa que mis gatas prendan los motores Zúmbale mambo
              pa que mis gatas prendan los motores Zúmbale mambo pa que mis
              gatas prendan los motores Que se preparen que lo que viene es pa
              que le den (¡duro!)
            </p>
        <div className="campaign__img-container">
          <img
            className="campaign__img countdown-img-left"
            src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
            alt="img-campaign"
          />
          <img
            className="campaign__img"
            src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
            alt="img-campaign"
          />
          <img
            className="campaign__img countdown-img-right"
            src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
            alt="img-campaign"
          />
        </div>
      </div>
=======
const Content = () => {
  return (
    <div>
      
>>>>>>> c8c1abaaf0a0f594c492c0f6fa7640cfb782ffc7
    </div>
  );
}
 
export default Content;