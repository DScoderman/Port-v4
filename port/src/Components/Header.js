import { Link } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";

const HeaderComponent = () => {
  return (
    <header>
      <nav>
        <Tabs value={false} variant="fullWidth" sx={{ backgroundColor: '#31b0ae' }}>
          <Tab
            label="Home"
            component={Link}
            to="/"
            sx={{ color: 'white', '&.Mui-selected': { color: 'white' } }}
          />
          <Tab
            label="Projects"
            component={Link}
            to="/Projects"
            sx={{ color: 'white', '&.Mui-selected': { color: 'white' } }}
          />
          <Tab
            label="About Me"
            component={Link}
            to="/MeInfo"
            sx={{ color: 'white', '&.Mui-selected': { color: 'white' } }}
          />
          <Tab
            label="Contact Me"
            component={Link}
            to="/ContactMe"
            sx={{ color: 'white', '&.Mui-selected': { color: 'white' } }}
          />
          <Tab
            label="Resume"
            component={Link}
            to="/Resume"
            sx={{ color: 'white', '&.Mui-selected': { color: 'white' } }}
          />
        </Tabs>
      </nav>
    </header>
  );
};

export default HeaderComponent;
