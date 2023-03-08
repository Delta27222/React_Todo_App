import React from 'react';
import './TodoItem.css';

// Imagenes svg
import { ReactComponent as DeleteIcon }  from "../assets/delete.svg";

const path1 = 'https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/64/000000/external-check-ui-essential-febrian-hidayat-outline-color-febrian-hidayat.png'
const path2 = 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-setting-essentials-pack-tanah-basah-glyph-tanah-basah.png'

function TodoItem({key, text, completed, id, setId, onComplete, onDelete, setOpenModal, setAction, setTodoText, numberOfTask}) {

  const showModalEdit = (event) => {
    setOpenModal(prevState => !prevState);
    setTodoText(text);
    setAction("editTodo");
    setId(id);
  }
  const showModalConfirmDelete = (event) => {
    setOpenModal(prevState => !prevState);
    setAction("deleteTodo");
    setTodoText(text);
    setId(id);
  }

  return (
    <li className="TodoItem grid_container">
        <img
          alt='img'
          src={`${completed ? path1 : path2}`}
          className={`Icon-check ${completed && 'Icon-check--active icon'}`}
          onClick={onComplete}
        />
        <div className='container_Todo_Name'>
          <p className='TodoItem-p1'>Task {numberOfTask(id)}</p>
          <p id='text_item' className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
            {text}
          </p>
        </div>
        <img
          alt='img1'
          className='Icon_edit'
          src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-pencil-home-improvement-flaticons-flat-flat-icons.png"
          onClick={showModalEdit}
        />
      <DeleteIcon className="Icon-delete" onClick={showModalConfirmDelete}/>
    </li>
  );
}

export { TodoItem };