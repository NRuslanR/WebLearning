import { sign, verify } from 'json-web-token';

const users = [

    {
        id: 1,
        name: "Ruslan",
        age: 25,
        user: "nruslanr",
        password: "123456",
        roles: [
            {
                id: 1,
                name: "leader"
            }
        ]
    },
    {
        id: 2,
        name: "Dmitry",
        age: 43,
        user: "dmitry73",
        password: "000000",
        roles: [
            {
                id: 2,
                name: "secretary"
            }
        ]
    },
    {
        id: 3,
        name: "Sergey",
        age: 36,
        user: "zyxel",
        password: "rrrrrr",
        roles: [
            {
                id: 2,
                name: "secretary"
            },
            {
                id: 3,
                name: "signer"
            }
        ]
    }
];

export function login(req, res) {

    let user = req.body.user,
        password = req.body.password,
        userAccount;

    if (
        !user || 
        !password || 
        !(userAccount = users.find(u => u.user == user)) || 
        (userAccount.password != password)
    ) {
        return res.status(401).send();
    }

    let payload = {

        id: userAccount.id,
        name: userAccount.name,
        age: userAccount.age,
        roles: userAccount.roles
    };

    let accessToken = 
        sign(
            payload, 
            process.env.ACCESS_TOKEN_SECRET,
            {
                algorithm: "HS256",
                expiresIn: process.env.ACCESS_TOKE_LIFE
            }
        );

    let refreshToken = 
            sign(
                paylod,
                process.env.REFRESH_TOKEN_SECRET,
                {
                    algorithm: "HS256",
                    expiresIn: process.env.REFRESH_TOKEN_LIFE
                }
            );

    userAccount.refreshToken = refreshToken;

    res.cookie("jwt", accessToken, { secure: true, httpOnly: true});
    res.send();

}

export function refresh(req, res) {

    let accessToken = req.cookie.jwt;

    if (!accessToken)
        return res.status(403).send();

    let payload;

    try
    {
        paylod = verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    }

    catch (e)
    {
        return res.status(401).send();
    }

    let userAccount = users.find(u => u.id == payload.id);

    if (!userAccount)
        return res.status(404).write("user not found").send();

    try
    {
        verify(userAccount.refreshToken, process.env.REFRESH_TOKEN_SECRET);
    }

    catch (e)
    {
        return res.status(401).send();
    }

    payload.name = userAccount.name;
    payload.age = userAccount.age;
    payload.roles = userAccount.roles;

    let newAccessToken = 
        sign(
            payload, 
            process.env.ACCESS_TOKEN_SECRET,
            {
                algorithm: "HS256",
                expiresIn: process.env.ACCESS_TOKE_LIFE
            }
        );

    res.cookie("jwt", newAccessToken, { secure: true, httpOnly: true });
    res.send();
}