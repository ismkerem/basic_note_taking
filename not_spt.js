const yeni_gorev=document.querySelector(".note_action");
const yeni_gorev_ekle=document.querySelector(".note_add");
const gorev_listesi=document.querySelector(".note_list");

yeni_gorev_ekle.addEventListener("click",gorev_ekle);
gorev_listesi.addEventListener("click",gorev_sil);



function gorev_ekle(e){
   e.preventDefault();

   //div oluşturma
    const gorev_div=document.createElement("div");
    gorev_div.classList.add("note_item2");
    // li oluşturma
    const gorev_li=document.createElement("li");
    gorev_li.classList.add("note_contents");
    gorev_li.innerText=yeni_gorev.value;
    gorev_div.appendChild(gorev_li);


//tamamlandı butonu ekle
const gorev_tamamla=document.createElement("button");
gorev_tamamla.classList.add("note_button");
gorev_tamamla.classList.add("note_button_check");
gorev_tamamla.innerHTML='<i class="fa-solid fa-check"></i> ';
gorev_div.appendChild(gorev_tamamla);
//gorev sil 
const gorev_sil=document.createElement("button");
gorev_sil.classList.add("note_button");
gorev_sil.classList.add("note_button_remove");
gorev_sil.innerHTML='<i class="far fa-trash-alt"></i>';
gorev_div.appendChild(gorev_sil);


 yeni_gorev.value="";
 gorev_listesi.appendChild(gorev_div);

}

function gorev_sil(e){
const tiklanan_eleman=e.target;

if(tiklanan_eleman.classList.contains("note_button_check")){
   
   tiklanan_eleman.parentElement.classList.toggle('note_done');

}
if(tiklanan_eleman.classList.contains("note_button_remove")){
   tiklanan_eleman.parentElement.classList.toggle('remove_note');
   
    tiklanan_eleman.parentElement.addEventListener('transitionend',function(){
        tiklanan_eleman.parentElement.remove();
    });
 }
}
