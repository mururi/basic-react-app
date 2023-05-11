import ListItem from "./ListItem";

function PetCard({ favSnacks, name, image }) {
  
  const favSnacksList = favSnacks.map(favSnack => <ListItem favSnack={favSnack}/>);

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h3>Favorite Snacks</h3>
      <ul>
        {favSnacksList}
      </ul>
    </div>
  )
}

export default PetCard