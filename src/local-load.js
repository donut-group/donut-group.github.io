
function localLoad(key) {
    const json = window.localStorage.getItem(key);
    return JSON.parse(json);
}



export default localLoad;