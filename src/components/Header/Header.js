import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/slices/counterSlice';
import './Header.css';

const Header = () => {

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <header>
        <button onClick={() => dispatch(increment())} className='add'>+</button>
            <div className='count-wrapper'>{count}</div>
        <button onClick={() => dispatch(decrement())} className='sub'>-</button>
    </header>
  )
}

export default Header;