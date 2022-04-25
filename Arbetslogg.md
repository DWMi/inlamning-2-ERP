# inlamning2
inlämningsuppgift 2  ARBETSLOGG


Dag 1:
Jag har valt att "sälja" fiskeprodukter. Det blev 3 variabla produkter och 1 enkel produkt samt 1 nedladdningsbar produkt som är en E-bok.
Så hittils har jag bara laddat upp produkter, dessutom laddat ner några bilder på produkter för att spara tid så tog jag bara ner 1 bild på per produkt.
Sedan skapada jag en excel fil för att förvara all produktinformation. Sedan skapade jag en barntema till storefront att utgå från.

Dag 2:Jag började med att hård koda några divar till externa api applikationen. Jag valde JS fetch men stötte på problem ganska tidigt med 401 error.

Dag 3:Jag valt att min plugin ska ta bort meddelandet i mitt konto som står något med " Är du inte medie-admin __ logga ut" och har lagt till Welcome🙂 istället.
Sedan så i functions.php så har jag valt att ta bort sidebaren och istället lägga till massa -> 🎣.
Som template override så valde jag bara att lägga till 🎣 i  tack meddelandet, i thankyou.php som du kan se. 
Sen så fortsatte jag  med API appliktationen genom att försöka fetcha bloggen så länge medan jag väntar på en lösning till javascript fetch problemet. 

Det började ganska bra tills att jag märkte att bilderna inte finns i posts url som jag fetchade.
Då försökte jag att göra 2 funktioner med varsin fetch. Men de slutade med att de kraschade med varandra, då jag också har renderat ut divar dynamiskt med javascript istället för att hårdkoda det.
Istället då så tog jag bort den andra funktionen och fetchade media url bara. Sedan gick jag till wordpress/media och gick in i bilderna och sedan la till blogginläggens länk i alt-text i bilden och ändrade bild titeln till samma namn som blogg inläggens titel. På det viset så kunde jag få ut alla 3 information(blog titel, blogginlägg länk och bilderna) som jag behövde i samma json objekt utan att behöva fetcha 2 olika url.


dag 3.5 satt och listade ut hur man skulle kombinera med curlm men gav upp på det temporärt, körde lokalt fetch istället från json filer som jag hade sparat från postman.
Sedan började jag styla produktsidan.


dag 4 Fortsättning på style och lista ut hur man får kombinerar fetch med curl. Ringde dig men hade fortfarande "unexpected token < at position 0" något sånt minns inte exakt hela error koden.
Sedan började jag styla order sidan och efter halva dagen så lyckades Ange att få ut sina produkter samt ordrar via fetch. Bara att man behövde uppdatera url:en varje gång. Jag trodde bara att det hände ifall man använde cURL men tydligen inte då.
Men även fast jag fick uppdatera länken varje gång så fick jag ändå en unexpected token denna gång så stod det:

 "Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position "17699"
 
 Då började jag googla lite men hittade 0 resultat.

 Sen började jag tänka lite och fundera över varför det funkar för Ange men inte mig? Och började jämnföra koder och hittade inga konstigheter då jag gjorde ett test projekt som bara innehöl ett index.html och logic.js, ingen styling ingenting. i javascripten så fanns det bara en fetch funktion och inget annat.

 Då tänkte jag kan det vara skillnad på vår wordpress projekt? 

 Då kollade jag i jsonfilen vid rad 17699 och där fanns det några varningar något med ob flush minns inte exakt men det stod att det var fel i functions i wp-include eller något sånt minns inte exakt. Men hur som helst så tänkte jag dem error brukar jag bara strunta i för det gör ändå inget då frågade jag Ange om hon också hade dem erroren längst ned i json filen då sa hon nej.

 då tänkte jag hur ska jag få bort dem erroren ? lösa problem?
 Nej eftersom att jag inte är någon expert på php så gick bara till wp-config och stängde av DEBUG. och då försvann error koderna från json filen i postman och då fick jag inte längre Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position "17699" och kunde då fetcha produkterna och rendera ut dem i erp:n.

 dag 5 Eftersom att jag jobar helger så har jag inte hunnit göra så mycket därav så skyndade jag mig med allt för att få alla funktioner klara vilket jag hann med.

 dag 6 Nu har jag bara suttit och finjusterat och även bytt URL till "http://localhost:3000/wp-json/wp/v2/posts?_embed" i bloginlägg fetchen. Där hittar jag en bild url som jag kunde ta samt titel. Det kändes bättre än att behöva hårdkoda in länken och titeln in bilden i wordpress och använda media urlen.

 Dag 7 Idag så har jag gjort lite fin justeringar och även bytt till att min plugin tar bort bara sidebaren och säger inte längre "welcome 🙂", och att min template override tar bort "delsumman" i varukorgen istället för tack meddelandet 🎣. 