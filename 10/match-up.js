const url = "https://5f749eab1cf3c900161cd568.mockapi.io/api/champion-data";
let container = document.getElementById("container");
let counter = document.getElementsByClassName("counter");
let encounter = document.getElementsByClassName("encounter");
let counterEncounter = document.getElementById('counter-encounter')
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
// console.log(myParam)

// Khởi tạo data cho trang ?id=1
// Cho phép hiển thị các kèo matchup khi bấm vào nút tên
async function createMatchUp(url,id,i){
    let res = await fetch(`${url}?id=${id}`);
    let data = await res.json();
    // console.log("data", data)
    createCounter(data);
    counterEncounter.insertAdjacentHTML('beforeend', createCounter(data).join(""));
    createEncounter(data);
    counterEncounter.insertAdjacentHTML("beforeend", createEncounter(data).join(""));

}


createMatchUp(url, myParam)


// chỗ này khởi tạo hàm để hiển thị kèo tướng Match up
function createCounter(dataCounter){
    // console.log('1', dataCounter[0].counter)
    // console.log(dataCounter.counter)
    const counterHTML = dataCounter[0].counter.map(item => {
    // console.log(item)
    return `
        <div class="counter">
            <div class="counter-champion">
            <img src="${item.img}" alt="">
            <p>${item.champion}</p>
            <div class="progress">
            <div class="progress-bar" style="width:${item.winRate}"></div>
            </div>
            <p>${item.winRate}</p>
            </div>
        </div>
    `
    });
    return counterHTML;
}

function createEncounter(dataEncounter,j){
    const encounterHTML = dataEncounter[0].encounter.map(item =>{
        return `
        <div class = "encounter">
            <div class="encounter-champion">
                <img src="${item.img}" alt="img">
                <p>${item.champion}</p>
                <div class="progress">
                <div class="progress-bar" style="width:${item.winRate}"></div>
                </div>
                <p>${item.winRate}</p>
            </div>
        </div>
    `
    });
    // encounter[dataEncounter[0].order].insertAdjacentHTML("beforeend", encounterHTML);
    return encounterHTML;
}