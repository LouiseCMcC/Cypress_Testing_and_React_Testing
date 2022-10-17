import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('Should add 1 to 4 and get 5', () => {
    const number1 = container.getByTestId("number1");
    const number4 = container.getByTestId("number4");
    const addOperator  = container.getByTestId("operator-add");
    const equalsButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number1)
    fireEvent.click(addOperator)
    fireEvent.click(number4)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('5');
  });

  it('Should subtract 4 from 7 and get 3', () => {
    const number7 = container.getByTestId("number7");
    const number4 = container.getByTestId("number4");
    const subtractOperator  = container.getByTestId("operator-subtract");
    const equalsButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number7)
    fireEvent.click(subtractOperator)
    fireEvent.click(number4)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('3');
  });

  it('Should multiply 3 by 5 and get 15', () => {
    const number3 = container.getByTestId("number3");
    const number5 = container.getByTestId("number5");
    const multiplyOperator  = container.getByTestId("operator-multiply");
    const equalsButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number3)
    fireEvent.click(multiplyOperator)
    fireEvent.click(number5)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('15');
  });

  it('Should divide 21 by 7 and get 3', () => {
    const number2 = container.getByTestId("number2");
    const number1 = container.getByTestId("number1");
    const number7 = container.getByTestId("number7")
    const divideOperator  = container.getByTestId("operator-divide");
    const equalsButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number2)
    fireEvent.click(number1)
    fireEvent.click(divideOperator)
    fireEvent.click(number7)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('3');
  });

  it('Should concatonate multiple number button clicks', () => {
    const number2 = container.getByTestId("number2");
    const number1 = container.getByTestId("number1");
    const number7 = container.getByTestId("number7");
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number2)
    fireEvent.click(number1)
    fireEvent.click(number7)
    expect(runningTotal.textContent).toEqual('217');
  });

  it('Should divide 21 by 7 and get 3', () => {
    const number2 = container.getByTestId("number2");
    const number1 = container.getByTestId("number1");
    const number7 = container.getByTestId("number7")
    const multiplyOperator  = container.getByTestId("operator-multiply");
    const addOperator  = container.getByTestId("operator-add");
    const equalsButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number2)
    fireEvent.click(multiplyOperator)
    fireEvent.click(number1)
    fireEvent.click(addOperator)
    fireEvent.click(number7)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('9');
  });

  it('Should clear the running total without affecting the calculation', () => {
    const number2 = container.getByTestId("number2");
    const number1 = container.getByTestId("number1");
    const number7 = container.getByTestId("number7")
    const multiplyOperator  = container.getByTestId("operator-multiply");
    const addOperator  = container.getByTestId("operator-add");
    const equalsButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId('running-total');
    const clearTotal = container.getByTestId('clear');
    fireEvent.click(number2)
    fireEvent.click(multiplyOperator)
    fireEvent.click(number1)
    fireEvent.click(equalsButton)
    fireEvent.click(clearTotal)
    fireEvent.click(addOperator)
    fireEvent.click(number7)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('9');
  });



})