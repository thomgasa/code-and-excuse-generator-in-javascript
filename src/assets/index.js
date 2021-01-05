window.onload = () => {
    console.log("Hello excuse");

    // complete lists of parts of the excuse
    let who = ["my father", "my mother", "my cat", "my turtle", "my grandma"];
    let action = ["crashed "," stole "," took me away "," took away "," didn't want to play"];
    let what = ["my homework "," my cat "," the money that I earned working "," my uniform"];
    let when = ["at night "," before breakfast "," at dawn "," in the afternoon "," when he felt like it"];

    // pick a random number for each list
    let whoRandomNumber = Math.floor(Math.random() * who.length);
    let actionRandomNumber = Math.floor(Math.random() * action.length);
    let whatRandomNumber = Math.floor(Math.random() * what.length);
    let whenRandomNumber = Math.floor(Math.random() * when.length);

    // declare the variable that will contain the excuse
    let excuse = "insert excuse here."

    // assign the concatenated texts to the variable
    // based on the random numbers chosen
    excuse = who[whoRandomNumber] + " " + action[actionRandomNumber] + " ";
    excuse = excuse + what[whatRandomNumber] + " " + when[whenRandomNumber];

    // change paragraph content
    document.querySelector("#excuse").innerHTML = excuse;
}