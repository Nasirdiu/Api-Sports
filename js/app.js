const sportsApi = () => {
  const sportsInput = document.getElementById("sports-input");
  spinner();
  const sportsValue = sportsInput.value;
  sportsInput.value = "";
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${sportsValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySport(data.player));

};
// sportsApi();

const displaySport = (sport) => {
const card=document.getElementById('card');
card.textContent='';
  sport.forEach((sports) => {
    // console.log(sports);
    const div = document.createElement("div");
    div.classList.add('col');
    div.innerHTML = `
    <div class="card border p-5">
                <div class="pro-pic ">
                    <img class="w-50" src="${sports.strCutout}" alt="">
                </div>
                <h2>Name:${sports.strPlayer} </h2>
                <h5>Country:${sports.strNationality} </h5>
                <p></p>
                <div class="all-button">
                    <button class="btn btn-danger">Delete</button>
                    <button onclick="details('${sports.idPlayer}')" class="btn btn-success">Details</button>
                </div>
            </div>
    `;
card.appendChild(div);
Black();
  });
};
 
const details=id=>{
  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => detlesInfo(data.players[0]));
}

const detlesInfo=info=>{
  console.log(info.strGender);
   if(info.strGender=='Male'){
     document.getElementById('male').style.display='block'
     document.getElementById('female').style.display='none'
   }else{
    document.getElementById('male').style.display='none'
    document.getElementById('female').style.display='block'
   } 
  const infoDitles=document.getElementById('info-detiles');
  infoDitles.classList.add('col')
  infoDitles.innerHTML=`
  <div class="card border p-5">
                <div class="pro-pic ">
                    <img class="w-50" src="${info.strCutout}" alt="">
                </div>
                <h2>Name:${info.strPlayer} </h2>
                <h5>Country:${info.strNationality} </h5>
                <p>Date Barth:${info.dateBorn}</p>
            </div>
  `
}

const spinner=()=>{
  document.getElementById('spanner').style.display='block';

}

const Black=()=>{
  document.getElementById('spanner').style.display='none';

}

