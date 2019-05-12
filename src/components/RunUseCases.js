import React from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardText,CardTitle, Button, Container, Row } from 'reactstrap';

const RunUseCases = (props) =>{
    const cardStyle = {
        backgroundColor: 'black',
        color: 'white',
        border: '0.05rem solid #A9A9A9'
    }

    return(
        
        <Card style={cardStyle} className="midCard">
            <Container>
                <Row>
                    <div className="col col-sm-6 p-0">              
                        <CardImg />
                        <CardImgOverlay>
                            <CardTitle>Run Select use cases for</CardTitle>
                        </CardImgOverlay>
                    </div>
                    <div className="col col-sm-6">
                        <CardBody>
                            <Button type="button" className="p-1 m-1 midCard-buttons">Buy Side PE</Button>
                            <Button type="button" className="p-1 m-1 midCard-buttons">Buy Side Corporate</Button>
                            <Button type="button" className="p-1 m-1 midCard-buttons">Sell Side</Button>
                        </CardBody>
                    </div>
                </Row>
            </Container>
        </Card>
            
        
    );
}

export default RunUseCases;