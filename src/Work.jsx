import Card from './Card';
import './Work.css';
import meraki from './media/meraki.webp'
import tunietgames from './media/tuniet-games.webp'
import nobelnest from './media/nobelnest.webp'
import gymapp from './media/gymapp.webp'
import architecture from './media/architecture.webp'
import pomodoro from './media/pomodoro.webp'
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
          <Card img={meraki} title={"MERAKI"} desc={"Meraki is a fictional clothing ecommerce"} roles={"Frontend Dev & UX/UI Designer"} tags={[htmli, cssi, reacti]} disable="" url="merakishop.netlify.app"/>
          <Card img={tunietgames} title={"TUNIET GAMES"} desc={"Tuniet games is a personal website where I publish small web games"} roles={"Frontend Dev & UX/UI Designer"} tags={[htmli, cssi, reacti]} disable="" url=""/>
          <Card img={nobelnest} title={"NOBEL NEST"} desc={"Nobel Nest is a fictional hotel website"} roles={"Frontend Dev & UX/UI Designer"} tags={[htmli, cssi, reacti]} disable="" url=""/>
          <Card img={architecture} title={"WIP"} desc={"XXXXX is a architecture studio website"}  roles={"Frontend Dev & UX/UI Designer"} tags={[htmli]} disable={"disable"} url=""/>
          <Card img={gymapp} title={"WIP"} desc={"XXXXX is a web app to help people keep track of their progress in the gym"} roles={"Frontend Dev & UX/UI Designer"} tags={[htmli]} disable={"disable"} url=""/>
          <Card img={pomodoro} title={"WIP"} desc={"XXXXX is a web app to help people maintain focus during long sesions of study or coding, with a all in one place tool"} roles={"Frontend Dev & UX/UI Designer"} tags={[htmli]} disable={"disable"} url=""/>
        </div>
    </div>
    );
}

export default Work;
