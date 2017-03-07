import m from 'mithril';

const UserStore = {
    currentUser: null,
    
    setCurrentUser(user) {
        UserStore.currentUser = user;
    },

    getCurrentUser() {
        return UserStore.currentUser;
    },

    isLoggedIn() {
        return UserStore.currentUser !== null;
    },

    logOut() {
        UserStore.currentUser = null;
    },

    updateUser(user) {
        const id = this.currentUser.id
        return m.request(`//rem-rest-api.herokuapp.com/api/users/${id}`, {
            withCredentials: true,
            method: 'PUT',
            data: user,
        })
    }
};

export default UserStore;