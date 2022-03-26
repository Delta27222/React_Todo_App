import React from 'react';
import { TodoContext } from "../TodoContext";
import './TodoItem.css';

// Imagenes svg
import { ReactComponent as DeleteIcon }  from "../assets/delete.svg";

const path1 = 'https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/64/000000/external-check-ui-essential-febrian-hidayat-outline-color-febrian-hidayat.png'
const path2 = 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-setting-essentials-pack-tanah-basah-glyph-tanah-basah.png'

function TodoItem(props) {

  const {numberOfTask} = React.useContext(TodoContext)

  return (
    <li className="TodoItem">
      <img
        src={`${props.completed ? path1 : path2}`}
        className={`Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      />

      <div className='container_Todo_Name'>
        <p className='TodoItem-p1'>Task {numberOfTask(props.id)}</p>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
      </div>

      <DeleteIcon className="Icon-delete" onClick={props.onDelete}/>
    </li>
  );
}

export { TodoItem };