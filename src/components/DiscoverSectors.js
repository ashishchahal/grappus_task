import React from 'react';
import {Card, CardTitle, CardBody, CardText, Button} from 'reactstrap';


const DiscoverSectors = (props) =>{

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
            <Card key={sec.id}>
                
                <div className="container">
                    <CardBody>
                        <div className="row">
                            <div className="col col-sm-6">
                                <CardTitle>
                                    <h3>{sec.name}</h3>
                                </CardTitle>
                            </div>
                            <div className="col col-sm-4">
                                View Industries
                            </div>
                        </div>
                        <Button>{sec.internalOptions}</Button>
                       
                
                        
                    </CardBody>
                </div>
            </Card>
        )
    })



    return(
        <div className="container">
            <Card>
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