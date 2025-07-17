
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
  let resultDiv = document.createElement("div");
  resultDiv.id = "result";

  resultDiv.innerHTML = `
    <p>都市名: ${data.name}</p>
    <p>経度: ${data.coord.lon}</p>
    <p>緯度: ${data.coord.lat}</p>
    <p>天気: ${data.weather[0].description}</p>
    <p>最低気温: ${data.main.temp_min}</p>
    <p>最高気温: ${data.main.temp_max}</p>
    <p>湿度: ${data.main.humidity}</p>
    <p>風速: ${data.wind.speed}</p>
    <p>風向: ${data.wind.deg}</p>
  `;

  document.body.appendChild(resultDiv);
}


// 課題6-1 のイベントハンドラ登録処理は以下に記述

let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let i = document.querySelector('input["name=city"]');
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
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

