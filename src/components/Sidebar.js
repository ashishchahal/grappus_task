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

        
        const menu = this.props.data.map((data) => {
            return(
                <div className="container p-2">
                    <Card style={cardStyle} key={data.id}>
                        
                        <CardBody>
                            <div className="row">
                                <div className="col col-sm-2">
                                    <div><span className={data.icon}> </span></div>
                                </div>
                                <div className="col col-sm-10">
                                    <CardTitle>{data.title}</CardTitle>
                                    <CardSubtitle>Lorem Ipsum arya sansa jon bran stark</CardSubtitle>
                                </div>
                            </div>     
                            
                            
                            
                                <Form onSubmit={this.handleSubmit} >
                                <div className="row">
                                    <div className="col col-sm-10 mr-0 p-0">
                                        <Input type="text" placeholder="Search a company" value={this.state.value} onChange={this.handleChange} />
                                    </div>
                                    <div className="col col-sm-2 p-0">
                                        <Button type="submit"><span className="fa fa-angle-right"></span></Button>
                                    </div>
                                </div>  
                                </Form>
                            
                        </CardBody>
                        
                        
                        
                    </Card>
                </div>
            );
        })
    
        return(
            <div className="container">
                {menu} 
            </div>
        );
    }
}

export default Sidebar;