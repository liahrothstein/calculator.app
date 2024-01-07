import { Link } from 'react-router-dom';
import './header.scss';

export const Header = () => {

    return (
        <div className="header">
            <Link to='/'>Домой</Link>
            <Link to='/percent-calculator'>Калькулятор Процентов</Link>
        </div>
    )
}