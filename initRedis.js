import Redis  from 'redis'

export const InitClientRedisOther = ()=>{
    const clt =Redis.createClient({
   

       
        socket:{
            host:'127.0.0.1',        
            port:'6379'
        },
        legacyMode: true
    })
    return clt;
    // return Client;
}
