import React, { Component } from 'react'
import Item from '../../Components/ShopingArea/Item/Item'
import './ItemDirectory.css'

class ItemDirectory extends Component {

    state = {
        items : [
            {
                id:1,
                title:'item1',
                subtitle:'subtitle'
            },
            {
                id: 2,
                title:'item2',
                subtitle:'subtitle'
            },
            {
                id: 3,
                title:'item3',
                subtitle:'subtitle'
            },
            {
                id: 4,
                title:'item4',
                subtitle:'subtitle'
            },
        ]
    }

    render() {
        const Items = (
            this.state.items.map((item)=>{
                return (<Item key={item.id} Itemid={item.id} title={item.title} 
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
