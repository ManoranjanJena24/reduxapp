import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'

const Shop = () => {
    const dispatch = useDispatch();
    return (
        <div className='container text-center'>
            <h1>Withdraw/Deposit Just 100 Ruppee Available: 100RS</h1>
            <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
            Add this Item to the cart
            <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button>
        </div>
    )
}

export default Shop
