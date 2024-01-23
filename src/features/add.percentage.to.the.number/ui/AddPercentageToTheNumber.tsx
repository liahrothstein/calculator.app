import { useState } from "react";
import { Input, Button } from "../../../shared";
import { calculate, resetAll } from '../model'

export default function AddPercentageToTheNumber() {
    const [percentage, setPercentage] = useState<number>(0);
    const [number, setNumber] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    return (
        <div className="addPercentageToTheNumber">
            <div className="result">{`Прибавить ${percentage}% к числу ${number} = ${result}`}</div>
            <form>
                Прибавить
                <Input value={percentage} stateDispatch={setPercentage} /> % к числу
                <Input value={number} stateDispatch={setNumber} />
                <Button textValue={'Посчитать'} onClickHandler={() => setResult(calculate(percentage, number))} />
                <Button textValue={'Сбросить Все'} onClickHandler={() => resetAll(setPercentage, setNumber, setResult)} />
            </form>
        </div>
    )
}