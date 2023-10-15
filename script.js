function ChangeCard (id){
    const cardsTitles = document.querySelector("#CardsTitles");
    const cards = document.querySelector("#CardsContainer");
    for (let i =0; i <= cards.children.length; i ++){
        if (i == id){
            cardsTitles.children[i].classList.add("selected");
            cards.children[i].classList.remove ("hide");
        }else {
            if (cardsTitles.children[i].classList.contains("selected")){
                cardsTitles.children[i].classList.remove("selected");
            }
            cards.children[i].classList.add ("hide");
        }
    }
}

function CloseWindow (){
    const cardsTitles = document.querySelector("#CardsTitles");
    const cards = document.querySelector("#CardsContainer");
    for (let i =0; i <= cards.children.length; i ++){
        cardsTitles.children[i].classList.remove("selected");
        cards.children[i].classList.add ("hide");
    }
}