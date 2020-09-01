let btn = document.querySelector(".url-form__btn"),
    urlValue = document.querySelector(".url-form__input");

let value;    

btn.addEventListener("click", () => {
    console.log(urlValue.value)
});

// function requestApi() {
//     value = urlValue.value;
//     console.log(value);
    // let object;
    // if (urlValue != "") {
    //     object = urlValue.value;
    //     fetchData();
    // } else {
    //     return
    // }

    // function fetchData(){
    //     fetch("https://rel.ink/api/links/", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //     },
    //         body: JSON.stringify(object)
    //     })
    //         .then(response => response.json())
    //         .then(data => console.log(data.hashid))
    //         .catch(error => console.log("Something went wrong " + error))
    // }
// }