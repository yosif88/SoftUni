function requestValidator(obj) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriPattern = /^[\w.]+$/g
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messages = [`<`, `>`, `\\`, `&`, `'`, `"`]


    if ( !methods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method')
    }

    if (!obj.uri || obj.uri !== '*' && !obj.uri.match(uriPattern)) {
        throw new Error('Invalid request header: Invalid URI')
    }

    if (!versions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version')
    }
    if (!obj.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message')

    }
    for (const el of obj.message) {
        if (messages.includes(el) ){
            throw new Error('Invalid request header: Invalid Message')

        }
    }


    return obj
}

console.log(requestValidator(
    {
        
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }
))