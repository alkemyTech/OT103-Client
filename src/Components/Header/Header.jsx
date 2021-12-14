import Menu from '../../assets/images/menu.svg'
import '../Header/Header.scss'

const Header = () => {

    return (
        <>
            <div className="headerLogo">
                <button className="headerLogo__btn">
                    <img src={Menu} alt="Menu" className="headerLogo__img" />
                </button>
            </div>

        </>
    );
};
export default Header;