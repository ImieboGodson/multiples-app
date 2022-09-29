import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/slices/counterSlice';

import './Count.css'

const Count = () => {

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()


  return (
    <div className='count-container'>
        <button onClick={() => dispatch(increment())} className='add'>+</button>
            <div className='count-wrapper'>{count}</div>
        <button onClick={() => dispatch(decrement())} className='sub'>-</button>
    </div>
  )
}

export default Count;