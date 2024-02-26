import Card from './Card';
import './Work.css';
import meraki from './media/meraki.png'
import tunietgames from './media/tuniet-games.png'
import nobelnest from './media/nobelnest.png'
import gymapp from './media/gymapp.png'
import architecture from './media/architecture.png'
import pomodoro from './media/pomodoro.png'
import reacti from './media/react.svg'
import htmli from './media/html.svg'
import cssi from './media/css.svg'

function Work() {
  return (
    <div className="section Work">
      <div className='section-header'>
        <h1>Selected Work</h1>
        <p>This is a selection of my most recent work</p>
      </div>
        
        <div className="cards">
          <Card img={meraki} title={"MERAKI"} desc={"Meraki is a fictional clothing ecommerce"} roles={"Frontend Dev & UX/UI Designer"} tags={[htmli, cssi, reacti]} disable=""/>
          <Card img={tunietgames} title={"TUNIET GAMES"} desc={"Tuniet games is a personal website where I publish small web games"} roles={"Frontend Dev & UX/UI Designer"} tags={[htmli, cssi, reacti]} disable=""/>
          <Card img={nobelnest} title={"NOBEL NEST"} desc={"Nobel Nest is a fictional hotel website"} roles={"Frontend Dev & UX/UI Designer"} tags={[htmli, cssi, reacti]} disable=""/>
          <Card img={architecture} title={"WIP"} desc={"XXXXX is a architecture studio website"}  roles={"Frontend Dev & UX/UI Designer"} tags={[htmli]} disable={"disable"}/>
          <Card img={gymapp} title={"WIP"} desc={"XXXXX is a web app to help people keep track of their progress in the gym"} roles={"Frontend Dev & UX/UI Designer"} tags={[htmli]} disable={"disable"}/>
          <Card img={pomodoro} title={"WIP"} desc={"XXXXX is a web app to help people maintain focus during long sesions of study or coding, with a all in one place tool"} roles={"Frontend Dev & UX/UI Designer"} tags={[htmli]} disable={"disable"}/>
        </div>
    </div>
    );
}

export default Work;