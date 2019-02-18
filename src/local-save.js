function localSave(key, object) {

    const serialize = JSON.stringify(object);
    window.localStorage.setItem(key, serialize);

}

export default localSave;