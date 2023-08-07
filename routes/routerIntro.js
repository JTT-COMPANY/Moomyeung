/* router 실행 */
const router = require('express').Router();

/* intro 연결 */
router.get('/', function (요청, 응답) {
    응답.render('intro.ejs', {});
});

module.exports = router;