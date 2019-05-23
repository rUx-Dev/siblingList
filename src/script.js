function addMore() {
  var x = document.getElementById("siblingList").childElementCount;
  var count = ++x;
  var siblingLabel = "Sibling " + count;

  var newSibling = document.createElement("INPUT");
  newSibling.setAttribute("type", "text");
  newSibling.setAttribute("placeholder", siblingLabel);
  newSibling.setAttribute("id", count);
  newSibling.setAttribute("required", "true");
  document.getElementById("siblingList").appendChild(newSibling);
}

function submitSiblingList() {
  var x = document.getElementById("siblingList").childElementCount;
  var siblingList = [];

  var addSiblingToList = new Promise(function(resolve, reject) {
    for (i = 1; i <= x; i++) {
      var newSibling = document.getElementById(i).value;
      var y = i - 1;
      siblingList[y] = newSibling;
    }
    resolve(siblingList);
  });
  addSiblingToList
    .then(function(value) {
      alert("Siblings: " + value);
      console.log(value);
    })
    .catch(function(error) {
      console.log(error);
    });
}