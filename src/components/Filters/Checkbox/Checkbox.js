import { useState } from 'react'
import fotoIcon from './icons/foto.svg'
import studentIcon from './icons/student.svg'
import './Checkbox.scss'

const Checkbox = ({ type, title }) => {
  const [checked, setChecked] = useState(false)

  return (
    <div
      className="checkbox"
      style={type === 'withoutMargin' ? { marginBottom: 0 } : null}
    >
      <label htmlFor="checkbox" onClick={(e) => e.preventDefault()}>
        {type === 'foto' ? (
          <img src={fotoIcon} alt="icon" />
        ) : type === 'student' ? (
          <img src={studentIcon} alt="icon" />
        ) : null}
        <span>{title}</span>
      </label>
      <input
        type="checkbox"
        id="checkbox"
        checked={checked}
        className={checked ? 'checked' : null}
        onChange={() => setChecked(!checked)}
      />
    </div>
  )
}

export default Checkbox
