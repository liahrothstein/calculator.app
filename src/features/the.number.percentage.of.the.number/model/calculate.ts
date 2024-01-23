export default function calculate(firstNumber: number, secondNumber: number): number {
    var coefficient: number = secondNumber / firstNumber;
    return Math.round((100 / coefficient) * 100) / 100
}