const dbFile = 'db.json'
const keyJWT = "BX]e_,r)g8$w'nMn"
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const server = jsonServer.create()
const router = jsonServer.router(dbFile)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;  
  let users = router.db.get('users').value();
  let findUser = false;

  users.forEach( user => {
    if( email == user.email && password == user.password ){
      findUser = true;
      const token = jwt.sign(user, keyJWT , {expiresIn: 3600});
      res.jsonp({token:token, id:user.id})
    }
  });
  if(!findUser){
    res.sendStatus(401);
  }
  
})

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  next()
})

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})