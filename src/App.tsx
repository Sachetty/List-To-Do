import {useState} from 'react';
import * as C from './App.Style';
import {Item} from './types/Item';
import {ListItem} from './components/ListItem';
import {AddArea} from './components/AddArea';

const App = () => {

  const[list, setList] = useState<Item[]>([
    {id:1, name: 'Comprar pão na padaria', done: false},
    {id:2, name: 'Comprar bolo na padaria', done: true},
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

      {/*Área de adicionar nova tarefa*/}

      <AddArea></AddArea>

       {/*Lista de tarefas*/}
       {list.map((item, index) => (
         <ListItem key={index} item={item}/>
       ))}

      </C.Area>
    </C.Container>
  );
}

export default App;