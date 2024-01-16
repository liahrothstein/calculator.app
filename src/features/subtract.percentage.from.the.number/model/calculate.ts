export function calculate(number: number, percentage: number): number {
    var coefficient: number = number / 100;
    var theNumberPercentage: number = coefficient * percentage;
    return Math.round((number - theNumberPercentage) * 100) / 100
}