import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adjustGap } from '../../redux/slices/counterSlice';
import './GapInput.css';

const GapInput = () => {

  const { gap } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const [gapAdjust, setGapAdjust] = useState(1);

  const onGapInputChange = (e) => {
    setGapAdjust(e.target.value);
    dispatch(adjustGap(gapAdjust));
    console.log(gapAdjust)
    console.log('From Store: ', gap);
  }


  return (
    <form className='gap-input-container'>
        <label htmlFor='gap'>Gap Between Multiples</label><br></br>
        <input onChange={(e) => onGapInputChange(e)} className="gap-input" type="number" name="gap" placeholder='' value={gapAdjust}/>
    </form>
  )
}

export default GapInput