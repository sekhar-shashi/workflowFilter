'use strict';
// declaration section 
require('dotenv').load();
const Hapi = require('hapi'),
Confidence = require('confidence'),
Glue = require('glue'),
store = new Confidence.Store(require('./config'));

const manifest = store.get('/', {env: process.env.NODE_ENV});

const options = {
    relativeTo: __dirname
};
const server = new Hapi.Server();


// declaration section ends
Glue.compose(manifest,options,(err, server) => {
if(err) throw err;
try { server.route(require('./routes/route'));} catch(e) {throw e;}
server.ext('onPreResponse', (request, reply) => {
        if (request.response.isBoom) {
            debugger;
            const err = request.response;
            const errName = err.output.payload.error;
            const statusCode = err.output.payload.statusCode;
    
            return reply({
                "error": "Could not decode request: JSON parsing failed"
            }, {
                statusCode: statusCode,
                errName: errName
            })
            .code(statusCode);
        }
        reply.continue();
    });
server.start(err => {
    if(err) throw err;
    console.log('listining on ', server.info.uri);
    
});
});
