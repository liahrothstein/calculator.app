import { Classes } from '../../../shared/types';

function calculateEfficiency(leads: number, numberOfHours: number) {
    let efficiency = (leads / numberOfHours);

    if (efficiency >= 0.7) {
        return (0.7)
    } else if (efficiency >= 0.5) {
        return (0.5)
    } else if (efficiency >= 0.3) {
        return (0.3)
    } else if (efficiency >= 0.25) {
        return (0.25)
    } else {
        return (0)
    };
};

function calculateHourRate(efficiency: number) {
    switch (efficiency) {
        case 0.7:
            return (206.25);
            break;
        case 0.5:
            return (175);
            break;
        case 0.3:
            return (162.50);
            break;
        case 0.25:
            return (143.75);
            break;
        default:
            return (125)
    }
};

function calculateScores(efficiency: number) {
    switch (efficiency) {
        case 0.7:
            return (5);
            break;
        case 0.5:
            return (4);
            break;
        case 0.3:
            return (3);
            break;
        case 0.25:
            return (2);
            break;
        default:
            return (0)
    }
};

function calculateSalary(numberOfHours: number, hourRate: number): number {
    let salary = (numberOfHours * hourRate);

    return (salary);
};

function calculateBonus(leads: number, scores: number): number {
    let bonus = (leads * scores * 100);

    return (bonus);
};

export function calculateWages(leads: number, numberOfHours: number): number[] {
    let efficiency = calculateEfficiency(leads, numberOfHours);
    let hourRate = calculateHourRate(efficiency);
    let scores = calculateScores(efficiency);
    let salary = calculateSalary(numberOfHours, hourRate);
    let bonus = calculateBonus(leads, scores);

    let wages = (salary + bonus);

    return [efficiency, salary, bonus, wages];
};

export function computeClass(leads: number, numberOfHours: number): Classes {
    let efficiency = calculateEfficiency(leads, numberOfHours);

    switch (efficiency) {
        case 0.7:
            return (Classes.Professional);
            break;
        case 0.5:
            return (Classes.Expert);
            break;
        case 0.3:
            return (Classes.FirstClass);
            break;
        case 0.25:
            return (Classes.SecondClass);
            break;
        default:
            return (Classes.ThirdClass)
    }
};