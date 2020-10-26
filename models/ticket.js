const mongoose = require ('mongoose')
const flights = require('./flights')

const Schema = mongoose.Schema

const ticketSchema = new Schema ({
    seat: {
        type: String, match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number, min: 0
    },
    flight: [{type: Schema.Types.ObjectId, ref: 'flights'}]
})


module.exports = mongoose.model('ticket', ticketSchema)


const destinationSchema = new Schema({
    airport: {
      type: String,
      enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: Date,
  })