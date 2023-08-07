/**
 * 대문자 스네이크케이스 문자열을 카멜케이스로 변경
 * @param {string} snakeword - SNAKE_CASE 문자열
 * @returns {string} - camelCase로 변경된 문자열
 */
function changeSnakeToCamel (snakeword){
	
    let camelword = snakeword.toLowerCase().replace(/_[a-z]/g, (str) => str[1].toUpperCase());
    return camelword;
};

module.exports = {changeSnakeToCamel};