import m from 'mithril';

import Website from './Website'

const WebsiteList = {
    view(vnode) {
        const { websites } = vnode.attrs;
        return m('ul',
            websites.map(({ name }) => m(Website, { name })),
        )
    }
}

export default WebsiteList