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
     const userId = 'guardian' + username
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
  const sql = 'INSERT INTO notifications (message, date, day, time) VALUES (?, ?, ?, ?)'

  pool.query(sql, [req.body.message, req.body.date, req.body.day, req.body.time], (err, results, fields) => {
    
    res.json({
      id: results.insertId,
      message: req.body.message,
      date: req.body.date,
      day: req.body.day,
      time: req.body.time
    })
  })
})

router.get('/notifications', (req, res, next) => {
  const sql = 'SELECT n.* FROM notifications n '

  pool.query(sql, (err, results, fields) => {
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

// var checkNotifications = setInterval(getNotifications, 10000)

// export function getNotifications(date) {
// axios.get(http://localhost:3001/api/notifications).then(resp => {
//   if (resp.data[0].date == date) {
//        sendNotification()
//} 
// })}


