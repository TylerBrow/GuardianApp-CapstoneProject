var express = require('express');
var router = express.Router();
var pool=require('../db');
const sha512 = require("js-sha512");
const jwt = require('jsonwebtoken');
const config = require("config")
const axios = require('axios')

router.post("/register", (req, res, next) => {
  console.log(req.body)
 const username = req.body.username
 const password = sha512(req.body.password + config.get("salt"))

 const checksql = "SELECT count(1) as count from users WHERE username = ?"

 pool.query(checksql, [username], (err, results, fields) => {
   const count = results[0].count

   if (count > 0) {
     res.status(409).json({
       error: "Username already taken"
     })
   } else {
     const sql = "INSERT INTO users (username, password) VALUES (?, ?)"

     pool.query(sql, [username, password], (err, results, fields) => {
       console.log(err)
       if (err) {
         throw new Error("register failed")
       } else {
         const token = jwt.sign({ username }, config.get("secret"))
         res.json({
           token: token
         })
       }
     })
   }
 })
})

router.post("/profile", (req, res, next) => {
  const user = req.body.user
  const name = req.body.name
  const address = req.body.address
  const radius = req.body.radius

  const sql = "INSERT INTO profiles (user_id, name, address, radius) VALUES (?, ?, ?, ?)"

  pool.query(sql, [user, name, address, radius], (err, results, fields) => {
    // const profile_id = results.insertId

    res.json(results)
  })
})

router.post("/login", (req, res, next) => {
 const username = req.body.username
 const password = sha512(req.body.password + config.get("salt"))

 const sql =
   "SELECT count(1) as count FROM users WHERE username = ? AND password = ?"

 pool.query(sql, [username, password], (err, results, fields) => {
   const count = results[0].count

   if (count >= 1) {
     const token = jwt.sign({ username }, config.get("secret"))

     res.json({
       token
     })
   } else {
     res.status(401).json({
       error: "Invalid username or password"
     })
   }
 })
})

router.post('/notifications', (req, res, next) => {

  const sql = 'INSERT INTO notifications (category, message, time, user_id) VALUES (?, ?, ?, ?)'

  pool.query(sql, [req.body.category, req.body.message, req.body.time, req.body.user_id], (err, results, fields) => {
    
    res.json({
      category: req.body.category,
      message: req.body.message,
      time: req.body.time,
      user_id: req.body.user_id

    })
  })
})

router.get('/notifications/:user_id', (req, res, next) => {
  // const sql = 'SELECT n., u.id* FROM notifications n, LEFT JOIN users u, ON u.id = n.user_id, WHERE n.user_id = 1;' 

 // router.get('/notifications', (req, res, next) => {
  
  // const userId = 
  // const sql = 'SELECT n.*, u.id FROM notifications n LEFT JOIN users u ON u.username = n.user_id WHERE n.user_id = ?' 
  // 'SELECT id, FROM users WHERE username = 'test''
  
  // const user_id = req.params.user_id;
  const sql = `SELECT * FROM notifications WHERE user_id = ?`;


  pool.query(sql, [req.params.user_id], (err, results, fields) => {
    res.json(results)
  })
})

router.get('/getuser/:user', (req, res, next) => {
  const user = req.params.user
  const sql = `SELECT username FROM users WHERE username = ?`

  pool.query(sql, [user], (err, results, fields) => {
    res.json(results)
  })
})

router.post('/maps', (req, res, next) => {
  const time = req.body.time
  const lat = req.body.lat
  const longitude = req.body.longitude
  const userId = req.body.userId
  const sql= `INSERT INTO maps (lat, lng, time, user_id) VALUES (?, ?, ?, ?)`

  pool.query(sql, [lat, longitude, time, userId], (err, results, fields) => {
    res.json({
      lat: lat, 
      longitude: longitude, 
      time:time,
      userId: userId
    })
  })
})

router.get('/maps/:user', (req, res, next) => {
  const userId = req.params.user
  
  const sql = 'SELECT m.lat, m.lng, m.time FROM maps m WHERE user_id = ?'

  pool.query(sql, [userId], (err, results, fields) => {
    res.json(results)
  })
})
var lat2 = []
var lng2 = []

router.post('/emergency/', (req, res, next) => {
  console.log('TEST');
  lat2.push(req.body.lat)
  lng2.push(req.body.lng)
  console.log('TEST2');
  res.json(results)
})

router.post('/checkin/:user', (req, res, next) => {
  const userId = req.params.user
  const timestamp = req.body.timestamp
  const sql = `INSERT INTO checkins (user_id, timestamp) VALUES (?,?)`

  pool.query(sql, [userId, timestamp], (err, results, fields) => {
    res.json({
      userId: userId,
      timestamp: timestamp
    })
  })
})


router.get('/checkin/:user', (req, res, next) => {
  const userId = req.params.user
  const sql = `SELECT timestamp FROM checkins WHERE user_id = ?`

 
  pool.query(sql, [userId], (err, results, fields) => {
    res.json(results)
  })
 })

router.get('/geofence/:user', (req, res, next) => {
  const userId = req.params.user
  const sql = 'SELECT geofence FROM geofences WHERE user_id = ?'


  pool.query(sql, [userId], (err, results, fields) => {
    res.json(results)
  })
})

router.get('/gettinggeofence/:user', (req, res, next) => {
  const userId = req.params.user
  const sql = `SELECT address, radius FROM profiles WHERE user_id = ?`


  pool.query(sql, [userId], (err, results, fields) => {
    res.json(results)
  })
})


router.post('/geofence/:user', (req, res, next) => {
  const userId = req.params.user
  const sql = `INSERT INTO geofences (user_id, geofence) VALUES (?, true)`

  pool.query(sql, [userId], (err, results, fields) => {
    res.json(results)
  })
})


function getEmergency() {
  const lat = 0;
  const lng = 0;
  const googleUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" +
  `location=${lat},${lng}` +
  "&radius=2000" +
  `&keyword=Police&OR&Fire ` +
  "&key=AIzaSyD6VImWKzsNcq76jemUdj5j6qkgofPlcqc" 
  // `&pagetoken=20`
   console.log(googleUrl)
  // axios.get(url).then(resp => {console.log(resp.data)})
  }
  getEmergency()







module.exports = router;
