console.log("newsSite")
let apikey='f7b5f8563b5c4a84abc9f2ba79665663';
let source='bbc-news'
let accordion = document.getElementById("accordionTarget");
let xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}` ,true)
xhr.onload = function () {
    if (xhr.status == 200 || xhr.status==426) {
        let xhrobjext = JSON.parse(xhr.responseText)
        let articles = xhrobjext.articles;
        // console.log(articles)
        let inserthtml = ''
        articles.forEach(function (element, index) {
            inserthtml = inserthtml + `
            <div class="accordion-item my-3">
                    <h2 class="accordion-header " id="heading${index}" >
                        <button class="accordion-button btn-link " type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            ${element.title}
                        </button>
                    </h2>
                    
                    <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}"
                        data-bs-parent="#accordionTarget">
                            <div  style=" position:relative;">
                                <img src="${element.urlToImage}" alt="" width ="500" style="float: left; margin-right: 15px;">
                                <p><strong>Description : </strong>
                                ${element.description}
                                
                                <a href="${element.url}" target="_blank" >Readmore</a>
                                
                                <p >
                                <b>Author</b>:${element.author}</p>
                                <p >
                                <b > Published At</b>:${element.publishedAt}
                                </p>
                                <p >
                                <b >Source</b>:${element.source.name}
                                </p>

                                </p>
                            </div>
                    </div>
            </div>`
        })
        accordion.innerHTML = inserthtml;
    }
    else {
        console.log('error')
    }
}

xhr.send()