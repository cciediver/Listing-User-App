
let input = document.querySelector('#prtitle');
let btn = document.querySelector('#submit');
var myarray = [];

 btn.addEventListener('click' , function(){
    // console.log(input.value);
    myarray.push(input.value);
    show();
});

function show(){
    let table = '';
for(var i =0 ; i<myarray.length ; i++){
    table += `
            <tr>
                <td>${i+1}</td>
                <td>${myarray[i]}</td>                     
            </tr>
        `
}

document.getElementById('tbody').innerHTML = table;

}