import React from 'react'

const Coin = ({name, image, symbol, price, priceChange, volume, marketCap}) => {
    let rupee = "\u20B9";
    return (
       <div className="coin-container">
           <div className="coin-row">
               <div className="coin">
                   <img src={image} alt="crypto"/>
                   <h1>{name}</h1>
                   <p className="coin-symbol">{symbol}</p>
               </div>
               <div className="coin-data">
                   <p className="coin-price">{rupee}{price}</p>
                   <p className="coin-volume">{rupee}{volume.toLocaleString()}</p>
                   {priceChange < 0 ? (
                       <p className="coin-percent red">
                           {priceChange.toFixed(2)}%
                       </p>
                   ):(
                       <p className="coin-percent green">
                           {priceChange.toFixed(2)}%
                       </p>
                   )}
                   <p className="coin-marketcap">
                       Mkt Cap: {rupee} {marketCap.toLocaleString()}
                   </p>
               </div>
           </div>
       </div>
    )
}

export default Coin;
