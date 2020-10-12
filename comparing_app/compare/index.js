const url = 'http://localhost:8081';
const secondServer = 'http://127.0.0.1:8082'
let button = document.getElementById("send")

button.addEventListener("click", function() {
    button.disabled = true
    window.alert("Debemos esperar un momento mientras se terminan de ejecutar las pruebas")
    fetch(`${url}/compare`).then(res => {
        button.disabled = false
        window.alert("Han terminado")
        return res.json()
    }).then(ans =>{
        

        renderInfo(ans);
    }).catch(err => {
        button.disabled = false
        window.alert('Ups! Hubo un error \n'+ err)
        console.log('Something went wrong calling service \n', err)
    })
});


const renderInfo = (ans) =>{
    let table = document.getElementById("table");
    for(x in ans){
        let info = ans[x];

        let tr = document.createElement('tr');
        let tdate = document.createElement('td');
        tdate.innerHTML= info['date'];
        let timage1 = document.createElement('td');
        console.log(info)
        timage1.innerHTML=`<img src="${secondServer}${info['image1']}" width="300px" height="300px" />`
        
        let timage2 = document.createElement('td');
        timage2.innerHTML=`<img src="${secondServer}${info['image2']}" width="300px" height="300px" />`
        
        let timage3 = document.createElement('td');
        timage3.innerHTML =`<img src="${secondServer}${info['comparisson']}" width="300px" height="300px" />`
        
        let tdata = document.createElement('td');
        tdata.innerHTML= JSON.stringify(info['data']);
        tr.appendChild(tdate);
        tr.appendChild(timage1);
        tr.appendChild(timage2);
        tr.appendChild(timage3);
        tr.appendChild(tdata);
        table.appendChild(tr);
    }   
}