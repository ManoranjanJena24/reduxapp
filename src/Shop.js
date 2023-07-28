import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'

const Shop = () => {
    const dispatch = useDispatch();
    return (
        <div className='container text-center'>
            <h1>BUY ADIDDAS SHOES: 50RS</h1>
            <button className="btn btn-primary" onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
            Add this Item to the cart
            <button className="btn btn-primary" onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button>
        </div>
    )
}

export default Shop
