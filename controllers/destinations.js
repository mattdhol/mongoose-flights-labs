const Flight = require('../models/flights')

function destination_form(req, res){
        Flight.findById(req.params.id, function(err, flight) {
          flight.destinations.push(req.body);
          flight.save(function(err) {
              console.log(flight)
            res.redirect(`/flights/${flight._id}`);
         });
 });
}

module.exports = {
    destination_form,
}