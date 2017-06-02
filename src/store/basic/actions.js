/**
 * Created by Aiyartoth on 2017/4/10 0010.
 */
const actions = {
    /*increment(context){
     context.commit('increment')
     },*/
    increment({commit}){
        setTimeout(()=> {
            commit('increment');
        }, 2000);
    }
}
export default actions;