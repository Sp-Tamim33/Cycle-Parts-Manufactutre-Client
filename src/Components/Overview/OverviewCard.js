import React from 'react';
import CountUp from 'react-countup';
import { Icon } from '@iconify/react';
import ReactVisibilitySensor from 'react-visibility-sensor';
import '../../Shared/HomePage.css'

const OverviewCard = ({ icon, limit, text, bigText }) => {
    const parsedLimit = parseInt(limit)
    return (
        <div className='pt-10 max-w-7xl mx-auto flip-card'>
            <div class="card bg-orange-200 shadow-xl px-20 py-12 rounded-[30px] flip-card-inner">
                <div class="card-body flip-card-front">
                    <h2 class="card-title text-7xl"><Icon className='mx-auto text-orange-500' icon={icon} /></h2>
                    <p className='text-center text-4xl font-bold font-sans mt-2'>

                        <ReactVisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                            {({ isVisible }) => (
                                <div style={{ height: 50 }}>
                                    {isVisible ? <CountUp end={parsedLimit} /> : null}+
                                </div>
                            )}
                        </ReactVisibilitySensor>

                    </p>
                    <p className='text-center text-xl font-bold font-sans pt-2'>{text}</p>
                </div>
                <div className='flip-card-back'>
                    <p className='p-5 font-semibold font-sans '>{bigText}</p>
                </div>
            </div>
        </div>
    );
};

export default OverviewCard;