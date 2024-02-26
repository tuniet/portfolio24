import './Card.css';
function Card(props) {

  return (
    <div className={'card ' + props.disable}>
      <img src={props.img} alt='' />
      <div className='card-front'></div>
      <div className="info">
        <div className='top'>
          <h4>{props.title}</h4>
          <span className='role'>{props.roles}</span>
        </div>
        <div className='tags'>
          {props.tags.map((t, i) =>{
            return <img key={i} className='tag-icon' src={t} alt='' />
          })}
        </div>
        <div className="desc">
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
