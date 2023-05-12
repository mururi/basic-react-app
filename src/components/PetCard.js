import ListItem from "./ListItem";
import Button from "./Button";

function PetCard({ favSnacks, name, image = "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg", isAdopted}) {
  
  const favSnacksList = favSnacks.map(favSnack => <ListItem favSnack={favSnack} key={favSnack}/>);

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <Button buttonName="Adopt"/>
      <h3>Favorite Snacks</h3>
      <ul>
        {favSnacksList}
      </ul>
    </div>
  )
}

export default PetCard