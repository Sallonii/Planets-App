import './index.css'

const PlanetItem = props => {
  const {eachPlanetDetails} = props
  const {imageUrl, name, description} = eachPlanetDetails

  return (
    <div data-testid="planets" className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
