const mongoose = require('mongoose');

const propertiesSchema = new mongoose.Schema ({
    image: String,
    type : String,
    location: String,
    buy: String,
    rent: String,
    beds: Number,
    baths: Number,
    agent: String,
    description: String,
    features: String,
});

const PropertiesModel =  mongoose.model('Properties', propertiesSchema);
module.exports = PropertiesModel;