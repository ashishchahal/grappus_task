import React from 'react';
import SmartFilter from './SmartFilters';
import Sidebar from './Sidebar';
import DiscoverSectors from './DiscoverSectors';
import RunUseCases from './RunUseCases';
import TopCharts from './TopCharts';


const Home = (props) => {
    return(
        <div className="container-fluid px-2 mx-2">
            <div className="row">
                <div className="col-12 col-sm-9 col-xl-9 p-0">
                    <div className="row m-2">
                        <SmartFilter filters={props.filters} /> 
                    </div>
                    <div className="row m-2">
                        <div className="col col-sm-6 ">
                            <RunUseCases />
                        </div>
                        <div className="col col-sm-6">
                            <TopCharts charts={props.charts} />
                        </div>
                    </div>
                    <div className="row m-2">
                        <DiscoverSectors sectors={props.sectors} />
                    </div>
                </div>
                <div className="col-12 col-sm-3 col-xl-3 p-0">
                    <Sidebar data={props.data} />
                </div>
            </div>
            
        </div>
    );
}

export default Home;