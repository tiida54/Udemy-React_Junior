function getData(callback) {
    let req = new XMLHttpRequest();
    req.open("get", "https://training.pada-x.com/resources/javascript-es6-react/data.out");
    req.onload=function(){
        callback(this.responseText);
    };
    req.send();
}

function showData(result) {
    console.log(result);
};

getData(showData);