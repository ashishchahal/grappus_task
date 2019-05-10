import React,{Component} from 'react';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

import {SECTORS} from '../shared/sectors';
import {DATA} from '../shared/sidebarData';

import {Switch, Redirect, Route} from 'react-router-dom';

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            sectors: SECTORS,
            data: DATA
        }
    }

    render(){
        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={() => <Home data={this.state.data} sectors={this.state.sectors} />} />
                    <Redirect to="/home" />
                </Switch>
                
                <Footer />
            </div>
        );
    }
}

export default Main;