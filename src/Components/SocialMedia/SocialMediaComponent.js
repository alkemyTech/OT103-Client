import { useEffect } from "react";
import {
  // LinkedinCompanyProfile,
  TwitterTweet
} from 'react-social-plugins';

const mockTweets = ['1450535690199085058', '1440383594615042052', '1389666789865541632'];

export const SocialMediaComponent = ({ tweets = mockTweets }) => {
    useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <hr />
      <h1>Últimos tweets</h1>
      <div
        className="badge-base LI-profile-badge"
        data-locale="es_ES" data-size="medium"
        ata-theme="dark"
        data-type="VERTICAL"
        data-vanity="corporación-somos-más-68737437"
        data-version="v1">
        <a
          className="badge-base__link LI-simple-link"
          href="https://co.linkedin.com/in/corporaci%C3%B3n-somos-m%C3%A1s-68737437?trk=profile-badge">
          Corporación Somos Más
        </a>
      </div>
      <div className="about__widget-twitter">
        {tweets.map((tweet, index) => {
          return (
            <TwitterTweet
              key={index}
              align="center"
              coversation="none"
              tweetId={tweet}
              theme="light"
              width={500}
            />)
        })}
      </div>

    </div>
  );
};
