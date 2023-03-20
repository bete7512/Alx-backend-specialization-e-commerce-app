module.exports = {
    apps:[
        {
            name:'server',
            script:'server.js',
            env:{
                MODE_ENV: 'production'
            },
            exec_mode: 'cluster',
            instances: 'max',
            path:'/usr/bin/node'
        }
    ]
}