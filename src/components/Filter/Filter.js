import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { applyFilter } from '../../redux/slices/counterSlice';
import './Filter.css';

const Filter = () => {

  const { gap, length } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const [gapAdjust, setGapAdjust] = useState(gap);
  const [lengthAdjust, setLengthAdjust] = useState(length);

  const onGapInputChange = (e) => {
    setGapAdjust(e.target.value);
  }

  const onLengthInputChange = (e) => {
    setLengthAdjust(e.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    const filterInputs = {
      gapInput: Number(gapAdjust),
      lengthInput: Number(lengthAdjust)
    }

    console.log(filterInputs);
    dispatch(applyFilter(filterInputs));
    // console.log(gapAdjust)
    // console.log('From Store: ', gap);
  }


  return (
    <form className='filter-container' onSubmit={(e) => onFormSubmit(e)}>
      <div className='fitler-inputs-wrapper'>
        {/* <label htmlFor='gap'>Gap Between Multiples</label> */}
        <input onChange={onGapInputChange} className="gap-input" type="number" name="gap" placeholder='' value={gapAdjust}/>
        {/* <label htmlFor='length'>Length of Multiples</label> */}
        <input onChange={onLengthInputChange} className="length-input" type="number" name="length" placeholder='' value={lengthAdjust}/>
      </div>
      <button type='submit' >Filter Results</button>
    </form>
  )
}

export default Filter;