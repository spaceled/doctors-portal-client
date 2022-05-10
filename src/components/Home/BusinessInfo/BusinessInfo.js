import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    { 
        title: 'Opening Hours', 
        description: 'We are open 7 days', 
        icon: faClock,
        background: 'primary'
    },
    { 
        title: 'Visit our Location', 
        description: 'Brooklyn, NY 1003 USA', 
        icon: faMapMarker,
        background: 'dark'
    },
    { 
        title: 'Call us now', 
        description: '+1569756986', 
        icon: faPhone,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map( info => <InfoCard info={info} key={info.title}/>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;