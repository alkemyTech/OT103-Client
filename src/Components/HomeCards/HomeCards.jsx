import { Link } from "react-router-dom";
import "../../utils.scss"
import "./HomeCards.scss"

const HomeCards = ({title, image}) => {

    return (
        <div className="card__home-dashboard my-1r txt-center w-18r">
            <h5 className="card-title">{ title }</h5>
            <div>
                <img src={ image } className="card-img-top" alt="image"/>
            </div>
            <div className="card-body">
                <Link to={ "/" } className="card__btn" role="button">Ir</Link>
            </div>

        </div>
    )
}
export default HomeCards;




