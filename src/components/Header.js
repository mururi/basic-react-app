import Button from "./Button";

function Header(){
  return (
    <header>
      <h1>PetLand</h1>
      <nav>
        <Button buttonIcon="👤" buttonName="Login" />
      </nav>
    </header>
  );
}

export default Header;