const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const ContactData = require('./models/contactData');
const PropertiesModel = require('./models/Properties');
const AppointmentModel = require('./models/Appointments');
const listingsRouter = require('./routes/listings');
const favoritesRoute = require('./routes/favorites');

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

// Serve static images from the public folder
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));



app.use('/api/auth', require('./routes/auth'));
app.use('/api/routeAgent', require('./routes/routeAgent'));

// Use listings and favorites routes
app.use('/api', listingsRouter);
app.use('/api/favorites', favoritesRoute); 

app.post('/Properties/add', (req,res)=>{
    const image = req.body.images;
    const type = req.body.type;
    const location = req.body.location;
    const buy = req.body.buy;
    const rent = req.body.rent;
    const beds = req.body.beds;
    const baths = req.body.baths;
    const agents = req.body.agent;
    const desc = req.body.desc;
    const features = req.body.features;

    PropertiesModel.create(
        {
            image: image,
            type: type,
            location: location,
            buy: buy,
            rent: rent,
            beds: beds,
            baths: baths,
            agents: agents,
            description: desc,
            features: features,
        }
    ).then(result => res.json(result), ()=>{
        alert('Properties added successlly')
    })
   .catch(err=>console.log(err), ()=>{
    alert('Failed to add propoerties')
   })
}
)


app.put('Properties/update', )

app.post('/Appointments/Book', (req, res) => {
    const fname = req.body.firstName;
    const lname = req.body.lastName;
    const email = req.body.email;
    const date = req.body.date;
    const time = req.body.time;

    AppointmentModel.create(
        {
            firstName: fname,
            lastName: lname,
            email: email,
            date: date,
            time: time,
        }

    ).then(() => {
        res.status(200).json({ message: 'Appointment booked successfully' })
    })
   .catch((err)=>{
    res.status(500).json({ error: 'Failed to book appointment: ' + err.message })
   })
})


// API  fetch karne ke liya contact data
app.get('/Contacts/get', (req, res) => {
    ContactData.find()
      .then(result => res.json(result))
      .catch(err => res.status(500).json({ error: err.message }));
  });


  
app.post('/Contacts/add', (req, res) => {
    const { Fullname, Number, Email, Message } = req.body;
  
    if (!Fullname || !Email || !Number || !Message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }
  
    ContactData.create({
      fullname: Fullname,
      number: Number,
      email: Email,
      message: Message,
    })
      .then(result => res.json({ success: true, result }))
      .catch(err => {
        console.error("Error while saving contact data:", err);
        res.status(500).json({ success: false, error: err.message });
      });
  });
  


mongoose.connect('mongodb://localhost:27017/Project')
.then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

app.listen(3001, ()=> {
    console.log('Server is running on port 3001');
})

app.get('/', (req, res) => {
    res.send('Backend is running')
})