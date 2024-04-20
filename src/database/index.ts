import mongoose from 'mongoose'

import  "../env";


export async function mongodbConnect() {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT || "", {
            dbName: process.env.MONGODB_NAME,
        })
        console.log('\x1b[36mMongoDB Connection has been established.\x1b[37m')
        return true
    } catch (error) {
        console.error(
            '\x1b[31Unable to connect to the mongodb database: \x1b[37m',
            error,
        )
        return false
    }
}
