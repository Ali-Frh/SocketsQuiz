function sound(file) {
    let sound_state = getCookie("sound");
    if (sound_state ==  "true" || sound_state == null) {
        var audio = new Audio("assets/"+file);
        audio.play();
    }
}

function soundToggle() {
    let sound_state = getCookie("sound");
    console.log("change");
    // deleteCookie("sound");
    if (sound_state == "true") {
        setCookie("sound", "false", 999);
        document.getElementsByClassName("cross ")[1].style.display="block";
    }
    else if (sound_state == "false" || sound_state == null) {
        document.getElementsByClassName("cross ")[1].style.display="none";
        setCookie("sound", "true", 999);
    }
}


function falevel(level) {
    sound("button.mp3");
    if (level == "1") {
        // document.getElementById("menu-fa").style.display="none";
        document.getElementById("menu-en").style.display="none";
        // document.getElementById("qfues").style.display="block";
        startGame("level1");
    }

}


function home(){
    sound("button.mp3");

    let lang = getCookie("user_lang");
    // appearantly i cant decide about buttons, but i left it for future refrences. 
    if (lang == "en") {
        var c = confirm("Are you sure about surrender ? i thought you're stronger than this.",
        "Yea","No ill continue");
    }else if (lang == "fa") {
        var c = confirm("آیا مطمئنی میخوای این دست رو واگذار کنی ؟ فکر میکردم بتونی از پسش بر بیای!",
        "آره","نه ادامه میدم");}

    if (c) {

        let temps = document.getElementsByClassName("temp" );
        Array.from(temps).forEach(( el )=> {
            document.body.removeChild(el);
        });
    
        // let p = confirm
        document.getElementById("qfues").style.display="none";
        document.getElementById("menu-en").style.display="block";
    }

    // door sound effe
}

function langu(la) {
    let sound_state = getCookie("sound");
    if (sound_state == null ) {
         setCookie("sound", "true", 999);
    }




    sound("button.mp3");
    document.getElementById("lang-step").style.display="none";
    if ( la == "en" ) {
        setCookie("user_lang", "en", 999);
        console.log("en it is."); 
        // la="en";
    } else if ( la == "fa" ) {
        // la="fa";
        setCookie("user_lang", "fa", 999);
        
        // document.getElementById("menu-fa").style.display="block";
        
    }
    var myElement = document.getElementById('menu-en');
    myElement.innerHTML = translatePlaceholders(myElement.innerHTML);
    myElement.style.display="block";


}

function change_lang() {
    document.getElementById("menu-en").style.display="none";
    document.getElementById("lang-step").style.display="flex";
    deleteCookie("user_lang");
    location.reload();
    
    
}

// TODO: size advice 

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
  
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}


window.onload = function() {
    let lang = getCookie("user_lang");
    if (lang == null) {
        document.getElementById("lang-step").style.display="flex";

        // show the bloody lang page
    } else {
            document.getElementById("lang-step").style.display="none";
            document.getElementById("menu-en").style.display="block";
            // document.getElementById("menu-en").innerHTML = 
            var myElement = document.getElementById('menu-en');
            myElement.innerHTML = translatePlaceholders(myElement.innerHTML);

    
    
    // if (lang == "fa") {
    //      document.getElementById("lang-step").style.display="none";
    //     document.getElementById("menu-fa").style.display="block";
         
    //      // freaken fa page
    //     } else if (lang == "en") {
    //         document.getElementById("lang-step").style.display="none";
    //         document.getElementById("menu-en").style.display="block";
    //         // document.getElementById("menu-en").innerHTML = 
    //         var myElement = document.getElementById('menu-en');
    //         myElement.innerHTML = translatePlaceholders(myElement.innerHTML);
    
        // en it is ! 
    }
}

function shuffleNumbersList(length) {
    // Create an array of numbers from 1 to length
    const numbersList = Array.from({ length }, (_, index) => index + 1);
  
    // Fisher-Yates shuffle algorithm
    for (let i = numbersList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbersList[i], numbersList[j]] = [numbersList[j], numbersList[i]];
    }
  
    return numbersList;
  }
  
  // Example usage: Generate a shuffled list of 5 numbers
//   const shuffledList = shuffleNumbersList(5);
//   console.log(shuffledList);
  
function showQuestion(level, questionIter) {
    // pop prev. question
    let temps = document.getElementsByClassName("temp" );
    Array.from(temps).forEach(( el )=> {
        document.body.removeChild(el);
    });

    var questions = window[level];
    var question = questions[window.order[questionIter-1]];
    console.log(window.order);
    // console.log(window.order[questionIter]);

    var lang = getCookie("user_lang");
    var question_structure = document.getElementById("qfues").innerHTML;


    let el = document.createElement("div");
    el.classList.add( level + "-" + questionIter );
    el.classList . add("temp") ;

    let temp = question_structure;
    console.log(question["image"]);
    temp = temp.replace("[qp]" , question["image"]);
    temp = temp.replace("[q#]", questionIter);
    temp = temp.replace("[q]", question["question"][lang]);

    // scrambling answers
    let ansorder = shuffleNumbersList(4);
    // console.log("Order was " + ansorder);
    temp = temp.replace(/\[ans1\]/g, question["answers"][ansorder[0]][lang]);
    temp = temp.replace(/\[ans2\]/g, question["answers"][ansorder[1]][lang]);
    temp = temp.replace(/\[ans3\]/g, question["answers"][ansorder[2]][lang]);
    temp = temp.replace(/\[ans4\]/g, question["answers"][ansorder[3]][lang]);

    currentAns = question["answers"][question["correct"]][lang];
    // console.log(currentAns);
    // globalThis





    el.innerHTML = temp;
    // el.innerHTML = question_structure;
    document.body.appendChild(el);


    let element = document.getElementsByClassName("qfquestion")[1];
    element.classList.add("dissolve-enter");

    // Remove it after a delay (e.g., 2 seconds)
    setTimeout(() => {
      element.classList.remove("dissolve-enter");
    }, 2000);

    
    let sound_state = getCookie("sound");
    if (sound_state == "true") {
        document.getElementsByClassName("cross ")[1].style.display="none";
    }
    else if (sound_state == "false" || sound_state == null) {
        document.getElementsByClassName("cross ")[1].style.display="block";
    }


}


function submit(which, el) {
    // console.log(which);
    if(which == window.currentAns) {
        console.log("Broooooooooooooooooooooooooooooo");
        console.log(el);

        // setInterval(()=>{
            //     document.getElementsByClassName(el)[0].style="background-color:green;color:white;";
            // },3000);
        // green(el);
        window.score++;

        sound ("correct.mp3"); 
        const element = document.getElementsByClassName(el)[1];
        // element[1].style.backgroundColor="green";
        if (element) {
            element.style.backgroundColor = "green";
            element.style.color = "white";

            setTimeout(() => {
                element.removeAttribute("style");
                window.questionIter++;
                showQuestion(window.currentLevel, window.questionIter);
            
            }, 1500);
        }

      
    
    }else{
        console.log("Wrong");
        const element = document.getElementsByClassName(el)[1];
        // element[1].style.backgroundColor="green";
        sound ("wrong.mp3"); 
        if (element) {
            element.style.backgroundColor = "red";
            element.style.color = "white";
            
            setTimeout(() => {
                element.removeAttribute("style");
                window.questionIter++;
                showQuestion(window.currentLevel, window.questionIter);
            
            }, 1500);
        }
        
    }

}

  
function startGame(level){
    // var lang = getCookie("user_lang");
    // question_structure = document.getElementById("qfues").innerHTML;
    var questions = window[level];
    var total_questions = Object.keys(questions).length;
    // console.log (total_questions);
    order = shuffleNumbersList(total_questions);
    // console.log(order);
    currentLevel = "level1";
    questionIter = 1;
    score = 0;
    // var total
    // order.forEach((index) => {
        index = order[questionIter-1];
        let question = questions[index];
       showQuestion(currentLevel, questionIter); 
    // });
}

// show questions on new elements that copied from orig ques, so you didnt have to bring html to js bruh