import { createContext, Dispatch, useState } from 'react';
import ICalculatorContext from '../interface/ICalculatorContext';
import { ReactChildren } from '../types/ReactChildren';
import CalculatorContext from './calculatorContext';

function CalculatorProvider({ children }: ReactChildren) {
  const [operator, setOperator] = useState('');
  const [memorizedNumber, setMemorizedNumber] = useState(0);
  const [memory, setMemory] = useState<string[]>([]);

  const initialValue: ICalculatorContext = {
    operator,
    setOperator,
    memorizedNumber,
    setMemorizedNumber,
    memory,
    setMemory
  };

  return (
    <CalculatorContext.Provider value={initialValue}>
      { children }
    </CalculatorContext.Provider>
  );
}

export default CalculatorProvider;