

const useUserStore = defineStore('user', { 
    state: () => {
        return { 
            token: '',
            userInfo: {},
            routes: [],
            buttons: [],
        }
    },
    actions: { 
        login(data) {
            this.setToken(data.token);
            this.setUserInfo(data);
        },
        setToken(token) {
            this.token = token;
        },
        setUserInfo(userInfo) {
            this.userInfo = userInfo;
        },
        getUserInfo() {
            return new Promise((resolve, reject) => { 
                
            });
        },
        setRoutes(routes) {
            this.routes = routes;
        },
        setButtons(buttons) {
            this.buttons = buttons;
        },
    },
});