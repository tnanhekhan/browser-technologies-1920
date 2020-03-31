# Browser Technologies
## Opdracht 1.2 - Fork je OBA
Ik heb de OBA app getest van project 1. Hier is een link naar de live-versie:  
https://tnanhekhan.github.io/project-1-1920/ 

### Features
#### Afbeeldingen Uitzetten
Geen achtergrond wordt getoond, dat is een image. De buttons zijn geen images en die worden prima getoond. SVG Loading spinner wordt niet getoond, alleen een no image icon zichtbaar. Images van de api wordt niet ingeladen en de achtergronden van de boeken worden niet ingeladen. Op de boeken detail page wordt de cover niet ingeladen.

Fix: Alt text gebruiken.
#### Custom fonts Uitzetten
Geen verschil. Alles werkt naar behoren zonder custom fonts. Dit komt waarschijnlijk doordat de font is ingeladen via de html

#### Kleur Uitzetten
High contrast extension invert alle kleuren. Alle elementen zijn wel zichtbaar, alleen dus niet volgens het design zoals het bedoeld is.

Fix: Gebruik kleuren die in high-contrast mode er nog goed uit ziet.

#### Muis / Trackpad werkt niet
Tab werkt op de buttons van het groep scherm maar op het scherm daarna werkt het niet meer. Op het onderwerp scherm werkt de tab gewoon nog. Op de boekenlijst scherm werkt tab alleen voor de individuele boeken en het input field. Input field + enter werkt ook. Restart button en meer boeken button zijn niet selectable met tab. In het detail scherm is de back button ook niet selectable. Geselecteerde items alleen duidelijk door default browser blauwe outline, fix dit met een focus in css samen met hover.

Fix: Unselectable items wrappen in een link element of een andere vorm van semantische html.
#### Breedband internet uitzetten
Op een trage verbinding duurt het langer om alle images van de boeken in te laden. 

Fix: User feedback door bijvoorbeeld een message of een loading spinner voor de images die moeten worden ingeladen.

#### Javascript uitzetten
Zonder javascript werkt de hele site niet meer. Alle data en views worden ingeladen door middel van javascript. Data kan ook niet opgehaald worden van de api zonder javascript.

Fix: User feedback geven dat Javascript aan moet staan om de site te gebruiken
#### Cookies / Local storage uitzetten
Geen gebruik gemaakt van cookies en local storage. 
### Devices & Browsers
#### Devices
##### Samsung Galaxy S9
Mozilla 5.0 (Linux; Android 10; SM-G960F) AppleWebkit/537.36(KHTML, like Gecko) Chrome/80.0.3987.132
Mobile Safari/537.36  

Beginscherm met modal werkt. Content van de modal is links ipv gecentreerd. Bij onbekend onderwerp is de modal van de knoppen niet geheel doorheen te scrollen. Eindigt bijvoorbeeld maar muziek maar is cut-off door het scherm zodat het lijkt alsof er meer data is als je verder scrolt terwijl de onderkant van de pagina eigenlijk al bereikt is.  
Input veld van ander onderwerp zoeken is helemaal platgedrukt door de restart button. Hoogstens twee characters worden getoond in de input wat het lastig maakt. Results van boeken zijn goed in een column onder elkaar, kon misschien zelfs wel twee columns van maken.   
Detail page toont niet goed. Boek cover is enorm opgeblazen en detail text wordt als het ware door de cover van het scherm afgeduwd wat ervoor zorgt dat je horizontaal moet scrollen om het te zien te krijgen.  
In principe werkt alles alleen kan de layout wat meer responsive gemaakt worden.  
##### Playstation 4
Mozilla/5.0(PlayStation 4 7.02) AppleWebKit 605/115 (KHTML, like Gecko)

Werkt hetzelfde als de desktop versie. Klikken op input velden toont het native playstation soft keyboard en css hovers werken met de custom cursor van playstation die met de joystick wordt bestuurd. Omdat de resolutie / aspect ratio gewoon 1080p / 16:9 is geen problemen gehad met layouts en schaling. Scrollen door boeken heen is echter vrij traag.  
##### Ipad Air 
Mozilla / 5.0 (iPad; CPU OS 12_4_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1

Font lijkt compleet anders op de iPad andere platformen (Aliasing?). Styling van input field is anders, er is een rand zichtbaar om de input en de button ernaast. Detail items lijken iets te lang. Detail page ziet er prima uit. Raar overscroll effect dat een witte achtergrond toont onder/boven de huidige achtergrond.
#### Browsers
##### Chrome
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36  

Project is ontwikkeld op deze browser, dus alles werkt naar behoren.
##### Firefox
Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0  

Lijkt  veel op de chrome versie. Font lijkt iets dunner, komt waarschijnlijk door aliasing. Verder geen verschillen opgemerkt met de chrome versie. Alles functioneert naar behoren.
##### Edge
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18363

Font lijkt net als firefox iets dunner dan de chrome versie. Inputs hebben een x button als er iets is ingevuld. Deze button verwijdert dan wat er in de input staat, handig. Scrollen voelt iets vloeiender dan chrome en firefox. Alles functioneert net als firefox naar behoren. Geen kapotte features of layout.

### Screenreader 
Gebruikte Screenreader is ChromeVox Classic voor Google Chrome  

Screenreader werkt niet voor de images van boeken. Daar wordt de link van de image of iets dergelijks opgenoemd. Dit kan te fixen zijn met alt text voor de images van boeken. In de input field wordt alleen de laatste getypte character opgenoemd in plaats van de hele query.
