import locationIcon from './icons/location-icon.svg'
import heartIcon from './icons/heart-icon.svg'
import menuIcon from './icons/menu.svg'
import './Summary.scss'
import { useState } from 'react'

const Summary = ({ summary }) => {
  const [showMenu, setShowMenu] = useState(false)

  const city = summary?.work_city[0]?.display_name

  return (
    <div className="summary" onClick={() => setShowMenu(false)}>
      <div className="about">
        <h2 className="position">
          {summary?.desiredposition[0]?.position}
        </h2>
        <div className="name-location">
          <span className="name">
            {summary.first_name || 'Дмитрий'}, 23 года
          </span>
          {city ? (
            <>
              <img
                src={locationIcon}
                alt="location icon"
                className="location-icon"
              />
              {city}
            </>
          ) : null}
        </div>

        {summary.work_experience_exist ? (
          <div className="job-experianse">
            {summary.workexperience.map((work) => (
              <div key={work.id} className="job-experianse-item">
                {work.position} {work.company_name} -{' '}
                {work.date_to.split('-')[0] -
                  work.date_from.split('-')[0]}{' '}
                лет
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="info" onClick={(e) => e.stopPropagation()}>
        <img src={heartIcon} alt="heart icon" />
        <img
          src={menuIcon}
          alt="menu icon"
          className="menu-icon"
          onClick={() => setShowMenu(!showMenu)}
        />

        {showMenu ? (
          <div className="menu">
            <div
              className="complain"
              onClick={() => setShowMenu(false)}
            >
              Пожаловаться
            </div>
            <div className="hide" onClick={() => setShowMenu(false)}>
              Скрыть кандидата
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Summary
