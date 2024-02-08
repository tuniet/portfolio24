import './Hero.css';
import React, {useState, useEffect} from 'react';


function Hero() {
  const [zoomin, setzoomin] = useState('120%')
  const [zoomout, setzoomout] = useState('150%')
  const [scrollPosition, setScrollPosition] = useState(0);
  const [titleopacity, settitleopacity] = useState(1)
  const [aboutopacity, setaboutopacity] = useState(0)
  const [aboutdistance, setaboutdistance] = useState('100px')
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setzoomin(120 + (scrollPosition / 70) + '%')
    setzoomout(110 + (scrollPosition / 20) + '%')
  }, [scrollPosition])

  useEffect(() => {
    if(scrollPosition < 100) settitleopacity(1)
    if(scrollPosition >= 100) settitleopacity(.66)
    if(scrollPosition >= 200) settitleopacity(.33)
    if(scrollPosition >= 300) settitleopacity(0)
    if(scrollPosition < 500) {setaboutopacity(0); setaboutdistance('80px')}
    if(scrollPosition >= 500) setaboutopacity(.25)
    if(scrollPosition >= 600) {setaboutopacity(.50); setaboutdistance('70px')}
    if(scrollPosition >= 700) {setaboutopacity(.75); setaboutdistance('60px')}
    if(scrollPosition >= 800) {setaboutopacity(1);setaboutdistance('50px')}
    if(scrollPosition >= 900) setaboutdistance('40px')
    if(scrollPosition >= 1000) setaboutdistance('30px')


    console.log(scrollPosition)
  }, [scrollPosition])

  return (
    <div className="section Hero">
      <div className='hero' style={{backgroundSize: zoomin}}>
        <div className='hero-front' style={{backgroundSize: zoomout}}></div>
        <div className='hero-title' style={{opacity: titleopacity}}>
          <h3>Full-stack web developer &nbsp; & designer</h3>
          <h1>TONI FDEZ</h1>
        </div>
        <div className='hero-about' style={{opacity: aboutopacity}}>
          <h2 style={{marginBottom: aboutdistance}}>About me</h2>
          <p>Hey there!, I'm Toni Fernandez, I was born in Ibiza and I'm currently based in Madrid. I've always had passion for both art & technology, so it was an obvious choice to become a full-stack web developer & designer.
            I thrive to learn new technologies & explore new design concepts. i'd love to work together, if u want just <a href='#contact'>let me know</a>
          </p>
        </div>
      </div>
      <div className='hero-content'>
        <h1 className='section-title'>Hero</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis eleifend varius. Morbi et odio nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque lorem dui, porta at lacus et, ultricies lacinia lorem. Sed eget facilisis nulla, id sodales justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc dignissim eget urna eu sodales.</p>
      </div>
    </div>
  );
}

export default Hero;