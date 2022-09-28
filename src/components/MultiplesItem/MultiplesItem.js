import { connect } from 'react-redux';
import './MultiplesItem.css';

const mapStateToProps = (state) => {
    return {
      count: state.handleCount.count
    }
}

const MultiplesItem = ({ count, factor }) => {

    function multiples(num, fact) {
        return num * fact;
    }

  return (
    <div className='multiple-wrapper'>
        <p>{`${count}  *  ${factor}  =  ${multiples(count, factor)}`}</p>
    </div>
  )
}

export default connect(mapStateToProps, null)(MultiplesItem);