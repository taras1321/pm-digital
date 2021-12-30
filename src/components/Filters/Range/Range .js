import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useState } from 'react'
import Checkbox from '../Checkbox/Checkbox'
import './Range .scss'

export default function Range(props) {
  const {
    title,
    type,
    withCheckbox,
    min,
    max,
    step,
    initialMin,
    initialMax,
  } = props

  const [value, setValue] = useState([initialMin, initialMax])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="range">
      <h3>{title}</h3>

      <div className="range-item">
        <span className="text">от</span>

        <Box>
          <Slider
            value={value}
            onChange={handleChange}
            step={step}
            min={min}
            max={max}
          />
        </Box>

        <span className="text">{type === 'age' ? 'лет' : 'грн'}</span>
      </div>

      <div className="data">
        <div>
          <span>от</span>
          <div className="num">{value[0]}</div>
        </div>

        <div>
          <span>до</span>
        </div>

        <div>
          <div className="num">{value[1]}</div>
          <span>{type === 'age' ? 'лет' : 'грн'}</span>
        </div>
      </div>

      {withCheckbox ? (
        <Checkbox
          type="withoutMargin"
          title="Не показывать без зарплаты"
        />
      ) : null}
    </div>
  )
}
