import './Filters.scss'
import Checkbox from './Checkbox/Checkbox'
import Range from './Range/Range '
import Gender from './Gender/Gender'
import SecondCheckbox from './SecondCheckbox/SecondCheckbox'

const Filters = () => {
  const workExperiance = [
    { title: 'Без опыта', count: 603 },
    { title: 'До 1 года', count: 603 },
    { title: 'От 1 до 2 лет', count: 603 },
    { title: 'От 2 до 5 лет', count: 603 },
    { title: 'От 5 до 10 лет', count: 603 },
    { title: 'Более 10 лет', count: 603 },
  ]

  const employmentType = [
    { title: 'Полная занятость', count: 34567 },
    { title: 'Неполная занятость', count: 876 },
    { title: 'Удаленная работа', count: 1234 },
  ]

  const education = [
    { title: 'Высшее', count: 34567 },
    { title: 'Неоконченное высшее', count: 876 },
    { title: 'Средне-специальное', count: 1234 },
    { title: 'Среднее', count: 8764 },
  ]

  const languages = [
    { title: 'Английский', count: 603 },
    { title: 'Русский', count: 603 },
    { title: 'Украинский', count: 603 },
    { title: 'Немецкий', count: 603 },
    { title: 'Польский', count: 603 },
    { title: 'Испанский', count: 603 },
  ]

  return (
    <div className="filters">
      <h2>Фильтры</h2>

      <div className="fillters-inner">
        <Checkbox type="foto" title="Только с фотографией" />
        <Range
          title="Возраст"
          type="age"
          withCheckbox={false}
          min={0}
          max={100}
          step={1}
          initialMin={20}
          initialMax={60}
        />
        <Gender />
        <Range
          title="Желаемая зарплата в гривне"
          type="salery"
          withCheckbox={true}
          min={10000}
          max={100000}
          step={100}
          initialMin={20000}
          initialMax={80000}
        />

        <div className="work-experiance">
          <h3>Опыт работы</h3>

          {workExperiance.map((item, index) => (
            <SecondCheckbox
              key={index}
              title={item.title}
              count={item.count}
            />
          ))}
        </div>

        <Checkbox type="students" title="Только студенты" />

        <div className="languages">
          <h3>Владение языками</h3>

          {languages.map((item, index) => (
            <SecondCheckbox
              key={index}
              title={item.title}
              count={item.count}
            />
          ))}
        </div>

        <div className="employment-type">
          <h3>Опыт работы</h3>

          {employmentType.map((item, index) => (
            <SecondCheckbox
              key={index}
              title={item.title}
              count={item.count}
            />
          ))}
        </div>

        <div className="education">
          <h3>Образование</h3>

          {education.map((item, index) => (
            <SecondCheckbox
              key={index}
              title={item.title}
              count={item.count}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Filters
