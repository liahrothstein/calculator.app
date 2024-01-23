import { PercentageDispatch, NumberDispatch, ResultDispatch } from '../../../shared';

export default function resetAll(setPercentage: PercentageDispatch, setNumber: NumberDispatch, setResult: ResultDispatch): void {
    setPercentage(0);
    setNumber(0);
    setResult(0)
}