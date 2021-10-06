import {useState} from 'react'
import * as C from './style';
import {Item} from '../../types/Item'

type Props ={
    item: Item
}

export const ListItem = ({item}: Props) => {

    const [ischecked, setIsChecked] = useState(item.done);

    return(
        <C.Container done = {ischecked}>
            <input 
                type="checkbox" 
                checked = {ischecked} 
                onChange = {e => setIsChecked(e.target.checked)}
            />
            <label>{item.name}</label>
        </C.Container>
          
    )    
}