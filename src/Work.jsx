import Card from './Card';
import './Work.css';
import meraki from './media/meraki.png'
import tunietgames from './media/tuniet-games.png'
import nobelnest from './media/nobelnest.png'
import gymapp from './media/gymapp.png'
import architecture from './media/architecture.png'
import pomodoro from './media/pomodoro.png'
import reacti from './media/react.svg'

function Work() {
  return (
    <div className="section Work">
        <h1 className='section-title'>Work</h1>
        <div className="cards">
          <Card img={meraki} title={"MERAKI"} desc={"Meraki is a fictional but fully working clothing ecommerce"} roles={["UX/UI Designer", "Backend Developer", "Frontend Developer"]} tags={[reacti]}/>
          <Card img={tunietgames} title={"TUNIET GAMES"} desc={"Tuniet games is a personal website where I publish small web games I build to keep learning new stuff"} roles={["UX/UI Designer", "Backend Developer", "Frontend Developer"]} tags={[reacti]}/>
          <Card img={nobelnest} title={"NOBEL NEST"} desc={"Nobel Nest is a fictional & functional hotel website"} roles={["UX/UI Designer", "Backend Developer", "Frontend Developer"]} tags={[reacti]}/>
          <Card img={architecture} title={"WIP"} desc={"XXXXX is a web app to help people keep track of their progress in the gym"} roles={["UX/UI Designer", "Backend Developer", "Frontend Developer"]} tags={[reacti]}/>
          <Card img={gymapp} title={"WIP"} desc={"XXXXX is a architecture studio website"} roles={["UX/UI Designer", "Backend Developer", "Frontend Developer"]} tags={[reacti]}/>
          <Card img={pomodoro} title={"WIP"} desc={"XXXXX is a web app to help people maintain focus during long sesions of study or code, with a all in one place tool"} roles={["UX/UI Designer", "Backend Developer", "Frontend Developer"]} tags={[reacti]}/>
          </div>
        
    </div>
  );
}

export default Work;