let img1 = 0;
let img2 = 1;
let img3 = 2;
function anh1(image) {
    img1++;
    image.src = "anh/top" + img1 + ".jpg";
    if (img1 >= 3) {
        img1 = 0;
    }
    checkWin()
}
function anh2(image) {
    img2++;
    image.src = "anh/mid" + img2 + ".jpg";
    if (img2 >= 3) {
        img2 = 0;
    }
    checkWin()
}
function anh3(image) {
    img3++;
    image.src = "anh/bot" + img3 + ".jpg";
    if (img3 >= 3) {
        img3 = 0;
    }
    checkWin()
}
function checkWin() {
    let check = (img1 === img2 && img2 === img3)
    if (check) {
        alert('I love You')
    }

}