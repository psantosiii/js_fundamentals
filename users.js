users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]

function userLanguage(input){
    for(var i = 0; i < input.length;i++){
        console.log(input[0].fname +" "+ input[0].lname + " knows "+input[0].languages);
        console.log(input[0].fname +" is also interested in " + input[0].interests.music + " "+ input[0].interests.dance +" "+ input[0].interests.television + ".");
        console.log(input[1].fname +" "+ input[1].lname + " knows "+input[1].languages);
        console.log(input[1].fname +" is also interested in " + input[1].interests.food + " "+ input[1].interests.flowers +" "+ input[1].interests.mysteries + ".");
        console.log(input[2].fname +" "+ input[2].lname + " knows "+input[2].languages);
        console.log(input[2].fname +" is also interested in " + input[2].interests.space + " "+ input[2].interests.home + ".");
        
    }

}
userLanguage(users);