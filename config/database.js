const mongoose = require('mongoose');

async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/fms');
        console.log('connect mongodb successfully!');
    }catch(error){
        console.log(error);
    };
}

module.exports = { connect };