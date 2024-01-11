const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {

  console.log(req.body);
    const da = req.body;

    const user = await prisma.user.create({
      data:da 
    });
    // Send a response back to the client
    console.log(user);

    res.send(user);
  
});

router.get('/history', async (req, res) => {

  console.log(req.body);
    

    const user = await prisma.user.findMany({
      
    });
    // Send a response back to the client
    console.log(user);

    res.send(user);
  
});


module.exports = router;
