import {} from './main.js'

export const createEventListeners = () => {
    document.getElementById('reviewTabButton').addEventListener('click',() => selectTab("reviewTab"));
    document.getElementById('createTabButton').addEventListener('click',() => selectTab("createTab"));
}
