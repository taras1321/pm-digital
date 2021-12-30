import Slider from 'react-slick'
import image from './img/imge.jpg'
import './Blog.scss'

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }

  return (
    <div className="blog">
      <div className="line" />
      <div className="block">
        <h2>Блог</h2>
        <div className="all-articles">All Articles</div>
      </div>

      <div className="slider">
        <Slider {...settings}>
          <div>
            <div className="slider-item">
              <div className="item">
                <img src={image} alt="laptop" />
                <div className="text">
                  Advice to job seekers
                  <div className="date">18.04.2021</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slider-item">
              <div className="item">
                <img src={image} alt="laptop" />
                <div className="text">
                  Advice to job seekers
                  <div className="date">18.04.2021</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slider-item">
              <div className="item">
                <img src={image} alt="laptop" />
                <div className="text">
                  Advice to job seekers
                  <div className="date">18.04.2021</div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Blog
