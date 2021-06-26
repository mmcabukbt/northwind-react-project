import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Dropdown, Label } from 'semantic-ui-react'
import { removeFromCart } from '../store/actions/cartActions'

export default function CartSummary() {

    const { cartItems } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleClickRemoveFromCart = (product)=>{
        dispatch(removeFromCart(product))
    }

    return (
        <div>  
             {/* to={`/products/${product.id}`}> */}
            <Dropdown item text={`Your Cart (${cartItems.length})`}>
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItem) => (
                            <Dropdown.Item key = {cartItem.product.id}>
                                {cartItem.product.productName} 
                                <Label>
                                 {cartItem.quantity}
                                </Label>
                                <Button onClick={()=>handleClickRemoveFromCart(cartItem.product)}
                                 color="red"  circular={true} compact={true} label="Remove"></Button>
                                </Dropdown.Item>
                        ))
                    }
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart"><strong>Go my Cart</strong></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
