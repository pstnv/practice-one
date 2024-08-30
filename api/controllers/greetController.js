const greetAnonUser = (req, res) => {
    const answer = { message: "<h1>Hey you, User!</h1>" };
    res.status(200).send(answer);
};

const greetUser = (req, res) => {
    const { name } = req.body;
    const msg = `Hello ${name ? name : "user"}!`;
    return res.status(200).send({ msg });
};

export { greetAnonUser, greetUser };
