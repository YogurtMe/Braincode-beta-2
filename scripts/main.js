// #####-|-NAVBAR-|-#####

let menu = document.getElementById('menu');
let nav = document.getElementById('nav');
let menuMore = document.getElementById('menu-more');

let temp = 0;
let toggleMenu = ()=>{
    menuMore.classList.toggle('active');
    menu.classList.toggle('toX');
    
    if(temp == 0){
        document.body.style.overflow = 'hidden';
        nav.style.backgroundImage = 'none';
        temp = 1;
    }else{
        document.body.style.overflow = 'auto';
        nav.style.backgroundImage = 'linear-gradient(rgb(0,7,51), transparent)';
        temp = 0;
    }
}

menu.addEventListener('click', ()=>{toggleMenu();});
menuMore.addEventListener('click', ()=>{toggleMenu();});













// #####-|-SCROLL-BUTTON-|-#####
let nextScroll = (id, sum)=>{
    const el = document.getElementById(id);
    el.scrollBy({ left:sum, behavior:"smooth"});
};

let tglElem = (id, cl)=>{
    const el = document.getElementById(id);
    el.classList.toggle(cl);
};








// #####-|-ADD-CHAPTER-|-ADD-MATERI-|-#####

let addCh = (id, judul, desk, chId)=>{
    const parent = document.getElementById(id);
    parent.insertAdjacentHTML("beforeend",
    `
    <div class="item fadeInline">
      <div class="materi-parent" id="${chId}">
        <div class="ch-header">
          <h1 class="txt-wth">${judul}</h1>
          <p class="txt-wth">${desk}</p>
        </div>
      </div>
    </div>
    `);
}

let addMateri = (chId, judul, desk, matLink)=>{
    const parent = document.getElementById(chId);
    parent.insertAdjacentHTML("beforeend",
    `
    <div class="materi">
        <h1 class="txt-wth">${judul}</h1>
        <p class="txt-wth">${desk}</p>
        <a class="txt-wth" onclick="selectMat('${matLink}')" href="materi.html">Pelajari</a>
    </div>
    `);
}

let addChMat = ()=>{
    addCh("js-chP","chapter 1","pelajari sejarah, penemu dan berbagai hal tentang javascript","js-ch1");
    addMateri("js-ch1","apa itu javascript","kenalan dengan javascript","js-mat-1");
    addMateri("js-ch1","sejarah javascript","pelajari sejarah javascript","js-mat-2");
    addMateri("js-ch1","kegunaan","pelajari berbagai kegunaan javascript");
    addMateri("js-ch1","pengenalan","kenali javascript lebih dalam");
    
    addCh("js-chP","chapter 2","pelajari bagaimana cara instalasi javascript","js-ch2");
    addMateri("js-ch2","tools yang dibutuhkan","pelajari apa saja yang dibutuhkan untuk menggunakan javascript","js-mat-1");
    addMateri("js-ch2","setup file","bagaimana struktur file untuk menggunakan javascript","js-mat-1");
    addMateri("js-ch2","menggunakan javascript","pelajari cara menggunakan javascript","js-mat-1");
    addMateri("js-ch2","javascript di luar web","bagaimana javascript berjalan di luar website","js-mat-1");
    
    addCh("js-chP","chapter 3","kenali berbagai variabel dan tipe data di javascript.","js-ch3");
    addMateri("js-ch3","variabel","variabel dalam javascript.","js-mat-1");
    addMateri("js-ch3","var","variabel var dalam javascript.","js-mat-1");
    addMateri("js-ch3","let","variabel let dalam javascript.","js-mat-1");
    addMateri("js-ch3","const","variabel const dalam javascript.","js-mat-1");
    addMateri("js-ch3","tipe data","tipe data dalam javascript.","js-mat-1");
    addMateri("js-ch3","string","tipe data string dalam javascript.","js-mat-1");
    addMateri("js-ch3","integer","tipe data integer dalam javascript.","js-mat-1");
    addMateri("js-ch3","boolean","tipe data boolean dalam javascript.","js-mat-1");
    
    addCh("js-chP","chapter 4","pelajari operator dalam javascript.","js-ch4");
    addMateri("js-ch4","operator","operator dalam javascript.","js-mat-1");
    addMateri("js-ch4","penjumlahan","penjumlahan dalam javascript.","js-mat-1");
    addMateri("js-ch4","pengurangan","pengurangan dalam javascript.","js-mat-1");
    addMateri("js-ch4","perkalian","perkalian dalam javascript.","js-mat-1");
    addMateri("js-ch4","pembagian","pembagian dalam javascript.","js-mat-1");
    
    addCh("js-chP","chapter 5","pelajari control flow dalam javascript.","js-ch5");
    addMateri("js-ch5","control flow","control flow dalam javascript.","js-mat-1");
    addMateri("js-ch5","if","if dalam javascript.","js-mat-1");
    addMateri("js-ch5","else if","else if dalam javascript.","js-mat-1");
    addMateri("js-ch5","switch","switch dalam javascript.","js-mat-1");

    addCh("js-chP","chapter 6","pelajari perulangan dalam javascript.","js-ch6");
    addMateri("js-ch6","perulangan","perulangan dalam javascript.","js-mat-1");
    addMateri("js-ch6","for loop","for loop dalam javascript.","js-mat-1");
    addMateri("js-ch6","while","while dalam javascript.","js-mat-1");
    addMateri("js-ch6","do while","do while dalam javascript.","js-mat-1");
    
    addCh("js-chP","chapter 7","pelajari array dan object dalam javascript.","js-ch7");
    addMateri("js-ch7","array","array dalam javascript.","js-mat-1");
    addMateri("js-ch7","object","object dalam javascript.","js-mat-1");
    
    
    
    
    
    addCh("cpp-chP","chapter 1","acumalaka acumalaka","cpp-ch1");
    addMateri("cpp-ch1","pengenalan","kenali c++ lebih dalam");
    addMateri("cpp-ch1","pengenalan","kenali c++ lebih dalam");
    addMateri("cpp-ch1","pengenalan","kenali c++ lebih dalam");
    addMateri("cpp-ch1","pengenalan","kenali c++ lebih dalam");

    addCh("py-chP","chapter 1","acumalaka acumalaka","py-ch1");
    addMateri("py-ch1","pengenalan","kenali python lebih dalam");
    addMateri("py-ch1","pengenalan","kenali python lebih dalam");
    addMateri("py-ch1","pengenalan","kenali python lebih dalam");
    addMateri("py-ch1","pengenalan","kenali python lebih dalam");
}










// #####-|-CHAPTER-SELECTION-|-#####

let chArr = [
document.getElementById("js-ch-list"),
document.getElementById("py-ch-list"),
document.getElementById("cpp-ch-list")
];

let selectCh = (trgt)=>{sessionStorage.setItem("ch-select",`${trgt}`);};

let doSelectCh = ()=>{
    let target = parseInt(sessionStorage.getItem("ch-select"));
    for(let i = 0; i < chArr.length; i++){
        if(i == target){
            chArr[i].style.display = "flex";
        }
    }
};

let chOnload = ()=>{
    doSelectCh();
    addChMat();
}







// #####-|-DATA-MATERI-|-#####

//#################################################################
// di dalam file dataMateri.js
//#################################################################










//#####-|-SET-MATERI-|-#####

let selectSoal = (target)=>{sessionStorage.setItem("soal-select",`${target}`);};

//id disini berupa id materi
let setMateri = (id)=>{
    const header = document.getElementById("materiHeader");
    const content = document.getElementById("materiContent");
    const matBtn = document.getElementById("materi-btn");
    let index;
    
    for(let i = 0; i < dataMateri.length; i++){
        if(dataMateri[i].id == id){
            index = i;
        }
    }
    
    let title = dataMateri[index].header.title;
    let subTitle = dataMateri[index].header.subTitle;
    let contentList = dataMateri[index].content;
    
    header.children[0].innerHTML = title;
    header.children[1].innerHTML = subTitle;
    
    matBtn.addEventListener("click", ()=>{selectSoal(id);});
    
    for(let i = 0; i < contentList.length; i++){
        let type = contentList[i].type;
        if(type == "p"){
            content.insertAdjacentHTML("beforeend",`
            <p class="txt-wth">${contentList[i].content}</p>
            `
            );
        }else if(type == "c"){
            let specialId = Math.floor(Math.random()*99999);
            content.insertAdjacentHTML("beforeend",
            `
            <div class="code-box">
              <h1 class="txt-wth">
                ${contentList[i].title}
              </h1>
              <div class="code" id="${specialId}"></div>
            </div>
            `
            );
            
            let code = document.getElementById(specialId);
            let codeList = contentList[i].content
            
            for(let i = 0; i < codeList.length; i++){
                code.insertAdjacentHTML("beforeend",
                `
                <p class="txt-wth">${codeList[i]}</p>
                `);
            }
        }else if(type == "t"){
            content.insertAdjacentHTML("beforeend",`<h1 class="txt-wth">${contentList[i].content}</h1>`);
        }
    }
}










//#####-|-MATERI-SELECTION-|-#####

let selectMat = (target)=>{sessionStorage.setItem("mat-select",`${target}`);};

let doSelectMat = ()=>{
    let target = sessionStorage.getItem("mat-select");
    setMateri(target);
}










// #####-|-OPSI-SOAL-|-#####

let uc = null;

let optionSelect = ()=>{
    let optionList = document.getElementById("option-parent").children;
    
    for(let i = 0; i < optionList.length; i++){
        optionList[i].addEventListener("click", ()=>{
            optionList[i].children[0].classList.toggle("selected");
            if(uc == i){
                uc = null;
            }else{
                uc = i;
            }
            for(let x = 0; x < optionList.length; x++){
                if(x != i){
                    optionList[x].children[0].classList.remove("selected");
                }
            }
        });
    }
}










//#####-|-DATA-SOAL-|-#####

//#################################################################
// di dalam file dataSoal.js
//#################################################################










//#####-|-SET-SOAL-|-SET-HASIL-|-KOREKSI-|-#####

let nowIndex = 0;
let index;

let setSoal = (id, nowIndex)=>{
    let pertanyaan = document.getElementById("pertanyaan");
    let title = document.getElementById("soal-title");
    let optionList = document.getElementById("option-parent").children;
    
    for(let i = 0; i < dataSoal.length; i++){
        if(dataSoal[i].id == id){
            index = i;
        }
    }
    
    title.innerHTML = dataSoal[index].title;
    pertanyaan.innerHTML = dataSoal[index].soal[nowIndex].pertanyaan;
    for(let i = 0; i < optionList.length; i++){
        optionList[i].children[1].innerHTML = dataSoal[index].soal[nowIndex].pilihan[i];
    }
};

let setHasil = (cond)=>{
    let hasil = document.getElementById("hasil");
    hasil.style.display = "flex";
    if(cond == "benar"){
        hasil.style.marginTop = '0';
        hasil.style.backgroundColor = "forestgreen";
        hasil.children[0].innerHTML = "Jawaban Kamu Benar!";
        setTimeout(()=>{
            hasil.style.marginTop = '600px';
        },1250);
    }else if(cond == "salah"){
        hasil.style.marginTop = '0';
        hasil.style.backgroundColor = "red";
        hasil.children[0].innerHTML = "Jawaban Kamu Kurang Tepat!";
        setTimeout(()=>{
            hasil.style.marginTop = '600px';
        },1250);
    }else if(cond == "selesai"){
        hasil.style.marginTop = '0';
        hasil.style.backgroundColor = "var(--nn-blue)";
        hasil.children[0].style.color = "var(--bg-blue)";
        hasil.children[0].innerHTML = "kamu menyelesaikan Exercise";
        let soalBtn = document.getElementById('soalBtn');
        soalBtn.innerHTML = 'SELESAI';
        soalBtn.addEventListener('click', ()=>{
            history.back();
        });
    }
}

let koreksiSoal = ()=>{
    let optionList = document.getElementById("option-parent").children;
    let jawaban = dataSoal[index].soal[nowIndex].jawaban;
    
    if(jawaban == uc){
        if(dataSoal[index].soal[nowIndex].isLast){
            setHasil("selesai");
        }else{
            uc = null;
            for(let x = 0; x < optionList.length; x++){
                optionList[x].children[0].classList.remove("selected");
            }
            setHasil("benar");
            nowIndex += 1;
            let target = sessionStorage.getItem("soal-select");
            setSoal(target, nowIndex);
        }
    }else if(jawaban != uc){
        setHasil("salah");
    }
}










//#####-|-SOAL-SELECTION-|-#####

//select soal di line 209

let doSelectSoal = ()=>{
    let target = sessionStorage.getItem("soal-select");
    optionSelect();
    setSoal(target, nowIndex);
}









//#####-|-INVENTOR-SELECTION-|-#####

let invArr = [
document.getElementById("brendan-inv"),
document.getElementById("bjarne-inv"),
document.getElementById("guido-inv")
];

let selectInv = (trgt)=>{sessionStorage.setItem("inv-select",`${trgt}`);};

let doSelectInv = ()=>{
    let target = sessionStorage.getItem("inv-select");
    for(let i = 0; i < invArr.length; i++){
        if(i == target){
            invArr[i].style.display = "flex";
        }
    }
};