import { FirstNumberDispatch, SecondNumberDispatch, PercentageDispatch } from '../../../shared';

export function resetAll(setFirstNumber: FirstNumberDispatch, setSecondNumber: SecondNumberDispatch, setPercentage: PercentageDispatch): void {
    setFirstNumber(0);
    setSecondNumber(0);
    setPercentage(0)
}