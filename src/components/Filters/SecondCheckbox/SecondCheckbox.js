import { useState } from 'react'
import doneIcon from './icons/done.svg'
import './SecondCheckbox.scss'

const SecondCheckbox = ({ title, count }) => {
  const [checked, setChecked] = useState(false)

  return (
    <div className="second-ceckbox">
      <div>
        <input
          type="checkbox"
          id="checkbox"
          checked={checked}
          className={checked ? 'checked' : null}
          onChange={() => setChecked(!checked)}
        />

        <img
          src={doneIcon}
          alt="done icon"
          onClick={() => setChecked(!checked)}
        />

        <label htmlFor="checkbox" onClick={(e) => e.preventDefault()}>
          {title}
        </label>
      </div>

      <div className="count">{count}</div>
    </div>
  )
}

export default SecondCheckbox
