function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedList = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML, 10) + n;
  }
}

function deepestChild() {
    return document.getElementById('grand-node')
}
