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

const sendDataToServer = (result) => {
    console.log(result);
    const json = JSON.stringify(result);
    console.log(json);
}

const askquestions = () => {
    const questions = ["What is the temperature of the region?", "What is the humidity level of the region?", "What is the soil moisture level?", "What is the soil type?", "What is the type of crop you wish to grow?", "What is the nitrogen content of the soil?", "What is the potassium content of the soil?", "What is the phosphorus content of the soil?"];
    const headings = ["Temperature", "Humidity", "Moisture", "Soil Type", "Crop Type", "Nitrogen", "Potassium", "Phosphorous", "Fertilizer"];
    const options = [[], [], [], ["Sandy", "Loamy", "Black", "Red", "Clayey", "Silty Clay", "Laterite", "Coastal", "Clayey Loam", "Alluvial"], ["Maize", "Sugarcane", "Cotton", "Tobacco", "Paddy", "Barley", "Wheat", "Millets", "Oil seeds", "Pulses", "Ground Nuts", "Rice", "Coconut"], [], [], []];
    const chat_inner = document.querySelector(".chat_contain");
    const result = {};

    const askNextQuestion = () => {
        if (i >= questions.length) {
            sendDataToServer(result);
            return;
        }

        const questionP = document.createElement("p");
        questionP.textContent = questions[i];

        let controlInput;
        if (options[i].length == 0) {
            controlInput = document.createElement("input");
            controlInput.type = "number";
            controlInput.className = "input";
        }

        else {
            controlInput = document.createElement("select");
            controlInput.className = "select";

            for (let j = 0; j < options[i].length; j++) {
                const optionInput = document.createElement("option");
                optionInput.value = options[i][j];
                optionInput.textContent = options[i][j];
                controlInput.appendChild(optionInput);
            }
        }

        const saveButton = document.createElement("button");
        saveButton.type = "submit";
        saveButton.textContent = (i == questions.length - 1) ? "Submit" : "Save";
        saveButton.className = "save";

        const saveForm = document.createElement("form");
        saveForm.appendChild(questionP);
        saveForm.appendChild(controlInput);
        saveForm.appendChild(saveButton);

        chat_inner.appendChild(saveForm);

        controlInput.autofocus = true;
        controlInput.focus();

        saveForm.onsubmit = (e) => {
            saveButton.disabled = true;
            controlInput.disabled = true;
            result[headings[i]] = controlInput.value;

            e.preventDefault();
            i++;
            askNextQuestion();
        }
    }


    let i = 0;
    askNextQuestion();
};

askquestions();

// wegwegwgwegwegwe