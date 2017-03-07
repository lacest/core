import m from 'mithril';
import stream from 'mithril/stream';

import AuthStore from '../stores/auth';
import UserStore from '../stores/user';

const email = stream('')
const password = stream('')
const loginStream = stream
    .merge([email, password])
    .map(([ email, password ]) => ({email, password}))

const onSubmit = (e) => {
    e.preventDefault();
    const data = loginStream.toJSON();
    const canSubmit = AuthStore.canSubmit(data)
    if (canSubmit) {
        AuthStore
        .login(data)
        .then(({ id, email, name }) => {
            UserStore.setCurrentUser({
                id,
                email,
                name: 'Someone',
                websites: [
                    { name: "Website 1" },
                    { name: "Website 1" },
                    { name: "Website 1" },
                    { name: "Website 1" },
                ]
            })
            password('')
            m.route.set('/')
        })
        .catch(error => console.log(error))
    }
}

const Login = {
    view() {
        return m('form.pure-form.pure-form-stacked', { onsubmit: onSubmit }, [
            m('fieldset', [
                m('legend', 'Login'),

                m('label[for=email]', 'Email'),
                m('input#email', {oninput: m.withAttr('value', email), value: email}),

                m('label[for=password]', 'Password'),
                m('input[type=password]#password', {oninput: m.withAttr('value', password), value: password}),

                m('button.pure-button.pure-button-primary', 'Login')
            ])
        ])
    },

};

export default Login;