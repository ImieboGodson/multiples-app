import { useSelector } from 'react-redux';
import MultiplesItem from '../MultiplesItem/MultiplesItem';
import './MultiplesTable.css'



const MultiplesTable = () => {

  const { count, gap, length } = useSelector(state => state.counter);

    function createFactors(arraylength) {
        let factors = []
        for(let i = gap; i<=arraylength; i+=gap) {
          factors[i] = i;
          // if ((factors[i] - factors[i-1]) === gap) {
          //   factors[i] = i;
          // } else {
          //   i++
          // }
        }
        console.log(factors)
        return factors
    }
    
    let factorArray = createFactors(length);


  return (
    <div className='smaller-wrapper'>
        <h3>Multiples of {count}</h3>
        <div className='content-wrapper'>
        <div>
            {
            factorArray.map(i => {
                return (
                    <MultiplesItem key={i} factor={i}/>
                )
            })
            }
        </div>
        </div>
    </div>
  )
}

export default MultiplesTable;