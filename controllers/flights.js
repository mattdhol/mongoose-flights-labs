let Flight = require('../models/flights')

function newFlight (req, res){
    res.render("flights/new")
}

function newSubmit (req, res){
    res.redirect('/flights');
    };

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { flights });
       });
      };

function create(req, res) {
    const flight = new Flight(req.body);
    console.log(flight)
    flight.save(function(err) {
      if (err) return res.send('hey.. error' + (err));
      console.log(flight);
      res.redirect('/flights');
    });
  };

  function testdata(req, res){
    Flight.create({"airline" : "American", "airport" : "AUS", "flightNo" : "5555"},
    function (err){
        console.log(err)
        res.send("thank you for adding")
    })  
}

function show (req, res){
  Flight.findById(req.params.id, function (err, flight){
    res.render("flights/show", { flight } )
  })
}

module.exports = {
    newFlight,
    newSubmit,
    index,
    create,
    testdata,
    show,
}