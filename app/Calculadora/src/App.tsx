import React from 'react';
import Calculator from './components/Calculator';
import CalculatorProvider from './context/calculatorProvider';

function App() {
  return (
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  )
}

export default App
