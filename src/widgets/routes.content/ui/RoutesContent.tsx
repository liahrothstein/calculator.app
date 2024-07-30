import { Route, Routes } from 'react-router-dom';
import { Home, PercentCalculator, SalaryCalculator } from '../../../pages';

export default function RoutesContent() {

    return (
        <div className="routesContent">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/percent-calculator' element={<PercentCalculator />} />
                <Route path='/salary-calculator' element={<SalaryCalculator />} />
            </Routes>
        </div>
    )
}