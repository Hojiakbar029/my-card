let elList = document.querySelector('.list')
let elInp = document.querySelector('.inp')
let elFormInp = document.querySelector('.form__inp')
let elMovie__list = document.querySelector('.movie__list')
let elPagenation__list = document.querySelector('.pagenation__list')
let elSelYear = document.querySelector('.select__year')
let elSelRat = document.querySelector('.select__rating')
let elSelCate = document.querySelector('.select__category')
let elLocalList = document.querySelector('.local__list')

let str = 'salom alik salom'


const data = movies.slice(10, 20)
elFormInp.addEventListener('submit', (e1)=>{
    e1.preventDefault()
    console.log(elInp.value);
    const filData = data.filter((item1)=> item1.Title.trim().toLowerCase().includes(elInp.value.trim().toLowerCase()) == true)
    let re= new RegExp(elInp.value, 'gi')
    filData.map((item3)=>(
        item3.Title = item3.Title.replace(re, `<p class='test'>${elInp.value}</p>`)
    ))
    mapper(filData)
    console.log(data);
})

elInp.addEventListener('keyup', ()=>{
    console.log();
    if(elInp.value == ''){
        data.map((item3)=> (
            item3.Title = item3.Title.replace('test', ``)
        ))
        mapper(data)
        console.log(data);
    }
})






mapper(data)
function mapper(data){
    elMovie__list.innerHTML = ''
    data.forEach((item)=>{
        let newLi = document.createElement('li')
    
        newLi.innerHTML = `
            <div class="card">
                <div class="card__inner">
                    <img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAIhCGAHYAQHiAQYIHRgGIAE=&rs=AOn4CLBEsr4HsYv9qrSjstPl3PIKyhRYKg " alt="" >
                    
                    <h4 class="titlee">${item.Title}</h4>
                    <b>${item.imdb_rating}</b>
                    <span>${item.movie_year}</span>
                    <p>${item.Categories}</p>
                    <i id=${item.ytid} class="bi bi-heart like__btn"></i>
                    <a href="${item.ytid}" targer="_blank">watch movie</a>
                </div>
            </div>
        `
    
        elMovie__list.appendChild(newLi)
    })
}



let count = movies.length / 10
for(let i = 1; i<= count; i++){
    let newBtn = document.createElement('button')
    newBtn.textContent = i
    newBtn.classList = 'page__btn'
    newBtn.id = i
    elPagenation__list.appendChild(newBtn)
}

let elBtnList = document.querySelectorAll('.page__btn')

elBtnList.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let id = btn.id

        const pageData = movies.slice(id * 10, id*10+10)
        mapper(pageData)
    })
})




const arrMovieYear = []
movies.forEach((e)=>{
    if(!arrMovieYear.includes(e.movie_year) )
    arrMovieYear.push(e.movie_year)
})

arrMovieYear.forEach((e)=>{
    let newOption = document.createElement('option')
    newOption.textContent = e
    newOption.value = e
    elSelYear.appendChild(newOption)
})

elSelYear.addEventListener('change', ()=>{
    mapper(movies.filter((e)=> e.movie_year == elSelYear.value));
    
})



const arrImdbRating = []
movies.forEach((item2)=>{
    if(!arrImdbRating.includes(item2.imdb_rating) )
    arrImdbRating.push(item2.imdb_rating)
})

arrImdbRating.forEach((item2)=>{
    let newOption = document.createElement('option')
    newOption.textContent = item2
    newOption.value = item2
    elSelRat.appendChild(newOption)
})

elSelRat.addEventListener('change', ()=>{
    mapper(movies.filter((item2)=> item2.imdb_rating == elSelRat.value));
})


const arrCategory = []
movies.forEach((e2)=>{
    if(!arrCategory.includes(e2.Categories) )
    arrCategory.push(e2.Categories)
})

arrCategory.forEach((e2)=>{
    let newOption = document.createElement('option')
    newOption.textContent = e2
    newOption.value = e2
    elSelCate.appendChild(newOption)
})

elSelCate.addEventListener('change', ()=>{
    mapper(movies.filter((e2)=> e2.Categories == elSelCate.value));
})


let elLikeBtn = document.querySelectorAll('.like__btn')
const arrLocal = []
elLikeBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
 
            if(!arrLocal.find((fin)=> fin.ytid == btn.id)){
                arrLocal.push(movies.find((item)=> item.ytid == btn.id));
            }
            window.localStorage.setItem.apply('localData', JSON.stringify(arrLocal))
            console.log(arrLocal);
            localMapper()
    })
})
localMapper()
function localMapper(){
    const localData = JSON.parse(window.localStorage.getItem('localData'))
    localData.forEach((item)=>{
        let newLi = document.createElement('li')
        newLi.innerHTML = `
        <div class="local__list">
                <div class="local__list">
                    <img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAIhCGAHYAQHiAQYIHRgGIAE=&rs=AOn4CLBEsr4HsYv9qrSjstPl3PIKyhRYKg " alt="" >
                    
                    <h4>${item.Title}</h4>
                    <b>${item.imdb_rating}</b>
                    <span>${item.movie_year}</span>
                    <p>${item.Categories}</p>
                    <i id=${item.ytid} class="bi bi-heart-fill like__btn"></i>
                    <a href="${item.ytid}" targer="_blank">watch movie</a>
                </div>
            </div>
        `
        elLocalList.appendChild(newLi)
    })
}






// const arrTitle = []
// movies.forEach((i2)=>{
//     if(!arrTitle.includes(i2.Title) )
//     arrTitle.push(i2.Title)
// })

// arrTitle.forEach((i2)=>{
//     let newInp = document.createElement('input')
//     newInp.textContent = i2
//     newInp.value = i2
//     elInp.appendChild(newInp)
// })

// elInp.addEventListener('change', ()=>{
//     mapper(movies.filter((i2)=> i2.Title == elInp.value))
// })