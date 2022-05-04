import { useContext } from "react";
import CalculatorContext from "../context/calculatorContext";
import { OperatorEnum } from "../enums/OperatorEnum";
import { Operators } from "../types/Operators";

function GenericOperator({ operator }:Operators) {
  const { setOperator } = useContext(CalculatorContext);

  return (
    <button onClick={ () => setOperator(OperatorEnum[operator])}>
      { OperatorEnum[operator] }
    </button>
  );
}

export default GenericOperator;