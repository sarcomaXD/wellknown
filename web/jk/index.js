document.querySelector(".navbar-toggler").addEventListener("click", () => {
  //alert("버튼클릭");
  document.querySelector(".list-group").classList.toggle("show");
});
for (i = 2; i < 13; i++) {
  let b = i - 2;
  document
    .querySelector(" tr:nth-child(" + i + ") > td > a")
    .addEventListener("click", () => {
      document.querySelector(".black-bg").classList.add("show-modal");
      document.querySelector(".carousel").style.transform = `translateX(-${
        b * 100
      }vw)`;
    });
}
document.querySelector("div.list-group a").addEventListener("click", () => {
  document.querySelector(".black-bg").classList.add("show-modal");
  document.querySelector(".list-group").classList.remove("show");
});
document.querySelector(".black-bg").addEventListener("click", (e) => {
  if (
    e.target == document.querySelector(".black-bg") ||
    e.target == document.querySelector("span.close")
  ) {
    document.querySelector(".black-bg").classList.remove("show-modal");
  }
});

let index = 0;
const prev = document.querySelector("button.prev");
const next = document.querySelector("button.next");
const carousel = document.querySelector(".carousel");
prev.addEventListener("click", () => {
  if (index == 0) return;
  index -= 1;
  carousel.style.transform = `translateX(-${index * 100}vw)`;
});

next.addEventListener("click", () => {
  if (index == 9) return;
  index += 1;
  carousel.style.transform = `translateX(-${index * 100}vw)`;
});

document.querySelector("button.num10").addEventListener("click", () => {
  let input = document.querySelector("input.num10").value;
  let num10_p = "";

  for (i = 1; i <= input; i++) {
    a = "*";
    b = "&nbsp";
    num10_p += b.repeat(input - i) + a.repeat(2 * i - 1) + "<br>";
  }
  //console.log(num10_p);
  document.querySelector("p.num10").innerHTML = num10_p;
});

let s = 0;
for (i = 0; i <= 100; i++) {
  s += i;
}
document.querySelector("p.num11").innerHTML = s;

class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    return "파이어볼";
  }
}

document.querySelector("button.num12").addEventListener("click", () => {
  health = document.querySelector("input.num12_health").value;
  mana = document.querySelector("input.num12_mana").value;
  armor = document.querySelector("input.num12_armor").value;
  //console.log(health, mana, armor);
  const x = new Wizard(health, mana, armor);
  document.querySelector("p.num12").innerHTML =
    x.health + ", " + x.mana + ", " + x.armor + "<br>" + x.attack();
});
document.querySelector("button.num13").addEventListener("click", () => {
  const solar_system = [
    "수성",
    "금성",
    "지구",
    "화성",
    "목성",
    "토성",
    "천왕성",
    "해왕성",
  ];
  let n_th = document.querySelector("input.num13").value;
  document.querySelector("p.num13").innerHTML = solar_system[n_th - 1];
});

document.querySelector("button.num14").addEventListener("click", () => {
  let n = document.querySelector("input.num14").value;
  let answer = "";
  if (n % 3 == 0) {
    answer = "짝";
  } else {
    answer = n;
  }
  document.querySelector("p.num14").innerHTML = answer;
});
document.querySelector("button.num15").addEventListener("click", () => {
  let name = document.querySelector("input.num15").value;
  document.querySelector("p.num15").innerHTML =
    "안녕하새요. 저는 " + name + "입니다.";
});
document.querySelector("button.num16").addEventListener("click", () => {
  let input_num16 = document.querySelector("input.num16").value;
  let result = "";
  for (i = 1; i <= input_num16.length; i++) {
    result += input_num16.substr(-i, 1);
  }
  document.querySelector("p.num16").innerHTML = result;
});
document.querySelector("button.num17").addEventListener("click", () => {
  let height_lim = 150;
  if (height_lim <= document.querySelector("input.num17").value) {
    document.querySelector("p.num17").innerHTML = "YES";
  } else {
    document.querySelector("p.num17").innerHTML = "NO";
  }
});
document.querySelector("button.num18").addEventListener("click", () => {
  let average = 0;
  document.querySelectorAll("input.num18").forEach((score) => {
    average += Number(score.value);
  });
  document.querySelector("p.num18").innerHTML = average / 3;
});
document.querySelector("button.num19").addEventListener("click", () => {
  let num_19 = document.querySelector("input.num19").value;
  num_19_split = num_19.split(" ");
  result_19 = Number(num_19_split[0]) ** Number(num_19_split[1]);
  document.querySelector("p.num19").innerHTML = result_19;
});
document.querySelector("button.num20").addEventListener("click", () => {
  let num_20 = document.querySelector("input.num20").value;
  num_20_split = num_20.split(" ");
  quotient = Math.floor(Number(num_20_split[0]) / Number(num_20_split[1]));
  remainder = Number(num_20_split[0]) % Number(num_20_split[1]);
  document.querySelector("p.num20").innerHTML =
    "몫 : " + quotient + "<br>나머지 : " + remainder;
});
