import { ACTIONS } from './actions.js'

export function reducer(state, action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return {
                ...state,
                activeTasks: [...state.activeTasks, newTodo(action.payload.value, action.payload.priority, action.payload.calendar)]
            }
        case ACTIONS.DELETE_TODO:
            return {
                ...state,
                activeTasks: state.activeTasks.filter(
                    (task) => task.id !== action.payload.id
                ),
            }    
        case ACTIONS.COMPLETE_TODO:
            const completedTask = state.activeTasks.find(
              (task) => task.id === action.payload.id
            );
            const completedTaskWithDate = {
              ...completedTask,
              endDate: new Date(),
            };
            return {
              ...state,
              activeTasks: state.activeTasks.filter(
                (task) => task.id !== action.payload.id
              ),
              completedTasks: [...state.completedTasks, completedTaskWithDate],
            };
        case ACTIONS.EDIT_TODO:
            const updatedTasks = state.activeTasks.map((task) => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        value: action.payload.newValue
                    };
                }
                return task;
            });
            return {
                ...state,
                activeTasks: updatedTasks
            };
        case ACTIONS.SET_STATE:
            return action.payload;
        default:
            return state;
    }
}

function newTodo(value, priority, calendar){
    return{
        id: Date.now(),
        value: value,
        priority: priority,
        calendar: calendar,
    }
}