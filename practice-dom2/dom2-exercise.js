//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

function show() {
  const addrTitle = document.getElementById("addr");
  const addrText = document.createElement("p");
  addrText.textContent = campus.address;
  addrTitle.insertAdjacentElement("afterend", addrText);

  const deptTitle = document.getElementById("dept");
  const list = document.createElement("ul");

  for (const dept of gakka) {
    const item = document.createElement("li");
    item.textContent = dept.name;
    list.appendChild(item);
  }

  deptTitle.insertAdjacentElement("afterend", list);
}

document.getElementById("show").addEventListener("click", show);
