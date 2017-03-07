import m from 'mithril';
import UserStore from '../stores/user';

export default {
    view() {
        return m('nav.pure-menu.pure-menu-horizontal', [
            m('a.pure-menu-heading.pure-menu-link', {href: '#!/'}, 'Lacest'),
            m('ul.pure-menu-list', [
                m('li.pure-menu-item', [
                    UserStore.getCurrentUser() === null ? 
                        m('a.pure-menu-link', {href: '#!/login'}, 'Login')
                        :
                        m('a.pure-menu-link', {href: '#!/logout'}, 'Logout')
                ]),
            ])
        ])
    }
}