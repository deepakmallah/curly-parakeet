// Requirement
// 10 Key - value pair
// Need to insert 11th key using LFU cache

// let sortedHashMap =

let dataHash = {
  "a": "A",
  "c": "C"
};

// size 2

let least_freq = {
  "1": [ "a" ,"c"]
}

let keys_freq = {
  "c": 1,
  "a": 1
};



set("a", "A")
set("b", "B")

get("b")
get("a")
//get("a")

// ON Set  - size of table, if the exceeds the threshhold, pop the LFU, then push

set("c", "C")
