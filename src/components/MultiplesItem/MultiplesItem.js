import { useSelector } from 'react-redux';
import './MultiplesItem.css';


const MultiplesItem = ({ factor }) => {

  const { count } = useSelector(state => state.counter);

    function multiples(num, fact) {
        return num * fact;
    }

  return (
    <div className='multiple-wrapper'>
        <p>{`${count}  *  ${factor}  =  ${multiples(count, factor)}`}</p>
    </div>
  )
}

export default MultiplesItem;