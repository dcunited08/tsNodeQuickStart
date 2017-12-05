
class Bob {
    hotDog() {
        return "fdsa";
    }
}

exports.helloWorld = function helloWorld(req: any, res: any) {
    const tst = new Bob();
    res.status(200).send(tst.hotDog());
};