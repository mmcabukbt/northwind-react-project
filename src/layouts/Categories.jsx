import React from 'react'
import { Menu } from 'semantic-ui-react'
import Navi from '../layouts/Navi'

export default function Categories() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item 
                    name='Home'
                    
 //                   active={activeItem === 'home'}
                    onClick={()=>Navi.handleHomeClick}
                    
                />
                <Menu.Item
                    name='messages'
//                 active={activeItem === 'messages'}
//                 onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='friends'
 //                   active={activeItem === 'friends'}
 //                   onClick={this.handleItemClick}
                />
                  </Menu>
        </div>
    )
}
