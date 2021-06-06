require("dotenv").config();
const express = require("express");

const danteIpsumArr = [
  {id: "1", body: "Midway upon the journey of our life"},
  {id: "2", body: "I found myself within a forest dark,"},
  {id: "3", body: "For the straightforward pathway had been lost."},
  {id: "4", body: "Ah me! how hard a thing it is to say"},
  {id: "5", body: "What was this forest savage, rough, and stern,"},
  {id: "6", body: "Which in the very thought renews the fear."},
  {id: "7", body: "So bitter is it, death is little more;"},
  {id: "8", body: "But of the good to treat, which there I found,"},
  {id: "9", body: "Speak will I of the other things I saw there."},
  {id: "10", body: "I cannot well repeat how there I entered,"},
  {id: "11", body: "So full was I of slumber at the moment"},
  {id: "12", body: "In which I had abandoned the true way."},
  {id: "13", body: "But after I had reached a mountain’s foot,"},
  {id: "14", body: "At that point where the valley terminated,"},
  {id: "15", body: "Which had with consternation pierced my heart,"},
  {id: "16", body: "Upward I looked, and I beheld its shoulders,"},
  {id: "17", body: "Vested already with that planet’s rays"},
  {id: "18", body: "Which leadeth others right by every road."},
  {id: "19", body: "Then was the fear a little quieted"},
  {id: "20", body: "That in my heart’s lake had endured throughout"},
  {id: "21", body: "The night, which I had passed so piteously."},
  {id: "22", body: "And even as he, who, with distressful breath,"},
  {id: "23", body: "Forth issued from the sea upon the shore,"},
  {id: "24", body: "Turns to the water perilous and gazes;"},
  {id: "25", body: "So did my soul, that still was fleeing onward,"},
  {id: "26", body: "Turn itself back to re-behold the pass"},
  {id: "27", body: "Which never yet a living person left."},
  {id: "28", body: "After my weary body I had rested,"},
  {id: "29", body: "The way resumed I on the desert slope,"},
  {id: "30", body: "So that the firm foot ever was the lower."},
  {id: "31", body: "And lo! almost where the ascent began,"},
  {id: "32", body: "A panther light and swift exceedingly,"},
  {id: "33", body: "Which with a spotted skin was covered o’er!"},
  {id: "34", body: "And never moved she from before my face,"},
  {id: "35", body: "Nay, rather did impede so much my way,"},
  {id: "36", body: "That many times I to return had turned."},
  {id: "37", body: "The time was the beginning of the morning,"},
  {id: "38", body: "And up the sun was mounting with those stars"},
  {id: "39", body: "That with him were, what time the Love Divine"},
  {id: "40", body: "At first in motion set those beauteous things;"},
  {id: "41", body: "So were to me occasion of good hope,"},
  {id: "42", body: "The variegated skin of that wild beast,"},
  {id: "43", body: "The hour of time, and the delicious season;"},
  {id: "44", body: "But not so much, that did not give me fear"},
  {id: "45", body: "A lion’s aspect which appeared to me."},
  {id: "46", body: "He seemed as if against me he were coming"},
  {id: "47", body: "With head uplifted, and with ravenous hunger,"},
  {id: "48", body: "So that it seemed the air was afraid of him;"},
  {id: "49", body: "And a she-wolf, that with all hungerings"},
  {id: "50", body: "Seemed to be laden in her meagreness,"},
  {id: "51", body: "And many folk has caused to live forlorn!"},
  {id: "52", body: "She brought upon me so much heaviness,"},
  {id: "53", body: "With the affright that from her aspect came,"},
  {id: "54", body: "That I the hope relinquished of the height."},
  {id: "55", body: "And as he is who willingly acquires,"},
  {id: "56", body: "And the time comes that causes him to lose,"},
  {id: "57", body: "Who weeps in all his thoughts and is despondent,"},
  {id: "58", body: "E’en such made me that beast withouten peace,"},
  {id: "59", body: "Which, coming on against me by degrees"},
  {id: "60", body: "Thrust me back thither where the sun is silent."},
  {id: "61", body: "While I was rushing downward to the lowland,"},
  {id: "62", body: "Before mine eyes did one present himself,"},
  {id: "63", body: "Who seemed from long-continued silence hoarse."},
  {id: "64", body: "When I beheld him in the desert vast,"},
  {id: "65", body: "“Have pity on me,” unto him I cried,"},
  {id: "66", body: "“Whiche’er thou art, or shade or real man!”"},
  {id: "67", body: "He answered me: “Not man; man once I was,"},
  {id: "68", body: "And both my parents were of Lombardy,"},
  {id: "69", body: "And Mantuans by country both of them."},
  {id: "70", body: "‘Sub Julio’ was I born, though it was late,"},
  {id: "71", body: "And lived at Rome under the good Augustus,"},
  {id: "72", body: "During the time of false and lying gods."},
  {id: "73", body: "A poet was I, and I sang that just"},
  {id: "74", body: "Son of Anchises, who came forth from Troy,"},
  {id: "75", body: "After that Ilion the superb was burned."},
  {id: "76", body: "But thou, why goest thou back to such annoyance?"},
  {id: "77", body: "Why climb’st thou not the Mount Delectable,"},
  {id: "78", body: "Which is the source and cause of every joy?”"},
  {id: "79", body: "“Now, art thou that Virgilius and that fountain"},
  {id: "80", body: "Which spreads abroad so wide a river of speech?”"},
  {id: "81", body: "I made response to him with bashful forehead."},
  {id: "82", body: "“O, of the other poets honour and light,"},
  {id: "83", body: "Avail me the long study and great love"},
  {id: "84", body: "That have impelled me to explore thy volume!"},
  {id: "85", body: "Thou art my master, and my author thou,"},
  {id: "86", body: "Thou art alone the one from whom I took"},
  {id: "87", body: "The beautiful style that has done honour to me."},
  {id: "88", body: "Behold the beast, for which I have turned back;"},
  {id: "89", body: "Do thou protect me from her, famous Sage,"},
  {id: "90", body: "For she doth make my veins and pulses tremble.”"},
  {id: "91", body: "“Thee it behoves to take another road,”"},
  {id: "92", body: "Responded he, when he beheld me weeping,"},
  {id: "93", body: "“If from this savage place thou wouldst escape;"},
  {id: "94", body: "Because this beast, at which thou criest out,"},
  {id: "95", body: "Suffers not any one to pass her way,"},
  {id: "96", body: "But so doth harass him, that she destroys him;"},
  {id: "97", body: "And has a nature so malign and ruthless,"},
  {id: "98", body: "That never doth she glut her greedy will,"},
  {id: "99", body: "And after food is hungrier than before."},
  {id: "100", body: "Many the animals with whom she weds,"},
  {id: "101", body: "And more they shall be still, until the Greyhound"},
  {id: "102", body: "Comes, who shall make her perish in her pain."},
  {id: "103", body: "He shall not feed on either earth or pelf,"},
  {id: "104", body: "But upon wisdom, and on love and virtue;"},
  {id: "105", body: "’Twixt Feltro and Feltro shall his nation be;"},
  {id: "106", body: "Of that low Italy shall he be the saviour,"},
  {id: "107", body: "On whose account the maid Camilla died,"},
  {id: "108", body: "Euryalus, Turnus, Nisus, of their wounds;"},
  {id: "109", body: "Through every city shall he hunt her down,"},
  {id: "110", body: "Until he shall have driven her back to Hell,"},
  {id: "111", body: "There from whence envy first did let her loose."},
  {id: "112", body: "Therefore I think and judge it for thy best"},
  {id: "113", body: "Thou follow me, and I will be thy guide,"},
  {id: "114", body: "And lead thee hence through the eternal place,"},
  {id: "115", body: "Where thou shalt hear the desperate lamentations,"},
  {id: "116", body: "Shalt see the ancient spirits disconsolate,"},
  {id: "117", body: "Who cry out each one for the second death;"},
  {id: "118", body: "And thou shalt see those who contented are"},
  {id: "119", body: "Within the fire, because they hope to come,"},
  {id: "120", body: "Whene’er it may be, to the blessed people;"},
  {id: "121", body: "To whom, then, if thou wishest to ascend,"},
  {id: "122", body: "A soul shall be for that than I more worthy;"},
  {id: "123", body: "With her at my departure I will leave thee;"},
  {id: "124", body: "Because that Emperor, who reigns above,"},
  {id: "125", body: "In that I was rebellious to his law,"},
  {id: "126", body: "Wills that through me none come into his city."},
  {id: "127", body: "He governs everywhere, and there he reigns;"},
  {id: "128", body: "There is his city and his lofty throne;"},
  {id: "129", body: "O happy he whom thereto he elects!”"},
  {id: "130", body: "And I to him: “Poet, I thee entreat,"},
  {id: "131", body: "By that same God whom thou didst never know,"},
  {id: "132", body: "So that I may escape this woe and worse,"},
  {id: "133", body: "Thou wouldst conduct me there where thou hast said,"},
  {id: "134", body: "That I may see the portal of Saint Peter,"},
  {id: "135", body: "And those thou makest so disconsolate.”"},
  {id: "136", body: "Then he moved on, and I behind him followed."},
  {id: "137", body: 'Day was departing, and the embrowned air'},
  {id: "138", body:'Released the animals that are on earth'},
  {id: "139", body:'From their fatigues; and I the only one'},
  {id: "140", body:'Made myself ready to sustain the war,'},
  {id: "141", body:'Both of the way and likewise of the woe,'},
  {id: "142", body:'Which memory that errs not shall retrace.'},
  {id: "143", body:'O Muses, O high genius, now assist me!'},
  {id: "144", body:'O memory, that didst write down what I saw,'},
  {id: "145", body:'Here thy nobility shall be manifest!'},
  {id: "146", body:'And I began: “Poet, who guidest me,'},
  {id: "147", body:'Regard my manhood, if it be sufficient,'},
  {id: "148", body:'Ere to the arduous pass thou dost confide me.'},
  {id: "149", body:'Thou sayest, that of Silvius the parent,'},
  {id: "150", body:'While yet corruptible, unto the world'},
  {id: "151", body:'Immortal went, and was there bodily.'},
  {id: "152", body:'But if the adversary of all evil'},
  {id: "153", body:'Was courteous, thinking of the high effect'},
  {id: "154", body:'That issue would from him, and who, and what,'},
  {id: "155", body:'To men of intellect unmeet it seems not;'},
  {id: "156", body:'For he was of great Rome, and of her empire'},
  {id: "157", body:'In the empyreal heaven as father chosen;'},
  {id: "158", body:'The which and what, wishing to speak the truth,'},
  {id: "159", body:'Were stablished as the holy place, wherein'},
  {id: "160", body:'Sits the successor of the greatest Peter.'},
  {id: "161", body:'Upon this journey, whence thou givest him vaunt,'},
  {id: "162", body:'Things did he hear, which the occasion were'},
  {id: "163", body:'Both of his victory and the papal mantle.'},
  {id: "164", body:'Thither went afterwards the Chosen Vessel,'},
  {id: "165", body:'To bring back comfort thence unto that Faith,'},
  {id: "166", body:'Which of salvation’s way is the beginning.'},
  {id: "167", body:'But I, why thither come, or who concedes it?'},
  {id: "168", body:'I not Aeneas am, I am not Paul,'},
  {id: "169", body:'Nor I, nor others, think me worthy of it.'},
  {id: "170", body:'Therefore, if I resign myself to come,'},
  {id: "171", body:'I fear the coming may be ill-advised;'},
  {id: "172", body:'Thou’rt wise, and knowest better than I speak.”'},
  {id: "173", body:'And as he is, who unwills what he willed,'},
  {id: "174", body:'And by new thoughts doth his intention change,'},
  {id: "175", body:'So that from his design he quite withdraws,'},
  {id: "176", body:'Such I became, upon that dark hillside,'},
  {id: "177", body:'Because, in thinking, I consumed the emprise,'},
  {id: "178", body:'Which was so very prompt in the beginning.'},
  {id: "179", body:'“If I have well thy language understood,”'},
  {id: "180", body:'Replied that shade of the Magnanimous,'},
  {id: "181", body:'“Thy soul attainted is with cowardice,'},
  {id: "182", body:'Which many times a man encumbers so,'},
  {id: "183", body:'It turns him back from honoured enterprise,'},
  {id: "184", body:'As false sight doth a beast, when he is shy.'},
  {id: "185", body:'That thou mayst free thee from this apprehension,'},
  {id: "186", body:'I’ll tell thee why I came, and what I heard'},
  {id: "187", body:'At the first moment when I grieved for thee.'},
  {id: "188", body:'Among those was I who are in suspense,'},
  {id: "189", body:'And a fair, saintly Lady called to me'},
  {id: "190", body:'In such wise, I besought her to command me.'},
  {id: "191", body:'Her eyes where shining brighter than the Star;'},
  {id: "192", body:'And she began to say, gentle and low,'},
  {id: "193", body:'With voice angelical, in her own language:'},
  {id: "194", body:'‘O spirit courteous of Mantua,'},
  {id: "195", body:'Of whom the fame still in the world endures,'},
  {id: "196", body:'And shall endure, long-lasting as the world;'},
  {id: "197", body:'A friend of mine, and not the friend of fortune,'},
  {id: "198", body:'Upon the desert slope is so impeded'},
  {id: "199", body:'Upon his way, that he has turned through terror,'},
  {id: "200", body:'And may, I fear, already be so lost,'},
  {id: "201", body:'That I too late have risen to his succour,'},
  {id: "202", body:'From that which I have heard of him in Heaven.'},
  {id: "203", body:'Bestir thee now, and with thy speech ornate,'},
  {id: "204", body:'And with what needful is for his release,'},
  {id: "205", body:'Assist him so, that I may be consoled.'},
  {id: "206", body:'Beatrice am I, who do bid thee go;'},
  {id: "207", body:'I come from there, where I would fain return;'},
  {id: "208", body:'Love moved me, which compelleth me to speak.'},
  {id: "209", body:'When I shall be in presence of my Lord,'},
  {id: "210", body:'Full often will I praise thee unto him.’'},
  {id: "211", body:'Then paused she, and thereafter I began:'},
  {id: "212", body:'‘O Lady of virtue, thou alone through whom'},
  {id: "213", body:'The human race exceedeth all contained'},
  {id: "214", body:'Within the heaven that has the lesser circles,'},
  {id: "215", body:'So grateful unto me is thy commandment,'},
  {id: "216", body:'To obey, if ’twere already done, were late;'},
  {id: "217", body:'No farther need’st thou ope to me thy wish.'},
  {id: "218", body:'But the cause tell me why thou dost not shun'},
  {id: "219", body:'The here descending down into this centre,'},
  {id: "220", body:'From the vast place thou burnest to return to.’'},
  {id: "221", body:'‘Since thou wouldst fain so inwardly discern,'},
  {id: "222", body:'Briefly will I relate,’ she answered me,'},
  {id: "223", body:'‘Why I am not afraid to enter here.'},
  {id: "224", body:'Of those things only should one be afraid'},
  {id: "225", body:'Which have the power of doing others harm;'},
  {id: "226", body:'Of the rest, no; because they are not fearful.'},
  {id: "227", body:'God in his mercy such created me'},
  {id: "228", body:'That misery of yours attains me not,'},
  {id: "229", body:'Nor any flame assails me of this burning.'},
  {id: "230", body:'A gentle Lady is in Heaven, who grieves'},
  {id: "231", body:'At this impediment, to which I send thee,'},
  {id: "232", body:'So that stern judgment there above is broken.'},
  {id: "233", body:'In her entreaty she besought Lucia,'},
  {id: "234", body:'And said, “Thy faithful one now stands in need'},
  {id: "235", body:'Of thee, and unto thee I recommend him.”'},
  {id: "236", body:'Lucia, foe of all that cruel is,'},
  {id: "237", body:'Hastened away, and came unto the place'},
  {id: "238", body:'Where I was sitting with the ancient Rachel.'},
  {id: "239", body:'“Beatrice” said she, “the true praise of God,'},
  {id: "240", body:'Why succourest thou not him, who loved thee so,'},
  {id: "241", body:'For thee he issued from the vulgar herd?'},
  {id: "242", body:'Dost thou not hear the pity of his plaint?'},
  {id: "243", body:'Dost thou not see the death that combats him'},
  {id: "244", body:'Beside that flood, where ocean has no vaunt?”'},
  {id: "245", body:'Never were persons in the world so swift'},
  {id: "246", body:'To work their weal and to escape their woe,'},
  {id: "247", body:'As I, after such words as these were uttered,'},
  {id: "248", body:'Came hither downward from my blessed seat,'},
  {id: "249", body:'Confiding in thy dignified discourse,'},
  {id: "250", body:'Which honours thee, and those who’ve listened to it.’'},
  {id: "251", body:'After she thus had spoken unto me,'},
  {id: "252", body:'Weeping, her shining eyes she turned away;'},
  {id: "253", body:'Whereby she made me swifter in my coming;'},
  {id: "254", body:'And unto thee I came, as she desired;'},
  {id: "255", body:'I have delivered thee from that wild beast,'},
  {id: "256", body:'Which barred the beautiful mountain’s short ascent.'},
  {id: "257", body:'What is it, then? Why, why dost thou delay?'},
  {id: "258", body:'Why is such baseness bedded in thy heart?'},
  {id: "259", body:'Daring and hardihood why hast thou not,'},
  {id: "260", body:'Seeing that three such Ladies benedight'},
  {id: "261", body:'Are caring for thee in the court of Heaven,'},
  {id: "262", body:'And so much good my speech doth promise thee?”'},
  {id: "263", body:'Even as the flowerets, by nocturnal chill,'},
  {id: "264", body:'Bowed down and closed, when the sun whitens them,'},
  {id: "265", body:'Uplift themselves all open on their stems;'},
  {id: "266", body:'Such I became with my exhausted strength,'},
  {id: "267", body:'And such good courage to my heart there coursed,'},
  {id: "268", body:'That I began, like an intrepid person:'},
  {id: "269", body:'“O she compassionate, who succoured me,'},
  {id: "270", body:'And courteous thou, who hast obeyed so soon'},
  {id: "271", body:'The words of truth which she addressed to thee!'},
  {id: "272", body:'Thou hast my heart so with desire disposed'},
  {id: "273", body:'To the adventure, with these words of thine,'},
  {id: "274", body:'That to my first intent I have returned.'},
  {id: "275", body:'Now go, for one sole will is in us both,'},
  {id: "276", body:'Thou Leader, and thou Lord, and Master thou.”'},
  {id: "277", body:'Thus said I to him; and when he had moved,'},
  {id: "278", body:'I entered on the deep and savage way.'},
  {id: "279", body:'“Through me the way is to the city dolent;'},
  {id: "280", body:'Through me the way is to eternal dole;'},
  {id: "281", body:'Through me the way among the people lost.'},
  {id: "282", body:'Justice incited my sublime Creator;'},
  {id: "283", body:'Created me divine Omnipotence,'},
  {id: "284", body:'The highest Wisdom and the primal Love.'},
  {id: "285", body:'Before me there were no created things,'},
  {id: "286", body:'Only eterne, and I eternal last.'},
  {id: "287", body:'All hope abandon, ye who enter in!”'},
  {id: "288", body:'These words in sombre colour I beheld'},
  {id: "289", body:'Written upon the summit of a gate;'},
  {id: "290", body:'Whence I: “Their sense is, Master, hard to me!”'},
  {id: "291", body:'And he to me, as one experienced:'},
  {id: "292", body:'“Here all suspicion needs must be abandoned,'},
  {id: "293", body:'All cowardice must needs be here extinct.'},
  {id: "294", body:'We to the place have come, where I have told thee'},
  {id: "295", body:'Thou shalt behold the people dolorous'},
  {id: "296", body:'Who have foregone the good of intellect.”'},
  {id: "297", body:'And after he had laid his hand on mine'},
  {id: "298", body:'With joyful mien, whence I was comforted,'},
  {id: "299", body:'He led me in among the secret things.'},
  {id: "300", body:'There sighs, complaints, and ululations loud'},
  {id: "301", body:'Resounded through the air without a star,'},
  {id: "302", body:'Whence I, at the beginning, wept thereat.'},
  {id: "303", body:'Languages diverse, horrible dialects,'},
  {id: "304", body:'Accents of anger, words of agony,'},
  {id: "305", body:'And voices high and hoarse, with sound of hands,'},
  {id: "306", body:'Made up a tumult that goes whirling on'},
  {id: "307", body:'For ever in that air for ever black,'},
  {id: "308", body:'Even as the sand doth, when the whirlwind breathes.'},
  {id: "309", body:'And I, who had my head with horror bound,'},
  {id: "310", body:'Said: “Master, what is this which now I hear?'},
  {id: "311", body:'What folk is this, which seems by pain so vanquished?”'},
  {id: "312", body:'And he to me: “This miserable mode'},
  {id: "313", body:'Maintain the melancholy souls of those'},
  {id: "314", body:'Who lived withouten infamy or praise.'},
  {id: "315", body:'Commingled are they with that caitiff choir'},
  {id: "316", body:'Of Angels, who have not rebellious been,'},
  {id: "317", body:'Nor faithful were to God, but were for self.'},
  {id: "318", body:'The heavens expelled them, not to be less fair;'},
  {id: "319", body:'Nor them the nethermore abyss receives,'},
  {id: "320", body:'For glory none the damned would have from them.”'},
  {id: "321", body:'And I: “O Master, what so grievous is'},
  {id: "322", body:'To these, that maketh them lament so sore?”'},
  {id: "323", body:'He answered: “I will tell thee very briefly.'},
  {id: "324", body:'These have no longer any hope of death;'},
  {id: "325", body:'And this blind life of theirs is so debased,'},
  {id: "326", body:'They envious are of every other fate.'},
  {id: "327", body:'No fame of them the world permits to be;'},
  {id: "328", body:'Misericord and Justice both disdain them.'},
  {id: "329", body:'Let us not speak of them, but look, and pass.”'},
  {id: "330", body:'And I, who looked again, beheld a banner,'},
  {id: "331", body:'Which, whirling round, ran on so rapidly,'},
  {id: "332", body:'That of all pause it seemed to me indignant;'},
  {id: "333", body:'And after it there came so long a train'},
  {id: "334", body:'Of people, that I ne’er would have believed'},
  {id: "335", body:'That ever Death so many had undone.'},
  {id: "336", body:'When some among them I had recognised,'},
  {id: "337", body:'I looked, and I beheld the shade of him'},
  {id: "338", body:'Who made through cowardice the great refusal.'},
  {id: "339", body:'Forthwith I comprehended, and was certain,'},
  {id: "340", body:'That this the sect was of the caitiff wretches'},
  {id: "341", body:'Hateful to God and to his enemies.'},
  {id: "342", body:'These miscreants, who never were alive,'},
  {id: "343", body:'Were naked, and were stung exceedingly'},
  {id: "344", body:'By gadflies and by hornets that were there.'},
  {id: "345", body:'These did their faces irrigate with blood,'},
  {id: "346", body:'Which, with their tears commingled, at their feet'},
  {id: "347", body:'By the disgusting worms was gathered up.'},
  {id: "348", body:'And when to gazing farther I betook me.'},
  {id: "349", body:'People I saw on a great river’s bank;'},
  {id: "350", body:'Whence said I: “Master, now vouchsafe to me,'},
  {id: "351", body:'That I may know who these are, and what law'},
  {id: "352", body:'Makes them appear so ready to pass over,'},
  {id: "353", body:'As I discern athwart the dusky light.”'},
  {id: "354", body:'And he to me: “These things shall all be known'},
  {id: "355", body:'To thee, as soon as we our footsteps stay'},
  {id: "356", body:'Upon the dismal shore of Acheron.”'},
  {id: "357", body:'Then with mine eyes ashamed and downward cast,'},
  {id: "358", body:'Fearing my words might irksome be to him,'},
  {id: "359", body:'From speech refrained I till we reached the river.'},
  {id: "360", body:'And lo! towards us coming in a boat'},
  {id: "361", body:'An old man, hoary with the hair of eld,'},
  {id: "362", body:'Crying: “Woe unto you, ye souls depraved!'},
  {id: "363", body:'Hope nevermore to look upon the heavens;'},
  {id: "364", body:'I come to lead you to the other shore,'},
  {id: "365", body:'To the eternal shades in heat and frost.'},
  {id: "366", body:'And thou, that yonder standest, living soul,'},
  {id: "367", body:'Withdraw thee from these people, who are dead!”'},
  {id: "368", body:'But when he saw that I did not withdraw,'},
  {id: "369", body:'He said: “By other ways, by other ports'},
  {id: "370", body:'Thou to the shore shalt come, not here, for passage;'},
  {id: "371", body:'A lighter vessel needs must carry thee.”'},
  {id: "372", body:'And unto him the Guide: “Vex thee not, Charon;'},
  {id: "373", body:'It is so willed there where is power to do'},
  {id: "374", body:'That which is willed; and farther question not.”'},
  {id: "375", body:'Thereat were quieted the fleecy cheeks'},
  {id: "376", body:'Of him the ferryman of the livid fen,'},
  {id: "377", body:'Who round about his eyes had wheels of flame.'},
  {id: "378", body:'But all those souls who weary were and naked'},
  {id: "379", body:'Their colour changed and gnashed their teeth together,'},
  {id: "380", body:'As soon as they had heard those cruel words.'},
  {id: "381", body:'God they blasphemed and their progenitors,'},
  {id: "382", body:'The human race, the place, the time, the seed'},
  {id: "383", body:'Of their engendering and of their birth!'},
  {id: "384", body:'Thereafter all together they drew back,'},
  {id: "385", body:'Bitterly weeping, to the accursed shore,'},
  {id: "386", body:'Which waiteth every man who fears not God.'},
  {id: "387", body:'Charon the demon, with the eyes of glede,'},
  {id: "388", body:'Beckoning to them, collects them all together,'},
  {id: "389", body:'Beats with his oar whoever lags behind.'},
  {id: "390", body:'As in the autumn-time the leaves fall off,'},
  {id: "391", body:'First one and then another, till the branch'},
  {id: "392", body:'Unto the earth surrenders all its spoils;'},
  {id: "393", body:'In similar wise the evil seed of Adam'},
  {id: "394", body:'Throw themselves from that margin one by one,'},
  {id: "395", body:'At signals, as a bird unto its lure.'},
  {id: "396", body:'So they depart across the dusky wave,'},
  {id: "397", body:'And ere upon the other side they land,'},
  {id: "398", body:'Again on this side a new troop assembles.'},
  {id: "399", body:'“My son,” the courteous Master said to me,'},
  {id: "400", body:'“All those who perish in the wrath of God'},
  {id: "401", body:'Here meet together out of every land;'},
  {id: "402", body:'And ready are they to pass o’er the river,'},
  {id: "403", body:'Because celestial Justice spurs them on,'},
  {id: "404", body:'So that their fear is turned into desire.'},
  {id: "405", body:'This way there never passes a good soul;'},
  {id: "406", body:'And hence if Charon doth complain of thee,'},
  {id: "407", body:'Well mayst thou know now what his speech imports.”'},
  {id: "408", body:'This being finished, all the dusk champaign'},
  {id: "409", body:'Trembled so violently, that of that terror'},
  {id: "410", body:'The recollection bathes me still with sweat.'},
  {id: "411", body:'The land of tears gave forth a blast of wind,'},
  {id: "412", body:'And fulminated a vermilion light,'},
  {id: "413", body:'Which overmastered in me every sense,'},
  {id: "414", body:'And as a man whom sleep hath seized I fell.'}
];


let danteIpsumArr2 = danteIpsumArr.slice();
let danteIpsumArr3 = danteIpsumArr.slice();
let danteIpsumArr4 = danteIpsumArr.slice();
let danteIpsumArr5 = danteIpsumArr.slice();
let danteIpsumArr6 = danteIpsumArr.slice();
let danteIpsumArr7 = danteIpsumArr.slice();
let danteIpsumArr8 = danteIpsumArr.slice();
let danteIpsumArr9 = danteIpsumArr.slice();
let danteIpsumArr10 = danteIpsumArr.slice();
let danteIpsumArr11 = danteIpsumArr.slice();
let danteIpsumArr12 = danteIpsumArr.slice();
let danteIpsumArr13 = danteIpsumArr.slice();
let danteIpsumArr14 = danteIpsumArr.slice();
let danteIpsumArr15 = danteIpsumArr.slice();
let danteIpsumArr16 = danteIpsumArr.slice();
let danteIpsumArr17 = danteIpsumArr.slice();
let danteIpsumArr18 = danteIpsumArr.slice();
let danteIpsumArr19 = danteIpsumArr.slice();
let danteIpsumArr20 = danteIpsumArr.slice();

const app = express();

const myMiddleware = (request, response, next) => {
  // do something with request and/or response
  console.log(request.method, request.path);
  next(); // tell express to move to the next middleware function
};

app.use(myMiddleware); // use the myMiddleware for every request to the app
app.use(express.json());

app
.route("/list_passages").get((request,response) => {
  let passageList = danteIpsumArr;

  response.status(200).json(passageList);
});

app
.route("/get_passage/:id").get((request,response) => {
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

  app
  .route("/random_passage_generator/:num")
  .get((request, response) => {
    const num = request.params.num;

    const randomValue = (list) => {
      return list[Math.floor(Math.random() * list.length)]};

  let value = randomValue(danteIpsumArr);
  let value2 = randomValue(danteIpsumArr2);
  let value3 = randomValue(danteIpsumArr3);
  let value4 = randomValue(danteIpsumArr4);
  let value5 = randomValue(danteIpsumArr5);
  let value6 = randomValue(danteIpsumArr6);
  let value7 = randomValue(danteIpsumArr7);
  let value8 = randomValue(danteIpsumArr8);
  let value9 = randomValue(danteIpsumArr9);
  let value10 = randomValue(danteIpsumArr10);
  let value11 = randomValue(danteIpsumArr11);
  let value12 = randomValue(danteIpsumArr12);
  let value13 = randomValue(danteIpsumArr13);
  let value14 = randomValue(danteIpsumArr14);
  let value15 = randomValue(danteIpsumArr15);
  let value16 = randomValue(danteIpsumArr16);
  let value17 = randomValue(danteIpsumArr17);
  let value18 = randomValue(danteIpsumArr18);
  let value19 = randomValue(danteIpsumArr19);
  let value20 = randomValue(danteIpsumArr20);

  let genRandomPassage = value.body;

  let genRandomPassage5 = `${value.body} ${value2.body} ${value3.body} ${value4.body} ${value5.body}`;

  let genRandomPassage10 = `${value.body} ${value2.body} ${value3.body} ${value4.body} ${value5.body} ${value6.body} ${value7.body} ${value8.body} ${value9.body} ${value10.body}`;

  let genRandomPassage15 = `${value.body} ${value2.body} ${value3.body} ${value4.body} ${value5.body} ${value6.body} ${value7.body} ${value8.body} ${value9.body} ${value10.body} ${value11.body} ${value12.body} ${value13.body} ${value14.body} ${value15.body}`;

  let genRandomPassage20 = `${value.body} ${value2.body} ${value3.body} ${value4.body} ${value5.body} ${value6.body} ${value7.body} ${value8.body} ${value9.body} ${value10.body} ${value11.body} ${value12.body} ${value13.body} ${value14.body} ${value15.body} ${value16.body} ${value17.body} ${value18.body} ${value19.body} ${value20.body}`;

  if (num === "1") {
  response.status(200).json({genRandomPassage});
  }else if (num === "5") {
    response.status(200).json({genRandomPassage5});
    }else if (num === "10") {
      response.status(200).json({genRandomPassage10});
      }else if (num === "15") {
        response.status(200).json({genRandomPassage15});
        }else if (num === "20"){
          response.status(200).json({genRandomPassage20});
        } else {
          response.status(404).json("Something Went Wrong");
        }
});

app.route("/**").get((request, response) => {
  response.status(404).json({ message: "Not Found" });
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
