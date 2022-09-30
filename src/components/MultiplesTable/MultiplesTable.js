import { useSelector } from 'react-redux';
import MultiplesItem from '../MultiplesItem/MultiplesItem';
import './MultiplesTable.css'



const MultiplesTable = () => {

  const { count } = useSelector(state => state.counter)

    function createFactors(arraylength) {
        let factors = []
        for(let i = 1; i<=arraylength; i++) {
          factors[i] = i
        }
        // console.log(factors)
        return factors
    }
    
    let factorArray = createFactors(100);


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