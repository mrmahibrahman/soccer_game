 let randomButton = document.querySelector("#random_btn");
 randomButton.onclick = pickRandomStarter;
 
 function pickRandomStarter() {
    //Allows us to generate a random player from the ratings array 
    //in the database
     let randomIndex = Math.random();
     randomIndex *= ratings.length;
     randomIndex = Math.floor(randomIndex);
 
     let randomStarter = ratings[randomIndex];
 
     //reference to the player name
     let nameHeading = document.querySelector("#player_name");
     nameHeading.innerHTML = `${randomStarter.Position} - ${randomStarter.name}`;
     
     //reference to image
     let playerImage = document.getElementById("player_img");
     playerImage.src = randomStarter.image[0];
     
     //a refernce to the players club and shirt #
     let typeHeading = document.querySelector("#player_types"); 
     typeHeading.innerHTML = `${randomStarter.Club[0]}`;
    
     
     //Reference to the video
     let videoYT = document.getElementById("videos");
     videoYT.src = randomStarter.video[0];


     // Gets a reference to all stat bars 
     let statBars = document.querySelectorAll("#player_stats div");
     //this is purely for visual clarity 
     let scale = 4;
     // Loops through every stat bar
     for(let i = 0; i < statBars.length; i++) {
         // Get the stat from the id of the statBar
         let stat = statBars[i].id;
         // Set width to base state * scale 
         statBars[i].style['width'] = `${randomStarter.base[stat] * scale}px`;
     }
 
 }
  
