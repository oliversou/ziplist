const testlist1 = ['a', 'b', 'c'];
const testlist2 = [1, 2, 3];

function ziplist(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

console.log(ziplist(testlist1, testlist2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(testlist1, testlist2));
