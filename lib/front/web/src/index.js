import m, { route } from 'mithril';
import 'purecss';
import './index.css';

import Layout from './components/Layout';
import App from './components/App';
import Main from './components/Main';
import Login from './components/Login';
import UserProfile from './components/UserProfile'
import WebsiteList from './components/WebsiteList'

import UserStore from './stores/user';

const root = document.getElementById('root')

const checkLogged = () => {
    if (!UserStore.isLoggedIn()) {
        m.route.set('/');
    }
}

route(root, '/', {
    '/': {
        render() {
            return m(Layout, m(App, m(Main)));
        }
    },
    '/login': {
        render() {
            return m(Layout, m(Login));
        }
    },
    '/profile': {
        onmatch: checkLogged,
        render() {
            return m(Layout,
                m(App,
                    m(UserProfile, { user: UserStore.getCurrentUser() })
                )
            );
        }
    },
    '/websites': {
        onmatch: checkLogged,
        render() {
            return m(Layout,
                m(App,
                    m(WebsiteList, { websites: UserStore.getCurrentUser().websites })
                )
            );
        }
    },
    '/logout': {
        onmatch() {
            if(confirm('Do you really wish to logout?')) {
                UserStore.logOut();
                m.route.set('/');
            }
        }
    }
});