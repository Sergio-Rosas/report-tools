export default function InputChange({ text, numberValue, handleChange }) {
    return (
        <div>
            <label>
                {text}
                <input
                    type="number"
                    step="5"
                    value={numberValue}
                    onChange={handleChange}
                />
                %
            </label>
        </div>
    );
}
