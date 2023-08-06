/* router 실행 */
const router = require('express').Router();

/* mypage 연결 */
router.get('/', function (요청, 응답) {
    응답.render('mypage.ejs', {});
});

module.exports = router;