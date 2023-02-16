import { useSelector, useDispatch } from "react-redux"
import { cleanUpCartAction, loadAllCartItemsThunk, updateCartItemThunk, deleteCartItemThunk } from "../../store/shoppingCartItems"

const PurchaseComplete = () => {
    const dispatch= useDispatch()

    const purchasedItems = dispatch(loadAllCartItemsThunk())
    console.log('purchased', purchasedItems)

 return (
    <h1>Thank you for your purchase!{purchasedItems[0]}</h1>

 )
}

export default PurchaseComplete
