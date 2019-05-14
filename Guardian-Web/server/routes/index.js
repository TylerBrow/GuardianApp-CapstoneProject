var express = require('express');
var router = express.Router();
var pool=require('../db')

router.post('/notifications', (req, res, next) => {
  const sql = 'INSERT INTO notifications (message, date, day, time) VALUES (?, ?, ?, ?)'

  pool.query(sql, [req.body.message, req.body.date, req.body.day, req.body.time], (err, results, fields) => {
    
    res.json({
      id: results.insertID,
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
  const sql= 'INSERT INTO maps (lat, lng, time) VALUES (?, ?, ?)'

  pool.query(sql, [req.body.lat, req.body.lng], (err, results, fields) => {
    res.json({
      lat: req.body.lat,
      lng: req.body.lng
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
