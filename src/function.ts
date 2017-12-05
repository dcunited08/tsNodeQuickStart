
class Bob {
    hotDog() {
        return "fdsa";
    }
}

exports.helloWorld = function helloWorld(req: any, res: any) {
    const tst = new Bob();
    return tst.hotDog();
};