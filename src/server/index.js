import http from 'http';
import express from 'express';
import cookiesMiddleware from 'universal-cookie-express';
import ServerMiddleware from './server-middleware';
import SecureStaticMiddleware from './static-middlerware';


const PORT = process.env.PORT || 8080;
const server = express();
const router = express.Router();
const httpServer = http.createServer(server);

server.disable('x-powered-by')

// add public files
server.use(SecureStaticMiddleware(express.static('./build','', { maxAge: '30d' })));

server.use(cookiesMiddleware());


router.use('*', ServerMiddleware);

server.use(router);

httpServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


