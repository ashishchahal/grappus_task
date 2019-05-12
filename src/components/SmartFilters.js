import React from 'react';
import {Card,Button } from 'reactstrap';
import {Link} from 'react-router-dom'



const SmartFilter = (props) =>{

    const cardStyle = {
        backgroundColor: '#262626',
        color: 'white'
    }

    /*const ButtonsRender = {
        return(
            <div>
            
            </div>
        );
    } */

    return(
        
            <Card style={cardStyle} className="container ">
                <div className= "p-2">
                    <h3>Choose from our smart filters</h3>
                    <div>Lorem ipsum dolor sit amet, consectitur</div>
                </div>

                <div className="row p-2" style={{borderBottom: '2px solid #696969', color: 'white'}}>
                    <Link to="/home" className="m-1 mx-2 px-2">Company</Link>
                    <Link to="/home" className="m-1 mx-2 px-2">Investor</Link>
                    <Link to="/home" className="m-1 mx-2 px-2">Person</Link>
                    <Link to="/home" className="m-1 mx-2 px-2">Sector</Link>
                    <Link to="/home" className="m-1 mx-2 px-2">Industry</Link>
                    <Link to="/home" className="m-1 mx-2 px-2">Sub-Industry</Link>
                    <Link to="/home" className="m-1 mx-2 px-2">Region</Link>
                </div>

                <div className="row p-2">
                <Button rounded outline type="button" color="secondary" className="m-1">Profile</Button>
                <Button rounded outline type="button" color="warning" className="m-1">Comparables</Button>
                <Button rounded outline type="button" color="success" className="m-1">Strategic gaps</Button>
                <Button rounded outline type="button" color="danger" className="m-1">Potential acquirers</Button>
                <Button rounded outline type="button" color="primary" className="m-1">Fase path</Button>
                    </div>

                
                    <div className="row p-2">
                        <div className="col-12 col-sm-6 p-1">
                            <div className=" divBorder">
                                What are the most critical strategic gaps for a company across its portfolio?
                                <Button>Strategic Gaps</Button>                             
                            </div>
                            <div className=" divBorder">
                                Who can potentially acquire the company?
                                <Button>Potential acquirers</Button>
                            </div>
                            <div className=" divBorder">
                                List of public comparables for a company?
                                <Button>Comparables></Button>
                            </div>
                            
                        </div>
                        <div className="col-12 col-sm-6 p-1">
                            <div className="divBorder">
                                What are the strategic gaps for a company based on benchmarking?
                                <Button>Strategic Gaps</Button>
                            </div>
                            <div className="divBorder">
                                Lst of industry segments that a company operates in?
                                <Button>Profile</Button>
                            </div>
                            <div className="divBorder">
                                What is the alst path to a company?
                                <Button>Fast Path</Button>
                            </div>
                        </div>
                    </div>
                
            </Card>

    );
}

export default SmartFilter;