import Form from "./Form";
import Tasks from "./Tasks";
const tasks = [
  {id:1, content:"zrobić zadania z CSS battle", done: true},
  {id:2, content:"zrobić projekt na studia", done:false}
];

const taskHideDone = false;

function App() {
  return (
    <main className="container">
    <header>
        <h1>Lista zadań</h1>
    </header>

    <section className="section">
        <h2 className="section__heading">Dodaj nowe zadania</h2>
        <div className="section__wrapper">
          <Form/>
        </div>
    </section>

    <section className="section">
        <header className="section__header">
            <h2 className="section__heading">Lista zadań</h2>
            <div className="buttons"></div>
        </header>
        <div className="section__wrapper">
           <Tasks tasks = {tasks} taskHideDone={taskHideDone}/>
        </div>

    </section>
</main>
  );
}

export default App;
