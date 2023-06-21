import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, is_complete, updateCompletion, deleteTask }) => {
  // const [complete, setComplete] = useState(isComplete);
  const buttonClass = is_complete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => updateCompletion(id, is_complete)}
      >
        {title}
      </button>
      <button className="tasks__item__remove button" onClick={() => deleteTask(id)}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  is_complete: PropTypes.bool.isRequired,
  updateCompletion: PropTypes.func,
  deleteTask : PropTypes.func,
};

export default Task;
