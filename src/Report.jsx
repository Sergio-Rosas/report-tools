// TODO Report data should call local storage on render. Get rid of all handles and states.
export default function Report({ reportData }) {
    return (
        <>
            {reportData.map((obj, idx) => (
                <div>
                    <p>{idx}</p>
                    <p>{obj.referencia}</p>
                </div>
            ))}
        </>
    );
}
