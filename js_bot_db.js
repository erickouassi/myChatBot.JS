//bot_db.js
var reply = [
	//Basic lead responses
    ["Bye", "Goodbye", "See you later"],
    ["We are here to help. Are you looking to buy, rent or sell"],
    ["<p><ol><li><b>Meet with your agent</b>: Discuss your wants, budget, and timeline.</li><li><b>Get pre-approved</b>: Secure a mortgage pre-approval letter to know your buying power.</li><li><b>Start searching</b>: Utilize your agent's expertise to find properties within your criteria.</li><li><b>Make an offer</b>: Negotiate price and terms with the seller through your agent.</li><li><b>Get inspections</b>: Conduct a home inspection and any additional checks needed.</li><li><b>Finalize financing</b>: Secure your mortgage loan and finalize all paperwork.</li><li><b>Close the deal</b>: Sign the closing documents and officially become a homeowner!</li></ol></p>","<p>Excited for your new home search! <br>Let's get started by filling out a short form ([link]). <br>This will help me understand your priorities like budget, location, type of home (e.g., single family, condo), and must-have features.<br>With that information, I can create a personalized list of homes that perfectly match your needs. We can then schedule viewings and work together to find your dream home!</p>"],
    ["I think I have some properties that you might be interested in; What's your name?"],
    ["Here is my contact info<br>Phone number:......<br>Email:...."],
    ["Please to reach out ...."],
    ["What's your name?"],
    ["<p><ol><li><b>Contact a real estate agent</b>: Explain your short-term housing needs and preferred location.</li><li><b>Discuss budget</b>: Share your monthly rent and move-in date range with the agent.</li><li><b>View properties</b>: Explore shortlisted properties recommended by the agent.</li><li><b>Submit application</b>: Provide necessary documents and references for landlord review.</li><li><b>Negotiate lease terms</b>: Discuss rent, duration, pet policy, and other details.</li><li><b>Sign lease agreement and pay security deposit</b>: Secure your short-term rental.</li><li><b>Move in and enjoy your temporary home</b>!</li></ol></p>","<p>Excited for your new home search! <br>Let's get started by filling out a short form ([link]). <br>This will help me understand your priorities like budget, location, type of home (e.g., single family, condo), and must-have features.<br>With that information, I can create a personalized list of homes that perfectly match your needs. We can then schedule viewings and work together to find your dream home!</p>"],
    ["<p><ol><li><b>Choose an agent</b>: Interview and compare agents, prioritizing experience and local expertise.</li><li><b>Prepare your house</b>: Declutter, clean, and make minor repairs to enhance appeal.</li><li><b>Set a competitive price</b>: Agent analyzes market data to help you price your house for a quick sale.</li><li><b>Marketing & showings</b>: Agent markets your house online & through networks, and schedules showings for potential buyers.</li><li><b>Negotiate offers</b>: Agent reviews offers and negotiates on your behalf to get the best deal.</li><li><b>Contract & closing</b>: Agent guides you through paperwork and closing process to finalize the sale.</li></ol></p>","<p>If you are serious about selling, it is time to get a listing agent.<br> A good agent will be able to advise you on pricing your home correctly, stage it to show its best potential, and market it effectively to reach the widest possible pool of buyers.</p>Choosing the right listing agent is an important decision. Be sure to interview several agents and choose one who has a good track record in your area and who you feel comfortable working with.</p><p>With the help of a good listing agent, you can sell your home quickly and at the best possible price.</p><p>I hope this information is helpful!<p>"],
    ["My clients put in an offer on a two-story house. One story before the offer, another story after the offer.","How many insects do you need to make money from your rental unit? 10x🐜 (Tenants).","The real estate in my neighborhood has become so expensive that only cats can afford it. You need nine lives to pay it off.","My balcony is so judgemental. It always looks down on people!","My fireplace is so popular, everyone warms up to it!","Why did the bathroom get promoted? It had all the inside leaks!","More people show up to my kid's lemonade stand than your open houses.","Your idea of a modern home is one with dial-up internet.","Your marketing strategy is like a silent auction: nobody knows about it.","You're so new to real estate, you think MLS is a soccer league.","You've lost more clients than a cell phone with no signal.","You change brokers more often than I change socks!"],
    ["Hi, how can I assist you today?","hey","Hello, how can I help you today?"], 
    ["Alright. Thanks for connecting with us today.","I'll be around if you need me, my friend. Don't be shy.","Let's chat more often! I'm always on the clock."],
    ["You are welcome", "Glad I could help", "Any time"],
    ["Got it! If you have any other questions, feel free to ask. 🙌"],
    ["<p>To make things easier, I'd love to schedule a virtual appointment where we can go over your home search in more detail and create a customized plan for finding your dream home.</p> <p>Simply click this link: ([link]) to book a convenient time that works for you.</p> <p>Let's get started on this home-hunting adventure together!</p> 🙌"],
    ["<h3>Office Hours</h3><p>Monday - Friday, 8am-8pm (EST)<br> Saturday - Sunday, 8am-5pm (EST)<br></p><p>The office is <b>CLOSED</b> on the following days:</br>New Year's Day </br>Martin Luther King, Jr., Day </br>Memorial Day </br>Juneteenth </br>Independence Day </br>Labor Day </br>Election Day</br>Thanksgiving Day</p><h3>Physical Address</h3><p>7180 Random St.</br>Fake Town, RE 63109</p>"],
    ["<div><p>I've got some exciting upcoming Open Houses for you:</br><ul><li>💰$548,000 🛏️3bd 🚿4ba</br>[Address] on [Date] @ [Time]</li></br><li>💰$548,000 🛏️3bd 🚿4ba</br>[Address] on [Date] @ [Time]</li></br><li>💰$548,000 🛏️3bd 🚿4ba</br>[Address] on [Date] @ [Time]</li></ul></p><p>To view more listing click this link: ([link]).</p></div>"],
];





var alternative = ["Thank you for your answer or your question. I am a chatbot who always continues to learn. Write in the box, name, email or phone to continue the chat."];

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
