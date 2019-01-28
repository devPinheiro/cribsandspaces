
const config = {
  production: {  
    secret: process.env.secret,
    MONGO_URI: process.env.conString,
    port: process.env.PORT,
},
 development: {
    secret: "I_AME_GERER",
    MONGO_URI: 'mongodb://localhost/CnS',
    port: 3000
 }
};

export const getConfig = env => config['env'] || config.development;