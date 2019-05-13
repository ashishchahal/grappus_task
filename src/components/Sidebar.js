import React from 'react';
import {Card, CardImg, CardTitle, CardSubtitle, CardBody, CardText,Form, Input, Button  } from 'reactstrap';


const RenderSidebarItem = ({data}) => {
    
}

class Sidebar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value:'',
            submit: '',
        
        }
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event){
        this.setState({
            submit: this.state.value
        })
        
        event.preventDefault();
        alert(this.state.value)
    }

    

    render(){

        const cardStyle = {
            backgroundColor: '#262626',
            color: 'white'
        }

        
        const cardRenders = this.props.data.map((data) => {
            return(
                <div className="container mr-2 p-2 d-none d-md-block">
                    <Card style={cardStyle} key={data.id}>
                        
                        <CardBody>
                            <div className="row pb-2">
                                <div className="col col-sm-2">
                                    <div style={{border:'2px solid white'}}><span className={data.icon}> </span></div>
                                </div>
                                <div className="col col-sm-10">
                                    <CardTitle>{data.title}</CardTitle>
                                    <CardSubtitle>Lorem Ipsum </CardSubtitle>
                                </div>
                            </div>     
                            
                            
                            
                                
                                
                            <Form onSubmit={this.handleSubmit} >
                                <div className="row">
                                    <div className="col col-lg-8 col-md-8">
                                        <Input type="text" style={{width:150 ,maxWidth: 250, backgroundColor: '#262626'}} placeholder="Search a company" 
                                            value={this.state.value} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-12 col-lg-auto col-md-auto">
                                        <Button type="submit" style={{backgroundColor: '#262626'}}><span className="fa fa-angle-right"></span></Button>
                                    </div>
                                </div> 
                            </Form>
                                 
                                
                            
                        </CardBody>
                        
                        
                        
                    </Card>
                </div>
            );
        })
    
        return(
            <div>
                {cardRenders} 
            </div>
        );
    }
}

export default Sidebar;