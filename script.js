document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.querySelector('.side-links')
    const hamMenu = document.querySelector('.ham')
    const closeMenu = document.querySelector('.close')

    document.addEventListener('DOMContentLoaded', () => {
        const elementToRemove = document.querySelector('.skiptranslate');
        if (elementToRemove) {
            elementToRemove.remove();
        }
    });

    hamMenu.addEventListener('click', () => {
        sideBar.style.display = 'flex'
        closeMenu.style.display = 'block'
    })

    closeMenu.addEventListener('click', () => {
        sideBar.style.display = 'none'
        closeMenu.style.display = 'none'
    })

});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        defaultLanguage: 'en',
        pageLanguage: 'en',
        includedLanguages: 'en,hi,bn',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        multilanguagePage: true
    }, google_translate_element);

    const translateIcon = document.querySelector('.goog-te-gadget-icon');
    translateIcon.src = " ";
    translateIcon.style.backgroundImage = "url('./media/translate.svg')"
    translateIcon.style.backgroundPosition = "";
    translateIcon.style.backgroundSize = "cover";
    translateIcon.style.border = "0";
    // translateIcon.src = "translate.svg";
    // translateIcon.style.objectFit = "cover"
};
// const a = document.querySelector('.skiptranslate > iframe')
// console.log(a)
// console.log(document.querySelector('.VIpgJd-ZVi9od-ORHb').innerHTML)

const ty = document.querySelector('.VIpgJd-ZVi9od-xl07Ob-lTBxed > span')
console.log(ty)



// const askquestions = () => {
//     const questions = ["What is the temperature of the region?", "What is the humidity level of the region?", "What is the soil moisture level?", "What is the soil type?", "What is the type of crop you wish to grow?", "What is the nitrogen content of the soil?", "What is the potassium content of the soil?", "What is the phosphorus content of the soil?"];
//     const headings = ["Temperature", "Humidity", "Moisture", "Soil Type", "Crop Type", "Nitrogen", "Potassium", "Phosphorous", "Fertilizer"];
//     const options = [[], [], [], ["Sandy", "Loamy", "Black", "Red", "Clayey", "Silty Clay", "Laterite", "Coastal", "Clayey Loam", "Alluvial"], ["Maize", "Sugarcane", "Cotton", "Tobacco", "Paddy", "Barley", "Wheat", "Millets", "Oil seeds", "Pulses", "Ground Nuts", "Rice", "Coconut"], [], [], []];
//     const chat_inner = document.querySelector(".chat_contain");

//     let i = 0;
//     const result = {};

//     const newQuestionFunc = (i) => {
//         if (i < questions.length) {
//             const newQuestion = document.createElement("p");
//             newQuestion.textContent = questions[i];
//             chat_inner.appendChild(newQuestion);

//             let newTakeValue;
//             if (options[i].length > 0) {
//                 newTakeValue = document.createElement("select");
//                 newTakeValue.className = "select";

//                 for (let j = 0; j < options[i].length; j++) {
//                     const newOption = document.createElement("option");
//                     newOption.value = options[i][j];
//                     newOption.textContent = options[i][j];
//                     newTakeValue.appendChild(newOption);
//                 }
//             }

//             else {
//                 newTakeValue = document.createElement("input");
//                 newTakeValue.type = "number";
//                 newTakeValue.className = "input";
//             }

//             chat_inner.appendChild(newTakeValue);

//             const newSave = document.createElement("button");
//             newSave.textContent = "Save";
//             newSave.className = "save";
//             chat_inner.appendChild(newSave);

//             newSave.addEventListener('click', () => {
//                 result[headings[i]] = newTakeValue.value;
//                 if (i < questions.length - 1) {
//                     newQuestionFunc(i + 1);
//                 }
//                 else {
//                     sendDataToServer(result);
//                 }
//             });
//         }
//     }

//     newQuestionFunc(i);
// };

// askquestions();


 const sendDataToServer = (result) => {
    console.log(result)
    const jasu = JSON.stringify(result)
    console.log(jasu)
    // send to server
 }

const askquestions = () => {
    const questions = ["What is the temperature of the region?", "What is the humidity level of the region?", "What is the soil moisture level?", "What is the soil type?", "What is the type of crop you wish to grow?", "What is the nitrogen content of the soil?", "What is the potassium content of the soil?", "What is the phosphorus content of the soil?"];
    const headings = ["Temperature", "Humidity", "Moisture", "Soil Type", "Crop Type", "Nitrogen", "Potassium", "Phosphorous", "Fertilizer"];
    const options = [[], [], [], ["Sandy", "Loamy", "Black", "Red", "Clayey", "Silty Clay", "Laterite", "Coastal", "Clayey Loam", "Alluvial"], ["Maize", "Sugarcane", "Cotton", "Tobacco", "Paddy", "Barley", "Wheat", "Millets", "Oil seeds", "Pulses", "Ground Nuts", "Rice", "Coconut"], [], [], []];
    const chat_inner = document.querySelector(".chat_contain");

    let i = 0;
    const result = {};

    const newQuestionFunc = (i) => {
        if (i < questions.length) {
            const newQuestion = document.createElement("p");
            newQuestion.textContent = questions[i];
            const newDiv = document.createElement("div");
            newDiv.appendChild(newQuestion)

            let newTakeValue;
            if (options[i].length > 0) {
                newTakeValue = document.createElement("select");
                newTakeValue.className = "select";

                for (let j = 0; j < options[i].length; j++) {
                    const newOption = document.createElement("option");
                    newOption.value = options[i][j];
                    newOption.textContent = options[i][j];
                    newTakeValue.appendChild(newOption);
                }
            }

            else {
                newTakeValue = document.createElement("input");
                newTakeValue.type = "number";
                newTakeValue.className = "input";
            }

            newDiv.appendChild(newTakeValue);

            const newSave = document.createElement("button");
            newSave.textContent = "Save";
            newSave.className = "save";
            newDiv.appendChild(newSave);
            chat_inner.appendChild(newDiv);

            newSave.addEventListener('click', () => {
                result[headings[i]] = newTakeValue.value;
                if (i < questions.length - 1) {
                    newQuestionFunc(i + 1);
                }
                else {
                    sendDataToServer(result);
                }
            });
        }
    }

    newQuestionFunc(i);
};

askquestions();

