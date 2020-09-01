const btn = document.querySelector(".url-form__btn");
const input = document.querySelector(".url-form__input");
const resData = document.querySelector(".resData__h1")



btn.addEventListener("click", checkInput);

function checkInput(){
    let userInputValue = input.value;
    let link = { "url" : `${userInputValue}`}
    const url = "https://rel.ink/api/links/";

    // Fetch Data Method Settings
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(link),
    }
    async function fetchData() {
        const response = await fetch(url, settings);
        const data = await response.json();
        console.log(data.hashid)

        function placeData(){
            const newURL = url + data.hashid;
            let newDiv = document.createElement("h2")
            let infoDiv = document.createTextNode(`${data.hashid}`);

            newDiv.appendChild(infoDiv)
            const currentEle = document.querySelector(".resData"); 
            document.body.insertBefore(newDiv, currentEle);
            resData.innerHTML = url + data.hashid;
        }

        placeData();
    }

    

    if ( userInputValue === "" ) {
        console.log("Please enter a url, input field is empty.")
    } else {
        console.log("Thank you for data!: ")
        fetchData();
    }
}


// async function fetchData() {
//     const response = await fetch(url, settings);
//     const data = await response.json();

//     function placeData(){
//         console.log(data.hashid + " working")
//         resData.innerHTML = url + data.hashid;
//     }

//     
//     return data.hashid;
// }