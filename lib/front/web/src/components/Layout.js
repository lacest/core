import m from 'mithril';
import Nav from './Nav';

export default {
    view(vnode) {
        return m('main', [
            m(Nav),
            m('.app', [
                vnode.children
            ]),
        ])
    }
}