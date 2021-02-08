let list = $('#newly ul li')
let temp = []

function getName(strList = []) {
  const tagVal = ["new", "オススメ", "再入荷"]
  const filterStrList = strList.filter(val => !tagVal.some(tag => val === tag))
    .filter(val => !val.includes("円"))
    .filter(val => isNaN(val))
  return filterStrList[0]
}

function getTag(strList = []) {
  if (strList[0] == "new") {
    return "new"
  } else if (strList.includes("オススメ")) {
    return "recommend"
  } else if (strList.includes("再入荷")) {
    return "shortage"
  } else {
    return ""
  }
}

function getPrice(strList = []) {
  const tagVal = ["new", "オススメ", "再入荷"]
  const base = strList.filter(val => val.includes("円"))
  const front = strList.filter(val => !tagVal.some(tag => val === tag))
    .filter(val => !val.includes("円"))
    .filter(val => !isNaN(val))
  let priceStr = `${front.length > 0 ? front[0] + "," : ""}${base}`
  return priceStr
}

function getImageName(i = 0) {
  let imgType = '.jpg'
  if (i == 9 || i == 58 || i == 59) {
    imgType = '.png'
  }
  let imageName = `book_${i}${imgType}`
  return imageName
}

for (let i = 0; i < list.length; i++) {
  let data = $(list[i]).context.innerText.replace(/(\n)/gm, ',')
  let divideData = data.split(",").filter(val => val !== "")
  temp.push({
    id: i,
    name: getName(divideData),
    tag: getTag(divideData),
    price: getPrice(divideData),
    image: getImageName(i)
  })
}

document.write(JSON.stringify(temp))