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
            createNewTable();
        }

        function createNewTable(){
            const newURL = url + data.hashid;
            let newCon = document.createElement("SECTION")
            let newDiv = document.createElement("DIV")
            let newh2 = document.createElement("H2")

            newCon.className = "new__Con"
            newDiv.className = "new__Wrap" 
            newh2.className = "new__Link"

            let infoDiv = document.createTextNode(`${data.hashid}`);
            newCon.appendChild(newDiv)
            newDiv.appendChild(newh2)
            newh2.appendChild(infoDiv)
            const currentEle = document.querySelector(".articles-wrap"); 
            document.body.insertBefore(newCon, currentEle);
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