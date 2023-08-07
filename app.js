/* express 라이브러리 */
const express = require('express');

/* express를 이용하여 새로운 객체 생성 */
const app = express();

/* 환경변수 라이브러리 */
require('dotenv').config();

/* body-perser 라이브러리(요청 데이터 해석) */
const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }));

/* mysql 라이브러리 */
const mysql = require('mysql2');

/** EJS 사용하기(서버 데이터를 html에 쉽게 넣을 수 있게 도와주는 html렌더링 엔진) */
app.set('view engine', 'ejs');

/** app.use 요청과 응답 사이에 동작 미들웨어, static 파일을 보관하기 위해  public 파일을 쓸 거야 */
app.use('/public', express.static('public'));

/* 서버 실행 */
app.listen(process.env.PORT, function () {
    console.log('listening on 8080');
});

/* DB 커넥션 */
const connection = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
    port: process.env.DB_PORT,
});

/* DB 연결 */
connection.connect(function(err){
    if(err) {
        console.error('연결실패 : ' + err.stack);
        return;
    }
    console.log('연결완료');
});

/* 테스트 쿼리 */
connection.query('SELECT * FROM USER', function(에러, 결과, 필드){
    if(에러){ console.log(에러)}
    console.log('result : ', 결과 );
});

/* 해당 경로 진입 시 각 router 미들웨어 적용 */
 app.use('/main', require('./routes/main.js'));
 app.use('/mypage', require('./routes/mypage.js'));
 app.use('/intro', require('./routes/intro.js'));