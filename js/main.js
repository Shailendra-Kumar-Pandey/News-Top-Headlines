// News API and fetch data from it and display it in the browser

const proxy = "https://api.allorigins.win/raw?url=";
const newsKey = "b73842219062446de118899d3359f40c"

// let page = 1;
// let url = `https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=in&max=10&page=${page}&apikey=${newsKey}`

/*

fetch(proxy + encodeURIComponent(api))
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

*/



fetchNews("general");

function fetchNews(category) {
    const api = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&apikey=${newsKey}`;
    fetch(proxy + encodeURIComponent(api))
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        document.getElementById("title").innerText = category.toUpperCase();
        loadNews(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}

function loadNews(res) {
    let totalRow = ""
    for (let i = 0; i < res.articles.length-1; i++) {       
        let row =  `
                                <div class="card">
                                    <div class="img">
                                        <img src="${res.articles[i].image}" alt="img">
                                    </div>
                                    <div class="content">
                                        <h4>${(res.articles[i].title).slice(0,100)}...</h4>
                                        <p>${(res.articles[i].description.slice(0,200))}...</p>
                                        <button href="#">Read more...</button>
                                    </div>
                                </div>
        `
        totalRow += row;
    }
    document.getElementById("newsAccordian").innerHTML = totalRow;
}