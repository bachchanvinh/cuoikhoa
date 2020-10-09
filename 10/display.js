const url = "https://5f749eab1cf3c900161cd568.mockapi.io/api/champion-data/";
let champion = document.getElementsByClassName("champion");
let topLane = document.getElementById("top-lane");
let midLane = document.getElementById("mid-lane");
let jungleLane = document.getElementById("jungle-lane");
let adLane = document.getElementById("ad-lane");
let spLane = document.getElementById("sp-lane");
let btntop = document.getElementById("btn-top");
let btnmid = document.getElementById("btn-mid");
let btnjungle = document.getElementById("btn-jungle");
let btnad = document.getElementById("btn-ad");
let btnsp = document.getElementById("btn-sp");
let body2 = document.getElementById("body2");



// 5 functions create dưới đây có chức năng: thêm thông tin tướng vào html nhờ fectch(API)
// Đồng thời cho phép hiển thị top 3 tướng đứng đầu và 3 tướng đứng bét
// Cho phép hiển thị các kèo matchup khi bấm vào nút tên

const url_root = `https://5f771bbcd5c9cb0016236ac1.mockapi.io/api/user`
async function getUserByusername(url_api) {
    const res = await fetch(`${url_api}/1`);
    userdata = await res.json()
    userdata.username
    console.log(userdata.username)
    createTop()
}
getUserByusername(url_root)

async function createTop() {
    let topLaneString = "";
    let res = await fetch(url);
    let data = await res.json();
    for (let i = 0; i < 6; i++) {
        topLaneString = "";
        topLaneString += `
        <tr>
            <td>${data[i].rank}</td>
            <td><img src=${data[i].img} alt="img"> <a href="./match-up.html?id=${data[i].id}&username=${userdata.username}">${data[i].champion}</a></td>
            <td>${data[i].role}</td>
            <td>${data[i].winPercent}</td>
            <td>${data[i].playPercent}</td>
            <td>${data[i].banRate}</td>
            <td>${data[i].kills}</td>
            <td>${data[i].deadths}</td>
            <td>${data[i].assists}</td>
        </tr>
        `
        topLane.insertAdjacentHTML("beforeend", topLaneString);
    }
    topLane.style.display = "none";
    btntop.addEventListener("click", () => {
        midLane.style.display = "none";
        jungleLane.style.display = "none";
        adLane.style.display = "none";
        spLane.style.display = "none";
        if (topLane.style.display === "none") {
            topLane.style.display = "block";
        } else {
            topLane.style.display = "none";
        }
    })
}


async function createMid() {
    let midLaneString = "";
    let res = await fetch(url);
    let data = await res.json();
    for (let i = 6; i < 12; i++) {
        midLaneString = "";
        midLaneString += `
        <tr>
            <td>${data[i].rank}</td>
            <td><img src=${data[i].img} alt="img"> <a href="./match-up.html?id=${data[i].id}">${data[i].champion}</a></td>
            <td>${data[i].role}</td>
            <td>${data[i].winPercent}</td>
            <td>${data[i].playPercent}</td>
            <td>${data[i].banRate}</td>
            <td>${data[i].kills}</td>
            <td>${data[i].deadths}</td>
            <td>${data[i].assists}</td>
        </tr>
        `
        midLane.insertAdjacentHTML("beforeend", midLaneString);
    }
    midLane.style.display = "none";
    btnmid.addEventListener("click", () => {
        topLane.style.display = "none";
        jungleLane.style.display = "none";
        adLane.style.display = "none";
        spLane.style.display = "none";
        if (midLane.style.display === "none") {
            midLane.style.display = "block";
        } else {
            midLane.style.display = "none";
        }
    })

}


async function createJungle() {
    let jungleLaneString = "";
    let res = await fetch(url);
    let data = await res.json();
    for (let i = 24; i < 30; i++) {
        jungleLaneString = "";
        jungleLaneString += `
        <tr>
            <td>${data[i].rank}</td>
            <td><img src=${data[i].img} alt="img"> <a href="./match-up.html?id=${data[i].id}">${data[i].champion}</a></td>
            <td>${data[i].role}</td>
            <td>${data[i].winPercent}</td>
            <td>${data[i].playPercent}</td>
            <td>${data[i].banRate}</td>
            <td>${data[i].kills}</td>
            <td>${data[i].deadths}</td>
            <td>${data[i].assists}</td>
        </tr>
        `
        jungleLane.insertAdjacentHTML("beforeend", jungleLaneString);
    }
    jungleLane.style.display = "none";
    btnjungle.addEventListener("click", () => {
        midLane.style.display = "none";
        topLane.style.display = "none";
        adLane.style.display = "none";
        spLane.style.display = "none";
        if (jungleLane.style.display === "none") {
            jungleLane.style.display = "block";
        } else {
            jungleLane.style.display = "none";
        }
    })
}


async function createAd() {
    let adLaneString = "";
    let res = await fetch(url);
    let data = await res.json();
    for (let i = 18; i < 24; i++) {
        adLaneString = "";
        adLaneString += `
        <tr>
            <td>${data[i].rank}</td>
            <td><img src=${data[i].img} alt="img"> <a href="./match-up.html?id=${data[i].id}">${data[i].champion}</a></td>
            <td>${data[i].role}</td>
            <td>${data[i].winPercent}</td>
            <td>${data[i].playPercent}</td>
            <td>${data[i].banRate}</td>
            <td>${data[i].kills}</td>
            <td>${data[i].deadths}</td>
            <td>${data[i].assists}</td>
        </tr>
        `
        adLane.insertAdjacentHTML("beforeend", adLaneString);
    }
    adLane.style.display = "none";
    btnad.addEventListener("click", () => {
        midLane.style.display = "none";
        jungleLane.style.display = "none";
        topLane.style.display = "none";
        spLane.style.display = "none";
        if (adLane.style.display === "none") {
            adLane.style.display = "block";
        } else {
            adLane.style.display = "none";
        }
    })
}


async function createSp() {
    let spLaneString = "";
    let res = await fetch(url);
    let data = await res.json();
    for (let i = 12; i < 18; i++) {
        spLaneString = "";
        spLaneString += `
        <tr>
            <td>${data[i].rank}</td>
            <td><img src=${data[i].img} alt="img"> <a href="./match-up.html?id=${data[i].id}">${data[i].champion}</a></td>
            <td>${data[i].role}</td>
            <td>${data[i].winPercent}</td>
            <td>${data[i].playPercent}</td>
            <td>${data[i].banRate}</td>
            <td>${data[i].kills}</td>
            <td>${data[i].deadths}</td>
            <td>${data[i].assists}</td>
        </tr>
        `
        spLane.insertAdjacentHTML("beforeend", spLaneString);
    }
    spLane.style.display = "none";
    btnsp.addEventListener("click", () => {
        midLane.style.display = "none";
        jungleLane.style.display = "none";
        adLane.style.display = "none";
        topLane.style.display = "none";
        if (spLane.style.display === "none") {
            spLane.style.display = "block";
        } else {
            spLane.style.display = "none";
        }
    })
}


// chỗ này khởi tạo 5 functions create thôi này
// createTop();
createMid();
createJungle();
createAd();
createSp();


