import React, { useContext } from 'react'
import Context from '../stroe'


const Cart = () => {
  const [ state, dispatch ] = useContext(Context);
  const totalAmount = state.CartList.reduce((total, item) => total + (item.price * item.qty), 0);

  return (
    <div className='bg-light p-3'>
    <table className='table align-middle'>
      <tbody>
        {state.CartList.map((item, index)=>(
            <tr key={index}>
            <td> <button type='button' className='btn btn-sm'
             onClick={()=> {
                dispatch({
                    type: "DELETE_CART_ITEM",
                    payload: {...item}
                })
             }}
            > X </button></td>
            <td> <img className='table_img' src={item.img} alt='cart_img' /></td>
            <td>
            {item.title} <br />
            <small className='text-muted'>NT$ {item.price}</small>
            </td>
            <td>
            <select name='' id='' className='form-select'
             value={item.qty}
             onChange={(e)=>{
                e.preventDefault();
                const data = parseInt(e.target.value);
                dispatch({
                  type: "CHANGE_CATR_QTY",
                  payload: { ...item, data}
                })
             }}
            >
                {[...Array(20)].map((_,index)=>(
                    <option>{index+1}</option>
                ))}
            </select>
            </td>
            <td> NT$ {item.price * item.qty} </td>
            </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className='text-end' colSpan={5}>總金額 NT$ {totalAmount}</td>
        </tr>
      </tfoot>
    </table>
  </div>
  )
}

export default Cart
