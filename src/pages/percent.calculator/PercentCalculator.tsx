
import { AddPercentageToTheNumber, SubtractPercentageFromTheNumber, TheNumberPercentage, TheNumberPercentageOfTheNumber } from '../../components'
import './percent.calculator.scss'

export const PercentCalculator = () => {

    return (
        <div className="percentCalculator">
            <header className="header">Калькулятор Процентов</header>
            <TheNumberPercentage />
            <TheNumberPercentageOfTheNumber />
            <AddPercentageToTheNumber />
            <SubtractPercentageFromTheNumber />
        </div>
    )
}