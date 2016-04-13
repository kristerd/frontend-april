# frontend-april

For å kjøre prosjektet:

* Installer Node.js 4 (Node 5 virker ikke for øyeblikket)
* Kjør `npm install -g cordova ionic`
* Kjør `npm install`
* Kjør `bower install`
* Kjør `ionic serve`
 
## Appstax setup
* Registrer en gratis prøvekonto på appstax.com
* Legg til API-key i app.js

##Oppgaver

* Bruk Ionic til å stile "Sign in"-knappen lik som på bildet: /img/oppgaver/1.png (http://ionicframework.com/docs/components/)
* Logg inn i Appstax-grensesnittet (https://appstax.com/admin/) og velg "Storage". Videre velger du "users"-collection, og oppretter en bruker (som du skal bruke i neste oppgave) 
* Velg Settings -> Domain -> Your allowed domains - Legg til adressen til det lokale ionic-prosjektet (f.eks http://localhost:8100)
* Implementer logikk for å logge inn med Appstax (controllers.signIn()) - https://appstax.com/docs/javascript-guide.html
* Skjul innloggingskjema når innlogging er ok, og vis brukernavnet til den innloggede brukeren i stedet for "Welcome User!"
* Endre Users collection i Appstax-grensesnittet til å også ha samme felter som i dummy-eksempelet i services.js-filen i prosjektet vårt (https://appstax.com/admin/#/dashboard/overview -> Velg din app -> Storage -> users)
* Endre users-fanen til å hente brukerne fra Appstax
* Lag støtte for å slette personer fra Appstax (services.js - Users.remove())

## Ekstra:
* Kjør appen på telefonen din


##Ionic Cheat sheet  

 * cd into your project: $ cd frontend-april

 * Setup this project to use Sass: ionic setup sass

 * Develop in the browser with live reload: ionic serve

 * Add a platform (ios or Android): ionic platform add ios [android]
   Note: iOS development requires OS X currently
   See the Android Platform Guide for full Android installation instructions:
   https://cordova.apache.org/docs/en/edge/guide_platforms_android_index.md.html

 * Build your app: ionic build <PLATFORM>

 * Simulate your app: ionic emulate <PLATFORM>

 * Run your app on a device: ionic run <PLATFORM>

 * Package an app using Ionic package service: ionic package <MODE> <PLATFORM>
