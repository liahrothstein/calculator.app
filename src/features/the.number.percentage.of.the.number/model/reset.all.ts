import type { FirstNumberDispatch, SecondNumberDispatch, PercentageDispatch } from '../../../shared/types';

export default function resetAll(setFirstNumber: FirstNumberDispatch, setSecondNumber: SecondNumberDispatch, setPercentage: PercentageDispatch): void {
    setFirstNumber(0);
    setSecondNumber(0);
    setPercentage(0)
}