import { getVisibleTodos } from '../../main';
import * as Action from '../actions/';

export const mapStateToProps = (
  state,
  ownProps
) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    ),
    active: ownProps.filter === state.visibilityFilter
  };
};

export const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onTodoClick: (id) => {
      dispatch(
        Action.toggleTodo(id)
      );
    },
    onClick: () => {
      dispatch(
        Action.setVisibilityFilter(ownProps.filter)
      );
    }
  };
};
