import React from "react";
import '../style/Checkout.css';
import { Subtotal } from "./Subtotal"; 


function Checkout() {
     return (
          <div className="checkout">
               <div className="checkout_left">
                    <img className="checkout_ad" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuthD1Ah0ul201AygIpFQmC8nMwOGR9j25PA&s" alt="img"/>
                    <div>
                         <h2 className="checkout_title">
                              장바구니입니다.
                         </h2>
                         {/*장바구니아이템들 */}
                         {/*장바구니아이템들 */}
                         {/*장바구니아이템들 */}
                    </div>
               </div>
               <div className="checkout_right">
                    <Subtotal/>
               </div>

          </div>
     )
}

export default Checkout;