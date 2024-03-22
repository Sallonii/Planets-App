import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <h1 className="planet-heading">Planets</h1>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem eachPlanetDetails={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
