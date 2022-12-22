const balance=document.getElementById('balance');

const money_plus=document.getElementById('money-plus');

const money_minus=ducument.getElementById(money-minus);

const list=document.getElementById('list');

const form=document.getElementById('form');

const text=document.getElementById('text');
const amount=document.getElementById('amount');

const dummyTransactions=[
    {id:1,text:"Flower",amount:-20},
    {id:2,text:"Salary",amount:300},
    {id:3,text:"Book",amount:-10},
    {id:4,text:"Camera",amount:150}
];

let Transaction =dummyTransactions;

function addTransactionDOM(transaction){
    console.log(transaction)
    const sign=transaction[0].amount<0?"-":"+";
    const item=document.createElement("li");

    item.classList.add(
        transaction[0].amount<0?"minus":"plus"
    )
 item.innerHTML=`${transaction[0].text}<span> ${sign}${Math.abs(transaction.amount)} </span> <button> class="delete-btn" onclick="">x</button>`;

list.appendChild(item);
}
// update value
function updateValues(){
    const amounts=transactions.map(transaction=> transaction.amount);
    const total=amounts.reduce((acc,item)=>(acc+=item))
    const income=amounts.filter(item=>item>0).reduce(acc,item)=> (acc+=item),0).toFixed(2);
    const expense=(
        amounts.filter(item=>item<0).reduce(acc,item)=>(acc+=item),0)*-1
    )
}


function Init(){

}
addTransactionDOM(Transaction);
