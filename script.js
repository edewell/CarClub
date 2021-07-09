alert("Hello"); 

let company = prompt('Which company created the 350z?', '');


   if (company == 'Nissan'){
      alert("right");

   }
   else if (company !== 'Nissan'){
      alert("wrong");
   }

let question = prompt('Are you a car lover?', "");
   

      if (question == 'yes'){
         alert("Welcome");
      }
      else if (question !== 'yes'){
         alert("its ok")
      }

attempts = 0;
var correct = false;
while(correct == false){
   let guessinggame = prompt("I am thinking of American Muscle");

      
   if (guessinggame == "Dodge"){
      alert("right");
      correct = true;
   }
   else if (guessinggame !== "Dodge"){
      alert("wrong");
   }
}

function starGenerator(){
   var rating = prompt("Leave a rating 1-5");
      for (let i = 0; i < rating; i++){
         var starCount = document.createElement('img');
         starCount.setAttribute("src", "https://i.pinimg.com/736x/3f/5f/10/3f5f10db59ca963cc07ea32f7f7352fb.jpg");
         starCount.setAttribute("height", "200");
         starCount.setAttribute("width", "200");
         starCount.setAttribute("alt", "Honda Civic");
         document.body.appendChild(starCount);
      }

}