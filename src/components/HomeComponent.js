import React from 'react';
import SmartFilter from './SmartFilters';
import Sidebar from './Sidebar';
import DiscoverSectors from './DiscoverSectors';



const Home = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col col-md-8">
                    <div className="row">
                        <SmartFilter /> 
                    </div>
                    <div className="row">
                        <DiscoverSectors sectors={props.sectors} />
                    </div>
                </div>
                <div className="col col-md-4">
                    <Sidebar data={props.data} />
                </div>
            </div>
            
        </div>
    );
}

export default Home;