import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';

class Routes extends Component{
    render(){
        return(
            <div>
                <Layout>
                 <Switch>
                     <Route exact ="/" component={Home}/>
                 </Switch>
                 </Layout>
            </div>
        )
    }
}
export default Routes;