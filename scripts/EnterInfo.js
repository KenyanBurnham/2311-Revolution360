function enterInfo(){
      let letterValue = "I am writing to you as a proud member of the following organization: Greenpeace USA, PETA, and the Rainforest Action Network. I am very concerned about the environment, and quite frankly the EXXON Mobil Corporation (which includes yourself) is one of the biggest detriments to the environment. Not only does EXXON pollute the air with toxic oils and gasses, but also attempts to replace nature with landing platforms, oil rigs, and yes gas stations (aesthetic pollution). It’s gotten so bad that I can literally feel the polluted air eating away at my fur coat and leather boots. On top of that, your unforgivable gas prices mean that I can’t even drive out of State in my vehicle  (Tan Volkswagen 1967 Bus). Although I write to you from California, I am just as passionate about this cause and I won’t stop until something is done.";
      let cname = "EXXON Mobil Corporation";
      let pname = "Rain";
      let cEmail = "steve@exxonmobile.com";
      let companyEmail = document.getElementById("companyEmail");
      let companyName = document.getElementById("companyName");
      let letter = document.getElementById("letter");
      let yourName = document.getElementById("yourName");
      companyEmail.value = cEmail;
      companyName.value = cname;
      letter.value = letterValue;
      yourName.value = pname;
}
