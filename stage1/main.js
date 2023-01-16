


window.onscroll = () => {
    if(window.innerWidth>1150){
        if (window.scrollY >= 86) {
            document.querySelector('.header-2').classList.add('active');
            document.querySelector('.hd2-logo').style.cssText = `
            visibility: visible;
            margin-left:9%;
            
            
            `;
            document.querySelector('.hd2-icons').style.cssText = `
            visibility: visible;
            margin-right:9%;
            
            
            `;
        } else {
            document.querySelector('.header-2').classList.remove('active');
            document.querySelector('.hd2-logo').style.cssText = `
            visibility: hidden;
            margin-left:0%;
            
            
            `;
            document.querySelector('.hd2-icons').style.cssText = `
            visibility: hidden;
            margin-right:0%;
            
            `;
    
        }
    }
   
}
setTimeout(()=>{window.scrollTo({top:0,left:0})},10);


// SLIDER
const img_slider = document.querySelectorAll('.img_content_slider img');
const countimg = img_slider.length;
const prev_btn = document.getElementById('prev')
const next_btn = document.getElementById('next')


const slider_ctls = document.querySelector('.slider_controls');
var current_active = 0;

//  create list slider_ctls
//  create element ul
const ul_pagination = document.createElement('ul');
ul_pagination.setAttribute('class', 'ul_pagination')

for (let index = 0; index < countimg; index++) {

    const li_pagination = document.createElement('li');
    li_pagination.setAttribute('Data_click', index);
    ul_pagination.appendChild(li_pagination);
}
slider_ctls.appendChild(ul_pagination)
const slider_ul = document.querySelectorAll('.ul_pagination li ');
// slider_ul[0].classList.add('active');

fun_checker();

//the function checker

function fun_checker() {
    Remove_all_active();
    img_slider[current_active].classList.add('active');
    slider_ul[current_active].classList.add('active');
    // condition 3La current_active
    if (current_active == 0) {
        prev_btn.classList.add('desabled')
    }
    else {
        prev_btn.classList.remove('desabled')
    }
    if (current_active == countimg - 1) {
        next_btn.classList.add('desabled')
    }
    else {
        next_btn.classList.remove('desabled')
    }

}

//click sur button Prev
prev_btn.addEventListener('click', Click_btn_prev);
//function click prev
function Click_btn_prev() {
    if (current_active !== 0) {
        current_active--;
        fun_checker();
    }
}
//click sur button Next
next_btn.addEventListener('click', Click_btn_next);
//function click prev
function Click_btn_next() {
    if (current_active !== countimg - 1) {
        current_active++;
        fun_checker();
    }
}
//click sur items li
for (let index = 0; index < countimg; index++) {
    slider_ul[index].addEventListener('click', () => {
        current_active = parseInt(slider_ul[index].getAttribute('Data_click'));
        fun_checker();
    })

}
//Remave all elements Active
function Remove_all_active() {
    //remove active img
    img_slider.forEach(element => {
        element.classList.remove('active')
    });
    //remove active item list
    slider_ul.forEach(element => {
        element.classList.remove('active')
    });
}


let btn_p = document.getElementById('prev_product_slide');
let btn_n = document.getElementById('next_product_slide');
let lifihscroll = document.querySelector('#slide');
const maxScroll = lifihscroll.scrollWidth - lifihscroll.clientWidth;
let playslide_auto = setInterval(autoPlay, 80);

btn_p.addEventListener('click', () => {
    lifihscroll.scrollLeft -= 125;
})
btn_n.addEventListener('click', () => {
    lifihscroll.scrollLeft += 125;
})


function autoPlay() {
    if (lifihscroll.scrollLeft < (lifihscroll.clientWidth) / 8) {
        btn_p.classList.add('hidebtn');
        lifihscroll.scrollLeft > maxScroll - 1 ? lifihscroll.scrollLeft -= maxScroll : lifihscroll.scrollLeft += 2;
    } else {
        btn_p.classList.remove('hidebtn');
        lifihscroll.scrollLeft > maxScroll - 1 ? lifihscroll.scrollLeft -= maxScroll : lifihscroll.scrollLeft += 2;
    }


}
// console.log(lifihscroll.children.length)


for (let i = 0; i < lifihscroll.children.length; i++) {
    lifihscroll.children[i].addEventListener('mouseover', () => {
        clearInterval(playslide_auto);
    })

    slide.onmousedown = () => {
        clearInterval(playslide_auto);
    }

    slide.onmouseup = () => {
        return playslide_auto = setInterval(autoPlay, 80);
    }

    lifihscroll.children[i].addEventListener('mouseout', () => {
        return playslide_auto = setInterval(autoPlay, 80);
    })

}





//slide 3











const arr_conseils=[
    {title:" Votre solution sant",
    src:"./img/portrait-beautiful-nurse.png",
    subtitle:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    // desc:"Resize the browser window to see how the text sizResize the browser window to see how the text siz"
},
{title:" Votre solution sant",
src:"./img/medium-shot-friends-running-together.png",
subtitle:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
},
{title:" Votre solution sant",
src:"./img/portrait-beautiful-mother-with-her-baby.png",
subtitle:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
},
{title:" Votre solution sant",
src:"./img/young-woman-pharmacist-pharmacy.png",
subtitle:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
// desc:"Resize the browser window to see how the text sizResize the browser window to see how the text siz"
},
{title:" Votre solution sant",
src:"./img/medium-shot-friends-running-together.png",
subtitle:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
},
{title:" Votre solution sant",
src:"./img/medium-shot-friends-running-together.png",
subtitle:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
},

{title:" Votre solution sant",
src:"./img/portrait-beautiful-nurse.png",
subtitle:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
// desc:"Resize the browser window to see how the text sizResize the browser window to see how the text siz"
},


]




var start_index=0;
var end_index=3;
var card_item;
var slide3;
 

const slide3_container=document.querySelector('.slide3_container')
const prev_product_slide3=document.querySelector('#prev_product_slide3');
const next_product_slide3=document.querySelector('#next_product_slide3');
const ctrl_slide3=document.querySelector('.ul_ctrl3');
const num_list_controle=arr_conseils.length/3;
console.log(arr_conseils.length)
console.log(num_list_controle);

// var ctn;
function affichecard( s,e){
   
    slide3=document.createElement('section');
slide3.setAttribute('id','slide3');
slide3_container.insertBefore(slide3,next_product_slide3);
if(s==0){
    prev_product_slide3.classList.add('desabled')

   }
   else{
    prev_product_slide3.classList.remove('desabled')

   }

   if(e==arr_conseils.length-1){
    next_product_slide3.classList.add('desabled')

   }
   else{
    next_product_slide3.classList.remove('desabled')

   }

    for(var i=s;i<e;i++){
   
        var card_item=document.createElement('div');
        card_item.setAttribute('class','card_item')
      
        var img_ctn= document.createElement('img');
        img_ctn.setAttribute('src',arr_conseils[i]['src']);
        card_item.appendChild(img_ctn);
        var conseil_detail=document.createElement('div');
        conseil_detail.setAttribute('class','conseil_detail')
        var h3_ctn= document.createElement('h3');
        h3_ctn_text=document.createTextNode(arr_conseils[i]['title']);
        h3_ctn.appendChild(h3_ctn_text);
        conseil_detail.appendChild(h3_ctn);


        var p1_ctn= document.createElement('p');
        p1_ctn_text=document.createTextNode(arr_conseils[i]['subtitle']);
        p1_ctn.appendChild(p1_ctn_text);
        conseil_detail.appendChild(p1_ctn);

        card_item.appendChild(conseil_detail); 


        slide3.appendChild(card_item);
        
        
        }

    
        
}


affichecard( start_index,end_index)
for (let j = 0; j< num_list_controle; j++) {
    var li=document.createElement('li');
    ctrl_slide3.appendChild(li); 
    ctrl_slide3.children[0].classList.add('active')

    
}

next_product_slide3.addEventListener('click',()=>{
   if(end_index==arr_conseils.length-1){
    next_product_slide3.classList.add('desabled')

   }
   else {
  
    next_product_slide3.classList.remove('desabled')
    start_index++;
    end_index++;
    
    slide3.remove()
    affichecard( start_index,end_index)


   }

})


prev_product_slide3.addEventListener('click',()=>{
    if(start_index==0){
     prev_product_slide3.classList.add('desabled')
 
    }
    else {
   
     prev_product_slide3.classList.remove('desabled')
     start_index--;
     end_index--;
     
     slide3.remove()
     affichecard( start_index,end_index)
 
 
    }
 
 })


// function printname(){
//     console.log('meryem')
// }
function list_remove(){
    for (let i = 0; i < num_list_controle; i++) {
        ctrl_slide3.children[i].classList.remove('active')
        
    }
}

 
for (let i = 0; i < num_list_controle; i++) {
    ctrl_slide3.children[i].addEventListener('click', () => {
     console.log(i);
        slide3.remove()
        list_remove();
        
        // var e=i+3;
        affichecard(i,i+3)
        ctrl_slide3.children[i].classList.add('active')


       
    })


}


////////////////////////////////////////////////////////////