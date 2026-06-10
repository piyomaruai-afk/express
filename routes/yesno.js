var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
  // YesNo APIのURLに変更
  request('https://yesno.wtf/api', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      // 'yesno' という名前のビュー（画面）にデータを渡す
      res.render('yesno', {
        title: 'Yes or No?',
        answer: data.answer,
        image: data.image
      });
    } else {
        res.status(500).send('APIからデータを取得できませんでした');
    }
  });
});

module.exports = router;