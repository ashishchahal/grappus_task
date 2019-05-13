import React from 'react';
import {Card,Button, TabPane, TabContent } from 'reactstrap';
import {Link} from 'react-router-dom'



const SmartFilter = (props) =>{

    const cardStyle = {
        backgroundColor: '#262626',
        color: 'white'
    }

    const roundedBorder ={
        borderRadius: 20,
        marginLeft: 5.8
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

                <div className="row p-2" style={{borderBottom: '1px solid #696969', color: 'white'}}>
                    <Link className="m-1 mx-2 px-2 linkHeading">Company</Link>
                    <Link to="/home" className="m-1 mx-2 px-2 linkHeading">Investor</Link>
                    <Link to="/home" className="m-1 mx-2 px-2 linkHeading">Person</Link>
                    <Link to="/home" className="m-1 mx-2 px-2 linkHeading">Sector</Link>
                    <Link to="/home" className="m-1 mx-2 px-2 linkHeading">Industry</Link>
                    <Link to="/home" className="m-1 mx-2 px-2 linkHeading">Sub-Industry</Link>
                    <Link to="/home" className="m-1 mx-2 px-2 linkHeading">Region</Link>
                </div>

                <div className="row p-2">
                <Button outline type="button" color="secondary" className="m-1" style={roundedBorder}>Profile</Button>
                <Button outline type="button" color="warning" className="m-1" style={roundedBorder}>Comparables</Button>
                <Button outline type="button" color="success" className="m-1" style={roundedBorder}>Strategic gaps</Button>
                <Button outline type="button" color="danger" className="m-1" style={roundedBorder}>Potential acquirers</Button>
                <Button outline type="button" color="primary" className="m-1" style={roundedBorder}>Fase path</Button>
                    </div>

                
                    <div className="row p-2">
                        <div className="col-12 col-sm-6 p-1">
                            <div className=" divBorder">
                                What are the most critical strategic gaps for a company across its portfolio?
                                <Button outline style={roundedBorder} color="success" size="sm">Strategic Gaps</Button>                             
                            </div>
                            <div className=" divBorder">
                                Who can potentially acquire the company?
                                <Button outline style={roundedBorder} color="danger" size="sm">Potential acquirers</Button>
                            </div>
                            <div className=" divBorder">
                                List of public comparables for a company?
                                <Button outline style={roundedBorder} color="warning" size="sm">Comparables></Button>
                            </div>
                            
                        </div>
                        <div className="col-12 col-sm-6 p-1">
                            <div className="divBorder">
                                What are the strategic gaps for a company based on benchmarking?
                                <Button outline style={roundedBorder} color="success" size="sm">Strategic Gaps</Button>
                            </div>
                            <div className="divBorder">
                                Lst of industry segments that a company operates in?
                                <Button outline style={roundedBorder} color="secondary" size="sm">Profile</Button>
                            </div>
                            <div className="divBorder">
                                What is the alst path to a company?
                                <Button outline style={roundedBorder} color="primary" size="sm">Fast Path</Button>
                            </div>
                        </div>
                    </div>
                
            </Card>

    );
}

export default SmartFilter;