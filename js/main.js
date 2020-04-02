
function render() {
    fetch("./data/year_data.json")
        .then(response => response.json())
        .then(data => {
            console.log("got the data!");
            console.log(data);

            //create variable for bargraph
            let chart = document.querySelector("#results");
           
            //loop through data to render bars for graph
            // for (let item in data) {
            //     console.log('Country: ', data[item].country)
            //     console.log('Data for Country: ', data[item].years)   
            //     console.log("Years List: ,", Object.keys(data[item].years))

            //    //get percent from the year 2010
            //     let percent = data[item].years["2010"];
            //     console.log("2010 percent: ", percent);

            //     //create bar div; establish height and width using percent
            //     let bar = document.createElement("div");
            //     let height = percent;
            //     // let width = percent;     //too wide and funky need to fix
            //     bar.classList.add("BarChart-Bar");
            //     bar.style.height = height + "%";
            //     // bar.style.width = width + 'vw';  //too wide and funky
            //     bar.innerHTML = data[item].country + '<br>' + percent + " %"
            //     chart.appendChild(bar);

            // }
        })

    }
    render();

    // Function for generating country buttons 
    function countryButtons(){
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
            console.log('Button clicked');
            let chart = document.querySelector("#results");


            for (let item in data) {
                // console.log('Country: ', data[item].country)
                let country = data[item].country
                console.log(country);

               //get percent from the year 2010
                let percent = data[item].years["2010"];
                console.log("2010 percent: ", percent);

                // //create bar div; establish height and width using percent
                let bar = document.createElement("div");
                let height = percent;
                // let width = percent;     //too wide and funky need to fix
                bar.classList.add("BarChart-Bar");
                bar.style.height = height + "%";
                // bar.style.width = width + 'vw';  //too wide and funky
                bar.innerHTML = data[item].country + '<br>' + percent + " %"
                chart.appendChild(bar);

            }

        })

       
    }
    // chooseCountry();


    // Function to gather year input from user
    function selectYear(){
        fetch("./data/year_data.json")
            .then(response => response.json())
            .then(data => {

                // create variable for dropdown menu
                let yearInput = document.querySelector('#select');
                console.log(yearInput)
                // console.log(Object.keys(data[item].years))

                //Loop through years (**still looping thru too many years objects**)
                for (let item in data) {
                    console.log("Years List: ,", Object.keys(data[item].years))      
                    let year_choice = document.createElement("option");
                    year_choice.classList.add('year-choice');
                    year_choice.innerHTML = Object.keys(data[item].years)
                    yearInput.appendChild(year_choice);


                    //scratch code

                    // let selectedYearOption = document.querySelector('#select :checked');
                    // console.log('Year:', selectedYearOption);
                    // let year = selectedYearOption.value;
                    // console.log('Getting comment text', year);
                    // newCommentDiv.style.color = colorText;
                }
               
        });
    }
    selectYear();
        


