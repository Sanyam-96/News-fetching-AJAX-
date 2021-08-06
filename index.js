console.log('this is my index js file');

// 229f1f2252eb4e0a82677199e0ca56dd (news api from newsapi.org)
let apiKey = `229f1f2252eb4e0a82677199e0ca56dd`;

// Grabbing the newAccordina id 
let newsAccordian = document.getElementById('newsAccordion');

// Create a get request  
const xhr = new XMLHttpRequest;
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);
xhr.onload = function () {
    if (this.status === 200) {
        json = JSON.parse(this.responseText);
        console.log(json.articles);
        let articles = json.articles;
        let news = "";

        articles.forEach((element, index) => {

            news += `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                    <b>Breaking News ${index + 1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>
                            
                            <div id="collapse${index}" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
        
                    </div>`;
        });

        newsAccordian.innerHTML = news;
    }
    else
        console.log('Some error occured');
}

xhr.send();

