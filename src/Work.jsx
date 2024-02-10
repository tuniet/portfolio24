import { useState } from 'react';
import Card from './Card';
import './Work.css';

function Work() {
  const [selected, setSelected] = useState(1)

  function cardContent(){
    return(
      <div className='info'>
        <h4>CARD 1</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu ante vehicula, lobortis urna eu, maximus elit. Sed semper, enim sit amet aliquam euismod, lectus eros commodo neque, sed cursus erat augue vitae nisl.</p>
      </div>
    )
  }

  function handleChange(e){
    setSelected(e.target.value)
  }
  return (
    <div className="section Work">
        <h1 className='section-title'>Work</h1>
        <section className='cards'>
          <input type='radio' name='slide' id ="c1" value={1} checked onChange={handleChange} />
          <Card content={cardContent()} number={1}/>
          <input type='radio' name='slide' id ="c2" value={2} checked={selected === 2} onChange={handleChange} />
          <Card content={cardContent()} number={2}/>
          <input type='radio' name='slide' id ="c3" value={3} checked={selected === 3} onChange={handleChange} />
          <Card content={cardContent()} number={3}/>
          <input type='radio' name='slide' id ="c4" value={4} checked={selected === 4} onChange={handleChange} />
          <Card content={cardContent()} number={4}/>
        </section>
    </div>
  );
}

export default Work;