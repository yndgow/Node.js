const express = require('express');
const router = express.Router();

router.get('/get1', (req, res, next) => {
  const uid = req.query.uid;
  res.render('sub1/get1', { uid: uid });
});
router.get('/get2', (req, res, next) => {
  res.render('sub1/get2', { name: req.query.name, age: req.query.age });
});
router.get('/post1', (req, res) => {
  res.render('sub1/post1');
});
router.get('/post2', (req, res) => {
  res.render('sub1/post2');
});
router.post('/post1Result', (req, res) => {
  res.render('sub1/post1Result', { data: req.body });
});
router.post('/post2Result', (req, res) => {
  res.render('sub1/post2Result', req.body);
});
// router.get('/post1Result', (req, res) => {});
module.exports = router;
