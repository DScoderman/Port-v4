import React from "react";
import { Box, Container } from '@mui/material';
import { IconContext } from "react-icons";
import {
  DiJsBadge,
  DiHtml5,
  DiCss3,
  DiGit,
  DiMongodb,
  DiBootstrap,
  DiHeroku,
  DiMysql,
  DiNodejs,
  DiVisualstudio,
  DiWindows,
  DiSqllite,
  DiReact,
} from "react-icons/di";

const ResumeList = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: "center",
        margin: '20px'
        
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '10px',
            alignContent: "center",
            justifyContent: 'center',
          }}>
          <h2 style= {{flexDirection: 'column', color:"white" }}>Front End Skills</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignContent: "center",
              columnGap: '20px',
              marginBottom: '20px',
            }}
          >
            <IconContext.Provider value={{ size: '4em' }}>
              <div>
                <DiHtml5 />
                <span>HTML5</span>
              </div>
              <div>
                <DiCss3 />
                <span>CSS3</span>
              </div>
              <div>
                <DiJsBadge />
                <span>JavaScript</span>
              </div>
              <div>
                <DiBootstrap />
                <span>Bootstrap</span>
              </div>
            </IconContext.Provider>
          </div>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '20px',
            alignContent: "center",
            justifyContent: 'center',
          }}
        >
          <h2 style= {{flexDirection: 'column', color:"white" }}>Back End Skills</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignContent: 'center',
              columnGap: '20px',
            }}
          >
            <IconContext.Provider value={{ size: '4em' }}>
              <div>
                <DiMysql />
                <span>MySQL</span>
              </div>
              <div>
                <DiNodejs />
                <span>Node.js</span>
              </div>
              <div>
                <DiReact />
                <span>React</span>
              </div>
              <div>
                <DiMongodb />
                <span>MongoDB</span>
              </div>
              <div>
                <DiSqllite />
                <span>SQLite</span>
              </div>
            </IconContext.Provider>
          </div>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '20px',
            alignContent: "center",
            justifyContent: 'center',
          }}
        >
          <h2 style= {{flexDirection: 'column', color:"white" }}>Other Skills</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              columnGap: '20px',
            }}
          >
            <IconContext.Provider value={{ size: '4em' }}>
              <div>
                <DiWindows />
                <span>Windows</span>
              </div>
              <div>
                <DiHeroku />
                <span>Heroku</span>
              </div>
             <div>
                <DiVisualstudio />
                <span>Visual Studio</span>
              </div>
              <div>
                <DiGit />
                <span>Git</span>
              </div>
            </IconContext.Provider>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default ResumeList;
