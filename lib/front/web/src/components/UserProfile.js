import m from 'mithril';
import stream from 'mithril/stream';

import UserStore from '../stores/user';

const name = stream()
const email = stream()
const oldPassword = stream()
const newPassword = stream()
const userStream = stream
    .merge([name, email, oldPassword, newPassword])
    .map(([name, email, oldPassword, newPassword]) => ({name, email, oldPassword, newPassword}))

const onSubmit = (e) => {
    e.preventDefault()

    const userChanges = userStream.toJSON();
    console.log(userChanges)
    return UserStore
        .updateUser(userChanges)
        .then(response => console.log(response))
        .catch(error => console.log(error))
}

const UserProfile = {
    oninit(vnode) {
        const { user } = vnode.attrs;
        name(user.name)
        email(user.email)
    },
    view(vnode) {
        const { user } = vnode.attrs;
        return m('form.pure-form.pure-form-stacked', { onsubmit: onSubmit }, [
            m('fieldset', [
                m('legend', 'Your Profile'),

                m('label[for=name]', 'Name'),
                m('input#name', {oninput: m.withAttr('value', name), value: name}),

                m('label[for=email]', 'Email'),
                m('input#email', {oninput: m.withAttr('value', email), value: email}),

                m('label[for=oldpassword]', 'Old Password'),
                m('input#oldpassword[type=password]', {oninput: m.withAttr('value', oldPassword)}),

                m('label[for=newpassword]', 'New Password'),
                m('input#newpassword[type=password]', {oninput: m.withAttr('value', newPassword)}),

                m('button.pure-button.pure-button-primary', 'Update Profile'),
            ]),
        ]);
    }
};

export default UserProfile;