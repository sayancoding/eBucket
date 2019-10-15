import React, { Component } from 'react'
import Item from '../../Components/ShopingArea/Item/Item'
import './ItemDirectory.css'
import Data_Details from './Item_Details.data'

class ItemDirectory extends Component {

    state = {
        items : Data_Details,
    }

    render() {
        const Items = (
            this.state.items.map((item)=>{
                return (<Item key={item.id} urlName={item.urlName} title={item.title} 
                subtitle={item.subtitle} 
                />)
            })
        )
        return (
            <div className='ItemDirectory'>
                {Items}
            </div>
        )
    }
}

export default ItemDirectory;
