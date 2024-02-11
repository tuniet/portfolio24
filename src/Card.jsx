import './Card.css';
function Card(props) {

  return (
    <div className='card'>
      <img src={props.img} alt='' />
      <div className="info">
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
        <div className='role'>
          
        </div>
        <div className='tags'>

        </div>
      </div>
    </div>
  );
}

export default Card;
