import React from 'react';
import GolobalDelivary from '../../GolobalDelivary/GolobalDelivary';
import LogoPart from '../../LogoPart/LogoPart';
import ServiceNew from '../../ServiceNew/ServiceNew';
import Banner from '../Banner/Banner';
import Competative from '../Competative/Competative';
import Services from '../Services/Services';


const Home = () => {
    return (

        <>
            <Banner/>
            <Competative/>
            <Services/>
            <GolobalDelivary/>
            <hr/>
            <LogoPart/>
            <ServiceNew/>
        </>

    );
};
 
export default Home;