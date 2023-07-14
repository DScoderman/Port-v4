import { Link } from "react-router-dom"

const HeaderComponent = () => {
    return (
        <header> <nav>
           
            <ul className="nav nav-pills">
  <li role="presentation" className="active"><Link to="/">Home</Link></li>
  <li role="presentation"><Link to="/Projects">Projects</Link></li>
  <li role="presentation"><Link to="/MeInfo">about Me</Link></li>
  <li role="presentation"><Link to="/ContactMe">Contact Me</Link></li>
  <li role="presentation"><Link to="/Resume">Resume</Link></li>
</ul>
           
        </nav></header>
    );
}

export default HeaderComponent