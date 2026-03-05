// npm run dev
// TODO Create header with the title of the document.
// TODO When the "guardar" button is clicked the form goes back to the template state.
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
