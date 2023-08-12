// Create a div element with class attribute
let div = document.createElement("div");
div.setAttribute("class", "container");

// Create a h2 element with text content
let h2 = document.createElement("h2");
h2.style.color = "white";
h2.textContent = "Superhero Hunter";

// Create an input element with type, id, class and placeholder attributes
let input = document.createElement("input");
input.setAttribute("type", "search");
input.setAttribute("id", "searchbar");
input.setAttribute("class", "form-control nav-link");
input.setAttribute("placeholder", "Search");

// Create a br element
let br = document.createElement("br");

// Create a ul element with class and role attributes
let nav = document.createElement("ul");
nav.setAttribute("class", "nav nav-tabs");
nav.setAttribute("role", "tablist");

// Create three li elements with class attribute
let li1 = document.createElement("li");
li1.setAttribute("class", "nav-item");

let li2 = document.createElement("li");
li2.setAttribute("class", "nav-item");

let li3 = document.createElement("li");
li3.setAttribute("class", "nav-item");

// Create three a elements with class, data-toggle, href and text content
let home = document.createElement("a");
home.setAttribute("class", "nav-link active");
home.setAttribute("data-toggle", "tab");
home.setAttribute("href", "#home");
home.textContent = "Home";

let favourite_superheroes = document.createElement("a");
favourite_superheroes.setAttribute("class", "nav-link");
favourite_superheroes.setAttribute("data-toggle", "tab");
favourite_superheroes.setAttribute("href", "#menu1");
favourite_superheroes.textContent = "My favourite superheroes Page";

let superhero = document.createElement("a");
superhero.setAttribute("class", "nav-link");
superhero.setAttribute("id", "movie_link");
superhero.setAttribute("data-toggle", "tab");
superhero.setAttribute("href", "#menu2");
superhero.textContent = "Superhero Page";

// Append the a elements to the li elements
li1.appendChild(home);
li2.appendChild(favourite_superheroes);
li3.appendChild(superhero);

// Append the li elements to the nav element
nav.appendChild(li1);
nav.appendChild(li2);
nav.appendChild(li3);

// Create a div element with class attribute
let tabContent = document.createElement("div");
tabContent.setAttribute("class", "tab-content");

// Create three div elements with id, class and role attributes
let hometab = document.createElement("div");
hometab.setAttribute("id", "home");
hometab.setAttribute("class", "tab-pane active");
hometab.setAttribute("role", "tabpanel");

let menu1tab = document.createElement("div");
menu1tab.setAttribute("id", "menu1");
menu1tab.setAttribute("class", "favclass tab-pane fade");
menu1tab.setAttribute("role", "tabpanel");

let menu2tab = document.createElement("div");
menu2tab.setAttribute("id", "menu2");
menu2tab.setAttribute("class", "container moviepage tab-pane fade");
menu2tab.setAttribute("role", "tabpanel");

// tabContent append child
tabContent.appendChild(hometab);
tabContent.appendChild(menu1tab);
tabContent.appendChild(menu2tab);

// Create a br element
let br2 = document.createElement("br");


//  new data
// Create a div element with class and id attributes
let navtab = document.createElement("navtab");
navtab.setAttribute("class", "tab-content");
navtab.setAttribute("id", "nav-tabContent");

// Create three div elements with class, id, role and aria-labelledby attributes
let tabpanel_home = document.createElement("div");
tabpanel_home.setAttribute("class", "tab-pane fade show active");
tabpanel_home.setAttribute("id", "nav-home");
tabpanel_home.setAttribute("role", "tabpanel");
tabpanel_home.setAttribute("aria-labelledby", "nav-home-tab");

let div2 = document.createElement("div");
div2.setAttribute("class", "tab-pane fade");
div2.setAttribute("id", "nav-profile");
div2.setAttribute("role", "tabpanel");
div2.setAttribute("aria-labelledby", "nav-profile-tab");

let div3 = document.createElement("div");
div3.setAttribute("class", "tab-pane fade");
div3.setAttribute("id", "nav-contact");
div3.setAttribute("role", "tabpanel");
div3.setAttribute("aria-labelledby", "nav-contact-tab");

// Create a div element with id and class attributes
let prashant_class = document.createElement("div");
prashant_class.setAttribute("id", "prashant");
prashant_class.setAttribute("class", "prashant_class row");

// Append the prashant_class element to the tabpanel_home element
// Create a div element with class and style attributes
let card = document.createElement("div");
card.setAttribute("class", "card text-center");
card.setAttribute("style", "width: 100%; height: auto;");

// Create an img element with src, id, class and alt attributes
let initial_image = document.createElement("img");
initial_image.setAttribute("src", "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg");
initial_image.setAttribute("id", "poster");
initial_image.setAttribute("class", "card-img-top text-center");
initial_image.setAttribute("alt", "Image File");

// Create a card_body element with class attribute
let card_body = document.createElement("div");
card_body.setAttribute("class", "card-body");

// Create a cardtitile element with class and id attributes
let cardtitile = document.createElement("h5");
cardtitile.setAttribute("class", "card-title");
cardtitile.setAttribute("id", "movietitle");
cardtitile.innerHTML = "No Title to Show";
cardtitile.style.color = "white";

// Create a p element with class and id attributes
let p = document.createElement("p");
p.setAttribute("class", "card-text");
p.setAttribute("id", "moviedesc");
p.innerHTML = "No Description to Show";
p.style.color = "#cfdbe9";

// Create an a element with href, class and text content
let a = document.createElement("a");
a.setAttribute("href", "/");
a.setAttribute("class", "btn btn-primary");
a.textContent = "Back To Home";

// Append the cardtitile, p and a elements to the card_body element
card_body.appendChild(cardtitile);
card_body.appendChild(p);
card_body.appendChild(a);

// Append the img and card_body elements to the div element
card.appendChild(initial_image);
card.appendChild(card_body);

// Append the div element to the document body
menu2tab.appendChild(card);




// Set the text content of the div2 element
div2.textContent = "...";

// Set the text content of the div3 element
div3.textContent = "Made By Prashant Ghadiali";

// Append the tabpanel_home, div2 and div3 elements to the div element
navtab.appendChild(tabpanel_home);
navtab.appendChild(div2);
navtab.appendChild(div3);


// Append the div element to the document body
document.body.appendChild(div);

// appending to root
const root = document.getElementById("root");
div.appendChild(h2);
div.appendChild(input);
div.appendChild(br);
div.appendChild(nav);
div.appendChild(tabContent);
hometab.appendChild(prashant_class);


// Create a ul element with a class of "pager"
let ul = document.createElement("ul");
ul.className = "pager";
// Create a button element with a class of "previous" and an a element with the text "Previous"
let liPrev = document.createElement("button");
liPrev.classList = "previous";
liPrev.textContent = "Previous";
liPrev.style.color = "white"



// Create a button element with a class of "next" and an a element with the text "Next"
let liNext = document.createElement("button");
liNext.classList = "next";
liNext.textContent = "Next";
liNext.style.color = "white";

// Append the li elements to the ul element
ul.appendChild(liPrev);
ul.appendChild(liNext);
// Append the ul element to the prashant_class element
hometab.appendChild(ul);


root.appendChild(div);


// index.html ends here


let dateVal = new Date();
const ts = dateVal.getTime();
const publicKey = '5b55622c4d7012b4adbb496fe9944d6b';
const privateKey = '6d5fc69086520afc9910ef2100615398b126ac36';
const hashKey = 'ebcc73ed2df2ad849c23ee511243e999';
let hash = CryptoJS.MD5(ts+privateKey+publicKey)
// console.log("hash:", hash);

// const root = document.getElementById("root");

// root.innerHTML = `
// <div class="">
//         <h2>Movies.Net</h2>
        
//         <input type="search" id='searchbar' class="form-control nav-link" placeholder="Search">
        
//         <br>
//         <!-- Nav tabs -->
//         <ul class="nav nav-tabs" role="tablist">
//             <li class="nav-item">
//                 <a class="nav-link active" data-toggle="tab" href="#home">Home</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" data-toggle="tab" href="#menu1">My favourite superheroes Page</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" id="movie_link" data-toggle="tab" href="#menu2">Superhero Page</a>
//             </li>
//         </ul>
//         <!-- Tab panes -->
//         <div class="tab-content">
//             <div id="home" class=" tab-pane active"><br>
//                 <div id="prashant" class="prashant_class row"></div>
//                 <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> -->
//             </div>
//             <div id="menu1" class=" favclass tab-pane fade"><br>
//                 <!-- favourite items -->
//             </div>
//             <div id="menu2" class="container moviepage tab-pane fade"><br>
//                 <div class="card text-center" style="width: 20vw; height: 40vh;">
//                     <img src="/Baner.png" id="poster" class="card-img-top text-center" alt="Image File">
//                     <div class="card-body">
//                         <h5 class="card-title" id="movietitle"></h5>
//                         <p class="card-text" id="moviedesc"></p>
//                         <a href="/" class="btn btn-primary">Back To Home</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
        
//         <div class="tab-content" id="nav-tabContent">
//             <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
//                 <div id="prashant" class="prashant_class row">
//                 </div>
//             </div>
//             <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
//             <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
//                 Made By Prashant Ghadiali
//             </div>
//         </div>
// `

// let searchbar = document.getElementById("searchbar").value;
// $('#searchbar').keyup(function() {
//     var serchItem = $('#searchbar').val();
//     for (var i = 0; i < $('.col-md-auto').length; i++) {
//             $('.col-md-auto:eq(' + i + ')').css('display', 'block');
//             if ($('.col-md-auto:eq(' + i + ')').text().indexOf(serchItem) < 0) {
//             $('.col-md-auto:eq(' + i + ')').css('display', 'none');
//             } 
//         }
//     });

// Get the searchbar element by its id
// let searchbar = document.getElementById("searchbar");
// let serchItem = searchbar.value;
// console.log(serchItem);
// Add a keyup event listener to the searchbar element
searchbar.addEventListener("keyup", function Keyup() {
    // Get the value of the searchbar element
    var searchText = searchbar.value;
    console.log(searchText);
  
    // Get all the elements with class col-md-auto
    let cols = document.getElementsByClassName("col-md-auto");
  
    // Loop through the cols elements
    for (let i = 0; i < cols.length; i++) {
      // Get the current element
      let col = cols[i];
  
      // Set the display style of the current element to block
      col.style.display = "block";
  
      // Check if the text content of the current element does not include the searchText
      if (!col.textContent.includes(searchText)) {
        // Set the display style of the current element to none
        col.style.display = "none";
      }
    }
  });

let limit = 10;
let page = 1; // Change this to the page number you want
let offset = (page - 1) * limit;
var data_fetch;


const movie_page_arr = []
const fav_list = []
async function getAllPosts(){
    var serchItemval = document.getElementById('searchbar').value;
 
    // If the serchItemval field is empty
    let resp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`);
    console.log("limit :", limit);
    console.log("offset :", offset);
    console.log("page :", page);
    data_fetch = await resp.json();
    let data = data_fetch.data.results;

    // console.log("Data :", data);
    
    // console.log("Data fetch :", data_fetch);

    const prashantContainer = document.querySelector(".prashant_class");
    // console.log("prashant container :", prashantContainer);

    const favContainer = document.querySelector(".favclass");
    // console.log("prashant container :", favContainer);
    
    const moviePage = document.querySelector(".moviepage");
    // console.log("moviePage container :", moviePage);

    // all data ele 
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const resp_thumb = data[i].thumbnail;
        var resp_poster = String(resp_thumb.path + "." + resp_thumb.extension);
        // console.log("element :",resp_poster);
        const prashant_post = document.createElement('div');
        const image = document.createElement('img')
        const title = document.createElement('h3');
        const body = document.createElement('p');
        const fav_btn = document.createElement('button');
        const delBtn = document.createElement('p');
        const favBtn = document.createElement('button')
        // const serchItemval = document.getElementById('searchbar').value;
        const li = document.createElement('li');
        li.innerHTML = serchItemval;

        let list = document.getElementsByClassName("col-md-auto")

			
        favBtn.addEventListener("click", () => {
            list.appendChild(li);
        })

        delBtn.addEventListener("click", () => {
            prashantContainer.removeChild(prashant_post);
        })

        // to add class into post div element
        prashant_post.classList.add('prashant_post');
        prashant_post.classList.add('col-md-auto')
        image.classList.add('imageClass');
        image.src = resp_poster;
        title.classList.add('title');
        body.classList.add('body');
        fav_btn.type = "button";
        fav_btn.dataset = data[i].id;
        fav_btn.classList.add('fav_btn');
        delBtn.classList.add('delBtn');

        // add the content for each created element
        // title.innerHTML = data[i].title;
        title.innerHTML = data[i].name;
        title.style.textOverflow = "ellipsis"
        title.style.overflow ="hidden";
        // body.innerHTML = data[i].body;
        body.innerHTML = data[i].description;
        if(data[i].description == ''){
            body.innerHTML = "No Description"
        };
        // fav_btn.innerHTML = `&hearts;`;
        fav_btn.innerHTML = `♡`;
        delBtn.innerHTML = "X";


        // create parent child relationship
        prashant_post.appendChild(image);
        prashant_post.appendChild(title);
        prashant_post.appendChild(body);
        prashant_post.appendChild(fav_btn);
        prashant_post.appendChild(delBtn);
        prashant_post.appendChild(favBtn);
        // prashant_post.appendChild(prasRow)
        prashantContainer.appendChild(prashant_post);


        fav_btn.addEventListener("click", function() {
            console.log(data[i].id, "clicked");
            var nofavcheck = document.getElementById("nofav");
            if (nofavcheck) {
                nofavcheck.remove();
            }
            localStorage.setItem("id", data[i].id);
            // fav_list.push(data[i].id)
            // fav_btn.innerHTML = `&hearts;`;
            
            let num = data[i].id;
            
            if (fav_list.indexOf(num) !== -1) {
                fav_list.splice(fav_list.indexOf(num), 1);
                fav_btn.innerHTML = `♡`;
                prashantContainer.appendChild(prashant_post).num;
            } else {
                fav_list.push(num);
                fav_btn.innerHTML = `&hearts;`;
                favContainer.appendChild(prashant_post).num;
            }
        });

        title.addEventListener("click", function() {
            console.log(data[i].id, "movie pageclicked");
            let num = data[i];
            if (movie_page_arr.indexOf(num) !== -1) {
                movie_page_arr.splice(movie_page_arr.indexOf(num), 1);
                moviePage.appendChild(prashant_post).num;
            } else {
                document.getElementById("movie_link").click();
                let resp_thumb = num.thumbnail;
                let resp_poster = String(resp_thumb.path + "." + resp_thumb.extension);
                document.getElementById("poster").src = resp_poster;
                document.getElementById("movietitle").innerHTML = num.name;
                if(num.description == ''){
                    num.description = "No Description";
                };
                document.getElementById("moviedesc").innerHTML = num.description;
            }

        });

        }
        if (fav_list.length == 0 ) {
            let noFav = document.createElement("h1");
            noFav.id = "nofav";
            noFav.classList.add("text-center");
            noFav.classList.add("mt-5");
            noFav.innerHTML = "No Favourites are Added!";
            noFav.style.color = "white";
            favContainer.appendChild(noFav);
        }
        console.log("fav list :",fav_list);

}

getAllPosts();


// Select the previous and next buttons by their class names using querySelector
let prev = document.querySelector(".previous");
let next = document.querySelector(".next");
console.log(prev);
console.log(next);
// Add a click event listener to the previous button using addEventListener
prev.addEventListener("click", function() {
  // Decrease the page number by one
  console.log("prev clicked");
  page--;
  // Update the offset value based on the page number
  offset = (page - 1) * limit;
  // Call the getAllPosts function again with the new offset value
  getAllPosts();
  // Hide the previous button if the page number is one using style.display
  if (page == 1) {
    prev.style.display = "none";
  }
  // Show the next button if it was hidden before using style.display
  next.style.display = "block";
});
// Add a click event listener to the next button using addEventListener
next.addEventListener("click", function() {
  // Increase the page number by one
  page++;
  // Update the offset value based on the page number
  offset = (page - 1) * limit;
  // Call the getAllPosts function again with the new offset value
  getAllPosts();
  // Hide the next button if there are no more results to fetch using style.display
  if (offset + limit >= data_fetch.data.total) {
    next.style.display = "none";
  }
  // Show the previous button if it was hidden before using style.display
  prev.style.display = "block";
});










