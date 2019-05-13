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
            <Button type="button"  className="rounded-pill " className="m-1">{sec.name}</Button>
        )
    })

    /*const buttonsInCardRender = props.sectors.internalOptions.map((i) =>{
        return(
            <Button type="button" className="m-1">{i}</Button>
        )
        
    })*/

    const CardsRender = props.sectors.map((sec)=>{
        
        return(
                <Col md="6">   
                    <Card key={sec.id} style={cardStyle} className="m-2">                  
                            <CardBody>
                                <Row>
                                    <Col md="8">
                                        <CardTitle>
                                            {sec.name}
                                        </CardTitle>
                                    </Col>
                                    <Col md="4">
                                        <CardText style={{fontWeight: 100, fontSize: 12, fontColor: 'gray'}}>View Industries</CardText>
                                    </Col>
                                </Row>          
                                
                                <Row>
                                    {sec.internalOptions.map((int)=>  {
                                        return(
                                            <Button className="m-1" type="button">{int}</Button>
                                        )
                                    }                               
                                        
                                    
                                )}
                                </Row>
                            </CardBody>
                        
                    </Card>
                </Col> 
        )
    })



    return(
        <div className="container">
            <Card style={{backgroundColor: '#262626',
        color: 'white',}}>
                <CardBody>
                    <CardTitle style={{fontWeight: 500, fontSize: 30,}}>Discover the popular sectors we track</CardTitle>
                    <CardText>Lorem ipsum dolor ist amet, consecteire</CardText>
                    <Row>
                        {buttonsRender}
                    </Row>
                    
                    <Row>
                        
                        {CardsRender}
                        
                        
                    </Row>
                        
                
                </CardBody>
            </Card>
        </div>
    );
}

export default DiscoverSectors;