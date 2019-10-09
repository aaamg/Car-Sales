import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature } from './actions'

const App = (state) => {

  //console.log(changers)
  //console.log(state)

  const removeFeature = item => {
    // dispatch an action here to remove an item
    state.removeFeature(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    state.addFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} addFeature={buyItem}/>
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
}

export default connect(
  mapStateToProps, 
  { addFeature, removeFeature }
  )(App);
