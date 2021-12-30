import { NavLink } from 'react-router-dom'
import globe from './icons/globe.svg'
import arrowBottom from './icons/arrow-bottom.svg'
import arrowRight from './icons/arrow-right.svg'
import './Header.scss'

const Header = ({ bgColor }) => {
  const backgroundColor = bgColor === 'black' ? '#251427' : ' #000046'

  return (
    <div className="header" style={{ backgroundColor }}>
      <div className="container">
        <div className="wrapper desktop">
          <nav>
            <NavLink to="/">Соискатель</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/" className="active-link">
              Работодатель
            </NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/">HR</NavLink>
          </nav>
          <div className="lang-login">
            <img src={globe} alt="globe" className="globe" />
            RU
            <img
              src={arrowBottom}
              alt="arrow bottom"
              className="arrow-bottom"
            />
            <span className="login">Войти</span>
          </div>
        </div>

        <div className="mobile">
          <NavLink to="/">Соискателю</NavLink>
          <NavLink to="/">
            <img src={arrowRight} alt="arrow rgith" />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
