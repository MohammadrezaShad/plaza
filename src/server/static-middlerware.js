
export default function SecureStaticMiddleware(statics) {
  return function (req, res, next) {
    if (/^\/server.js/.test(req.path) === true) 
      return res.status(403).end('403 Forbidden');

    if (/^\/$/.test(req.path) === true) 
      return next();

    return statics(req, res, next);
  }
}