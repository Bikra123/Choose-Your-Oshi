let dataMember = [
    {   
        jiko : 'Siapa Oshimu?',
        source : 'image/jkt48-logo.jpg'
    },
    {
        name : 'Freya',
        jiko : 'Maaf Freya sudah jadi istri developer jadi gak bisa jadi oshimu hehe!!',
        source : 'image/freya.jpg'
    },
    {
        name : 'Zee',
        jiko : 'Si Gadis Tomboy semangatnya meletup-letup hai aku Zee',
        source : 'image/zee.jpg'
    },
    {
        name : 'Shani',
        jiko : 'Semanis coklat selembut sutra, Halo aku Shani',
        source : 'image/shani-jkt48-3.jpeg'
    },
    {
        name : 'Adel',
        jiko : 'Bagai Kucing yang kalem, tapi selalu memikat hatimu hai aku Adel',
        source : 'image/adel.jpg'
    },
    {
        name : 'Gita',
        jiko : 'Dita bukan berarti tidak memperhatikanmu, aku Gita!',
        source : 'image/gita.jpg'
    },
    {
        name : 'Christy',
        jiko : 'Peduli dan berbaik hati, siapakah dia? Christy!',
        source : 'image/christy.jpg'
    },
    {
        name : 'Muthe',
        jiko : "Dengan kelincahanku, aku akan menari setiap hari. Panggil aku mu mu mu Muthe! Don't touch touch touch",
        source : 'image/muthe.jpg'
    },
    {
        name : 'Michie',
        jiko : "Always be your number one and beyond, hello everyone it's Michie!",
        source : 'image/michie.jpg'
    },
    {
        name : 'Gracia',
        jiko : "Senyumku akan terekam jelas dalam ingatanmu seperti foto sejuta warna. Namaku Gracia! Always Smile!!",
        source : 'image/gracia.jpg'
    },
    {
        name : 'Ella',
        jiko : "Ohayo! Konnichiwa! Aku ingin ada di setiap harimu. Hai, Aku Ella!!",
        source : 'image/ella.jpg'
    }
];

let image = document.querySelector(".content-image")
let paragraph = document.querySelector(".content-text")
let inputName = document.getElementById('input-name')
let currentIndex = 0

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let btn10 = document.getElementById('btn10')

let defaultImage = document.createElement('img')
defaultImage.src = dataMember[currentIndex].source
image.appendChild(defaultImage)

let defaultParagraph = document.createElement('p')
defaultParagraph.innerHTML = dataMember[currentIndex].jiko
paragraph.appendChild(defaultParagraph)

function changeMember(index){
    while (image.firstChild) {
        image.removeChild(image.firstChild);
    }

    while (paragraph.firstChild) {
        paragraph.removeChild(paragraph.firstChild);
    }


    let newImage = document.createElement('img')
    newImage.src = dataMember[index].source
    image.appendChild(newImage)

    let newParagraph = document.createElement('p')
    newParagraph.innerHTML = dataMember[index].jiko
    paragraph.appendChild(newParagraph)
}

function freya(){
    changeMember(1)
    currentIndex = 1
}
function zee(){
    changeMember(2)
    currentIndex = 2
}
function shani(){
    changeMember(3)
    currentIndex = 3
}
function adel(){
    changeMember(4)
    currentIndex = 4
}
function gita(){
    changeMember(5)
    currentIndex = 5
}
function christy(){
    changeMember(6)
    currentIndex = 6
}
function muthe(){
    changeMember(7)
    currentIndex = 7
}
function michie(){
    changeMember(8)
    currentIndex = 8
}
function gracia(){
    changeMember(9)
    currentIndex = 9
}
function ella(){
    changeMember(10)
    currentIndex = 10
}


btn1.addEventListener('click',freya)
btn2.addEventListener('click',zee)
btn3.addEventListener('click',shani)
btn4.addEventListener('click',adel)
btn5.addEventListener('click',gita)
btn6.addEventListener('click',christy)
btn7.addEventListener('click',muthe)
btn8.addEventListener('click',michie)
btn9.addEventListener('click',gracia)
btn10.addEventListener('click',ella)

