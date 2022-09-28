import { useState } from 'react';
import { connect } from 'react-redux';

import './MultiplesTable.css'


const mapStateToProps = (state) => {
    return {
      count: state.handleCount.count
    }
}

const MultiplesTable = ({ count }) => {

    function createFactors(arraylength) {
        let factors = []
        for(let i = 1; i<=arraylength; i++) {
          factors[i] = i
        }
        console.log(factors)
        return factors
    }
    
    let factorArray = createFactors(100);
    
    function multiples(num, factor) {
        return num * factor;
    }


  return (
    <div className='smaller-wrapper'>
        <h3>Multiples of {count}</h3>
        <div className='content-wrapper'>
        <div>
            {
            factorArray.map(i => {
                return (
                <div className='multiple-wrapper'>
                    <p>{`${count}  *  ${i}  =  ${multiples(count, i)}`}</p>
                </div>
                )
            })
            }
        </div>
        </div>
    </div>
  )
}

export default connect(mapStateToProps, null)(MultiplesTable);