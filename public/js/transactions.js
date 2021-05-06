
const socket = io();
let tbl = document.getElementById('trs-table');
(function (){
    socket.on('DATA_ADDED', (data) => {
        addData(data);
    })
})();

(function(){
    fetch('/iot/v1/api/transactions')
    .then(data => {
        return data.json();
    })
    .then(jsonData => {
      console.log(jsonData)  
      jsonData.map(data => {
        addData(data);
       
      })
    })
    .catch(e => {
        console.log("Error: "+e);
    })
})()

const addData = (data) => {
    let uuIdTd = document.createElement('td');
    let uuidVal = document.createTextNode(data.uuid);
    uuIdTd.appendChild(uuidVal)

    let blnceTd = document.createElement('td');
    let blnceVal = document.createTextNode(data.initialBalance);
    blnceTd.appendChild(blnceVal)

    let fareTd = document.createElement('td');
    let fareVal = document.createTextNode(data.transiportFare);
    fareTd.appendChild(fareVal)

    let balance = document.createElement('td');
    let balanceVal = document.createTextNode(data.transiportFare);
    balance.appendChild(balanceVal)

    let dateTd = document.createElement('td');
    let dateVal = document.createTextNode(data.createdAt);
    dateTd.appendChild(dateVal);

    let tr = document.createElement('tr');
    tr.appendChild(uuIdTd);
    tr.appendChild(blnceTd);
    tr.appendChild(fareTd);
    tr.appendChild(balance);
    tr.appendChild(dateTd);

    tbl.appendChild(tr);
}
