import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/home';
import { PercentCalculator } from '../../pages/percent.calculator';
import './routes.content.scss';

export const RoutesContent = () => {

    return (
        <div className="routesContent">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/percent-calculator' element={<PercentCalculator />} />
            </Routes>
        </div>
    )
}