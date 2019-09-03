(function () {
    //code inside here will only run once the entire page is loaded
    window.onload = function () {
        let teamOneShotsTaken = document.querySelector("#teamone-numshots");
        let teamTwoShotsTaken = document.querySelector("#teamtwo-numshots");
        let teamOneHits = document.querySelector("#teamone-numhits");
        let teamTwoHits = document.querySelector("#teamtwo-numhits");
        let teamOneShoots = document.querySelector("#teamone-shoot");
        let teamTwoShoots = document.querySelector("#teamtwo-shoot");
        let reset = document.querySelector("#reset");
        let numReset = document.querySelector("#num-resets");

        teamOneShoots.addEventListener("click", function () {
            console.log("Team One Shoots button clicked");

            let shot = shootBall();
            
            // increment number of shots taken
            teamOneShotsTaken.innerHTML++;
            
            console.log(shot);
            
            if (shot == true) {
                teamOneHits.innerHTML++;
            }

        });

        teamTwoShoots.addEventListener("click", function () {
            console.log("Team Two Shoots button clicked");
            
            let shot = shootBall();

            // increment number of shots taken
            teamTwoShotsTaken.innerHTML++;

            console.log(shot);

            if (shot == true) {
                teamTwoHits.innerHTML++;
            }
        });

        reset.addEventListener("click", function () {
            console.log("Reset button clicked");

            numReset.innerHTML++;

            teamOneShotsTaken.innerHTML = 0;
            teamTwoShotsTaken.innerHTML = 0;
            teamOneHits.innerHTML = 0;
            teamTwoHits.innerHTML = 0;

        });


        function shootBall() {
            var x = Math.random();
            if (x >= 0.5) {
                x = 1;
            } else {
                x = 0;
            }
            return Boolean(x);
        }

        console.log(teamOneShotsTaken);
        console.log(teamOneHits);
        console.log(teamOneShoots);
        console.log(teamTwoShotsTaken);
        console.log(teamTwoHits);
        console.log(teamTwoShoots);
        console.log(reset);
        console.log(numReset);

        //console.log(shootBall())
    }
})();