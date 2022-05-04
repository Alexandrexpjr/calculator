import { Dispatch } from "react";

export default interface ICalculatorContext {
  operator: string,
  setOperator: Dispatch<string>,
  memorizedNumber: number,
  setMemorizedNumber: Dispatch<number>,
  memory: string[],
  setMemory: Dispatch<string[]>
}