import { TheNumberPercentage } from './the.number.percentage/TheNumberPercentage'
import { TheNumberPercentageOfTheNumber } from './the.number.percentage.of.the.number/TheNumberPercentageOfTheNumber'
import { AddPercentageToTheNumber } from './add.percentage.to.the.number/AddPercentageToTheNumber'
import { SubtractPercentageFromTheNumber } from './subtract.percentage.from.the.number/SubtractPercentageFromTheNumber'
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