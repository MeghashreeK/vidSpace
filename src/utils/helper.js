var nameList = [
    "Raj", "Mohan",
    "Ashwini", "Ashwin",
    "Carolyn", "Roshni",
    "Albert", "Janahvi",
    "Jay", "Vaishali",
    "Lakshmi", "Banaras",
    "Rohan", "Karan",
    "Anam", "Meghashree",
    "Chumki", "Rishabh",
    "Adithya", "Sharanya",
    "Deeksha", "Ammanuvel",
    "Vaishnav", "Thejaswini",
    "Prakash", "Joel",
    "Shirley","Rajveer",
    "Rachel","Sahil",
    "Christopher","Daddysprince",
    "Thomas","ksjisis",
    "Sara","zxdsxs",
    "Chris","Bailey",
    "BMW","Johnson",
    "Cuteboy","ssxsuxh",
    "Romeo","Evans",
    "Julie","Kaustubh",
    "Abhishek","Shamprasad",
    "Nawaz","Pratham",
    "Joe","Murphy",
    "Revathi","Mayuresh"
];

var stringList =[
    "wowww supeerbbb!!",
    "hurray",
    "nice",
    "hello friends",
    "am new here!",
    "amazing man!",
    "good",
    "fantastic!",
    "woww",
    "ok",
    "hello",
    "keep going",
    "i support you",
    "doing great",
    "yes",
    "nahi",
    "kya baat hai ji",
    "ok ji",
    "hum aapke saath hai",
    "sahi kar rahe hai aap",
    "trhankyou",
    "dhanyawad"
]

var imageList=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjLlJS2C2KD-fRoOykz8e5luqOtFFpGo_QQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhVYnxAbv4DlfgF9g--jkUZhraHWjqqAjkA&s",
    "https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4n9vUNCLmnEJ5pKIl0VUwTPofdPGIXPf2pA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIklL-GYmap-xokS4lryawA56nppQTeX3Ehw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2aIMpOIYZKSLNRQnDOXtna8n7eRumIbYfA&s",
   
    
]


export function generateRandomNames() {
    return nameList[Math.floor(Math.random() * nameList.length)];
};

export function generateRandomStrings() {
    return stringList[Math.floor(Math.random() * stringList.length)];
};

export function generateRandomImage() {
    return imageList[Math.floor(Math.random() * imageList.length)];
};

