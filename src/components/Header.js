import Logo from "../assets/images/logo.png"

export const Header = () => {
  return (
    <div>
      <img className="logo" src={Logo} alt="Logo" />
    </div>
  )
}

export default Header;
