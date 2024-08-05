// var mergeTwoLists = function(list1, list2) {
//     let myArr = list1.concat(list2)
//     myArr = myArr.sort( (a, b) => a - b )
//     console.log(myArr);

// };

// mergeTwoLists([1,2,4], [1,3,4])

var lengthOfLastWord = function (s) {
  let arr = s.split(" ");
  let myArr = arr.filter((el) => el != "");
  let myArr2 = myArr.map((el) => el.length);
  return myArr2[myArr2.length - 1];
};

console.log(lengthOfLastWord("   fly me   to   the moon  ")); // moon length 4

var deleteDuplicates = function (head) {
  let arr = [];
  for (let i = 0; i < head.length; i++) {
    if (!arr.includes(head[i])) {
      arr.push(head[i]);
    }
  }
  return arr;
  // 2-usul return [...new Set(head)]
};

console.log(deleteDuplicates([1, 2, 3, 3, 4, 4, 5]));
