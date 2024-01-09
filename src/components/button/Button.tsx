interface ButtonProps {
    textValue: string,
    onClickHandler: () => void
}

export const Button = ({ textValue, onClickHandler }: ButtonProps) => {

    return (
        <>
            <button
                type="button"
                onClick={onClickHandler}>{textValue}</button>
        </>
    )
}