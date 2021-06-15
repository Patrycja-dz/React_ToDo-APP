import "./style.css";
const Form = () => (
  <form className="form">
    <input
      placeholder="Co jest do zrobienia?"
      className="form__field"
      required
      autofocus
    />
    <button className="form__addTaskButton">Dodaj zadanie</button>
  </form>
);
export default Form;
