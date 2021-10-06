import {useState} from 'react';
import * as C from './App.Style';
import {Item} from './types/Item';
import {ListItem} from './components/ListItem';
import {AddArea} from './components/AddArea';

const App = () => {

  const[list, setList] = useState<Item[]>([]);

  const hendleAddTask = (taskName: string) => {
    let newList = [... list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList)
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

      {/*Área de adicionar nova tarefa*/}

      <AddArea onEnter= {hendleAddTask} />

       {/*Lista de tarefas*/}
       {list.map((item, index) => (
         <ListItem key={index} item={item}/>
       ))}

      </C.Area>
    </C.Container>
  );
}

export default App;