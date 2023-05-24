var express = require('express');
const User1 = require('../schemas/user1');
var router = express.Router();

// 목록
router.get('/list', async (req, res, next) => {
  // 전체 목록 가져오기
  const users = await User1.find();
  res.render('user1/list', { users });
});

// 등록
router.get('/register', function (req, res, next) {
  res.render('user1/register');
});

router.post('/register', async (req, res, next) => {
  // mongoDB Insert
  // const user = await User1.create({
  //   uid: req.body.uid,
  //   name: req.body.name,
  //   hp: req.body.hp,
  //   age: req.body.age,
  // });
  const user1 = new User1(req.body);
  await user1.save();
  // console.log(user1);
  res.redirect('/user1/list');
});

// 수정
router.get('/modify/:_id', async (req, res, next) => {
  const { _id } = req.params;
  //console.log(_id);

  // 아이디값으로 가져오기
  const user = await User1.findById(_id);
  //console.log(user);
  res.render('user1/modify', { user });
});

router.post('/modify', async (req, res, next) => {
  const { _id, name, hp, age } = req.body;
  // console.log(user);
  await User1.findByIdAndUpdate(_id, { name, hp, age });
  res.redirect('/user1/list');
});

// 삭제
router.get('/delete', async (req, res, next) => {
  const { _id } = req.query;
  //console.log(_id);
  await User1.deleteOne({ _id: _id });
  res.redirect('/user1/list');
});

module.exports = router;
