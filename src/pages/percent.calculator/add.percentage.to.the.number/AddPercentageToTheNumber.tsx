import { useState } from "react";

export const AddPercentageToTheNumber = () => {
    const [percentage, setPercentage] = useState<number>(0);
    const [number, setNumber] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    function calculate(): void {
        var coefficient: number = number / 100;
        var theNumberPercentage: number = coefficient * percentage;
        setResult(Math.round((theNumberPercentage + number) * 100) / 100)
    }

    function resetAll(): void {
        setPercentage(0)
        setNumber(0);
        setResult(0);
    }

    return (
        <div className="addPercentageToTheNumber">
            <div className="result">{`Прибавить ${percentage}% к числу ${number} = ${result}`}</div>
            <form>
                Прибавить
                <input
                    type="number"
                    value={percentage}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPercentage(+e.target.value)} /> % к числу
                <input
                    type="number"
                    value={number}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumber(+e.target.value)} />
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