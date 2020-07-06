import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});
 export = mongoose.model('item', ItemSchema);
