const express = require('express');
const bcrypt =require('bcrypt');
const router = express.Router();
const userModel = require('../models/UserModels');
const ReportModels = require('../models/ReportModels');
const multer = require('multer');
const storage = multer.memoryStorage(); // Store the image in memory as a Buffer
const upload = multer({ storage: storage });

// Registration route
router.post('/register', upload.single('image'), async (req, res) => {
  try {
    const { firstname, lastname, email, contact, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if the username or email is already taken
    const existingUser = await userModel.findOne({ $or: [{ email }, { contact }] });

    if (existingUser) {
      // If username or email is already in use, return a registration error
      return res.status(400).json({ message: 'Email or Contact is already in use' });
    }

    // Get the image data from the request
    const image = req.file ? req.file.buffer : undefined; // Check if an image was uploaded

    // Create a new user document with the hashed password and image data
    const newUser = new userModel({
      firstname,
      lastname,
      email,
      contact,
      password: hashedPassword,
      image: {
        data: image, // Set the image data
        contentType: req.file.mimetype, // Set the content type based on the uploaded file
      },
    });

    // Save the new user to the database
    await newUser.save();

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

//Login Route

router.post('/login', async(req,res)=>{
    const {email, password} = req.body;
    try{
        const user = await userModel.findOne({email});

        if (!user){
            return res.status(401).json({message :"Invalid Username "})
        }
        const passwordMatch =await bcrypt.compare(password, user.password);

        if(!passwordMatch){
            return res.status(401).json({message: "Invalid Password"});

        }

        //Successful Login 
        res.status(200).json({message:"Login Successfull"});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Error During Login"});
    }
});

// Get all registered users
router.get('/users', async (req, res) => {
  try {
    const users = await userModel.find({}, 'firstname lastname email contact');
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});


//Report Form

router.post('/add', async (req,res)=>{
  try{
    const data = req.body;
    const newReport = new ReportModels(data);
    await newReport.save();
    res.status(200).json({message:"Report added Successfully"});

  }catch(err){
    console.error(err);
    res.status(500).json({message:"Error Adding Report"});

  }
})

//get Report Form Data

router.get('/allreports', async (req, res) => {
  try {
    const reports = await ReportModels.find({});
    res.status(200).json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching reports' });
  }
});

  
module.exports=router;