import { useEffect, useState } from "react";
import { Get } from "../../Services/privateApiService";
import linkedinIcon from "../../assets/images/linkedin.ico"
import twitterIcon from "../../assets/images/twitter.ico"
import instagramIcon from "../../assets/images/instagram.ico"
import facebookIcon from "../../assets/images/facebook.ico"
import { Link } from "react-router-dom";


// var style = {
//     backgroundColor: "#F8F8F8",
//     borderTop: "1px solid #E7E7E7",
//     textAlign: "center",
//     padding: "20px",
//     position: "relative",
//     left: "0",
//     bottom: "0",
//     height: "60px",
//     width: "100%",
// }
//
// var phantom = {
//     display: 'block',
//     padding: '20px',
//     height: '60px',
//     width: '100%',
// }

const Footer = () => {

    const [name, setName] = useState("");
    const [logo, setLogo] = useState("");
    const [facebook_url, setFacebook_url] = useState("");
    const [linkedin_url, setLinkedin_url] = useState("");
    const [instagram_url, setInstagram_url] = useState("");
    const [twitter_url, setTwitter_url] = useState("");

    const getInfoFooter = () => {
        Get("organization").then(r => {
            const {data} = r
            const {
                name,
                logo,
                facebook_url,
                linkedin_url,
                instagram_url,
                twitter_url
            } = data;
            setName(name)
            setLogo(logo)
            setFacebook_url(facebook_url)
            setLinkedin_url(linkedin_url)
            setInstagram_url(instagram_url)
            setTwitter_url(twitter_url)
        })
    }


    useEffect(() => {
        getInfoFooter()
    }, []);


    return (
        <div className="footer">
            <div/>
            <div className="footer__grid">
                <div className="footer__flex">
                    <Link to={ "/" } >
                        <div className="footer__grid__hide">{ name }</div>
                        <img src={ logo } alt="logo_footer"/>
                    </Link>
                </div>
                <div className="footer__flex footer__grid__hide">
                    <Link to={ '/actividades' }>Actividades </Link>
                    <Link to={ '/school-campaign' }> Campaña Colegio</Link>
                    <Link to={ '/toys-campaign' }> Campaña Juguetes</Link>
                    <Link to={ '/contacto' }> Contacto</Link>
                    <Link to={ '/about' }> Nosotros</Link>
                </div>
                <div className="footer__flex__icons">
                    <div>
                        <a href={ `https://${ facebook_url }` } target="_blank">
                            <span className="footer__grid__hide">Facebook</span>
                            <img src={ facebookIcon } alt="facebookIcon" className="footer__icon"/>
                        </a>
                    </div>
                    <div>
                        <a href={ `https://${ linkedin_url }` } target="_blank">
                            <span className="footer__grid__hide">LinkedIn</span>
                            <img src={ linkedinIcon } alt="linkedinIcon" className="footer__icon"/>
                        </a>
                    </div>
                    <div>
                        <a href={ `https://${ instagram_url }` } target="_blank">
                            <span className="footer__grid__hide">Instagram</span>
                            <img src={ instagramIcon } alt="instagramIcon" className="footer__icon"/>
                        </a>
                    </div>
                    <div>
                        <a href={ `https://${ twitter_url }` } target="_blank">
                            <span className="footer__grid__hide">Twitter</span>
                            <img src={ twitterIcon } alt="twitterIcon" className="footer__icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
