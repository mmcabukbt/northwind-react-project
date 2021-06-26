import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useSelector } from 'react-redux'

export default function Navi() {
    const { cartItems } = useSelector(state => state.cart)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useHistory()
    
    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }
    function handleHomeClick() {
        history.push("/")
    }
    function handleSignIn() {
        setIsAuthenticated(true)
    }
    return (
        <div>
            <Menu size='mini' inverted fixed="top">
                <Container>
                    <Menu.Item  name='home'
                    //                   active={activeItem === 'home'}
                                     onClick={handleHomeClick}
                    />
                    <Menu.Item name='messages'
                    //                  active={activeItem === 'messages'}
                    //                  onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        {cartItems.length>0&&<CartSummary/>}
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} bi1sey="1" />
                            : <SignedOut signIn={handleSignIn} biseyok="0" />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
