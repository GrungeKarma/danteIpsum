require("dotenv").config();
const express = require("express");

const danteIpsumArr = [
  {id: "1" ,  body: "Midway upon the journey of our life"},
  {id: "2" ,  body: "I found myself within a forest dark,"},
  {id: "3" ,  body: "For the straightforward pathway had been lost."},
  {id: "4" ,  body: "Ah me! how hard a thing it is to say"},
  {id: "5" ,  body: "What was this forest savage, rough, and stern,"},
  {id: "6" ,  body: "Which in the very thought renews the fear."},
  {id: "7" ,  body: "So bitter is it, death is little more;"},
  {id: "8" ,  body: "But of the good to treat, which there I found,"},
  {id: "9" ,  body: "Speak will I of the other things I saw there."},
  {id: "10" ,  body: "I cannot well repeat how there I entered,"},
  {id: "11" ,  body: "So full was I of slumber at the moment"},
  {id: "12" ,  body: "In which I had abandoned the true way."},
  {id: "13" ,  body: "But after I had reached a mountain’s foot,"},
  {id: "14" ,  body: "At that point where the valley terminated,"},
  {id: "15" ,  body: "Which had with consternation pierced my heart,"},
  {id: "16" ,  body: "Upward I looked, and I beheld its shoulders,"},
  {id: "17" ,  body: "Vested already with that planet’s rays"},
  {id: "18" ,  body: "Which leadeth others right by every road."},
  {id: "19" ,  body: "Then was the fear a little quieted"},
  {id: "20" ,  body: "That in my heart’s lake had endured throughout"},
  {id: "21" ,  body: "The night, which I had passed so piteously."},
  {id: "22" ,  body: "And even as he, who, with distressful breath,"},
  {id: "23" ,  body: "Forth issued from the sea upon the shore,"},
  {id: "24" ,  body: "Turns to the water perilous and gazes;"},
  {id: "25" ,  body: "So did my soul, that still was fleeing onward,"},
  {id: "26" ,  body: "Turn itself back to re-behold the pass"},
  {id: "27" ,  body: "Which never yet a living person left."},
  {id: "28" ,  body: "After my weary body I had rested,"},
  {id: "29" ,  body: "The way resumed I on the desert slope,"},
  {id: "30" ,  body: "So that the firm foot ever was the lower."},
  {id: "31" ,  body: "And lo! almost where the ascent began,"},
  {id: "32" ,  body: "A panther light and swift exceedingly,"},
  {id: "33" ,  body: "Which with a spotted skin was covered o’er!"},
  {id: "34" ,  body: "And never moved she from before my face,"},
  {id: "35" ,  body: "Nay, rather did impede so much my way,"},
  {id: "36" ,  body: "That many times I to return had turned."},
  {id: "37" ,  body: "The time was the beginning of the morning,"},
  {id: "38" ,  body: "And up the sun was mounting with those stars"},
  {id: "39" ,  body: "That with him were, what time the Love Divine"},
  {id: "40" ,  body: "At first in motion set those beauteous things;"},
  {id: "41" ,  body: "So were to me occasion of good hope,"},
  {id: "42" ,  body: "The variegated skin of that wild beast,"},
  {id: "43" ,  body: "The hour of time, and the delicious season;"},
  {id: "44" ,  body: "But not so much, that did not give me fear"},
  {id: "45" ,  body: "A lion’s aspect which appeared to me."},
  {id: "46" ,  body: "He seemed as if against me he were coming"},
  {id: "47" ,  body: "With head uplifted, and with ravenous hunger,"},
  {id: "48" ,  body: "So that it seemed the air was afraid of him;"},
  {id: "49" ,  body: "And a she-wolf, that with all hungerings"},
  {id: "50" ,  body: "Seemed to be laden in her meagreness,"},
  {id: "51" ,  body: "And many folk has caused to live forlorn!"},
  {id: "52" ,  body: "She brought upon me so much heaviness,"},
  {id: "53" ,  body: "With the affright that from her aspect came,"},
  {id: "54" ,  body: "That I the hope relinquished of the height."},
  {id: "55" ,  body: "And as he is who willingly acquires,"},
  {id: "56" ,  body: "And the time comes that causes him to lose,"},
  {id: "57" ,  body: "Who weeps in all his thoughts and is despondent,"},
  {id: "58" ,  body: "E’en such made me that beast withouten peace,"},
  {id: "59" ,  body: "Which, coming on against me by degrees"},
  {id: "60" ,  body: "Thrust me back thither where the sun is silent."},
  {id: "61" ,  body: "While I was rushing downward to the lowland,"},
  {id: "62" ,  body: "Before mine eyes did one present himself,"},
  {id: "63" ,  body: "Who seemed from long-continued silence hoarse."},
  {id: "64" ,  body: "When I beheld him in the desert vast,"},
  {id: "65" ,  body: "“Have pity on me,” unto him I cried,"},
  {id: "66" ,  body: "“Whiche’er thou art, or shade or real man!”"},
  {id: "67" ,  body: "He answered me: “Not man; man once I was,"},
  {id: "68" ,  body: "And both my parents were of Lombardy,"},
  {id: "69" ,  body: "And Mantuans by country both of them."},
  {id: "70" ,  body: "‘Sub Julio’ was I born, though it was late,"},
  {id: "71" ,  body: "And lived at Rome under the good Augustus,"},
  {id: "72" ,  body: "During the time of false and lying gods."},
  {id: "73" ,  body: "A poet was I, and I sang that just"},
  {id: "74" ,  body: "Son of Anchises, who came forth from Troy,"},
  {id: "75" ,  body: "After that Ilion the superb was burned."},
  {id: "76" ,  body: "But thou, why goest thou back to such annoyance?"},
  {id: "77" ,  body: "Why climb’st thou not the Mount Delectable,"},
  {id: "78" ,  body: "Which is the source and cause of every joy?”"},
  {id: "79" ,  body: "“Now, art thou that Virgilius and that fountain"},
  {id: "80" ,  body: "Which spreads abroad so wide a river of speech?”"},
  {id: "81" ,  body: "I made response to him with bashful forehead."},
  {id: "82" ,  body: "“O, of the other poets honour and light,"},
  {id: "83" ,  body: "Avail me the long study and great love"},
  {id: "84" ,  body: "That have impelled me to explore thy volume!"},
  {id: "85" ,  body: "Thou art my master, and my author thou,"},
  {id: "86" ,  body: "Thou art alone the one from whom I took"},
  {id: "87" ,  body: "The beautiful style that has done honour to me."},
  {id: "88" ,  body: "Behold the beast, for which I have turned back;"},
  {id: "89" ,  body: "Do thou protect me from her, famous Sage,"},
  {id: "90" ,  body: "For she doth make my veins and pulses tremble.”"},
  {id: "91" ,  body: "“Thee it behoves to take another road,”"},
  {id: "92" ,  body: "Responded he, when he beheld me weeping,"},
  {id: "93" ,  body: "“If from this savage place thou wouldst escape;"},
  {id: "94" ,  body: "Because this beast, at which thou criest out,"},
  {id: "95" ,  body: "Suffers not any one to pass her way,"},
  {id: "96" ,  body: "But so doth harass him, that she destroys him;"},
  {id: "97" ,  body: "And has a nature so malign and ruthless,"},
  {id: "98" ,  body: "That never doth she glut her greedy will,"},
  {id: "99" ,  body: "And after food is hungrier than before."},
  {id: "100" ,  body: "Many the animals with whom she weds,"},
  {id: "101" ,  body: "And more they shall be still, until the Greyhound"},
  {id: "102" ,  body: "Comes, who shall make her perish in her pain."},
  {id: "103" ,  body: "He shall not feed on either earth or pelf,"},
  {id: "104" ,  body: "But upon wisdom, and on love and virtue;"},
  {id: "105" ,  body: "’Twixt Feltro and Feltro shall his nation be;"},
  {id: "106" ,  body: "Of that low Italy shall he be the saviour,"},
  {id: "107" ,  body: "On whose account the maid Camilla died,"},
  {id: "108" ,  body: "Euryalus, Turnus, Nisus, of their wounds;"},
  {id: "109" ,  body: "Through every city shall he hunt her down,"},
  {id: "110" ,  body: "Until he shall have driven her back to Hell,"},
  {id: "111" ,  body: "There from whence envy first did let her loose."},
  {id: "112" ,  body: "Therefore I think and judge it for thy best"},
  {id: "113" ,  body: "Thou follow me, and I will be thy guide,"},
  {id: "114" ,  body: "And lead thee hence through the eternal place,"},
  {id: "115" ,  body: "Where thou shalt hear the desperate lamentations,"},
  {id: "116" ,  body: "Shalt see the ancient spirits disconsolate,"},
  {id: "117" ,  body: "Who cry out each one for the second death;"},
  {id: "118" ,  body: "And thou shalt see those who contented are"},
  {id: "119" ,  body: "Within the fire, because they hope to come,"},
  {id: "120" ,  body: "Whene’er it may be, to the blessed people;"},
  {id: "121" ,  body: "To whom, then, if thou wishest to ascend,"},
  {id: "122" ,  body: "A soul shall be for that than I more worthy;"},
  {id: "123" ,  body: "With her at my departure I will leave thee;"},
  {id: "124" ,  body: "Because that Emperor, who reigns above,"},
  {id: "125" ,  body: "In that I was rebellious to his law,"},
  {id: "126" ,  body: "Wills that through me none come into his city."},
  {id: "127" ,  body: "He governs everywhere, and there he reigns;"},
  {id: "128" ,  body: "There is his city and his lofty throne;"},
  {id: "129" ,  body: "O happy he whom thereto he elects!”"},
  {id: "130" ,  body: "And I to him: “Poet, I thee entreat,"},
  {id: "131" ,  body: "By that same God whom thou didst never know,"},
  {id: "132" ,  body: "So that I may escape this woe and worse,"},
  {id: "133" ,  body: "Thou wouldst conduct me there where thou hast said,"},
  {id: "134" ,  body: "That I may see the portal of Saint Peter,"},
  {id: "135" ,  body: "And those thou makest so disconsolate.”"},
  {id: "136" ,  body: "Then he moved on, and I behind him followed."}
];
let danteIpsumArr2 = danteIpsumArr.slice();
let danteIpsumArr3 = danteIpsumArr.slice();
let danteIpsumArr4 = danteIpsumArr.slice();

const app = express();

const myMiddleware = (request, response, next) => {
  // do something with request and/or response
  console.log(request.method, request.path);
  next(); // tell express to move to the next middleware function
};

app.use(myMiddleware); // use the myMiddleware for every request to the app
app.use(express.json());

  app
  .route("/random_passage_generator")
  .get((request, response) => {
    const randomValue = (list) => {
      return list[Math.floor(Math.random() * list.length)]
    };

  let value = randomValue(danteIpsumArr);
  let value2 = randomValue(danteIpsumArr2);
  let value3 = randomValue(danteIpsumArr3);
  let value4 = randomValue(danteIpsumArr4);
  let genRandomPassage = `${value.body} ${value2.body} ${value3.body} ${value4.body}`;
  console.log(genRandomPassage);

  response.status(200).json({genRandomPassage});
  });

app.route("/list_passages").get((request,response) => {
  let passageList = danteIpsumArr;

  response.status(200).json(passageList);
});

app.route("/get_passage/:id").get((request,response) => {
  const id = request.params.id;

  let finalAnswer = [];

    let answer = danteIpsumArr.forEach(element =>{
      if (element.id === id){
        console.log (element);
        finalAnswer.push(element);
      }
        });
  response.status(200).json(finalAnswer);

});

app.route("/**").get((request, response) => {
  response.status(404).json({ message: "Not Found" });
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
