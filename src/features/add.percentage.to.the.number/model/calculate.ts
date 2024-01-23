export default function calculate(percentage: number, number: number): number {
    var coefficient: number = number / 100;
    var theNumberPercentage: number = coefficient * percentage;
    return Math.round((theNumberPercentage + number) * 100) / 100
}