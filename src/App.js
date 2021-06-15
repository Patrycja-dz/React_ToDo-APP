import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
const tasks = [
  {id:1, content:"zrobić zadania z CSS battle", done: true},
  {id:2, content:"zrobić projekt na studia", done:false}
];

const taskHideDone = false;

function App() {
  return (
    <Container>
      <Header title ="Lista zadań"/>
    
<Section
title = "Dodaj nowe zadanie"
body = {<Form/>}
/>
<Section
title ="Lista zadań"
extraContent ={<Buttons tasks = {tasks} taskHideDone = {taskHideDone}/>}
body={ <Tasks tasks = {tasks} taskHideDone={taskHideDone}/>}/>

   
</Container>
  );
}

export default App;
