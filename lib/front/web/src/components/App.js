import m from 'mithril';

import Sidebar from './Sidebar'
import UserStore from '../stores/user'

export default {
    view(vnode) {
        const loggedIn = UserStore.isLoggedIn();
        if (loggedIn) {
            return m('div', [
                m('.sidebar', m(Sidebar)),
                m('.main-content', vnode.children),
            ]);
        }

        return m('div', m('h1', 'Welcome to Lacest'));
    }
}