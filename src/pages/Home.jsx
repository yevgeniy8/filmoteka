import React from 'react';
import Hero from 'components/Hero/Hero';
import WeeklyTrendSection from 'components/WeeklyTrendSection/WeeklyTrendSection';
import UpcomingSection from 'components/UpcomingSection/UpcomingSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <WeeklyTrendSection />
            <UpcomingSection />
        </div>
    );
};

export default Home;
