import { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import MultiplesTable from './components/MultiplesTable/MultiplesTable';
import { addNumber, subNumber } from './redux/actions/countActions';


const mapDispatchToProps = (dispatch) => {
  return {
    onAddCount: (addValue) => dispatch(addNumber(addValue)),
    onSubCount: (subValue) => dispatch(subNumber(subValue))
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.handleCount.count
  }
}

function App({ onAddCount, onSubCount, count }) {
  // const [gap, setGap] = useState(1);


  

  

  return (
    <div className="App">
      <Header />
      <main>
        <MultiplesTable />
      </main>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
