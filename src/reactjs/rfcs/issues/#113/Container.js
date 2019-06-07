import { dispatch } from "rxjs/internal/observable/range";
import TodoAppService from "./action";

// Container
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(RootActions, dispatch) });

export const getTodos = (loadTodo) => {
  try {
    loadTodo();
  } catch (error) {
    console.log(error); // eslint-disable-line
  }
};

const Home = (props) => {
  const { root, actions } = props;

  useEffect(() => {
    getTodos(actions.loadPendingTodo);
  }, [root.data]);

  return (
    <Segment>
      <Error {...root } />
      <TodoList { ...root } actions={actions} />
  </Segment>
  );
};

const Home = (props) => {
  const { root, actions } = props;

  return (
    <Segment>
      <Error/>
      <TodoList isEdit={root.isEdit} todo={}/>
    </Segment>
  )
}
// https://github.com/reactjs/rfcs/issues/113
export default connect(mapStateToProps, mapDispatchToProps)(Home);