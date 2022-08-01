import CallHub from "./callHub"

export default {
    install(Vue, optios) {
        CallHub.start();
        Vue.prototype.#callHub = CallHub;
    }
}