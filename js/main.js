
function render() {
    fetch("./data/year_data.json")
        .then(response => response.json())
        .then(data => {
            console.log("got the data!");
            console.log(data);

            let chart = document.querySelector("#results");
           

            for (let item in data) {
                console.log('Country: ', data[item].country)
                console.log('Data for Country: ', data[item].years)   
                console.log("Years List: ,", Object.keys(data[item].years))

               
                let percent = data[item].years["2010"];
                console.log("2010 percent: ", percent);

                let bar = document.createElement("div");
                let height = 70;
                bar.classList.add("BarChart-Bar");
                bar.style.height = height + "%";
                bar.innerHTML = data[item].country + '<br>' + percent + " %"
                chart.appendChild(bar);

            }
            

        })

    }
    render();


    function countryButtons(){
        fetch("./data/year_data.json")
        .then(response => response.json())
        .then(data => {
            let checkbox = document.querySelector('#checkbox');
            for (let item in data) {
                console.log('Country Buttons: ', data[item].country)
                let button = document.createElement("button");
                button.classList.add('Country-Button');
                button.innerHTML = data[item].country;
                checkbox.appendChild(button);

            }
            
        })
      
    }
    countryButtons();


    function selectYear(){
        fetch("./data/year_data.json")
            .then(response => response.json())
            .then(data => {
        
                let selectYear = document.querySelector('#select');
                // console.log(Object.keys(data[item].years))
                for (let item in data) {
                    console.log("Years List: ,", Object.keys(data[item].years))      
                    let year_choice = document.createElement("option");
                    year_choice.classList.add('year-choice');
                    year_choice.innerHTML = Object.keys(data[item].years)
                    selectYear.appendChild(year_choice);

                    // let years = Object.keys(data[item].years);
                    // for (let year in years) {
                    // console.log('Years: ', year)


                    // let selectedYearOption = document.querySelector('#select :checked');
                    // console.log('Year:', selectedYearOption);
                    // let year = selectedYearOption.value;
                    // console.log('Getting comment text', year);
                    // newCommentDiv.style.color = colorText;
                }

                

                

               
             });
    }
    selectYear();
        


