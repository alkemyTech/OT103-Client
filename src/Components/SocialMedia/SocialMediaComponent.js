import React from "react";
import {
  LinkedinCompanyProfile,
  LinkedinFollowCompany,
  TwitterButton,
  TwitterTweet,
} from "react-social-plugins";

export const SocialMediaComponent = () => {
  return (
    <div>
      <h1>Redes</h1>
      <div className="about__widget-twitter">
        <TwitterTweet
          align="left"
          coversation="none"
          tweetId="36643247"
          theme="light"
          width={325}
        />
        <TwitterButton
          target="@somosmas"
          text="Somos cada vez más!"
          type="Share"
        />
      </div>
      <div className="about__widget-linkedin">
        <LinkedinCompanyProfile
          lang="en_US"
          companyId={123123123}
          format="inline" // Or "hover"
          text="Somos Más" // text to show in "hover" format
        />
        <LinkedinFollowCompany
          companyId={12312312}
          counter="top" // Or "right"
          lang="en_US"
        />
      </div>
    </div>
  );
};
