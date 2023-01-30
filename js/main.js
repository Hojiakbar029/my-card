let elList = document.querySelector('.list')
let elInp = document.querySelector('.inp2')
let elForm = document.querySelector('.form1')
let ElForm = document.querySelector('.form')
let elMovie__list = document.querySelector('.movie__list')
let elPagenation__list = document.querySelector('.pagenation__list')
let elSelect = document.querySelector('.select')
let ElSelect = document.querySelector('.rating')







const data = movies.slice(10, 20)

mapper(data)
function mapper(data){
    elMovie__list.innerHTML = ''
    data.forEach((item)=>{
        let newLi = document.createElement('li')
    
        newLi.innerHTML = `
            <div class="card">
                <div class="card__inner">
                    <img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAIhCGAHYAQHiAQYIHRgGIAE=&rs=AOn4CLBEsr4HsYv9qrSjstPl3PIKyhRYKg " alt="" >
                    
                    <h4>${item.Title}</h4>
                    <b>${item.imdb_rating}</b>
                    <span>${item.movie_year}</span>
                    <p>${item.Categories}</p>
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


