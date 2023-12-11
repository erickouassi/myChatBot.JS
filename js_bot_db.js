//bot_db.js

window.addEventListener("load", function () {
    const form = document.getElementById("my-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        var input = document.getElementById("input").value.trim();
        document.getElementById("user").innerHTML = input;
        output(input);
        fetch(action, {
            method: "POST",
            body: data,
        }).then(() => {
            console.log("Success!");
        });
    });
});


function output(input) {
    try {
        var product = input + "=" + eval(input);
    } catch (e) {
        var text = input.toLowerCase().replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and
        text = text
           .replace(/ a /g, " ")
           .replace(/i feel /g, "")
         .replace(/whats/g, "what is")
            .replace(/please /g, "")
            .replace(/ please/g, "");
        if (compare(trigger, reply, text)) {
            var product = compare(trigger, reply, text);
        } else {
            var product = alternative[Math.floor(Math.random() * alternative.length)];
        }
    }
    document.getElementById("chatbot").innerHTML = product;
    document.getElementById("input").value = ""; //clear input value
}

function compare(arr, array, string) {
    var item;
    for (var x = 0; x < arr.length; x++) {
        for (var y = 0; y < array.length; y++) {
            if (arr[x][y] == string) {
               var items = array[x];
                item = items[Math.floor(Math.random() * items.length)];
            }
        }
    }
    return item;
}


 // get api address on a form
 const ipFormInput = document.getElementById('visitor_ip');
        
 fetch('https://api.ipify.org?format=json')
     .then((response) => { return response.json() })
     .then((json) => {
         const ip = json.ip;
         ipFormInput.value = ip;
     })
     .catch((err) => { console.error(`Error getting IP Address: ${err}`) })

//  add js files to one file
function include(file) {

	let script = document.createElement('script');
	script.src = file;
	script.type = 'text/javascript';
	script.defer = true;

	document.getElementsByTagName('head').item(0).appendChild(script);

}

/* Include Many js files */
include(
'js_chatbot_trigger.js');
include(
'js_chatbot_reply.js');