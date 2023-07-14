import { DiGithubBadge } from "react-icons/di";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footerIcons">
        <a href="https://github.com/DScoderman">
          <DiGithubBadge size={25}/>
        </a>
        <a href="https://www.linkedin.com/in/drew-senour/">
          <BiLogoLinkedinSquare size={25}/>
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
