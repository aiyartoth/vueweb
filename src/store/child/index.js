/**
 * Created by Aiyartoth on 2017/4/10 0010.
 */
import * as type from './mutations-types'
export default {
    state: {
        count: 100
    },
    mutations: {
        [type.INCREMENT](state){
            state.count += 100;
        }
    }
}