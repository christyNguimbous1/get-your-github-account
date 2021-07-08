const form = document.querySelector('.form');
const input=document.querySelector('input');
const searchBtn = document.querySelector('button');
const entries = document.querySelector('.entries');

const addProfile = async (username) =>{
   
    const url = await fetch(`https://api.github.com/users/${username}`)
    const data = await url.json();
    return{data}




}
function show(e){
    e.preventDefault();
    let div = document.createElement('div')
        div.classList = "card_container"
        entries.appendChild(div )
        let file=document.createElement('div')
        file.classList = "file"
       entries.appendChild(file)
        let info =document.createElement('div')
        info.classList = "info"
        file.appendChild(info)
        

    addProfile(input.value)
   .then((res)=>{
        console.log(res);
        let img =document.createElement("img");
        img.classList="avatar";
        img.src =`${res.data.avatar_url}`;
       div.appendChild(img);
       let name = document.createElement('h1');
       name.textContent= `name : ${res.data.name}`;
       info.appendChild(name);
       let company = document.createElement('h2');
       company.textContent= `company : ${res.data.company}`;
       info.appendChild(company);
       let followers = document.createElement('h3');
       followers.textContent= `followers : ${res.data.followers}`;
       info.appendChild(followers);
       let following = document.createElement('h4');
       following.textContent= `following : ${res.data.following}`;
       info.appendChild(following);
       let public_repos = document.createElement('h5');
       public_repos .textContent= `public_repos  : ${res.data.public_repos }`;
       info.appendChild(public_repos);
       let email = document.createElement('h6');
       email.textContent= `femail: ${res.data.email}`;
       info.appendChild(email);


    })

}
searchBtn.addEventListener('click', show);