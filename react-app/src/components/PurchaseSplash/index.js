import { useSelector, useDispatch } from "react-redux"
import { cleanUpCartAction, loadAllCartItemsThunk, updateCartItemThunk, deleteCartItemThunk } from "../../store/shoppingCartItems"
import "./PurchaseSplash.css";

const PurchaseComplete = () => {
 return (
   <div className="complete-page-header">
      <h1>Thank you for your purchase!</h1>
   </div>
 )
}

export default PurchaseComplete
