import './index.css'

const PlanetItem = props => {
  const {eachPlanetDetails} = props
  const {name, imageUrl, description} = eachPlanetDetails
  return (
    <li className="planet-li-container">
      <img src={imageUrl} alt={name} className="planet-image" />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

export default PlanetItem
