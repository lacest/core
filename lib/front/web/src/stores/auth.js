import m from 'mithril';

const AuthStore = {
    canSubmit(data) {
        return data.email !== '' && data.password !== '';
    },

    login(data) {
        if (!this.canSubmit(data)) return;
        return m.request('//rem-rest-api.herokuapp.com/api/login', {
            withCredentials: true,
            method: 'POST',
            data: data,
        })
    }
}

export default AuthStore;