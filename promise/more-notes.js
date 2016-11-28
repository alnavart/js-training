function wait(time) {
    return new Promise(function (resolve, reject) {
        if (time % 2) {
            setTimeout(()=> resolve(`resultado de ${time}`), time);
        }
        reject('boo');
    });
}

//primero siempre el then o hace el then sobre el catch

wait(0)
    .then(m => console.log('then', m))
    .catch(m => console.log('catch', m));

wait(1001)
    .then(m => {
        console.log('a', m);
        return wait(2001)
    })
    .then(m => {
        console.log('b', m);
        return wait(2001)
    })
    .catch(m => console.log('b', m));






const api = path => fetch(`https://api.github.com/${ path }`)
    .then(response => response.json());
api('search?q=...')
    .then(results => {

        const calls = results
            .map(({id}) => api(`repository/${ id }`));

        return Promise.all(calls);
    })
    .then(repositories => console.log('do things...'));
