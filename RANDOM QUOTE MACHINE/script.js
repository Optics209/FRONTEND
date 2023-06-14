window.onload = load;

function load() {
  $("#tweet-quote").click(function () {});
  $("#like-quote").click(function () {});
  $("#dislike-quote").click(function () {});
  $("#new-quote").click(function () {
    randomQuoteSel();
  });
  randomQuoteSel();
}

var colors = [
  "#D42A2A",
  "#D47F2A",
  "#D4D42A",
  "#7FD42A",
  "#2AD42A",
  "#2AD47F",
  "#2AD4D4",
  "#2A7FD4",
  "#2A2AD4",
  "#7F2AD4",
  "#D42AD4",
  "#551010",
  "#105510",
  "#105555",
  "#551055",
  "#103355",
  "#2828FF",
  "#FF2893",
  "#28FF93",
  "#FFFF28"
];

function randomQuoteSel() {
  var listOfQuotes = [
    {
      id: 1,
      text:
        "I love you the more in that I believe you had liked me for my own sake and for nothing else",
      author: "John Keats"
    },
    {
      id: 2,
      text:
        "But man is not made for defeat. A man can be destroyed but not defeated.",
      author: "Ernest Hemingway"
    },
    {
      id: 3,
      text:
        "When you reach the end of your rope, tie a knot in it and hang on.",
      author: " Franklin D. Roosevelt"
    },
    {
      id: 4,
      text:
        "If I had a flower for every time I thought of you...I could walk through my garden forever.",
      author: "A. A. Milne"
    },
    {
      id: 5,
      text: "There is nothing permanent except change.",
      author: "Heraclitus"
    },
    {
      id: 6,
      text: "You cannot shake hands with a clenched fist.",
      author: "Indira Gandhi"
    },
    {
      id: 7,
      text:
        "Let us sacrifice our today so that our children can have a better tomorrow.",
      author: "A. P. J. Abdul Kalam"
    },
    {
      id: 8,
      text: "It is better to be feared than loved, if you cannot be both.",
      author: "Niccolo Machiavelli"
    },
    {
      id: 9,
      text:
        "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.",
      author: "Amelia Earhart"
    },
    {
      id: 10,
      text:
        "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.",
      author: "Henry James"
    },
    {
      id: 11,
      text: "Learning never exhausts the mind.",
      author: "Leonardo da Vinci"
    },
    {
      id: 12,
      text: "There is no charm equal to tenderness of heart.",
      author: "Jane Austen"
    },
    {
      id: 13,
      text: "All that we see or seem is but a dream within a dream.",
      author: "Edgar Allan Poe"
    },
    {
      id: 14,
      text:
        "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.",
      author: "Francis of Assisi"
    },
    {
      id: 15,
      text: "The only journey is the one within.",
      author: "Rainer Maria Rilke"
    },
    {
      id: 16,
      text:
        "Good judgment comes from experience, and a lot of that comes from bad judgment.",
      author: "Will Rogers"
    },
    {
      id: 17,
      text:
        "Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.",
      author: "William Blake"
    },
    {
      id: 18,
      text: "Life without love is like a tree without blossoms or fruit.",
      author: "Khalil Gibran"
    },
    {
      id: 19,
      text: "No act of kindness, no matter how small, is ever wasted.",
      author: "Aesop"
    },
    {
      id: 20,
      text:
        "Love cures people - both the ones who give it and the ones who receive it.",
      author: "Karl A. Menninger"
    },
    {
      id: 21,
      text:
        "Work like you don't need the money. Love like you've never been hurt. Dance like nobody's watching.",
      author: "Satchel Paige"
    },
    {
      id: 22,
      text: "It is far better to be alone, than to be in bad company.",
      author: "George Washington"
    },
    {
      id: 23,
      text: "I don’t have dreams, I have goals.",
      author: "Harvey Specter"
    },
    {
      id: 24,
      text:
        "Ever loved someone so much, you would do anything for them? Yeah, well make that someone yourself and do whatever the hell you want.",
      author: "Harvey Specter"
    },
    {
      id: 25,
      text: "Anyone can do my job, but no one can be me.",
      author: "Harvey Specter"
    },
    {
      id: 26,
      text: "It’s going to happen, because I am going to make it happen.",
      author: "Harvey Specter"
    },
    {
      id: 27,
      text: "Win a no win situation by rewriting the rules.",
      author: "Harvey Specter"
    },
    { id: 28, text: "Winners don’t make excuses.", author: "Harvey Specter" },
    {
      id: 29,
      text: "Winners don’t make excuses when the other side plays the game.",
      author: "Harvey Specter"
    },
    {
      id: 30,
      text:
        "When you’re backed against the wall, break the goddamn thing down.",
      author: "Harvey Specter"
    },
    {
      id: 31,
      text:
        "People respond to how we’re dressed, so like it or not this is what you have to do.",
      author: "Harvey Specter"
    },
    {
      id: 32,
      text: "Work until you no longer have to introduce yourself.",
      author: "Harvey Specter"
    },
    {
      id: 33,
      text: "Life has two rules: 1. Never quit. 2. Always remember rule #1.",
      author: "Harvey Specter"
    },
    {
      id: 34,
      text: "I don’t get lucky. I make my own luck.",
      author: "Harvey Specter"
    },
    {
      id: 35,
      text:
        "97% of people who gave up are employed by the 3% who never gave up.",
      author: "Harvey Specter"
    },
    { id: 36, text: "Life is a game. Play to win.", author: "Harvey Specter" },
    {
      id: 37,
      text:
        "What are your choices when someone puts a gun to your head? You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty-six other things.",
      author: "Harvey Specter"
    },
    {
      id: 38,
      text:
        "Never give up on something that you can’t go a day without thinking about.",
      author: "Harvey Specter"
    },
    {
      id: 39,
      text: "Whoever is trying to bring you down is already below you.",
      author: "Harvey Specter"
    },
    {
      id: 40,
      text:
        "Success is like being pregnant, everyone says congratulations but nobody knows how many times you were fucked.",
      author: "Harvey Specter"
    },
    {
      id: 41,
      text:
        "Don’t waste your time with explanations. People only hear what they want to hear.",
      author: "Harvey Specter"
    },
    {
      id: 42,
      text: "According to me’ is the only ‘according to’ that matters.",
      author: "Harvey Specter"
    },
    {
      id: 43,
      text: "I’m working on myself, for myself, by myself.",
      author: "Harvey Specter"
    },
    {
      id: 44,
      text:
        "Time is free, but it’s priceless. You can’t own it, but you can use it. You can’t keep it, but you can spend it. Once you’ve lost it, you can never get it back.",
      author: "Harvey Specter"
    },
    {
      id: 45,
      text:
        "You’d be surprised what people you trust would do when someone puts them in a position where they think they don’t have a choice.",
      author: "Harvey Specter"
    },
    {
      id: 46,
      text: "Sometimes good guys gotta do bad things to make the bad guys pay.",
      author: "Harvey Specter"
    },
    {
      id: 47,
      text:
        "I cant blame you for being who you are, I can only blame myself for thinking you were different.",
      author: "Unknown"
    },
    {
      id: 48,
      text: "The struggles of a man begin at birth.",
      author: "The Gods are not to Blame"
    },
    {
      id: 49,
      text:
        "The future is not happy, but to resign oneself to it is to be crippled fast.",
      author: "The Gods are not to Blame"
    },
    {
      id: 50,
      text: "Joy has a slender body that breaks too soon.",
      author: "The Gods are not to Blame"
    },
    {
      id: 51,
      text:
        "When chameleon brings forth a child, is not that child expected to dance?",
      author: "The Gods are not to Blame"
    },
    {
      id: 52,
      text: "When rain falls on the leopard, does it wash off its spots?",
      author: "The Gods are not to Blame"
    },
    {
      id: 53,
      text: "The moon moves slowly but by daybreak, it crosses the sky",
      author: "The Gods are not to Blame"
    },
    {
      id: 54,
      text:
        "By trying often, the monkey learns to jump from tree to tree without falling. Keep on trying.",
      author: "The Gods are not to Blame"
    },
    {
      id: 55,
      text:
        "The horns cannot be too heavy for the head of the cow that must bear them.",
      author: "The Gods are not to Blame"
    },
    {
      id: 56,
      text:
        "Until the rotten tooth is pulled out, the mouth must chew with caution.",
      author: "The Gods are not to Blame"
    },
    {
      id: 57,
      text:
        "A chicken eats corn, drinks water, swallows pebbles, yet she complains of having no teeth. If she had teeth, would she eat gold? Let her ask the cow who has teeth yet eat grass.",
      author: "The Gods are not to Blame"
    },
    {
      id: 58,
      text:
        "The hyena flirts with the hen, the hen is happy, not knowing that her death has come.",
      author: "The Gods are not to Blame"
    },
    {
      id: 59,
      text:
        "Two rams cannot drink from the same bucket at the same time. They will lock horns.",
      author: "The Gods are not to Blame"
    },
    {
      id: 60,
      text:
        " If our expectations, if our fondest prayers and dreams, are not realized then we should all bear in mind that the greatest glory of living lies not in never falling but in rising every time you fall.",
      author: "Nelson Mandela"
    },
    {
      id: 61,
      text: "Honesta turpitudo est pro causa bona",
      author: "Pubililius Syrus"
    },
    {
      id: 62,
      text:
        "La vida es como una caja de Bombones, nunca sabes lo que te puede tocar",
      author: "Forrest Gump"
    },
    {
      id: 63,
      text: "Nunca, no dejes nunca de SOÑAR, sólo quien sueña aprende a VOLAR",
      author: "Unknown"
    },
    {
      id: 64,
      text: "Not until we are lost do we begin to find ourselves",
      author: "Henry Miller"
    },
    {
      id: 65,
      text: "Existence is a school and Allah is the only teacher",
      author: "Unknown"
    },
    {
      id: 66,
      text:
        "Let everything happen naturally, what will flow will flow and what crashes crashes",
      author: "unknown"
    },
    {
      id: 67,
      text:
        "You can't always get what you want, but if you try sometimes you get what you need",
      author: "Unknown"
    },
    {
      id: 68,
      text: "Pain is inevitable suffering is optional.",
      author: "African"
    },
    {
      id: 69,
      text: "A butterfly thinks itself a bird because it can fly",
      author: "African"
    },
    { id: 70, text: "Every head has its own headache", author: "Chinese" },
    {
      id: 71,
      text:
        "Even if you dance for you enemy on the rock, he will accuse you of splashing water on him.",
      author: "African"
    },
    {
      id: 72,
      text:
        "Enjoy breakfast all alone, share lunch with your best friend and give dinner to your enemy.",
      author: "African"
    },
    {
      id: 73,
      text: "If you want to know the end, look at the beginning.",
      author: "African"
    },
    {
      id: 74,
      text:
        "Knowledge is a garden. If it isn’t cultivated, you can’t harvest it.",
      author: "African"
    },
    {
      id: 75,
      text: "Do not look where you feel. Look where you slipped.",
      author: "African"
    },
    {
      id: 76,
      text: "When two elephants fight, it is the grass that gets hurt.",
      author: "African"
    },
    {
      id: 77,
      text: "Tomorrow belongs to people who prepare for it today.",
      author: "African"
    },
    {
      id: 78,
      text: "No medicine exists that can cure hatred.",
      author: "African"
    },
    {
      id: 79,
      text:
        "He who digs a grave for his enemy might as well be digging one for himself.",
      author: "African"
    },
    {
      id: 80,
      text: "However long the night, the dawn will break.",
      author: "African"
    },
    {
      id: 81,
      text: "The axe forgets but the tree remembers.",
      author: "African"
    },
    {
      id: 81,
      text: "Once you carry your own water, you’ll remember every drop.",
      author: "African"
    },
    {
      id: 82,
      text:
        "No matter how beautiful and well crafted a coffin might look, it will not make anyone wish for death.",
      author: "African"
    },
    {
      id: 83,
      text: "Wood already touched by fire is not hard to set alight.",
      author: "African"
    },
    {
      id: 84,
      text: "Having a good discussion is like having riches.",
      author: "African"
    },
    {
      id: 85,
      text:
        "Don’t think there are no crocodiles just because the water is calm.",
      author: "African"
    },
    {
      id: 86,
      text: "He who refuses to obey cannot command.",
      author: "African"
    },
    {
      id: 87,
      text:
        "If you think you’re too small to make a difference, try spending the night with a mosquito.",
      author: "African"
    },
    {
      id: 88,
      text: "The eye never forgets what the heart has seen.",
      author: "African"
    },
    {
      id: 89,
      text: "When an old man dies, a library is burned with him.",
      author: "African"
    },
    {
      id: 90,
      text: "Truth should be in love and love in truth.",
      author: "African"
    },
    {
      id: 91,
      text: "If love is a sickness, patience is the remedy.",
      author: "African"
    },
    {
      id: 92,
      text:
        "Even as the archer loves the arrow that flies, so too he loves the bow that remains constant in his hands.",
      author: "African"
    },
    {
      id: 93,
      text:
        "In the moment of crisis, the wise build bridges, and the foolish build dams.",
      author: "African"
    },
    {
      id: 94,
      text: "One who causes others misfortune also teaches them wisdom.",
      author: "African"
    },
    {
      id: 95,
      text: "If you cannot do great things, do small things in a great way.",
      author: "Napoleon Hill"
    },
    {
      id: 96,
      text:
        "Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.",
      author: "Thomas Carlyle"
    },
    { id: 97, text: "Independence is happiness.", author: "Susan B. Anthony" },
    {
      id: 98,
      text: "The supreme art of war is to subdue the enemy without fighting.",
      author: "Sun Tzu"
    },
    {
      id: 99,
      text:
        "Keep your face always toward the sunshine - and shadows will fall behind you.",
      author: "Walt Whitman"
    },
    {
      id: 100,
      text: "It’s easier to put on slippers than to carpet the whole world.",
      author: "Al Franken"
    },
    {
      id: 101,
      text: "Be yourself; everyone else is already taken.",
      author: " Oscar Wilde"
    },
    {
      id: 102,
      text:
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
      author: "Marilyn Monroe"
    },
    {
      id: 103,
      text:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein"
    },
    {
      id: 104,
      text: "A room without books is like a body without a soul.",
      author: "Marcus Tullius Cicero"
    },
    {
      id: 105,
      text:
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      author: "Bernard M. Baruch"
    },
    {
      id: 106,
      text:
        "You've gotta dance like there's nobody watching, Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.",
      author: "William W. Purkey"
    },
    {
      id: 107,
      text:
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      author: "Dr. Seuss"
    },
    {
      id: 108,
      text: "You only live once, but if you do it right, once is enough.",
      author: "Mae West"
    },
    {
      id: 109,
      text: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      id: 110,
      text:
        "When counting your blessings count your losses too, they are were the hurdles you had to overcome to attain your goals",
      author: "Nana Okyere Kwagyan"
    },
    {
      id: 111,
      text:
        "Just be yourself, laugh hard, forgive easily and breathe. Life is too short to waste it on negative emotions",
      author: "Nana Okyere Kwagyan"
    }
  ];

  var randomQuote = listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)];
  $("#text").html(randomQuote.text);
  $("#author").html(randomQuote.author);
  $("#tweet-quote").attr("href", stringToClickToTweetURL('"' + randomQuote.text + '" - ' + randomQuote.author));
  
  var color = Math.floor(Math.random() * colors.length);
  $("html body").animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    1000
  );
  $(".clickables").animate(
    {
      backgroundColor: colors[color]
    },
    1000
  );
}

function stringToClickToTweetURL(str) {
  var stringToConvert = str
    .split(" ")
    .join("%20")
    .split("@")
    .join("%40")
    .split("!")
    .join("%21");

  var finalString = "https://twitter.com/intent/tweet?text=" + stringToConvert;
  return finalString;
}


function openURL(url) {
  window.open(
    url,
    "Share",
    "width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0"
  );
}

// Incomplete code for Like and Dislike button
function likeQuoteOnClick (){
  if (counter.innerHTML % 3 === 0){
    text[index].likeQuote = counter.innerHTML++;
  } else {
    text[index].likeQuote = counter.innerHTML--;
  }
}

function getQuote() {}
