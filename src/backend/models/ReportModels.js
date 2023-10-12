const mongoose = require ('mongoose');

const reportSchema = new mongoose.Schema({

    date:{ type:String, required: true },

    name:{ type:String, required: true },

    project:{ type:String, required: true },

    time:{ type:Number , required: true },

    discription:{ type:String, required: true },
});

module.exports = new mongoose.model ('report', reportSchema);