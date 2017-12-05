/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.helloWorld = function helloWorld(req, res) {
    // Example input: {"message": "Hello!"}
    if (req.body.message === undefined) {
        // This is an error case, as "message" is required.
        res.status(200).send("Hello World! This is working through GIT");
    }
    else {
        // Everything is okay.
        console.log(req.body.message);
        res.status(200).send("Success: " + req.body.message);
    }
};
//# sourceMappingURL=function.js.map