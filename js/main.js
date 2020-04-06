const YEARS = [
    '2010', '2011', '2012', '2013', '2014', '2015', '2016'
];

const COUNTRIES = [
    'Argentina', 'Bolivia', 'Brazil', 'Colombia'
]

let baseYear = '2016';

let includedCountries = [
    'Argentina', 'Brazil', 'Ecuador', 'Suriname'
];

let chooseCountries = [];


   // Function to gather year input from user
   function selectYear() {
    fetch("./data/year_data.json")
        .then(response => response.json())
        .then(data => {

            // create variable for dropdown menu
            let yearInput = document.querySelector('#select');
            console.log(yearInput)
            // console.log(Object.keys(data[item].years))

            //Loop through years (**still looping thru too many years objects**)
            for (let item in data) {
                console.log("Years List: ,", data[item].years)      
                let year_choice = document.createElement("option");
                year_choice.classList.add('year-choice');
                year_choice.innerHTML = Object.keys(data[item].years)
                yearInput.appendChild(year_choice);

            }               
    });
}
selectYear();

// function setup() {
//     const yearInput = document.querySelector('#select');
//     for (const year of YEARS) {
//         const yearChoice = document.createElement('option');
//         yearChoice.textContent = year;
//         yearInput.appendChild(yearChoice);
//     }

//     yearInput.onchange = () => {
//         baseYear = yearInput.value;
//         fetchData();
//     };

//     const countryCheckBoxes = document.querySelector('#checkbox');
//     for (const country of COUNTRIES) {
//         const countryButton = document.createElement('button');

//         let isChecked = '';
//         if (includedCountries.includes(country)) {
//             isChecked = 'checked';
//         }

//         countryButton.innerHTML = `<input type="checkbox" ${isChecked} /><span>${country}</span>`;

//         countryButton.onclick = () => setTimeout(() => {
//             const checkbox = country.querySelector("input");
//             if (checkbox.checked) {
//                 if (!includedCountries.includes(country)) {
//                     includedCountries.push(country);
//                 }
//             } else {
//                 includedCountries = includedCountries.filter(code => code !== country);
//             }
//             fetchData();
//         }, 10)
//         countryCheckBoxes.appendChild(country);
//     }

//     fetchData();
// }

// currently fetch year_array, not year_data
function render() {
    fetch("./data/year_array.json")
        .then(response => response.json())
        .then(data => {
            console.log("got the data!");
            console.log(data);
            //how to access
            console.log(data[0].years);

            for (let item in data) {
                
                console.log(data[item].years)
            }

            // create variable for bargraph
            let chart = document.querySelector("#results");
            chart.innerHTML = '';
            
            for (let item of data) {

              
                let bar = document.createElement("div");

             
                let percent = data[item].years["2010"];
                let height = percent;
                console.log("2010 percent: ", percent);
                bar.style.height = height + "%";
                bar.classList.add("BarChart-Bar");
       
                // let width = percent;     //too wide and funky need to fix
                // bar.style.width = width + 'vw';  //too wide and funky

                bar.innerHTML = data[item].country + '<br>' + percent + " %"
                chart.appendChild(bar);

            }
        
        })

    }
    render();





    // Function for generating country buttons 
    function countryButtons(data){
        fetch("./data/year_data.json")
        .then(response => response.json())
        .then(data => {

            // create varible for parent div of country buttons.
            let checkbox = document.querySelector('#checkbox');

            //loop through country's; create buttons
            for (let item in data) {
                console.log('Country Buttons: ', data[item].country)
                let button = document.createElement("button");
                button.classList.add('Country-Button');
                button.innerHTML = data[item].country;
                button.onclick = chooseCountry; 
                checkbox.appendChild(button);

            }          
        })  
           
    }
    countryButtons();

    function chooseCountry() {
        fetch("./data/year_data.json")
        .then(response => response.json())
        .then(data => {

            let chart = document.querySelector("#results");
            chart.innerHTML= ''

           for (let item in data) {
                   let country = data[item].country
                // console.log(country);

                if (country.value === data[item].country) {
                    console.log(country);
    

                }

                let percent = data[item].years["2010"];
                    console.log("2010 percent: ", percent);
    
                    // //create bar div; establish height and width using percent
                    let bar = document.createElement("div");
                    let height = percent;
                    // let width = percent;     //too wide and funky need to fix
                    bar.classList.add("BarChart-Bar");
                    bar.id = "test";
                    bar.style.height = height + "%";
                    // bar.style.width = width + 'vw';  //too wide and funky
                    bar.innerHTML = data[item].country + '<br>' + percent + " %"
                    chart.appendChild(bar);

               //get percent from the year 2010
               
            }

        })

       
    }
    render();
    // chooseCountry();


    // function fetchData() {
    //     const symbols = includedCountries
    //         .filter(years => years !== baseYear)
    //         .join(',');
    //     const opts = `base=${baseCurrenct}&symbols=${symbols}`;
    //     const url = './data.year_data.json' + opts
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             refreshGraph(data.years);
    //         });
    // }

    // setup();



 
        


