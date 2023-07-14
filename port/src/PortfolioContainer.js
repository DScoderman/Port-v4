import React, { useState } from 'react';
import NavTabs from './NavTabs';
import HomePage from './Pages/Homepage';
import ProjectPage from './Pages/Projects';
import ContactPage from './Pages/ContactMe';
import ResumePage from './Pages/Resume';
import MeInfoPage from './Pages/MeInfo';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('HomePage');

    const renderPage = () => {
        if (currentPage === 'HomePage') {
            return <HomePage />;
        }
        if (currentPage === 'ProjectPage') {
            return <ProjectPage />;
        }
        if (currentPage === 'ContactPage') {
            return <ContactPage />;
        }
        if (currentPage === 'ResumePage') {
            return <ResumePage />;
        }
        if (currentPage === 'MeInfoPage') {
            return <MeInfoPage />;
        };

        const handlePageChange = (page) => setCurrentPage(page);

        return (
            <div className="PortfolioContainer">
                {/* We are passing the currentPage from state and the function to update it */}
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                {/* Here we are calling the renderPage method which will return a component  */}
                {renderPage()}
            </div>
        );
    }
}