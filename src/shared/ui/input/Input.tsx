interface InputProps {
    value: number,
    stateDispatch: (value: number) => void
}

export const Input = ({ value, stateDispatch }: InputProps) => {

    return (
        <>
            <input
                type="number"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => stateDispatch(+e.target.value)} />
        </>
    )
}