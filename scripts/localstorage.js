const saveToLocalStorage = (name) => {
    let names = getLocalStorage();

    if (!names.includes(name)) {
        names.push(name);
    }

    localStorage.setItem("Names", JSON.stringify(names));

}

const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("Names");

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);

}

const removeFromLocalStorage = (name) => {
    let names = getLocalStorage();

    let namedIndex = names.indexOf(name);

    names.splice(namedIndex, 1);

    localStorage.setItem("Names", JSON.stringify(names));

}

export {saveToLocalStorage, getLocalStorage, removeFromLocalStorage};
