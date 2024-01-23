import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {

    return (
        <div className="header">
            <Link to='/'>Главная</Link>
            <Link to='/percent-calculator'>Калькулятор Процентов</Link>
        </div>
    )
}