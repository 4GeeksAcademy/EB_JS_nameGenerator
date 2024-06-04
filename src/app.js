/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronouns = ["the", "our"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon"];

const domain = [];
for (const i in pronouns) {
  for (const j in adjs) {
    for (const k in nouns) {
      const d = pronouns[i] + adjs[j] + nouns[k] + ".com";
      domain.push(d);
    }
  }
}
console.log(domain);
