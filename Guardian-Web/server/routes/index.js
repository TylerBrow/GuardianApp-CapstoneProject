var express = require('express');
var router = express.Router();
var pool=require('../db');
const sha512 = require("js-sha512");
const jwt = require('jsonwebtoken');
const config = require("config")


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
  
  const user_id = req.params.user_id;
  const sql = `SELECT * from notifications WHERE user_id = ?`;


  pool.query(sql, [req.params.user_id], (err, results, fields) => {
    res.json(results)
  })
})

router.post('/maps', (req, res, next) => {
  const time = req.body.time
  const lat = req.body.lat
  const longitude = req.body.longitude
  const sql= `INSERT INTO maps (lat, lng, time) VALUES (?, ?, ?)`

  pool.query(sql, [lat, longitude, time], (err, results, fields) => {
    res.json({
      lat: lat, 
      longitude: longitude, 
      time:time
    })
  })
})

router.get('/maps', (req, res, next) => {
  const sql = 'SELECT m.lat, m.lng FROM maps m'

  pool.query(sql, (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router;


