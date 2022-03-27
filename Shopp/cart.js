console.log("HELLO")

let removeButton=Array.from(document.querySelectorAll('.remove'));
console.log(removeButton);

removeButton.forEach(el => el.addEventListener('click', function (e) {
    e.preventDefault()
    el.parentElement.parentElement.remove();
    totalPrice();
  })
)

let likeButton=Array.from(document.querySelectorAll('.heart'));
console.log(likeButton);
likeButton.forEach(el=> el.addEventListener('click',function(e){
    e.preventDefault()
    if(el.style.color!== 'salmon')
    {
        el.style.color='salmon'
    }
    else{
        el.style.color='black'
    }
    totalPrice();
})
)
let num=Array.from(document.querySelectorAll('.num'))
console.log(num)
let plusBtn=Array.from(document.querySelectorAll('.plus'))
plusBtn.forEach(el=> el.addEventListener('click',function(e){
    e.preventDefault()
    let i=plusBtn.indexOf(el)
    num[i].innerHTML++  
    totalPrice();
})

)

let minusBtn=Array.from(document.querySelectorAll('.minus'))
minusBtn.forEach(el=> el.addEventListener('click',function(e){
    e.preventDefault()
    let i=minusBtn.indexOf(el)
    if(num[i].innerHTML>0){
        num[i].innerHTML--
    }
    totalPrice();
})
)
let price=Array.from(document.querySelectorAll('.price'))
console.log(price)

function totalPrice()
{   let quantity=document.querySelectorAll('.num')
    let itemPrice=document.querySelectorAll('.price')
    let a =0;
    for(let i=0;i<itemPrice.length;i++)
    {
        a=a+itemPrice[i].innerHTML*quantity[i].innerHTML
    }
    console.log(a);
    document.querySelector('.totalprice').innerHTML=a;
    
}
