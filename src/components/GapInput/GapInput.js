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
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(adjustGap(Number(gapAdjust)));
    // console.log(gapAdjust)
    // console.log('From Store: ', gap);
  }


  return (
    <form className='gap-input-container' onSubmit={(e) => onFormSubmit(e)}>
        <label htmlFor='gap'>Gap Between Multiples</label>
        <input onChange={onGapInputChange} className="gap-input" type="number" name="gap" placeholder='' value={gapAdjust}/>
        <button type='submit' >Apply Gap</button>
    </form>
  )
}

export default GapInput