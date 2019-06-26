let myPeople =[
{

    title: "1",
    name: "11",
    bio: "111",
    image: "1111",
    lifespam: {
        birth:"11111",
        death: "111111",
    }
},
{

    title: "2",
    name: "22",
    bio: "222",
    image: "2222",
    lifespam: {
        birth:"2222",
        death: "2222",
    }
},
{

    title: "3",
    name: "33",
    bio: "333",
    image: "3333",
    lifespam: {
        birth:"33333",
        death: "333333",
    }
},
{

    title: "4",
    name: "44",
    bio: "444",
    image: "4444",
    lifespam: {
        birth:"44444",
        death: "44444",
    }
},
{

    title: "5",
    name: "55",
    bio: "555",
    image: "5555",
    lifespam: {
        birth:"55555",
        death: "55555",
    }
}
];
let peopleContainer = document.getElementById("cardContainer");
let personString = "";

for ( let i = 0 ; i < myPeople.length; i++){
   personString += 
   `<div id="cardId-$(i)">
  
   <Header class="nameTitle">
   <h2> ${myPeople[i].title} </h2>
   <h4> ${myPeople[i].name} </h2>
   </header>
   <section class="bio">
        <p> ${myPeople[i].bio} </p>
        <img src = " ${myPeople[i].image}" />
   </section>
   <fotter class="footnote>
        <p>
            lived from ${myPeople[i].lifespam.birth} to ${myPeople[i].lifespam.death} 
        </p>
   </fotter>

   </div>`
}

peopleContainer.innerHTML = personString;
