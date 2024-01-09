import { useState } from "react";
import { Input } from "..";

export const TheNumberPercentageOfTheNumber = () => {
    const [firstNumber, setFirstNumber] = useState<number>(0);
    const [secondNumber, setSecondNumber] = useState<number>(0);
    const [percentage, setPercentage] = useState<number>(0);

    function calculate(): void {
        var coefficient: number = secondNumber / firstNumber;
        setPercentage(Math.round((100 / coefficient) * 100) / 100)
    }

    function resetAll(): void {
        setFirstNumber(0);
        setSecondNumber(0);
        setPercentage(0)
    }

    return (
        <div className="theNumberPercentageOfTheNumber">
            <div className="result">{`Число ${firstNumber} от числа ${secondNumber} = ${percentage}%`}</div>
            <form>
                Сколько % составляет число
                <Input value={firstNumber} stateDispatch={setFirstNumber} /> от числа
                <Input value={secondNumber} stateDispatch={setSecondNumber} />
                <button
                    type="button"
                    onClick={calculate}>Посчитать</button>
                <button
                    type="button"
                    onClick={resetAll}>Сбросить Все</button>
            </form>
        </div>
    )
}