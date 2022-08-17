import React from 'react'
import Coinitem from './Coinitem'
import "./Coins.css"
import {Link} from "react-router-dom"
import Coin from '../routes/Coin'

const coins = (props) => {
  return (
    <div className='container'>
        <div>
            <div className="heading">
                <p>#</p>
                <p className='coin-name'>Coins</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Market cap</p>
                
            </div>

            {props.coins.map(coins =>{
                return(
                    <Link to={`/coin/${coins.id}`} element={<Coin/>} key={coins.id}>
                        <Coinitem coins={coins} />
                    </Link>
                )
            })}
        </div>
        
    </div>
  )
}

export default coins