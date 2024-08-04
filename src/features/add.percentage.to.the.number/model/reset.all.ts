import type { PercentageDispatch, NumberDispatch, ResultDispatch } from '../../../shared/types';

export default function resetAll(setPercentage: PercentageDispatch, setNumber: NumberDispatch, setResult: ResultDispatch): void {
    setPercentage(0);
    setNumber(0);
    setResult(0)
}