import CartWidget from "./CartWidget";

const NavBar = () =>{
    return(
    <nav>
        <ul>
          <li className="lihome">
            <a href="Home">Home</a>
          </li>
          <li className="lihome">
            <a href="Bebidas">Bebidas</a>
          </li>
          <li className="lihome">
            <a href="Nosotros">Nosotros</a>
          </li>
          <li className="lihome">
            <CartWidget/>
          </li>
        </ul>
    </nav>
    );
}
export default NavBar;