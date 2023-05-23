var express = require('express');
var router = express.Router();

router.get('/cookie', function (req, res, next) {
  const user = {
    uid: 'a101',
    name: '홍길동',
    hp: '010-1234-1001',
    age: 21,
  };
  // 쿠키 전송
  res.cookie('user', user);
  res.render('sub2/cookie');
});

router.get('/cookieResult', (req, res) => {
  const user = req.cookies.user;
  res.render('sub2/cookieResult', { user: user });
});

router.get('/session', function (req, res, next) {
  const user = {
    uid: 'a102',
    name: '강감찬',
    hp: '010-1234-1002',
    age: 22,
  };

  req.session.user = user;

  res.render('sub2/session');
});

router.get('/sessionResult', (req, res) => {
  const user = req.session.user;
  res.render('sub2/sessionResult', user);
});

router.get('/cookieClear', (req, res) => {
  res.clearCookie('user').redirect('/');
});

router.get('/sessionClear', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
});

module.exports = router;
