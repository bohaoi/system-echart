export default {
    state: {
        menu:[],
        currentMenu:null
    },
    mutations: {
        selectMenu(state,val){
            // state.currentMenu = val;
            val.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = val);
        }
    },
    actions: {
    }
}