import { Link } from "react-router-dom";

const HomeCards = ({title, image}) => {

    return (
        <div className="card m-2 text-center" style={ {width: "18rem "} }>
            <h5 className="card-title">{ title }</h5>
            <div>
                <img src={ image } className="card-img-top" alt="image"/>
            </div>
            <div className="card-body">
                <Link to={"/"} className="btn btn-primary">Ir</Link>
            </div>

        </div>
    )
}
export default HomeCards;




