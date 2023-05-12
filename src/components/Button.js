function Button({buttonIcon = "🐕", buttonName}) {
  return (
    <button>
      <span role="img">{buttonIcon}</span>
      {buttonName}
    </button>
  );
}

export default Button;