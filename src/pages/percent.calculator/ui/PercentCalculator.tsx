
import { AddPercentageToTheNumber, SubtractPercentageFromTheNumber, TheNumberPercentage, TheNumberPercentageOfTheNumber } from '../../../features';
import './PercentCalculator.scss';

export default function PercentCalculator() {

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