import { NavLink } from 'react-router-dom'
import searchIcon from './icons/search.svg'
import locationIcon from './icons/location.svg'
import './Promo.scss'

const Promo = ({ withText }) => {
  return (
    <div className="promo">
      {withText ? (
        <>
          <h2>сайт по поиску работы №1</h2>
          <h1>
            Please enter the <br /> vacancy and the city
          </h1>
        </>
      ) : null}

      <form>
        <div className="input-wrapper desktop">
          <input
            type="text"
            placeholder="На какую должность вы ищете кандидата?"
            className="vacancy-input"
          />

          <img src={searchIcon} alt="search icon" />
        </div>

        <div className="input-wrapper mobile">
          <input
            type="text"
            placeholder="Поиск"
            className="vacancy-input"
          />

          <img src={searchIcon} alt="search icon" />
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Город"
            className="city-input"
          />

          <img src={locationIcon} alt="locationIcon" />
        </div>

        <NavLink
          to="/find-candidates"
          className={withText ? '' : 'colored'}
        >
          Найти кандидатов
        </NavLink>
      </form>
    </div>
  )
}

export default Promo
