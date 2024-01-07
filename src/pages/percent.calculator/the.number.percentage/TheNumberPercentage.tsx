import { useState } from "react"

export const TheNumberPercentage = () => {
    const [percentage, setPercentage] = useState<number>(0);
    const [number, setNumber] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    function calculate(): void {
        var coefficient: number = number / 100;
        setResult(Math.round((coefficient * percentage) * 100) / 100)
    }

    function resetAll(): void {
        setPercentage(0);
        setNumber(0);
        setResult(0)
    }

    return (
        <div className="theNumberPercentage">
            <div className="result">{`${percentage}% от числа ${number} = ${result}`}</div>
            <form>
                Сколько составляет
                <input
                    type="number"
                    value={percentage}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPercentage(+e.target.value)} />% от числа
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