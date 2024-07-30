import { useState } from 'react';

import { Button, Input } from '../../../shared';

import { calculateWages } from '../model/calculate';

export default function SalaryCalculator() {
    const [leads, setLeads] = useState<number>(0);
    const [numberOfHours, setNumberOfHours] = useState<number>(0);
    const [resultArray, setResultArray] = useState<number[]>([0, 0, 0, 0]);

    return (
        <div className='salaryCalculate'>
            <form>
                Лиды <Input value={leads} stateDispatch={setLeads} />
                Отработанных часов <Input value={numberOfHours} stateDispatch={setNumberOfHours} />
                <Button textValue='Посчитать' onClickHandler={() => (setResultArray(calculateWages(leads, numberOfHours)))} />
            </form>
            <p className="result">
                {`КПД = ${resultArray[0]}`} <br />
                {`Оклад = ${resultArray[1]} ₽`} <br />
                {`Премия = ${resultArray[2]} ₽`} <br />
                {`ЗП = ${resultArray[3]} ₽`} <br />
            </p>
        </div>
    )
}
