class Bob {
    hotDog() {
        return "fdsa";
    }
}
exports.helloWorld = function helloWorld(req, res) {
    const tst = new Bob();
    return tst.hotDog();
};
//# sourceMappingURL=function.js.map