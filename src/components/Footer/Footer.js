import twitterIcon from './icons/twitter.svg'
import linkedinIcon from './icons/linkedin.svg'
import facebookIcon from './icons/facebook.svg'
import instagramIcon from './icons/instagram.svg'
import youtubeIcon from './icons/youtube.svg'
import whatsappBusinessIcon from './icons/whatsapp-business.svg'
import googlePlayIcon from './icons/google-play.svg'
import appStoreIcon from './icons/app-store.svg'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="cols">
          <div className="col">
            <div className="col-header">Job Seekers</div>
            <div className="col-item">Search Jobs</div>
            <div className="col-item">Create Resume</div>
            <div className="col-item">Job Allert</div>
            <div className="col-item">Advice to Job Seeker</div>
          </div>

          <div className="col">
            <div className="col-header">employer</div>
            <div className="col-item">Post a Job</div>
            <div className="col-item">Search Resume</div>
            <div className="col-item">Support</div>
            <div className="col-item">Advice to Employer</div>
          </div>

          <div className="col">
            <div className="col-header">Job meteor</div>
            <div className="col-item">About Us</div>
            <div className="col-item">Blog</div>
            <div className="col-item">FAQ</div>
          </div>

          <div className="col">
            <div className="col-header">Partner with Us</div>
            <div className="col-item">Advertising on the website</div>
            <div className="col-item">Affiliate Program</div>
            <div className="col-item">Contact Us</div>
          </div>
        </div>

        <div className="social-medias">
          <img src={twitterIcon} alt="twitter icon" />
          <img src={linkedinIcon} alt="linkedin icon" />
          <img src={facebookIcon} alt="facebook icon" />
          <img src={instagramIcon} alt="instagram icon" />
          <img src={youtubeIcon} alt="youtube icon" />
          <img
            src={whatsappBusinessIcon}
            alt="whatsapp business icon"
          />
        </div>

        <div className="mobile-solical-medias">
          <img src={googlePlayIcon} alt="google play" />
          <img src={appStoreIcon} alt="app store" />
        </div>

        <div className="policy">
          <span>Privacy Policy</span>
          <span className="v-line">|</span>
          <span>© 2021 Job Meteor. All rights reserved</span>
          <span className="v-line">|</span>
          <span>Terms of Use</span>
        </div>

        <div className="mobile-pilicy">
          <div>
            <span>Privacy Policy</span>
            <span className="v-line">|</span>
            <span>Terms of Use</span>
          </div>

          <span>© 2021 Job Meteor. All rights reserved</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
