import { ACTIONS } from "../reducer/actions";

function DeleteTask({ handleCancelDelete, todoId, dispatch, darkMode }) {
  const handleDelete = (todoId) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todoId } });
  };

  return (
    <div className="deletetask__container">
      <div
        className={
          darkMode ? "deletetask__confirm darkmode" : "deletetask__confirm"
        }
      >
        <h3 className="deletetask__title">Are you sure?</h3>

        <div className="deletetask__options">
          <button
            onClick={() => handleDelete(todoId)}
            className="deletetask__yes"
          >
            Yes
          </button>
          <button onClick={handleCancelDelete} className="deletetask__no">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteTask;
