import React, { Component } from 'react'
import Item_View from '../../Components/Item_view/Item_view'
import Light_Data from './Light_DATA'
import './Item_preview.css';

export default class Item_preview extends Component {
    state={
        Item_preview_data:Light_Data
    }
    
    render() {
        let Item_view = (
            this.state.Item_preview_data.map(item => {
                return (
                    <Item_View
                        title={item.title}
                        description={item.description}
                        cost={item.cost}
                        key={item.id}
                    />
                )
            })
        )
        return (
            <div className="ItemPreviewContainer">
                <button className="btnBack" onClick={()=>this.props.history.goBack()}>back</button> 
            <div className="ItemPreview">
                {Item_view}
            </div>
            </div>
        )
    }
}
