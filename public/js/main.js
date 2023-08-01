const article = document.querySelectorAll('article');
const goNext = document.querySelector('#goNext');
const classArr = ['firstBox', 'secondBox', 'thirdBox'];

let i = 0;

for (let a of article) {
	a.classList.add(classArr[i]);
	i++;
}

// 버튼 클릭 시 클래스 토글
goNext.addEventListener('click', function () {
	for (let a of article) {
		if (a.classList.contains(classArr[0])) {
			a.classList.remove(classArr[0])
			a.classList.add(classArr[2])
		} else if (a.classList.contains(classArr[1])) {
			a.classList.remove(classArr[1])
			a.classList.add(classArr[0])
		} else if (a.classList.contains(classArr[2])) {
			a.classList.remove(classArr[2])
			a.classList.add(classArr[1])
		}
	}
});