import React from 'react';
import SmartFilter from './SmartFilters';
import Sidebar from './Sidebar';
import DiscoverSectors from './DiscoverSectors';
import RunUseCases from './RunUseCases';
import TopCharts from './TopCharts';


const Home = (props) => {
    return(
        <div className="container-fluid ">
            <div className="row">
                <div className="col-12 col-sm-9 col-xl-9 p-0">
                    <div className="row m-2">
                        <SmartFilter filters={props.filters} /> 
                    </div>
                    <div className="row m-2">
                        <div className="col-12 col-md-6 ">
                            <RunUseCases />
                        </div>
                        <div className="col-12 col-md-6">
                            <TopCharts charts={props.charts} />
                        </div>
                    </div>
                    <div className="row m-2">
                        <DiscoverSectors sectors={props.sectors} />
                    </div>
                </div>
                <div className="col-12 col-sm-3 col-xl-3 pr-2">
                    <Sidebar data={props.data} />
                </div>
            </div>
            
        </div>
    );
}

export default Home;