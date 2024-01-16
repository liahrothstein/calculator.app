import { useState } from "react";
import { Input, Button } from "../../../shared";
import { calculate, resetAll } from '../model'

export const TheNumberPercentageOfTheNumber = () => {
    const [firstNumber, setFirstNumber] = useState<number>(0);
    const [secondNumber, setSecondNumber] = useState<number>(0);
    const [percentage, setPercentage] = useState<number>(0);

    return (
        <div className="theNumberPercentageOfTheNumber">
            <div className="result">{`Число ${firstNumber} от числа ${secondNumber} = ${percentage}%`}</div>
            <form>
                Сколько % составляет число
                <Input value={firstNumber} stateDispatch={setFirstNumber} /> от числа
                <Input value={secondNumber} stateDispatch={setSecondNumber} />
                <Button textValue={'Посчитать'} onClickHandler={() => setPercentage(calculate(firstNumber, secondNumber))} />
                <Button textValue={'Сбросить Все'} onClickHandler={() => resetAll(setFirstNumber, setSecondNumber, setPercentage)} />
            </form>
        </div>
    )
}