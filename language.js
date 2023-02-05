const languageButton = document.querySelectorAll('.lingua li button');
const langEl = document.querySelector('.lingua');

//Copiare e incollare cambiando il nome prima di El .. e poi cambiare la classe nelle parentesi PER OGNI COSA CHE SI VUOLE TRADURRE!!!!!!!
const selfDescriptionEl = document.querySelector('.self-description');
const panoramicEl = document.querySelector('.panoramic');
const languagesEl = document.querySelector('.languages');
const ingleseEl = document.querySelector('.inglese');
const coreanoEl = document.querySelector('.coreano');
const franceseEl = document.querySelector('.francese');
const tedescoEl = document.querySelector('.tedesco');
const esperienzelavorativeEl = document.querySelector('.esperienzelavorative');
const segretariaEl = document.querySelector('.segretaria');
const accoglienzaEl = document.querySelector('.accoglienza');
const gestioneEl = document.querySelector('.gestione');
const organizzazioneEl = document.querySelector('.organizzazione');
const utilizzoEl = document.querySelector('.utilizzo');
const lavoroEl = document.querySelector('.lavoro');
const coordinamentoEl = document.querySelector('.coordinamento');
const collaborazioneEl = document.querySelector('.collaborazione');
const formazioneEl = document.querySelector('.formazione');
const laureaEl = document.querySelector('.laurea');
const universitàEl = document.querySelector('.università');
const diplomaEl = document.querySelector('.diploma');
const corsiEl = document.querySelector('.corsi');
const socialmediaEl = document.querySelector('.socialmedia');
const ricercaEl = document.querySelector('.ricerca');
const advEl = document.querySelector('.adv');
const ottimizzazioneEl = document.querySelector('.ottimizzazione');
const analyticsEl = document.querySelector('.analytics');
const htmlandcssEl = document.querySelector('.htmlandcss');
const bootstrapEl = document.querySelector('.bootstrap');
const sqlEl = document.querySelector('.sql');
const hobbyEl = document.querySelector('.hobby');
const intvideogiochiEl = document.querySelector('.intvideogiochi');
const intletturaEl = document.querySelector('.intlettura');
const intacquarioEl = document.querySelector('.intacquario');

var strings = {
    "italian":
    {
        "selfDescription": "Sono una ragazza da sempre interessata al mondo del web e della tecnologia. Mi piace viaggiare ed aggiornarmi continuamente su tutto quello che mi circonda.",
        "panoramic": "PANORAMICA",
        "languages": "LINGUE",
        "inglese": "Inglese ★★★★★",
        "coreano": "Coreano ★★★☆☆",
        "francese": "Francese ★★☆☆☆",
        "tedesco": "Tedesco ★★☆☆☆",
        "esperienzelavorative": "ESPERIENZE LAVORATIVE",
        "segretaria": "Segretaria (sostituzione maternità)",
        "accoglienza": "Accoglienza e gestione dei clienti",
        "gestione": "Gestione quotidiana delle comunicazioni",
        "organizzazione": "Organizzazione documenti",
        "utilizzo": "Utilizzo del software gestionale King",
        "lavoro": "Lavoro orientato in Team",
        "coordinamento": "Coordinamento quotidiano e pianificazione delle richieste dei clienti",
        "collaborazione": "Collaborazione con altre aziende internazionali",
        "formazione": "FORMAZIONE E ISTRUZIONE",
        "laurea": "Laurea triennale in Lingue Orientali",
        "università": "Università degli studi di Roma 'La Sapienza' | 2021",
        "diploma": "Diploma Liceo Linguistico",
        "corsi": "CORSI",
        "socialmedia": "Web e Social Media Marketing",
        "ricerca": "Ricerca di mercato",
        "adv": "Social media advertising su Facebook e Instagram",
        "ottimizzazione": "Ottimizzazione SEO e comparire nei motori di ricerca",
        "analytics": "Google Analytics e Google Ads",
        "htmlandcss": "HTML5, CSS e Javascript",
        "bootstrap": "Bootstrap 4 e 5",
        "sql": "SQL e MongoDB",
        "hobby": "HOBBY E INTERESSI",
        "intvideogiochi": "Videogiochi",
        "intlettura": "Lettura",
        "intacquario": "Acquariofilia",
    },


    "english":
    {
        "selfDescription": "I've always been interested about technology and the web world. I like traveling and constantly updating myself on everything that surrounds me.",
        "panoramic": "PANORAMIC",
        "languages":"LANGUAGES",
        "inglese": "English ★★★★★",
        "coreano": "Korean ★★★☆☆",
        "francese": "French ★★☆☆☆",
        "tedesco": "German ★★☆☆☆",
        "esperienzelavorative": "WORK EXPERIENCES",
        "segretaria": "Secretary (maternity leave)",
        "accoglienza": "Reception and customer management",
        "gestione": "Daily communication management",
        "organizzazione": "Documents organization",
        "utilizzo": "Use of ERP software King",
        "lavoro": "Team oriented work",
        "coordinamento": "Daily coordination and plan of  client's requests",
        "collaborazione": "Collaboration with others international companies",
        "formazione": "TRAINING AND EDUCATION",
        "laurea": "Bachelor's degree in Oriental Languages",
        "università": "University of Rome 'La Sapienza' | 2021",
        "diploma": "Language High School diploma",
        "corsi": "COURSES",
        "socialmedia": "Web and Social Media Marketing",
        "ricerca": "Market researches",
        "adv": "Social media advertising on Facebook and Instagram",
        "ottimizzazione": "SEO optimization and how to show up in search engine",
        "analytics": "Google Analytics and Google Ads",
        "htmlandcss": "HTML5, CSS and Javascript",
        "bootstrap": "Bootstrap 4 and 5",
        "sql": "SQL and MongoDB",
        "hobby": "HOBBIES AND INTERESTS",
        "intvideogiochi": "Videogames",
        "intlettura": "Reading",
        "intacquario": "Aquarium",
    }
}

if (localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', "italian");
}

checkLang()

function checkLang() {
    if (localStorage.getItem('lang') === "english") {
        langEl.querySelector('.linguaActive').classList.remove('linguaActive');
        document.getElementById('english').classList.add('linguaActive');
        setTranslatedStrings("english");
    }
}

languageButton.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.linguaActive').classList.remove('linguaActive');
        el.classList.add('linguaActive');
        const attr = el.getAttribute('language');
        localStorage.setItem('lang', attr);
        setTranslatedStrings(attr);
    });
});

function setTranslatedStrings(attr) {
    //Bisogna inserire il codice per ogni classe per rendere le traduzioni effettive
        //Copiare e incollare cambiando il nome prima di El.textContent .. e poi cambiare la classe prima del ; PER OGNI COSA CHE SI VUOLE TRADURRE!!!!!!! 
        //quest'ultimo è la classe che abbiamo dato per la traduzione
        //selfDescriptionEl->const definite sopra, string[attr].selfDescription-> selfDescription nome dato dentro a strings
        selfDescriptionEl.textContent = strings[attr].selfDescription;
        panoramicEl.textContent = strings[attr].panoramic;
        languagesEl.textContent = strings[attr].languages;
        ingleseEl.textContent = strings[attr].inglese;
        coreanoEl.textContent = strings[attr].coreano;
        franceseEl.textContent = strings[attr].francese;
        tedescoEl.textContent = strings[attr].tedesco;
        esperienzelavorativeEl.textContent = strings[attr].esperienzelavorative;
        segretariaEl.textContent = strings[attr].segretaria;
        accoglienzaEl.textContent = strings[attr].accoglienza;
        gestioneEl.textContent = strings[attr].gestione;
        organizzazioneEl.textContent = strings[attr].organizzazione;
        utilizzoEl.textContent = strings[attr].utilizzo;
        lavoroEl.textContent = strings[attr].lavoro;
        coordinamentoEl.textContent = strings[attr].coordinamento;
        collaborazioneEl.textContent = strings[attr].collaborazione;
        formazioneEl.textContent = strings[attr].formazione;
        laureaEl.textContent = strings[attr].laurea;
        universitàEl.textContent = strings[attr].università;
        diplomaEl.textContent = strings[attr].diploma;
        corsiEl.textContent = strings[attr].corsi;
        socialmediaEl.textContent = strings[attr].socialmedia;
        ricercaEl.textContent = strings[attr].ricerca;
        advEl.textContent = strings[attr].adv;
        ottimizzazioneEl.textContent = strings[attr].ottimizzazione;
        analyticsEl.textContent = strings[attr].analytics;
        htmlandcssEl.textContent = strings[attr].htmlandcss;
        bootstrapEl.textContent = strings[attr].bootstrap;
        sqlEl.textContent = strings[attr].sql;
        hobbyEl.textContent = strings[attr].hobby;
        intvideogiochiEl.textContent = strings[attr].intvideogiochi;
        intletturaEl.textContent = strings[attr].intlettura;
        intacquarioEl.textContent = strings[attr].intacquario;
}