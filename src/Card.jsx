import './Card.css';
import img from './media/meraki.webp'

function Card(props) {
  function Content(){
    return props.content
  }
  let id = 'c' + props.number

  return (
    <div className='cards'>
      <label htmlFor={id} className='card' style={{}}>
        <div className='row'>
          <div className='icon'>{props.number}</div>
          <Content />
        </div>
      </label>
    </div>
  );
}

export default Card;
