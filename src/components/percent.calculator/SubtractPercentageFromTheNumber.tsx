import { useState } from "react";
import { Input, Button } from "..";

export const SubtractPercentageFromTheNumber = () => {
    const [percentage, setPercentage] = useState<number>(0);
    const [number, setNumber] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    function calculate(): void {
        var coefficient: number = number / 100;
        var theNumberPercentage: number = coefficient * percentage;
        setResult(Math.round((number - theNumberPercentage) * 100) / 100)
    }

    function resetAll(): void {
        setPercentage(0)
        setNumber(0);
        setResult(0);
    }

    return (
        <div className="subtractPercentageFromTheNumber">
            <div className="result">{`Вычесть ${percentage}% от числа ${number} = ${result}`}</div>
            <form>
                Вычесть
                <Input value={percentage} stateDispatch={setPercentage} /> % от числа
                <Input value={number} stateDispatch={setNumber} />
                <Button textValue={'Посчитать'} onClickHandler={calculate} />
                <Button textValue={'Сбросить Все'} onClickHandler={resetAll} />
            </form>
        </div>
    )
}