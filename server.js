const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()

const router = jsonServer.router('db.json')

const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))

server.use(jsonServer.defaults())



const SECRET_KEY='V3R153K9E7'
const expiresIn = '1h'

const createToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY/*, {expiresIn} */  )
}

const verifyToken = (token) => {
    return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

const isAuthenticated = ({email, password}) => {
    return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}

/*server.post('/api/login', (req, res) => {
    console.log('POST LOGIN')
    //console.log(res)
    console.log(req.headers)
    const {email, password} = req.body
    console.log('POSTATAAN  LOGIN PYYNTÖ', email, password)
    if (!isAuthenticated({email, password})){
        const status = 401
        const message = 'Käyttäjätunnus tai salasana virheellinen'
        res.status(status).json({status, message})
    }
    const access_token = createToken({email, password})
    res.status(200).json({access_token})
})*/

/*server.use((req,res,next) => {
    console.log(req.method)
    console.log(req.headers)
    console.log(req.headers.authorization)
    if (req.headers.authorization === undefined 
        || req.headers.authorization.split(' ')[0] 
        !== 'Bearer'){
            const status = 401
            const message = 'Bad authorization header'
            res.status(status).json({status, message})
            return
        }
        try {
            verifyToken(req.headers.authorization.split(' ')[1])
            next()
        } catch (err) {
            const status = 401
            const message = 'Error: access_token is not valid'
            res.status(status).json({status, message})
        }
})*/

const isAuthorized = (req) => {
    console.log(req)
    return true
}

server.use((req, res, next) => {
    if(isAuthorized(req)){
        console.log('AUHTENTIKOIDAAN')
        next()
    }else {
        res.sendStatus(401)
    }

})


//https://www.techiediaries.com/fake-api-jwt-json-server/

const PORT = 3001
server.use('/api', router)
server.listen(PORT, () => {
    console.log(`JSON serveri on runninki portissa ${PORT}`)
})