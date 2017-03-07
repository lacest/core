import m from 'mithril';

const Website = {
    view(vnode) {
        const { name } = vnode.attrs;
        return m('div', [
            m('div', name),
        ])
    }
}

export default Website;