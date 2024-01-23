import { FirstNumberDispatch, SecondNumberDispatch, PercentageDispatch } from '../../../shared';

export default function resetAll(setFirstNumber: FirstNumberDispatch, setSecondNumber: SecondNumberDispatch, setPercentage: PercentageDispatch): void {
    setFirstNumber(0);
    setSecondNumber(0);
    setPercentage(0)
}