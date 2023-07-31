/** express 라이브러리 사용 */
const express = require('express');

/** express를 이용하여 새로운 객체 생성 */
const app = express();

/** 
 * body-perser 라이브러리 사용 
 * 요청 데이터 해석을 쉽게 도와줌
 * express 라이브러리 깔면 자동으로 
 * */
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended: true})); 

/** EJS 사용하기(서버 데이터를 html에 쉽게 넣을 수 있게 도와주는 html렌더링 엔진) */
app.set('view engine', 'ejs');

/** app.use 요청과 응답 사이에 동작 미들웨어, static 파일을 보관하기 위해  public 파일을 쓸 거야 */
app.use('/public', express.static('public'));

/* 8080포트에서 서버 실행 */
app.listen(8080, function(){
    console.log('listening on 8080');
});

/** 
 * localhost:8080/main 으로 접속 시 main.ejs에 diaryList를 담아서 보내 줌
 * ejs 파일 내 <%= diaryList[0].title %> 형식으로 사용 가능
 */
app.get('/main', function(요청, 응답){
    let 결과 = [{title : "오늘의 일기", contents : "오늘도 잘 먹고 잘 잤다", id : "장지은", inputDt : 2023/07/31}
             , {title : "어제의 일기", contents : "어제 잘 먹고 잘 잤다", id : "장지은", inputDt : 2023/07/30}]
    응답.render('main.ejs', {diaryList : 결과});
});

/* mypage 레이아웃 구현 목적으로 임시로 연결했습니다. (지은) */
app.get('/mypage', function(요청, 응답){
    응답.render('mypage.ejs', {});
});