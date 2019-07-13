// const {
//     find,   
// } = require('./db.js');
// (async () => {
//     const data = await find('banfu', {});
//     console.log(data);
// })();

const {
    find,
} = require('./db.js');
(async () => {
    const data = await find('banfu', {});
    console.log(data);
})();