export default class TodoAppService {
  loadPendingTodo() {
    return store.get('todoApp').data.filter(todo => !todo.isCompleted && !todo.isDeleted);
  }
}

export const loadPendingTodo = () => ({
  type: LOAD_PENDING_TODO,
  data: todoService.loadPendingTodo(),
});
