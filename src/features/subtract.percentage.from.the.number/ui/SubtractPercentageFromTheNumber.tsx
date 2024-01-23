import { useState } from "react";
import { Input, Button } from "../../../shared";
import { calculate, resetAll } from '../model'

export default function SubtractPercentageFromTheNumber() {
    const [percentage, setPercentage] = useState<number>(0);
    const [number, setNumber] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    return (
        <div className="subtractPercentageFromTheNumber">
            <div className="result">{`Вычесть ${percentage}% от числа ${number} = ${result}`}</div>
            <form>
                Вычесть
                <Input value={percentage} stateDispatch={setPercentage} /> % от числа
                <Input value={number} stateDispatch={setNumber} />
                <Button textValue={'Посчитать'} onClickHandler={() => setResult(calculate(number, percentage))} />
                <Button textValue={'Сбросить Все'} onClickHandler={() => resetAll(setPercentage, setNumber, setResult)} />
            </form>
        </div>
    )
}