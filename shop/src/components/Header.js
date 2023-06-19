import React, {useState} from 'react'
import { FaCartPlus } from "react-icons/fa";
import Order from './Order';

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
              <li>Про нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>
            <FaCartPlus onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
            
            {cartOpen && (
              <div className='shop-cart'>
                 {props.orders.map(el => (
                    <Order onDelete={props.onDelete} key={el.id} item={el}/>
                 ))}
                 <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
              </div>
            )}
            
        </div>
        <div className='presentation'></div>
    </header>
  )
}
