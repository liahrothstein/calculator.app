interface ButtonProps {
    textValue: string,
    onClickHandler: () => void
}

export default function Button({ textValue, onClickHandler }: ButtonProps) {

    return (
        <button
            type="button"
            onClick={onClickHandler}>{textValue}</button>
    )
}