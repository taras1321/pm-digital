import Blog from '../../components/Blog/Blog'
import Download from '../../components/Download/Download'
import Header from '../../components/Header/Header'
import PostVacancy from '../../components/PostVacancy/PostVacancy'
import Promo from '../../components/Promo/Promo'
import Vacancies from '../../components/Vacancies/Vacancies'
import Chose from '../../components/Сhose/Сhose'

const Home = () => {
  return (
    <>
      <Header bgColor="black" />
      <Promo withText={true} />
      <div className="container">
        <Vacancies />
        <Chose />
      </div>
      <PostVacancy />
      <div className="container">
        <Blog />
      </div>
      <Download />
    </>
  )
}

export default Home
