import Cookie from 'js-cookie'

export default {
  state: {
    isCollapse: false,
    currentMenu: null,
    menu: [],
    tabsList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
      },
    ],
  },
  mutations: {
    setMenu(state, val) {
      state.menu = val;
      Cookie.set("menu", JSON.stringify(val));
      console.log(val, "vuex");
    },
    clearMenu(state) {
      state.menu = [];
      Cookie.remove("menu");
    },
    addMenu(state, router) {
      if (!Cookie.get('menu')) {
        return
      }
      let menu = JSON.parse(Cookie.get('menu'))
      state.menu = menu
      let currentMenu = [
        {
          path: '/',
          component: () => import(`@/views/Index`),
          children: []
        }
      ]
      console.log(menu)
      menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            item.component = () => import(`@/views/${item.url}`)
            return item
          })
          currentMenu[0].children.push(...item.children)
        } else {
          item.component = () => import(`@/views/${item.url}`)
          currentMenu[0].children.push(item)
        }
      })
      console.log(currentMenu, 'cur')
      router.addRoutes(currentMenu)
    },
    selectMenu(state, val) {
      // state.currentMenu = val;
      // val.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = val);
      if (val.name !== "home") {
        state.currentMenu = val;
        let result = state.tabsList.findIndex((item) => item.name === val.name);
        result === -1 ? state.tabsList.push(val) : "";
      } else {
        state.currentMenu = null;
      }
    },
    closeTab(state, val) {
      let result = state.tabsList.findIndex((item) => item.name === val.name);
      state.tabsList.splice(result, 1);
    },
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    getMenu(state) {
        if (Cookie.get('tagList')) {
          console.log('haha')
          let tagList = JSON.parse(Cookie.get('tagList'))
          state.tabsList = tagList
        }
      },
  },
  actions: {},
};
