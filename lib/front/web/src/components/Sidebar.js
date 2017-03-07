import m from 'mithril';

const Sidebar = {
    view() {
        return m('.pure-menu', [
            m('ul.pure-menu-list', [
                m('li.pure-menu-item', m('a.pure-menu-link', {href: '#!/profile'}, 'Profile')),
                m('li.pure-menu-item', m('a.pure-menu-link', {href: '#!/websites'}, 'Websites')),
            ])
        ])
    }
};

export default Sidebar;