const mongoose = require('mongoose')

const data_schema = mongoose.Schema(
    {
        firstName : {
            type : String,
            required : true
        },
        middleName : {
            type : String,
        },
        lastName : {
            type : String,
            required : true
        },
        password : {
            type : String,
            require : true
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        role : {
            type : String,
            enum : ["user","admin"],
            required : true
        }
    },
    { timestamps : true }
)

module.exports = mongoose.model('data',data_schema)