// Khai báo biến (let) Gọi hàm (prompt)
let userName = prompt("Who's there?", '');
// Cấu trúc lồng & Bậc thang
if (userName == 'Admin') {
    let pass = prompt('Password?', '');
    if (pass == 'TheMaster') {
        alert('Welcome!');
    } else if (pass == null) {
        alert('Canceled.');
    } else {
        alert('Wrong password');
    }
} else if (userName == null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}