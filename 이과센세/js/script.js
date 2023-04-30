const id = document.getElementById('id')
const password = document.getElementById('password')
const login = document.getElementById('login')
let errStack = 0;

login.addEventListener('click', () => {
    if (id.value == 'rikei') {
        if (password.value == 'sensei') {
            alert("로그인에 성공했습니다!")
            location.href = "index2.html"
        }
        else {
            alert("아이디와 비밀번호를 다시 한 번 확인해주세요!")
            errStack ++;
        }
    }
    else {
        alert("존재하지 않는 계정입니다.")
    }

    if (errStack >= 5) {
        alert("비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.")
    }
})