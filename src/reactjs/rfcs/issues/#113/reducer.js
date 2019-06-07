const initialState = {
  initial: true,
  data: [{
    id: 0,
    text: 'temp todo',
    dueDate: new Date(),
    completedDate: '',
    isDeleted: false,
    isCompleted: false,
  }],
  error: false,
  isLoading: false,
  isEdit: false,
};

export default function root(state = initialState, action) {
  switch (action.type) {
    case LOAD_PENDING_TODO:
      return {
        ...state,
        data: [...action.data],
      };

    default:
      return state;
  }
}
