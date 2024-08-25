import React, { useContext } from 'react'
import { card_list } from '../Card_list'
import Context from '../stroe'


const Product = () => {
  const [ state, dispatch ] = useContext(Context); 

  return (
    <div className='row g-3'>
    {card_list.map((item, index) => (
      <div className='col-md-4 d-flex align-items-stretch ' key={index}>
        <div class="card h-100">
          <img src={item.img} class="card-img-top" alt="card_img" />
          <div class="card-body">
            <h6 class="card-title">{item.title}
              <span className='float-end'>NT$ {item.price}</span>
            </h6>

            <button type='button' href="#" class="btn btn-outline-primary w-100"
             onClick={()=>{
                dispatch({
                    type: 'ADD_TO_CART',
                    payload:{...item, qty: 1}
                })
             }}
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Product
