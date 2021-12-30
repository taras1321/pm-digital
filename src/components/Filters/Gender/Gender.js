import { useState } from 'react'
import './Gender.scss'

const Gender = () => {
  const [gender, setGender] = useState('any')

  return (
    <div className="gender">
      <h3>Пол</h3>

      <div className="items">
        <div
          className={gender === 'any' ? 'item active' : 'item'}
          onClick={() => setGender('any')}
        >
          Любой
        </div>
        <div
          className={gender === 'woman' ? 'item active' : 'item'}
          onClick={() => setGender('woman')}
        >
          Женщины
        </div>
        <div
          className={gender === 'man' ? 'item active' : 'item'}
          onClick={() => setGender('man')}
        >
          Мужчины
        </div>
      </div>
    </div>
  )
}

export default Gender
