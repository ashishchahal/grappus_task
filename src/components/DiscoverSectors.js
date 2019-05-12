import React from 'react';
import {Card, CardTitle, CardBody, CardText, Button, Row, Col} from 'reactstrap';


const DiscoverSectors = (props) =>{

    const cardStyle = {
        backgroundColor: '#262626',
        color: 'white',
        borderColor: 'white'
    }

    const buttonsRender = props.sectors.map((sec) => {
        return(
            <Button type="button" className="m-1">{sec.name}</Button>
        )
    })

    /*const buttonsInCardRender = props.sectors.internalOptions.map((i) =>{
        return(
            <Button type="button" className="m-1">{i}</Button>
        )
        
    })*/

    const CardsRender = props.sectors.map((sec)=>{
        
        return(
            <Row>
                <Col md='6' >         
                    <Card key={sec.id} style={cardStyle} className="m-2">                  
                            <CardBody>
                                <Row>
                                    <Col md="6">
                                        <CardTitle>
                                            <h3>{sec.name}</h3>
                                        </CardTitle>
                                    </Col>
                                    <Col md="6">
                                        <CardText>View Industries</CardText>
                                    </Col>
                                </Row>          
                                
                                <Button>{sec.internalOptions}</Button>
                            </CardBody>
                        
                    </Card>
                </Col>
            </Row>
        )
    })



    return(
        <div className="container">
            <Card style={{backgroundColor: '#262626',
        color: 'white',}}>
                <CardBody>
                    <CardTitle>Discover the popular sectors we track</CardTitle>
                    <CardText>Lorem ipsum dolor ist amet, consecteire</CardText>
                    {buttonsRender}
                    <div className="row">
                        {CardsRender}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default DiscoverSectors;