import "./style.css";

const Buttons = (props) =>{
    if(props.tasks.length ===0){
        return null;
    };
    return(
        <div className="buttons">
            <button className = "buttons__btnElement">{props.hideTaskDone ? "Pokaż" : "Ukryj"} ukończone </button>
            <button className = "buttons__btnElement"
            disabled = {props.tasks.every(task => task.done)}>
                 Ukończ wszystkie
            </button> 
            `
        </div>
    );
}
export default Buttons;