import 'isomorphic-fetch';

function loadData (resourceType) {
    return fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(res => {
            return res.json();
        })
        .then(data => data.filter((_, idx) => idx < 10));
}

export default loadData;