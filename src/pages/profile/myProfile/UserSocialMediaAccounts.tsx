import React from 'react'
import UserSocialMediaAccountResponse from './SocialMediaAccountResponse';

const UserSocialMediaAccounts = ( {socialMediaAccounts}:{socialMediaAccounts : UserSocialMediaAccountResponse[]}) => {  
   
    return (
      <div className="col-12">
        <div className="cv-box cv-padding">
          <div className="cv-box-header">
            <span>Medya Hesaplarım</span>
            <hr />
          </div>
          <div className="cv-social-media"  style={{ display: 'flex' }}>
            {socialMediaAccounts.map((account, index) => (
              <a key={account.id} className={`cv-${account.socialMedia}`} target="_blank" href={account.socialMediaUrl}
              style={{ marginRight: index !== socialMediaAccounts.length - 1 ? '5px' : '0' }}

              ></a>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default UserSocialMediaAccounts; 