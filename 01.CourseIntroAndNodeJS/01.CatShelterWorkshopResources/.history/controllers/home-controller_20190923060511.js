const url = require('url');
const fs = requre('fs');
const path = require('path');
const rootPath = path.normalize(path.join(_dirname, '..views/home/'));

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    if (pathname === '/' && req.method === 'GET') {
        fs.readFile(rootPath + 'index.html', (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('404 Not Found');
                res.end();
                return;
            }
            res.write(data);
            res.end();
        });

    } else {
        return true;
    }
}