/**
 * Created by Aiyartoth on 2017/4/10 0010.
 */
import * as type from './mutations-types'
var mutations = {
    [type.INCREMENT](state){
        state.count++
    },
    [type.INCREMENT_NUM](state, num){
        state.count += num;
    }
}
export default mutations