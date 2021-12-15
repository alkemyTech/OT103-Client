import React from "react";
import {
  LinkedinCompanyProfile,
  TwitterTweet
} from 'react-social-plugins';

const mockTweets = ['1450535690199085058', '1440383594615042052', '1389666789865541632'];

export const SocialMediaComponent = ({ tweets = mockTweets }) => {
  return (
    <div>
      <hr />
      <h1>Últimos tweets</h1>
      <div className="about__widget-linkedin">
        <LinkedinCompanyProfile
          lang="es_AR"
          companyId={80912134}
          format="inline" // Or "hover"
          text="Somos Más" // text to show in "hover" format
        />

      </div>
      <div className="about__widget-twitter">
        {tweets.map((tweet, id) => {
          return (
            <TwitterTweet
              key={id}
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
