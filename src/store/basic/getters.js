/**
 * Created by Aiyartoth on 2017/4/10 0010.
 */
const getters = {
    doneTodos(state){
        // commit("increment")
        return state.todos.filter(todo=>todo.done);
    },
    doneTodosCount(state, getters){
        return getters.doneTodos.length;
    }
}
export default getters