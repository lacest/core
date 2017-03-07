import m from 'mithril';
import UserStore from '../stores/user';

const Main = {
    view() {
        const user = UserStore.getCurrentUser();
        
        return m('div', [
            m('h1', `Welcome, ${user.name}`),
        ]);
    }
}

export default Main;