// npm run dev
// TODO Create header with the title of the document.
import Header from "./Header";
import MainForm from "./MainForm";

function App() {
    return (
        <>
            <Header />
            <article className="form-container">
                <MainForm />
            </article>
        </>
    );
}

export default App;
