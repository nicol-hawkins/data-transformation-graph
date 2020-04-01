
function render() {
    fetch("./data/year_data.json")
        .then(response => response.json())
        .then(data => {
            console.log("got the data!");
            console.log(data);

            let chart = document.querySelector("#results");

            for (let item in data) {
                console.log('Country: ', data[item].country)
                console.log('Years: ', data[item].years)   

                let bar = document.createElement("div");
                let height = 70;
                bar.classList.add("BarChart-Bar");
                bar.style.height = height + "%";
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
                checkbox.appendChild(button);

            }
            
        })
      
    }
    countryButtons();
        


