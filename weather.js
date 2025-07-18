
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  
  console.log("都市名:", data.name);
  console.log("経度:", data.coord.lon);
  console.log("緯度:", data.coord.lat);
  console.log("天気:", data.weather[0].description);
  console.log("最低気温:", data.main.temp_min);
  console.log("最高気温:", data.main.temp_max);
  console.log("湿度:", data.main.humidity);
  console.log("風速:", data.wind.speed);
  console.log("風向:", data.wind.deg);
}





// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let old = document.querySelector('div#result');
  if (old !== null) {
    old.remove();
  }
  let resultDiv = document.createElement("div");
  resultDiv.setAttribute('id', 'result');
  let body = document.querySelector('body'); 
  body.insertAdjacentElement('beforeend', resultDiv);
  let pop = document.querySelector('div#result');

  let a1 = document.createElement('p');
  a1.textContent = "都市: " + data.name;
  pop.appendChild(a1);

  let a2 = document.createElement('p');
  a2.textContent = "天気: " + data.weather[0].main;
  pop.appendChild(a2);

  let a3 = document.createElement('p');
  a3.textContent = "天気の詳細: " + data.weather[0].description;
  pop.appendChild(a3);

  let a5 = document.createElement('p');
  a5.textContent = "現在の気温: " + data.main.temp + "℃";
  pop.appendChild(a5);

  let a6 = document.createElement('p');
  a6.textContent = "体感温度: " + data.main.feels_like + "℃";
  pop.appendChild(a6);

  let a7 = document.createElement('p');
  a7.textContent = "最低気温: " + data.main.temp_min + "℃";
  pop.appendChild(a7);

  let a8 = document.createElement('p');
  a8.textContent = "最高気温: " + data.main.temp_max + "℃";
  pop.appendChild(a8);

  let a9 = document.createElement('p');
  a9.textContent = "湿度: " + data.main.humidity + "%";
  pop.appendChild(a9);

  let a10 = document.createElement('p');
  a10.textContent = "気圧: " + data.main.pressure + "hPa";
  pop.appendChild(a10);

  let a11 = document.createElement('p');
  a11.textContent = "風速: " + data.wind.speed + "m/s";
  pop.appendChild(a11);

  let a12 = document.createElement('p');
  a12.textContent = "風向: " + data.wind.deg + "°";
  pop.appendChild(a12);
}

  


// 課題6-1 のイベントハンドラ登録処理は以下に記述

let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let i = document.querySelector('input[name="city"]');
  let u = i.value;
  let id;
  if(u === 'カイロ'){
id = "360630" 
} else if (u === 'モスクワ'){
  id = "524901"
} else if(u === 'ヨハネスブルグ'){
  id = "993800"
}else if(u === '北京'){
  id = "1816670"
}else if(u === '東京'){
  id = "1850147"
}else if(u === 'シンガポール'){
  id = "1880252"
}else if(u === 'シドニー'){
  id = "2147714"
}else if(u === 'ロンドン'){
  id = "2643743"
}else if(u === 'パリ'){
  id = "2968815"
}else if(u === 'リオデジャネイロ'){
  id = "3451189"
}else if(u === 'ニューヨーク'){
  id = "5128581"
}else if(u === 'ロサンゼルス'){
  id = "5368361"
}
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id +'.json';

    axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);     
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    printDom(data);


}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
// let data = {
//   "coord": {
//     "lon": 116.3972,
//     "lat": 39.9075
//   },
//   "weather": [
//     {
//       "id": 803,
//       "main": "Clouds",
//       "description": "曇りがち",
//       "icon": "04d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 9.94,
//     "feels_like": 8.65,
//     "temp_min": 9.94,
//     "temp_max": 9.94,
//     "pressure": 1022,
//     "humidity": 14,
//     "sea_level": 1022,
//     "grnd_level": 1016
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 2.65,
//     "deg": 197,
//     "gust": 4.84
//   },
//   "clouds": {
//     "all": 53
//   },
//   "dt": 1646542386,
//   "sys": {
//     "type": 1,
//     "id": 9609,
//     "country": "CN",
//     "sunrise": 1646520066,
//     "sunset": 1646561447
//   },
//   "timezone": 28800,
//   "id": 1816670,
//   "name": "北京市",
//   "cod": 200
// };

