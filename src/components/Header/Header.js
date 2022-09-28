import { useState } from 'react';
import { connect } from 'react-redux';
import { addNumber, subNumber } from '../../redux/actions/countActions';
import './Header.css';

const mapDispatchToProps = (dispatch) => {
    return {
      onAddCount: (addValue) => dispatch(addNumber()),
      onSubCount: (subValue) => dispatch(subNumber())
    }
}

const mapStateToProps = (state) => {
    return {
      count: state.handleCount.count
    }
}

const Header = ({ onAddCount, onSubCount, count }) => {
  return (
    <header>
        <button onClick={() => onAddCount()} className='add'>+</button>
            <div className='count-wrapper'>{count}</div>
        <button onClick={() => onSubCount()} className='sub'>-</button>
    </header>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);