import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faSave, faTrash} from "@fortawesome/free-solid-svg-icons";

const TotoItem = ({item, deleteTodo, updateTodo }) => {
    const [edit, setEdit] = useState(false)
    const [modified, setModified] = useState(item.title)
    const handleSave = () => {
        updateTodo(modified, item.id)
        setEdit(false)
    }


    return (

            <li  className='list-group-item d-flex justify-content-between align-item-center '>
                {
                    edit ? <input type="text" defaultValue={item.title}
                    onChange={(e) => setModified(e.target.value)}/>
                        : <span>{item.title}</span>
                }
                <div>
                    {/*кнопка редактировть*/}
                    <button type='button' className="btn btn-warning me-2 btn-sm text-white"
                            onClick={() => edit ? handleSave() : setEdit(true)}>
                        {/*когда мы редактируем, сделай setEdit 'true'*/}
                        {
                            edit ? <FontAwesomeIcon icon={faSave}/> : <FontAwesomeIcon icon={faEdit}/>
                        }
                    </button>

                    {/*//btn delete*/}
                    <button type={"button"} className="btn btn-danger btn-sm"
                            onClick={() => deleteTodo(item.id)}>
                        {/*при клике на btn сраб-ет функ-я deleteTodo*/}
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </div>
            </li>

    );
};

export default TotoItem;