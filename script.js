const highlight = () => {
    let boldWords = document.querySelectorAll("strong");

    for (let i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = "rgb(0, 128, 0)";
    }
};

const return_normal = () => {
    let boldWords = document.querySelectorAll("strong");

    for (let i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = "rgb(0, 0, 0)";
    }
};
