import { SalaryCalculate } from '../../../features';

import './SalaryCalculator.scss';

export default function SalaryCalculator() {

    return (
        <div className='salaryCalculator'>
            <header className="header">Калькулятор ЗП</header>
            <SalaryCalculate />
        </div>
    )
}
