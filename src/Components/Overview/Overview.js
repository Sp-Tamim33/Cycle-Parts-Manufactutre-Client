import React from 'react';
import Heading from '../Heading/Heading';
import OverviewCard from './OverviewCard';

const Overview = () => {

    const CountryText = "We Have Worked with 133+ countrys in this world. We have worked with USA, UAE, AUS, BD, UK etcIn most counties, commissioners serve four-year terms, but a few counties use two-year terms or a combination of two- and four-year terms"

    const CompanyText = "We have worked with 2765+ Companys in whole world Begin the company description section with a paragraph that captures all of the vital information about your company  For these parts, provide only a high-level overview and leave all."

    const FeedbackText = "Ongoing employee feedback is key to moving away from outdated performance reviews and towards driving employee development. Employee feedback is information given about a person’s actions or accomplishments at work, which is!"

    const ClientsText = "A happy customer isn't just someone who makes a purchase with you today. A truly happy customer is one who will be loyal to you and your business for a long time to come. Plus, customer loyalty and happiness have a tendency to spread."
    return (
        <div className='py-[60px]'>
            <Heading text="Worldwide Trust Our Company" />
            <p className='text-xl text-center text-gray-400 py-5 font-sans font font-semibold'>Our Business  Area, Projects And Clients
            </p>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <OverviewCard icon="bx:world" limit="133" text="Countrys" bigText={CountryText} />
                <OverviewCard icon="fa:industry" limit="2765" text="Company" bigText={CompanyText} />
                <OverviewCard icon="fluent:person-feedback-16-filled" limit="1200" text="Positive Feedback" bigText={FeedbackText} />
                <OverviewCard icon="entypo:emoji-happy" limit="3000" text="Happy Clients" bigText={ClientsText} />
            </div>
        </div>
    );
};

export default Overview;