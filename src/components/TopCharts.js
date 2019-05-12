import React from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardText,CardTitle, Button, Row, Container, Col } from 'reactstrap';

const TopCharts = (props) =>{

    const cardStyle = {
        backgroundColor: 'black',
        color: 'white',
        border: '0.05rem solid #A9A9A9'
    }

    /*const renderButtons = props.charts.map((chart) => {
        return(
            <div className="col-12 col-md-6">
                <Button type="button" className="m-1">{chart.name} </Button>
            </div>
        
        )
    })
    */

    return(
        
        <Card style={cardStyle}>
            <div className="container">
                <div className="row">
                    <div className="col col-sm-4 p-0">              
                        <CardImg />
                        <CardImgOverlay>
                            <CardTitle>Top Charts</CardTitle>
                        </CardImgOverlay>
                    </div>
                    <div className="col col-sm-8 p-0">
                        <Row className="m-1">
                            <Button type="button" className="midCard-buttons m-1"> Acquirers</Button>
                            <Button type="button" className="midCard-buttons m-1"> Founders </Button>
                        </Row>
                        <Row className="m-1">
                            <Button type="button" className="midCard-buttons">Institutional Investors</Button>
                            <Button type="button" className="midCard-buttons"> Boardmembers</Button>
                        </Row>
                        <Row className="m-1">
                            <Button type="button" className="midCard-buttons">Investment partners</Button>
                            <Button type="button" className="midCard-buttons">Corporate VCs</Button>
                        </Row>
                        <Row className="m-1">
                            <Button type="button" className="midCard-buttons"> Smart money investors</Button>
                            <Button type="button" className="midCard-buttons">Private Equity</Button>
                        </Row>
                    </div>
                </div>   
            </div>
        </Card>
        
    );
}

export default TopCharts;