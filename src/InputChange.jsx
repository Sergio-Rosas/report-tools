export default function InputChange({
    text,
    numberValue,
    handleChange,
    disabled,
}) {
    return (
        <div>
            <label className="subtitle flex-container--vertical">
                {text}
                <div>
                    <input
                        className="input--size"
                        type="number"
                        step="5"
                        value={numberValue}
                        onChange={handleChange}
                        disabled={disabled}
                    />
                    %
                </div>
            </label>
        </div>
    );
}
