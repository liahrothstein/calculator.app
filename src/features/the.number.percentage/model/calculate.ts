export function calculate(number: number, percentage: number): number {
    var coefficient: number = number / 100;
    return Math.round((coefficient * percentage) * 100) / 100
}