
const About = ({ image, title, button }) => {
  return (
    <div id="about">
        <div className="about-image">
            <img src={ image } alt="" />
        </div>
        <div className="about-text">
            <h2>{ title }</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ipsam enim error repellendus ullam nam possimus harum! Molestias libero voluptatum a? Velit quasi porro itaque possimus perferendis corporis hic sunt.</p>
            <button>{ button }</button>
        </div>
    </div>
  )
}

export default About