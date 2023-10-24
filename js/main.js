import { createEventListeners } from "./eventListeners.js";
import { base64ToBytes, bytesToBase64 } from "./utility.js";

createEventListeners();

export function selectTab(name) {
  hideTabs();
  showTab(name);
}

function hideTabs() {
  let tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
}

function showTab(name) {
  let tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    if (name == tabs[i].id) { tabs[i].style.display = "flex";}
  }
}

class Card {
  frontContent = "";
  backContent = "";
  constructor(frontContent, backContent) {
    this.frontContent = frontContent;
    this.backContent = backContent;
  }
}

class List {
  cardList = [];
  addCard(card) {
    cardList.push(card);
  }
  get cards() {
    return this.cardList;
  }
}
