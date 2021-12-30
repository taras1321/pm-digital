import phone from './img/phone.png'
import image from './img/image.png'
import appStore from './img/app-store.svg'
import googlePlay from './img/google-play.svg'
import appStoreSmall from './img/app-store-small.svg'
import googlePlaySmall from './img/google-play-small.svg'
import './Download.scss'

const Download = () => {
  return (
    <div className="download">
      <div className="container">
        <div className="wrapper">
          <img src={phone} alt="phone" className="phone" />

          <div className="download_inner">
            <img src={image} alt="phone" className="image" />
            <div>
              <div className="line" />
              <h2>
                Скачивайте <br /> приложение
              </h2>
              <div className="text">
                Работодатель смогут найти вас и предложить отличную
                работу.
              </div>
            </div>
            <div className="icons desktop">
              <img src={appStore} alt="app store" />
              <img src={googlePlay} alt="google play" />
            </div>
            <div className="icons mobile">
              <img src={appStoreSmall} alt="app store" />
              <img src={googlePlaySmall} alt="google play" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download
