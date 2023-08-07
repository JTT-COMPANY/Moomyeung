/* router 실행 */
const router = require('express').Router();

/* main 연결 */
router.get('/', function (요청, 응답) {
    let 결과 = [{ title: "오늘의 일기", contents: "오늘도 잘 먹고 잘 잤다", id: "장지은", inputDt: "2023/07/31" }
        , { title: "어제의 일기", contents: "어제 잘 먹고 잘 잤다", id: "장지은", inputDt: "2023/07/30" }]
    응답.render('main.ejs', { diaryList: 결과 });
});

module.exports = router;