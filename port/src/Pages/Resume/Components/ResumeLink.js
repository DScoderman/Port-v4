import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import resumePDF from '../../../Images/DResume.pdf'


const ResumeLocation = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.target = '_blank';
    link.download = 'resume.pdf';
  
    link.click();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        typography: 'body1',
        fontSize: '50px',
        '& > :not(style) + :not(style)': {
          ml: 50,
        },
      }}
    >
      <Link href="#" underline="hover" color="white" fontSize="50px" onClick={handleDownload}>
        Resume
      </Link>
    </Box>
  );
};

export default function Links() {
  return <ResumeLocation />;
}
