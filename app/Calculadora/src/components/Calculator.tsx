import React from 'react';
import GenericOperator from './GenericOperator';

function Calculator() {
  return (
    <div>
      <GenericOperator operator = {'plus'}/>
      <GenericOperator operator = {'minus'}/>
      <GenericOperator operator = {'times'}/>
      <GenericOperator operator = {'divide'}/>
    </div> 
  );
}

export default Calculator;