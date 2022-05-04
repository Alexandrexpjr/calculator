import { createContext } from "react";
import ICalculatorContext from "../interface/ICalculatorContext";
const CalculatorContext = createContext({
  operator: '',
  setOperator: () => {},
  memorizedNumber: 0,
  setMemorizedNumber:() => {},
  memory: [],
  setMemory:() => {}
} as ICalculatorContext);

export default CalculatorContext;