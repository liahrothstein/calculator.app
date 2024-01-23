import { Route, Routes } from 'react-router-dom';
import { Home, PercentCalculator } from '../../../pages';

export default function RoutesContent() {

    return (
        <div className="routesContent">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/percent-calculator' element={<PercentCalculator />} />
            </Routes>
        </div>
    )
}