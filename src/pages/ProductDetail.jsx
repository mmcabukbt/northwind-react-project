import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { addToCart } from '../store/actions/cartActions'

export default function ProductDetail() {
    let { id } = useParams()
    const [product, setProduct] = useState({}) //lifecycle hook
    const [category, setCategory] = useState({}) //lifecycle hook
    const dispatch = useDispatch()
    const handleAddToCart = (product)=>{
      dispatch(addToCart(product));
  //    toast.success(`${product.productName} sepete eklendi!`)  !!!! cartReducere attım!
    }
    useEffect(() => {
        let productService = new ProductService()
        productService.getByProductId(id).then(result =>
            setProduct(result.data.data) &
            setCategory(result.data.data.category))
    }, [id])
    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='tiny'
                            src="https://i.hizliresim.com/3xcsat7.gif"
                        ></Image>
                        {/* {console.log(product)} */}
                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Meta><strong>Category: {category.categoryName}</strong></Card.Meta>
                        <Card.Meta>Product Id: {product.id} / In stock: {product.unitsInStock}</Card.Meta>
                        <Card.Description>{product.quantityPerUnit}  <Card.Header>Only ${product.unitPrice}</Card.Header></Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button onClick={() => handleAddToCart(product)} inverted color='green'>
                                Add to Cart
                            </Button>
                            <Button inverted color='orange'>
                                Add to Favorites
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
