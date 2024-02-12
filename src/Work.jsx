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
      <div className='section-header'>
        <h1>Selected Work</h1>
        <p>This is a selection of my most recent work</p>
      </div>
        
        <div className="cards">
          <Card img={meraki} title={"MERAKI"} desc={"Meraki is a fictional but fully working clothing ecommerce"} roles={"Full-stack & UX/UI Designer"} tags={[reacti]}/>
          <Card img={tunietgames} title={"TUNIET GAMES"} desc={"Tuniet games is a personal website where I publish small web games I build to keep learning new stuff"} roles={"Full-stack & UX/UI Designer"} tags={[reacti]}/>
          <Card img={nobelnest} title={"NOBEL NEST"} desc={"Nobel Nest is a fictional & functional hotel website"} roles={"Frontend Dev & UX/UI Designer"} tags={[reacti]}/>
          <Card img={architecture} title={"WIP"} desc={"XXXXX is a architecture studio website"}  roles={"Frontend Dev & UX/UI Designer"} tags={[reacti]}/>
          <Card img={gymapp} title={"WIP"} desc={"XXXXX is a web app to help people keep track of their progress in the gym"} roles={"Full-stack & UX/UI Designer"} tags={[reacti]}/>
          <Card img={pomodoro} title={"WIP"} desc={"XXXXX is a web app to help people maintain focus during long sesions of study or coding, with a all in one place tool"} roles={"Full-stack & UX/UI Designer"} tags={[reacti]}/>
          </div>
        
    </div>
    );
}

export default Work;