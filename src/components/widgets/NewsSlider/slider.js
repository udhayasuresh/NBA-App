import React, { Component } from 'react';
import axios from 'axios';

class NewsSlider extends Component {
    state = {
        news:[]
    }
    
    componentWillMount(){
        axios.get ('')
    }

    render(){
        return(
            <div>
                Slider
            </div>
        )
    }
}
export default NewsSlider;