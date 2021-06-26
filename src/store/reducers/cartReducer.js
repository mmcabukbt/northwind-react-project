import { toast } from "react-toastify";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems
}

export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c=>c.product.id === payload.id)
            toast.success(`${payload.productName} added to your Cart!`)
            if (product) {
                product.quantity++;
                return{
                    ...state
                }
            } else {
                return{
                    ...state,
                    cartItems:[...state.cartItems, {quantity:1, product:payload}]
                }
            }
            //break;
        case REMOVE_FROM_CART:
            toast.error(`${payload.productName} removed from your Cart`)
                return{
                    ...state,
                    // filter YENİ BİR REFERANSLA array oluturur. ACTION - REDUCER REFERANS DEĞİŞİMİ İLE ACTİVE olur
                    //state referans değişimi ile silinecek hariç farklı olanları yeni bir array yap(yani silineni yeni listede yok et)
                    cartItems: state.cartItems.filter(c=>c.product.id !== payload.id)
                }                
            //break;
        default:
            return state;
            //break;
    }
}