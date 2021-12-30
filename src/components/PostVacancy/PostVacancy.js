import image from './img/image.svg'
import './PostVacancy.scss'

const PostVacancy = () => {
  return (
    <div className="post-vacancy">
      <div className="container">
        <div className="wrapper">
          <div className="block">
            <img src={image} alt="job post" />
            <div>
              <div className="line" />
              <h2>Разместить вакансию</h2>
              <div className="text">
                Работодатель смогут найти вас и предложить отличную
                работу.
              </div>
            </div>
          </div>

          <button>Разместить вакансию</button>
        </div>
      </div>
    </div>
  )
}

export default PostVacancy
