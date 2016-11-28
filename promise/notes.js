apiCall('/api/resource')
    .then(function (responnse) {
        return anotherApiCall(responnse.body.url);
    })
    .then(function (anotherResponse) {
        console.log(anotherResponse)
    })
    .catch(function (reason) {
        console.log(reason)
    });

const promises = ['cats', 'dogs', 'parrots']
    .map(path => fetch(`https://api.com/${path}`));

Promise.all(promises)
    .then(([cats, dogs, parrots])=> {
        console.log(cats, dogs, parrots)
    });




const promises = ['cats', 'dogs', 'parrots']
    .map(path => fetch(`https://api.com/${path}`));

Promise.all(promises)
    .then(([cats, dogs, parrots])=> {
        console.log(cats, dogs, parrots)
    });
