import { VocabularyItem, LanguageDirection } from '../types';

const initialVocabulary: VocabularyItem[] = [
  // --- ESSENTIAL BASICS (20) ---
  { id: '1', latvian: 'Sveiki', latvianAlt: ['Čau', 'Labdien'], dutch: 'Hallo', english: 'Hello', dutchAlt: ['Hoi', 'Dag'], englishAlt: ['Hi'], category: 'Basics' },
  { id: '2', latvian: 'Paldies', dutch: 'Dank je', english: 'Thank you', dutchAlt: ['Dank je wel', 'Bedankt', 'Dank u', 'Dank u wel'], englishAlt: ['Thanks'], category: 'Basics' },
  { id: '3', latvian: 'Lūdzu', dutch: 'Alsjeblieft', english: 'Please', category: 'Basics' },
  { id: '4', latvian: 'Jā', dutch: 'Ja', english: 'Yes', category: 'Basics' },
  { id: '5', latvian: 'Nē', dutch: 'Nee', english: 'No', category: 'Basics' },
  { id: '6', latvian: 'Es', dutch: 'Ik', english: 'I', category: 'Basics' },
  { id: '7', latvian: 'Tu', dutch: 'Jij', english: 'You', dutchAlt: ['Je'], category: 'Basics' },
  { id: '8', latvian: 'Viņš', dutch: 'Hij', english: 'He', category: 'Basics' },
  { id: '9', latvian: 'Viņa', dutch: 'Zij', english: 'She', dutchAlt: ['Ze'], category: 'Basics' },
  { id: '10', latvian: 'Mēs', dutch: 'Wij', english: 'We', dutchAlt: ['We'], category: 'Basics' },
  { id: '11', latvian: 'Labrīt', dutch: 'Goedemorgen', english: 'Good morning', category: 'Basics' },
  { id: '12', latvian: 'Labdien', dutch: 'Goedemiddag', english: 'Good afternoon', category: 'Basics' },
  { id: '13', latvian: 'Labvakar', dutch: 'Goedenavond', english: 'Good evening', category: 'Basics' },
  { id: '14', latvian: 'Ar labunakti', dutch: 'Welterusten', english: 'Good night', category: 'Basics' },
  { id: '15', latvian: 'Uz redzēšanos', dutch: 'Tot ziens', english: 'Goodbye', englishAlt: ['Bye'], category: 'Basics' },
  { id: '16', latvian: 'Kā iet?', dutch: 'Hoe gaat het?', english: 'How are you?', category: 'Basics' },
  { id: '17', latvian: 'Labi', dutch: 'Goed', latvianAlt: ['Labs'], english: 'Good', category: 'Basics' },
  { id: '18', latvian: 'Slikti', dutch: 'Slecht', latvianAlt: ['Slikts'], english: 'Bad', category: 'Basics' },
  { id: '19', latvian: 'Atvainojiet', latvianAlt: ['Atvainojos', 'Atvaino'], dutch: 'Pardon', english: 'Excuse me', category: 'Basics' },
  { id: '20', latvian: 'Nekas', dutch: 'Geen probleem', english: 'No problem', category: 'Basics' },

  // --- SENTENCES: INTRODUCTIONS (10) ---
  { id: '21', latvian: 'Kā tevi sauc?', dutch: 'Hoe heet je?', english: 'What is your name?', isSentence: true, category: 'Introductions' },
  { id: '22', latvian: 'Mani sauc Anna.', dutch: 'Ik heet Anna.', english: 'My name is Anna.', isSentence: true, category: 'Introductions' },
  { id: '23', latvian: 'Prieks iepazīties.', dutch: 'Leuk je te ontmoeten.', english: 'Nice to meet you.', isSentence: true, category: 'Introductions' },
  { id: '24', latvian: 'No kurienes tu esi?', dutch: 'Waar kom je vandaan?', english: 'Where are you from?', isSentence: true, category: 'Introductions' },
  { id: '25', latvian: 'Es esmu no Latvijas.', dutch: 'Ik kom uit Letland.', english: 'I am from Latvia.', isSentence: true, category: 'Introductions' },
  { id: '26', latvian: 'Es esmu no Nīderlandes.', dutch: 'Ik kom uit Nederland.', english: 'I am from the Netherlands.', isSentence: true, category: 'Introductions' },
  { id: '27', latvian: 'Kur tu dzīvo?', dutch: 'Waar woon je?', english: 'Where do you live?', isSentence: true, category: 'Introductions' },
  { id: '28', latvian: 'Es dzīvoju Rīgā.', dutch: 'Ik woon in Riga.', english: 'I live in Riga.', isSentence: true, category: 'Introductions' },
  { id: '29', latvian: 'Cik tev ir gadu?', dutch: 'Hoe oud ben je?', english: 'How old are you?', isSentence: true, category: 'Introductions' },
  { id: '30', latvian: 'Es runāju nedaudz holandiešu valodā.', dutch: 'Ik spreek een beetje Nederlands.', english: 'I speak a little Dutch.', isSentence: true, category: 'Introductions' },

  // --- SENTENCES: COMMUNICATION PROBLEMS (10) ---
  { id: '31', latvian: 'Vai jūs runājat angliski?', dutch: 'Spreekt u Engels?', english: 'Do you speak English?', isSentence: true, category: 'Communication' },
  { id: '32', latvian: 'Es nesaprotu.', dutch: 'Ik begrijp het niet.', english: 'I don\'t understand.', isSentence: true, category: 'Communication' },
  { id: '33', latvian: 'Es nezinu.', dutch: 'Ik weet het niet.', english: 'I don\'t know.', isSentence: true, category: 'Communication' },
  { id: '34', latvian: 'Lūdzu, runājiet lēnāk.', dutch: 'Spreek langzamer alstublieft.', english: 'Please speak slower.', isSentence: true, category: 'Communication' },
  { id: '35', latvian: 'Ko tas nozīmē?', dutch: 'Wat betekent dat?', english: 'What does that mean?', isSentence: true, category: 'Communication' },
  { id: '36', latvian: 'Vai varat to atkārtot?', dutch: 'Kunt u dat herhalen?', english: 'Can you repeat that?', isSentence: true, category: 'Communication' },
  { id: '37', latvian: 'Lūdzu, uzrakstiet to.', dutch: 'Schrijf het alstublieft op.', english: 'Please write it down.', isSentence: true, category: 'Communication' },
  { id: '38', latvian: 'Kā to pasaka holandiski?', dutch: 'Hoe zeg je dat in het Nederlands?', english: 'How do you say that in Dutch?', isSentence: true, category: 'Communication' },
  { id: '39', latvian: 'Man ir jautājums.', dutch: 'Ik heb een vraag.', english: 'I have a question.', isSentence: true, category: 'Communication' },
  { id: '40', latvian: 'Es mācos valodu.', dutch: 'Ik leer de taal.', english: 'I am learning the language.', isSentence: true, category: 'Communication' },

  // --- SENTENCES: TRAVEL & DIRECTIONS (15) ---
  { id: '41', latvian: 'Kur ir tualete?', dutch: 'Waar is het toilet?', english: 'Where is the toilet?', isSentence: true, category: 'Travel' },
  { id: '42', latvian: 'Es meklēju staciju.', dutch: 'Ik zoek het station.', english: 'I am looking for the station.', isSentence: true, category: 'Travel' },
  { id: '43', latvian: 'Kur ir lidosta?', dutch: 'Waar is de luchthaven?', english: 'Where is the airport?', isSentence: true, category: 'Travel' },
  { id: '44', latvian: 'Cik maksā biļete?', dutch: 'Hoeveel kost een kaartje?', english: 'How much does a ticket cost?', isSentence: true, category: 'Travel' },
  { id: '45', latvian: 'Kad atiet vilciens?', dutch: 'Wanneer vertrekt de trein?', english: 'When does the train leave?', isSentence: true, category: 'Travel' },
  { id: '46', latvian: 'Kur ir viesnīca?', dutch: 'Waar is het hotel?', english: 'Where is the hotel?', isSentence: true, category: 'Travel' },
  { id: '47', latvian: 'Pa labi.', dutch: 'Naar rechts.', english: 'To the right.', isSentence: true, category: 'Travel' },
  { id: '48', latvian: 'Pa kreisi.', dutch: 'Naar links.', english: 'To the left.', isSentence: true, category: 'Travel' },
  { id: '49', latvian: 'Taisni uz priekšu.', dutch: 'Rechtdoor.', english: 'Straight ahead.', isSentence: true, category: 'Travel' },
  { id: '50', latvian: 'Vai tas ir tālu?', dutch: 'Is het ver?', english: 'Is it far?', isSentence: true, category: 'Travel' },
  { id: '51', latvian: 'Apstājieties šeit, lūdzu.', dutch: 'Stop hier, alstublieft.', english: 'Stop here, please.', isSentence: true, category: 'Travel' },
  { id: '52', latvian: 'Es esmu apmaldījies.', dutch: 'Ik ben de weg kwijt.', english: 'I am lost.', isSentence: true, category: 'Travel' },
  { id: '53', latvian: 'Vai jūs varat man palīdzēt?', dutch: 'Kunt u mij helpen?', english: 'Can you help me?', isSentence: true, category: 'Travel' },
  { id: '54', latvian: 'Kur es varu nopirkt biļeti?', dutch: 'Waar kan ik een kaartje kopen?', english: 'Where can I buy a ticket?', isSentence: true, category: 'Travel' },
  { id: '55', latvian: 'Uz centru, lūdzu.', dutch: 'Naar het centrum, alstublieft.', english: 'To the center, please.', isSentence: true, category: 'Travel' },

  // --- SENTENCES: RESTAURANT & FOOD (15) ---
  { id: '56', latvian: 'Es gribētu galdiņu diviem.', dutch: 'Ik wil graag een tafel voor twee.', english: 'I would like a table for two.', isSentence: true, category: 'Food' },
  { id: '57', latvian: 'Vai es varu redzēt ēdienkarti?', dutch: 'Mag ik de menukaart zien?', english: 'Can I see the menu?', isSentence: true, category: 'Food' },
  { id: '58', latvian: 'Es esmu veģetārietis.', dutch: 'Ik ben vegetariër.', english: 'I am a vegetarian.', isSentence: true, category: 'Food' },
  { id: '59', latvian: 'Es gribētu ūdeni.', dutch: 'Ik wil graag water.', english: 'I would like water.', isSentence: true, category: 'Food' },
  { id: '60', latvian: 'Vienu alu, lūdzu.', dutch: 'Een bier, alstublieft.', english: 'One beer, please.', isSentence: true, category: 'Food' },
  { id: '61', latvian: 'Rēķinu, lūdzu.', dutch: 'De rekening, alstublieft.', english: 'The bill, please.', isSentence: true, category: 'Food' },
  { id: '62', latvian: 'Tas bija ļoti garšīgi.', dutch: 'Dat was erg lekker.', english: 'That was very delicious.', isSentence: true, category: 'Food' },
  { id: '63', latvian: 'Labu apetīti.', dutch: 'Eet smakelijk.', english: 'Bon appétit.', isSentence: true, category: 'Food' },
  { id: '64', latvian: 'Es gribētu kafiju.', dutch: 'Ik wil graag koffie.', english: 'I would like coffee.', isSentence: true, category: 'Food' },
  { id: '65', latvian: 'Vai jums ir brokastis?', dutch: 'Heeft u ontbijt?', english: 'Do you have breakfast?', isSentence: true, category: 'Food' },
  { id: '66', latvian: 'Es neēdu gaļu.', dutch: 'Ik eet geen vlees.', english: 'I don\'t eat meat.', isSentence: true, category: 'Food' },
  { id: '67', latvian: 'Cik tas maksā?', dutch: 'Hoeveel kost dat?', english: 'How much does it cost?', isSentence: true, category: 'Food' },
  { id: '68', latvian: 'Vai varu maksāt ar karti?', dutch: 'Kan ik met kaart betalen?', english: 'Can I pay by card?', isSentence: true, category: 'Food' },
  { id: '69', latvian: 'Mēs gribētu pasūtīt.', dutch: 'Wij willen graag bestellen.', english: 'We would like to order.', isSentence: true, category: 'Food' },
  { id: '70', latvian: 'Uz veselību!', dutch: 'Proost!', dutchAlt: ['Gezondheid!'], english: 'Cheers!', englishAlt: ['Bless you!'], isSentence: true, category: 'Food' },

  // --- SENTENCES: SHOPPING (10) ---
  { id: '71', latvian: 'Cikos veikals atveras?', dutch: 'Hoe laat gaat de winkel open?', english: 'What time does the shop open?', isSentence: true, category: 'Shopping' },
  { id: '72', latvian: 'Cikos veikals slēdzas?', dutch: 'Hoe laat sluit de winkel?', english: 'What time does the shop close?', isSentence: true, category: 'Shopping' },
  { id: '73', latvian: 'Es tikai skatos.', dutch: 'Ik ben alleen aan het kijken.', english: 'I am just looking.', isSentence: true, category: 'Shopping' },
  { id: '74', latvian: 'Vai jums ir šis citā krāsā?', dutch: 'Heeft u dit in een andere kleur?', english: 'Do you have this in another color?', isSentence: true, category: 'Shopping' },
  { id: '75', latvian: 'Tas ir pārāk dārgs.', dutch: 'Dat is te duur.', english: 'That is too expensive.', isSentence: true, category: 'Shopping' },
  { id: '76', latvian: 'Es to ņemšu.', dutch: 'Ik neem het.', english: 'I will take it.', isSentence: true, category: 'Shopping' },
  { id: '77', latvian: 'Vai varu to pielaikot?', dutch: 'Kan ik dit passen?', english: 'Can I try it on?', isSentence: true, category: 'Shopping' },
  { id: '78', latvian: 'Kur ir ģērbtuve?', dutch: 'Waar is de paskamer?', english: 'Where is the fitting room?', isSentence: true, category: 'Shopping' },
  { id: '79', latvian: 'Vai jums ir maisiņš?', dutch: 'Heeft u een tasje?', english: 'Do you have a bag?', isSentence: true, category: 'Shopping' },
  { id: '80', latvian: 'Izpārdošana.', dutch: 'Uitverkoop.', english: 'Sale.', isSentence: true, category: 'Shopping' },

  // --- SENTENCES: EMERGENCIES (10) ---
  { id: '81', latvian: 'Palīgā!', dutch: 'Help!', english: 'Help!', isSentence: true, category: 'Emergencies' },
  { id: '82', latvian: 'Izsauciet policiju!', dutch: 'Bel de politie!', english: 'Call the police!', isSentence: true, category: 'Emergencies' },
  { id: '83', latvian: 'Man vajag ārstu.', dutch: 'Ik heb een dokter nodig.', english: 'I need a doctor.', isSentence: true, category: 'Emergencies' },
  { id: '84', latvian: 'Man sāp.', dutch: 'Ik heb pijn.', english: 'I am in pain.', isSentence: true, category: 'Emergencies' },
  { id: '85', latvian: 'Es pazaudēju savu pasi.', dutch: 'Ik ben mijn paspoort kwijt.', english: 'I lost my passport.', isSentence: true, category: 'Emergencies' },
  { id: '86', latvian: 'Es pazaudēju savu telefonu.', dutch: 'Ik ben mijn telefoon kwijt.', english: 'I lost my phone.', isSentence: true, category: 'Emergencies' },
  { id: '87', latvian: 'Uzmanību!', dutch: 'Pas op!', english: 'Watch out!', isSentence: true, category: 'Emergencies' },
  { id: '88', latvian: 'Ugunsgrēks!', dutch: 'Brand!', english: 'Fire!', isSentence: true, category: 'Emergencies' },
  { id: '89', latvian: 'Apstājieties!', dutch: 'Stop!', english: 'Stop!', isSentence: true, category: 'Emergencies' },
  { id: '90', latvian: 'Kur ir slimnīca?', dutch: 'Waar is het ziekenhuis?', english: 'Where is the hospital?', isSentence: true, category: 'Emergencies' },

  // --- SENTENCES: FEELINGS & OPINIONS (15) ---
  { id: '91', latvian: 'Es esmu noguris.', dutch: 'Ik ben moe.', english: 'I am tired.', isSentence: true, category: 'Feelings' },
  { id: '92', latvian: 'Es esmu laimīgs.', dutch: 'Ik ben gelukkig.', english: 'I am happy.', isSentence: true, category: 'Feelings' },
  { id: '93', latvian: 'Man ir garlaicīgi.', dutch: 'Ik verveel me.', english: 'I am bored.', isSentence: true, category: 'Feelings' },
  { id: '94', latvian: 'Man ir auksti.', dutch: 'Ik heb het koud.', english: 'I am cold.', isSentence: true, category: 'Feelings' },
  { id: '95', latvian: 'Man ir karsti.', dutch: 'Ik heb het warm.', english: 'I am hot.', isSentence: true, category: 'Feelings' },
  { id: '96', latvian: 'Es esmu izsalcis.', dutch: 'Ik heb honger.', english: 'I am hungry.', isSentence: true, category: 'Feelings' },
  { id: '97', latvian: 'Es esmu izslāpis.', dutch: 'Ik heb dorst.', english: 'I am thirsty.', isSentence: true, category: 'Feelings' },
  { id: '98', latvian: 'Man tas patīk.', dutch: 'Ik vind het leuk.', english: 'I like it.', isSentence: true, category: 'Feelings' },
  { id: '99', latvian: 'Man tas nepatīk.', dutch: 'Ik vind het niet leuk.', english: 'I don\'t like it.', isSentence: true, category: 'Feelings' },
  { id: '100', latvian: 'Es tevi mīlu.', dutch: 'Ik hou van jou.', english: 'I love you.', isSentence: true, category: 'Feelings' },
  { id: '101', latvian: 'Tas ir interesanti.', dutch: 'Dat is interessant.', english: 'That is interesting.', isSentence: true, category: 'Feelings' },
  { id: '102', latvian: 'Tas ir smieklīgi.', dutch: 'Dat is grappig.', english: 'That is funny.', isSentence: true, category: 'Feelings' },
  { id: '103', latvian: 'Man ir bail.', dutch: 'Ik ben bang.', english: 'I am afraid.', isSentence: true, category: 'Feelings' },
  { id: '104', latvian: 'Esmu pārsteigts.', dutch: 'Ik ben verbaasd.', english: 'I am surprised.', isSentence: true, category: 'Feelings' },
  { id: '105', latvian: 'Es piekrītu.', dutch: 'Ik ben het ermee eens.', english: 'I agree.', isSentence: true, category: 'Feelings' },

  // --- SENTENCES: TIME & WEATHER (15) ---
  { id: '106', latvian: 'Cik ir pulkstenis?', dutch: 'Hoe laat is het?', english: 'What time is it?', isSentence: true, category: 'Time & Weather' },
  { id: '107', latvian: 'Pulkstenis ir pieci.', latvianAlt: ['Ir pulkstenis pieci.'], dutch: 'Het is vijf uur.', english: 'It is five o\'clock.', isSentence: true, category: 'Time & Weather' },
  { id: '108', latvian: 'Šodien ir silti.', dutch: 'Het is warm vandaag.', english: 'It is warm today.', isSentence: true, category: 'Time & Weather' },
  { id: '109', latvian: 'Lietus līst.', latvianAlt: ['Līst lietus.', 'Līst.'], dutch: 'Het regent.', english: 'It is raining.', isSentence: true, category: 'Time & Weather' },
  { id: '110', latvian: 'Spīd saule.', dutch: 'De zon schijnt.', english: 'The sun is shining.', isSentence: true, category: 'Time & Weather' },
  { id: '111', latvian: 'Snieg sniegs.', latvianAlt: ['Snieg.'], dutch: 'Het sneeuwt.', english: 'It is snowing.', isSentence: true, category: 'Time & Weather' },
  { id: '112', latvian: 'Ir vējains.', dutch: 'Het waait.', english: 'It is windy.', isSentence: true, category: 'Time & Weather' },
  { id: '113', latvian: 'Kāds šodien ir datums?', dutch: 'Welke datum is het vandaag?', english: 'What is the date today?', isSentence: true, category: 'Time & Weather' },
  { id: '114', latvian: 'Daudz laimes dzimšanas dienā!', dutch: 'Gefeliciteerd met je verjaardag!', english: 'Happy Birthday!', isSentence: true, category: 'Time & Weather' },
  { id: '115', latvian: 'Laimīgu Jauno gadu!', dutch: 'Gelukkig Nieuwjaar!', english: 'Happy New Year!', isSentence: true, category: 'Time & Weather' },
  { id: '116', latvian: 'Es kavēšos.', latvianAlt: ['Es nokavēšos.'], dutch: 'Ik zal laat zijn.', english: 'I will be late.', isSentence: true, category: 'Time & Weather' },
  { id: '117', latvian: 'Esmu gatavs.', dutch: 'Ik ben klaar.', english: 'I am ready.', isSentence: true, category: 'Time & Weather' },
  { id: '118', latvian: 'Pagaidi mirkli.', dutch: 'Wacht even.', english: 'Wait a moment.', isSentence: true, category: 'Time & Weather' },
  { id: '119', latvian: 'Apmēram stundu.', dutch: 'Ongeveer een uur.', english: 'About an hour.', isSentence: true, category: 'Time & Weather' },
  { id: '120', latvian: 'Katru dienu.', dutch: 'Elke dag.', english: 'Every day.', isSentence: true, category: 'Time & Weather' },

  // --- RANDOM VERBS & NOUNS (10) ---
  { id: '121', latvian: 'Kaķis', dutch: 'Kat', english: 'Cat', category: 'Verbs & Nouns' },
  { id: '122', latvian: 'Suns', dutch: 'Hond', english: 'Dog', category: 'Verbs & Nouns' },
  { id: '123', latvian: 'Māja', dutch: 'Huis', english: 'House', category: 'Verbs & Nouns' },
  { id: '124', latvian: 'Strādāt', dutch: 'Werken', english: 'To work', category: 'Verbs & Nouns' },
  { id: '125', latvian: 'Gulēt', dutch: 'Slapen', english: 'To sleep', category: 'Verbs & Nouns' },
  { id: '126', latvian: 'Ēst', dutch: 'Eten', english: 'To eat', category: 'Verbs & Nouns' },
  { id: '127', latvian: 'Dzert', dutch: 'Drinken', english: 'To drink', category: 'Verbs & Nouns' },
  { id: '128', latvian: 'Lasīt', dutch: 'Lezen', english: 'To read', category: 'Verbs & Nouns' },
  { id: '129', latvian: 'Rakstīt', dutch: 'Schrijven', english: 'To write', category: 'Verbs & Nouns' },
  { id: '130', latvian: 'Ceļot', dutch: 'Reizen', english: 'To travel', category: 'Verbs & Nouns' },

  // --- COMMON EXPRESSIONS (10) ---
  { id: '131', latvian: 'Veiksmi!', dutch: 'Veel succes!', english: 'Good luck!', isSentence: true, category: 'Expressions' },
  { id: '132', latvian: 'Izklaidējies!', dutch: 'Veel plezier!', english: 'Have fun!', isSentence: true, category: 'Expressions' },
  { id: '133', latvian: 'Neuztraucies.', dutch: 'Maak je geen zorgen.', english: 'Don\'t worry.', isSentence: true, category: 'Expressions' },
  { id: '134', latvian: 'Viss būs labi.', dutch: 'Alles komt goed.', english: 'Everything will be fine.', isSentence: true, category: 'Expressions' },
  { id: '135', latvian: 'Man vienalga.', dutch: 'Het maakt mij niet uit.', english: 'I don\'t care.', isSentence: true, category: 'Expressions' },
  { id: '136', latvian: 'Tas ir atkarīgs.', dutch: 'Het hangt ervan af.', english: 'It depends.', isSentence: true, category: 'Expressions' },
  { id: '137', latvian: 'Protams.', dutch: 'Natuurlijk.', english: 'Of course.', isSentence: true, category: 'Expressions' },
  { id: '138', latvian: 'Varbūt vēlāk.', dutch: 'Misschien later.', english: 'Maybe later.', isSentence: true, category: 'Expressions' },
  { id: '139', latvian: 'Es to ļoti gaidu.', dutch: 'Ik kijk ernaar uit.', english: 'I am looking forward to it.', isSentence: true, category: 'Expressions' },
  { id: '140', latvian: 'Tas nav tā vērts.', dutch: 'Het is het niet waard.', english: 'It is not worth it.', isSentence: true, category: 'Expressions' },

  // --- SOCIAL & PLANS (10) ---
  { id: '141', latvian: 'Ko tu dari?', dutch: 'Wat ben je aan het doen?', english: 'What are you doing?', isSentence: true, category: 'Social' },
  { id: '142', latvian: 'Es neko nedaru.', dutch: 'Ik doe niets.', english: 'I am doing nothing.', isSentence: true, category: 'Social' },
  { id: '143', latvian: 'Vai tu esi aizņemts?', dutch: 'Ben je druk?', english: 'Are you busy?', isSentence: true, category: 'Social' },
  { id: '144', latvian: 'Esmu brīvs šovakar.', dutch: 'Ik ben vanavond vrij.', english: 'I am free tonight.', isSentence: true, category: 'Social' },
  { id: '145', latvian: 'Ejam uz kino.', dutch: 'Laten we naar de bioscoop gaan.', english: 'Let\'s go to the cinema.', isSentence: true, category: 'Social' },
  { id: '146', latvian: 'Vai tu gribi kaut ko iedzert?', dutch: 'Wil je iets drinken?', english: 'Do you want a drink?', isSentence: true, category: 'Social' },
  { id: '147', latvian: 'Kur mēs tiekamies?', dutch: 'Waar spreken we af?', english: 'Where are we meeting?', isSentence: true, category: 'Social' },
  { id: '148', latvian: 'Cikos mēs tiekamies?', dutch: 'Hoe laat spreken we af?', english: 'What time are we meeting?', isSentence: true, category: 'Social' },
  { id: '149', latvian: 'Esmu ceļā.', dutch: 'Ik ben onderweg.', english: 'I am on my way.', isSentence: true, category: 'Social' },
  { id: '150', latvian: 'Es būšu klāt pēc piecām minūtēm.', dutch: 'Ik ben er over vijf minuten.', english: 'I will be there in five minutes.', isSentence: true, category: 'Social' },

  // --- HEALTH & WELLBEING (10) ---
  { id: '151', latvian: 'Kā tu jūties?', dutch: 'Hoe voel je je?', english: 'How do you feel?', isSentence: true, category: 'Health' },
  { id: '152', latvian: 'Es jūtos labi.', dutch: 'Ik voel me goed.', english: 'I feel good.', isSentence: true, category: 'Health' },
  { id: '153', latvian: 'Man sāp galva.', dutch: 'Ik heb hoofdpijn.', english: 'I have a headache.', isSentence: true, category: 'Health' },
  { id: '154', latvian: 'Esmu saaukstējies.', dutch: 'Ik ben verkouden.', english: 'I have a cold.', isSentence: true, category: 'Health' },
  { id: '155', latvian: 'Tev vajadzētu atpūsties.', dutch: 'Je moet rusten.', english: 'You should rest.', isSentence: true, category: 'Health' },
  { id: '156', latvian: 'Uz veselību!', dutch: 'Gezondheid!', dutchAlt: ['Proost!'], english: 'Bless you!', englishAlt: ['Cheers!'], isSentence: true, category: 'Health' },
  { id: '157', latvian: 'Esi uzmanīgs.', dutch: 'Wees voorzichtig.', english: 'Be careful.', isSentence: true, category: 'Health' },
  { id: '158', latvian: 'Tas ir bīstami.', dutch: 'Dat is gevaarlijk.', english: 'That is dangerous.', isSentence: true, category: 'Health' },
  { id: '159', latvian: 'Izsauc ātro palīdzību.', dutch: 'Bel een ambulance.', english: 'Call an ambulance.', isSentence: true, category: 'Health' },
  { id: '160', latvian: 'Man vajag zāles.', dutch: 'Ik heb medicijnen nodig.', english: 'I need medicine.', isSentence: true, category: 'Health' },

  // --- PRACTICAL & TRAVEL NUANCES (10) ---
  { id: '161', latvian: 'Kur ir tuvākais bankomāts?', dutch: 'Waar is de dichtstbijzijnde geldautomaat?', english: 'Where is the nearest ATM?', isSentence: true, category: 'Travel' },
  { id: '162', latvian: 'Vai varu maksāt skaidrā naudā?', dutch: 'Kan ik contant betalen?', english: 'Can I pay in cash?', isSentence: true, category: 'Travel' },
  { id: '163', latvian: 'Paturiet atlikumu.', dutch: 'Hou het wisselgeld maar.', english: 'Keep the change.', isSentence: true, category: 'Travel' },
  { id: '164', latvian: 'Vai ir atlaide?', dutch: 'Is er korting?', english: 'Is there a discount?', isSentence: true, category: 'Travel' },
  { id: '165', latvian: 'Es gribētu izīrēt velosipēdu.', dutch: 'Ik wil een fiets huren.', english: 'I would like to rent a bicycle.', isSentence: true, category: 'Travel' },
  { id: '166', latvian: 'Vai šī vieta ir brīva?', dutch: 'Is deze stoel vrij?', english: 'Is this seat free?', isSentence: true, category: 'Travel' },
  { id: '167', latvian: 'Laimīgu ceļu!', dutch: 'Goede reis!', english: 'Have a good trip!', isSentence: true, category: 'Travel' },
  { id: '168', latvian: 'Laiks ir briesmīgs.', dutch: 'Het weer is verschrikkelijk.', english: 'The weather is terrible.', isSentence: true, category: 'Travel' },
  { id: '169', latvian: 'Laukā ir auksti.', latvianAlt: ['Ārā ir auksti.'], dutch: 'Het is koud buiten.', english: 'It is cold outside.', isSentence: true, category: 'Travel' },
  { id: '170', latvian: 'Kādā krāsā tas ir?', dutch: 'Welke kleur is het?', english: 'What color is it?', isSentence: true, category: 'Travel' },

  // --- WORK & TECHNOLOGY (10) ---
  { id: '171', latvian: 'Es strādāju birojā.', dutch: 'Ik werk op kantoor.', english: 'I work in an office.', isSentence: true, category: 'Work' },
  { id: '172', latvian: 'Man ir sanāksme.', dutch: 'Ik heb een vergadering.', english: 'I have a meeting.', isSentence: true, category: 'Work' },
  { id: '173', latvian: 'Es nosūtīšu e-pastu.', dutch: 'Ik zal een e-mail sturen.', english: 'I will send an email.', isSentence: true, category: 'Work' },
  { id: '174', latvian: 'Mana baterija ir tukša.', dutch: 'Mijn batterij is leeg.', english: 'My battery is empty.', isSentence: true, category: 'Work' },
  { id: '175', latvian: 'Vai tev ir lādētājs?', dutch: 'Heb je een oplader?', english: 'Do you have a charger?', isSentence: true, category: 'Work' },
  { id: '176', latvian: 'Kāda ir parole?', dutch: 'Wat is het wachtwoord?', english: 'What is the password?', isSentence: true, category: 'Work' },
  { id: '177', latvian: 'Internets nedarbojas.', dutch: 'Het internet werkt niet.', english: 'The internet is not working.', isSentence: true, category: 'Work' },
  { id: '178', latvian: 'Es to atradīšu internetā.', dutch: 'Ik zoek het op internet.', english: 'I will find it on the internet.', isSentence: true, category: 'Work' },
  { id: '179', latvian: 'Lejupielādēt.', dutch: 'Downloaden.', english: 'Download.', isSentence: true, category: 'Work' },
  { id: '180', latvian: 'Nosūtīt ziņu.', dutch: 'Een bericht sturen.', english: 'Send a message.', isSentence: true, category: 'Work' },

  // --- FAMILY & RELATIONSHIPS (10) ---
  { id: '181', latvian: 'Šī ir mana māte.', dutch: 'Dit is mijn moeder.', english: 'This is my mother.', isSentence: true, category: 'Family' },
  { id: '182', latvian: 'Tas ir mans tēvs.', dutch: 'Dat is mijn vader.', english: 'That is my father.', isSentence: true, category: 'Family' },
  { id: '183', latvian: 'Man ir brālis.', dutch: 'Ik heb een broer.', english: 'I have a brother.', isSentence: true, category: 'Family' },
  { id: '184', latvian: 'Man ir māsa.', dutch: 'Ik heb een zus.', english: 'I have a sister.', isSentence: true, category: 'Family' },
  { id: '185', latvian: 'Viņi ir mani vecāki.', dutch: 'Zij zijn mijn ouders.', english: 'They are my parents.', isSentence: true, category: 'Family' },
  { id: '186', latvian: 'Vai tev ir bērni?', dutch: 'Heb je kinderen?', english: 'Do you have children?', isSentence: true, category: 'Family' },
  { id: '187', latvian: 'Man ir dēls.', dutch: 'Ik heb een zoon.', english: 'I have a son.', isSentence: true, category: 'Family' },
  { id: '188', latvian: 'Man ir meita.', dutch: 'Ik heb een dochter.', english: 'I have a daughter.', isSentence: true, category: 'Family' },
  { id: '189', latvian: 'Mēs esam precējušies.', dutch: 'Wij zijn getrouwd.', english: 'We are married.', isSentence: true, category: 'Family' },
  { id: '190', latvian: 'Viņš ir mans draugs.', dutch: 'Hij is mijn vriend.', english: 'He is my friend.', isSentence: true, category: 'Family' },

  // --- HOBBIES & INTERESTS (10) ---
  { id: '191', latvian: 'Man patīk lasīt grāmatas.', dutch: 'Ik hou van boeken lezen.', english: 'I like reading books.', isSentence: true, category: 'Hobbies' },
  { id: '192', latvian: 'Es spēlēju futbolu.', dutch: 'Ik speel voetbal.', english: 'I play football.', isSentence: true, category: 'Hobbies' },
  { id: '193', latvian: 'Vai tev patīk mūzika?', dutch: 'Hou je van muziek?', english: 'Do you like music?', isSentence: true, category: 'Hobbies' },
  { id: '194', latvian: 'Es spēlēju ģitāru.', dutch: 'Ik speel gitaar.', english: 'I play the guitar.', isSentence: true, category: 'Hobbies' },
  { id: '195', latvian: 'Mums patīk ceļot.', dutch: 'Wij houden van reizen.', english: 'We like to travel.', isSentence: true, category: 'Hobbies' },
  { id: '196', latvian: 'Es skatos filmas.', dutch: 'Ik kijk films.', english: 'I watch movies.', isSentence: true, category: 'Hobbies' },
  { id: '197', latvian: 'Man patīk gatavot ēst.', dutch: 'Ik hou van koken.', english: 'I like cooking.', isSentence: true, category: 'Hobbies' },
  { id: '198', latvian: 'Es eju uz sporta zāli.', dutch: 'Ik ga naar de sportschool.', english: 'I go to the gym.', isSentence: true, category: 'Hobbies' },
  { id: '199', latvian: 'Man patīk peldēt.', dutch: 'Ik hou van zwemmen.', english: 'I like swimming.', isSentence: true, category: 'Hobbies' },
  { id: '200', latvian: 'Es kolekcionēju pastmarkas.', dutch: 'Ik verzamel postzegels.', english: 'I collect stamps.', isSentence: true, category: 'Hobbies' },

  // --- NATURE & ENVIRONMENT (10) ---
  { id: '201', latvian: 'Debesis ir zilas.', dutch: 'De lucht is blauw.', english: 'The sky is blue.', isSentence: true, category: 'Nature' },
  { id: '202', latvian: 'Zāle ir zaļa.', dutch: 'Het gras is groen.', english: 'The grass is green.', isSentence: true, category: 'Nature' },
  { id: '203', latvian: 'Koki ir augsti.', dutch: 'De bomen zijn hoog.', english: 'The trees are tall.', isSentence: true, category: 'Nature' },
  { id: '204', latvian: 'Man patīk jūra.', dutch: 'Ik hou van de zee.', english: 'I like the sea.', isSentence: true, category: 'Nature' },
  { id: '205', latvian: 'Mēs ejam uz mežu.', dutch: 'Wij gaan naar het bos.', english: 'We are going to the forest.', isSentence: true, category: 'Nature' },
  { id: '206', latvian: 'Putni dzied.', dutch: 'De vogels zingen.', english: 'The birds are singing.', isSentence: true, category: 'Nature' },
  { id: '207', latvian: 'Ir pilnmēness.', dutch: 'Het is volle maan.', english: 'It is a full moon.', isSentence: true, category: 'Nature' },
  { id: '208', latvian: 'Zvaigznes ir skaistas.', dutch: 'De sterren zijn mooi.', english: 'The stars are beautiful.', isSentence: true, category: 'Nature' },
  { id: '209', latvian: 'Upē ir ūdens.', dutch: 'Er is water in de rivier.', english: 'There is water in the river.', isSentence: true, category: 'Nature' },
  { id: '210', latvian: 'Kalni ir tālu.', dutch: 'De bergen zijn ver weg.', english: 'The mountains are far away.', isSentence: true, category: 'Nature' },

  // --- EDUCATION & LEARNING (10) ---
  { id: '211', latvian: 'Es studēju universitātē.', dutch: 'Ik studeer aan de universiteit.', english: 'I study at the university.', isSentence: true, category: 'Education' },
  { id: '212', latvian: 'Man ir eksāmens rīt.', dutch: 'Ik heb morgen een examen.', english: 'I have an exam tomorrow.', isSentence: true, category: 'Education' },
  { id: '213', latvian: 'Es mācos vēsturi.', dutch: 'Ik studeer geschiedenis.', english: 'I study history.', isSentence: true, category: 'Education' },
  { id: '214', latvian: 'Skolotājs ir gudrs.', dutch: 'De leraar is slim.', english: 'The teacher is smart.', isSentence: true, category: 'Education' },
  { id: '215', latvian: 'Kur ir bibliotēka?', dutch: 'Waar is de bibliotheek?', english: 'Where is the library?', isSentence: true, category: 'Education' },
  { id: '216', latvian: 'Man vajag pildspalvu.', dutch: 'Ik heb een pen nodig.', english: 'I need a pen.', isSentence: true, category: 'Education' },
  { id: '217', latvian: 'Es lasu avīzi.', dutch: 'Ik lees de krant.', english: 'I am reading the newspaper.', isSentence: true, category: 'Education' },
  { id: '218', latvian: 'Tas ir grūts uzdevums.', dutch: 'Dat is een moeilijke opdracht.', english: 'That is a difficult task.', isSentence: true, category: 'Education' },
  { id: '219', latvian: 'Es gribu iemācīties vairāk.', dutch: 'Ik wil meer leren.', english: 'I want to learn more.', isSentence: true, category: 'Education' },
  { id: '220', latvian: 'Vai tu vari man palīdzēt ar mājasdarbiem?', dutch: 'Kun je me helpen met huiswerk?', english: 'Can you help me with homework?', isSentence: true, category: 'Education' },

  // --- DAILY ROUTINE (10) ---
  { id: '221', latvian: 'Es ceļos septiņos.', dutch: 'Ik sta om zeven uur op.', english: 'I get up at seven.', isSentence: true, category: 'Routine' },
  { id: '222', latvian: 'Es tīru zobus.', dutch: 'Ik poets mijn tanden.', english: 'I brush my teeth.', isSentence: true, category: 'Routine' },
  { id: '223', latvian: 'Es eju dušā.', dutch: 'Ik neem een douche.', english: 'I take a shower.', isSentence: true, category: 'Routine' },
  { id: '224', latvian: 'Es ēdu brokastis.', dutch: 'Ik eet ontbijt.', english: 'I eat breakfast.', isSentence: true, category: 'Routine' },
  { id: '225', latvian: 'Es dzeru kafiju.', dutch: 'Ik drink koffie.', english: 'I drink coffee.', isSentence: true, category: 'Routine' },
  { id: '226', latvian: 'Es eju uz darbu.', dutch: 'Ik ga naar mijn werk.', english: 'I go to work.', isSentence: true, category: 'Routine' },
  { id: '227', latvian: 'Es pusdienoju divpadsmitos.', dutch: 'Ik lunch om twaalf uur.', english: 'I eat lunch at twelve.', isSentence: true, category: 'Routine' },
  { id: '228', latvian: 'Es nāku mājās sešos.', dutch: 'Ik kom om zes uur thuis.', english: 'I come home at six.', isSentence: true, category: 'Routine' },
  { id: '229', latvian: 'Es skatos televizoru.', dutch: 'Ik kijk televisie.', english: 'I watch television.', isSentence: true, category: 'Routine' },
  { id: '230', latvian: 'Es eju gulēt desmitos.', dutch: 'Ik ga om tien uur slapen.', english: 'I go to sleep at ten.', isSentence: true, category: 'Routine' },

  // --- HOUSE & HOME (10) ---
  { id: '231', latvian: 'Kur ir virtuve?', dutch: 'Waar is de keuken?', english: 'Where is the kitchen?', isSentence: true, category: 'House' },
  { id: '232', latvian: 'Vannas istaba ir tīra.', dutch: 'De badkamer is schoon.', english: 'The bathroom is clean.', isSentence: true, category: 'House' },
  { id: '233', latvian: 'Es esmu savā istabā.', dutch: 'Ik ben in mijn kamer.', english: 'I am in my room.', isSentence: true, category: 'House' },
  { id: '234', latvian: 'Aizver logu, lūdzu.', dutch: 'Doe het raam dicht, alstublieft.', english: 'Close the window, please.', isSentence: true, category: 'House' },
  { id: '235', latvian: 'Atver durvis.', dutch: 'Doe de deur open.', english: 'Open the door.', isSentence: true, category: 'House' },
  { id: '236', latvian: 'Gaisma ir ieslēgta.', dutch: 'Het licht is aan.', english: 'The light is on.', isSentence: true, category: 'House' },
  { id: '237', latvian: 'Izslēdz gaismu.', dutch: 'Doe het licht uit.', english: 'Turn off the light.', isSentence: true, category: 'House' },
  { id: '238', latvian: 'Mums ir dārzs.', dutch: 'Wij hebben een tuin.', english: 'We have a garden.', isSentence: true, category: 'House' },
  { id: '239', latvian: 'Kur ir atslēgas?', dutch: 'Waar zijn de sleutels?', english: 'Where are the keys?', isSentence: true, category: 'House' },
  { id: '240', latvian: 'Māja ir liela.', dutch: 'Het huis is groot.', english: 'The house is big.', isSentence: true, category: 'House' },

  // --- TRANSPORTATION (10) ---
  { id: '241', latvian: 'Es braucu ar mašīnu.', dutch: 'Ik rijd met de auto.', english: 'I drive by car.', isSentence: true, category: 'Transport' },
  { id: '242', latvian: 'Es braucu ar autobusu.', dutch: 'Ik ga met de bus.', english: 'I go by bus.', isSentence: true, category: 'Transport' },
  { id: '243', latvian: 'Es braucu ar velosipēdu.', dutch: 'Ik fiets.', english: 'I ride a bicycle.', isSentence: true, category: 'Transport' },
  { id: '244', latvian: 'Luksofors ir sarkans.', dutch: 'Het stoplicht is rood.', english: 'The traffic light is red.', isSentence: true, category: 'Transport' },
  { id: '245', latvian: 'Luksofors ir zaļš.', dutch: 'Het stoplicht is groen.', english: 'The traffic light is green.', isSentence: true, category: 'Transport' },
  { id: '246', latvian: 'Uzmanies uz ceļa.', dutch: 'Pas op op de weg.', english: 'Watch out on the road.', isSentence: true, category: 'Transport' },
  { id: '247', latvian: 'Kur es varu novietot auto?', dutch: 'Waar kan ik parkeren?', english: 'Where can I park?', isSentence: true, category: 'Transport' },
  { id: '248', latvian: 'Degviela ir dārga.', dutch: 'Benzine is duur.', english: 'Fuel is expensive.', isSentence: true, category: 'Transport' },
  { id: '249', latvian: 'Man ir riepa caura.', dutch: 'Ik heb een lekke band.', english: 'I have a flat tire.', isSentence: true, category: 'Transport' },
  { id: '250', latvian: 'Izsauc taksometru.', dutch: 'Bel een taxi.', english: 'Call a taxi.', isSentence: true, category: 'Transport' },

  // --- SHOPPING (10) ---
  { id: '251', latvian: 'Man vajag maizi.', dutch: 'Ik heb brood nodig.', english: 'I need bread.', isSentence: true, category: 'Shopping' },
  { id: '252', latvian: 'Es pērku pienu.', dutch: 'Ik koop melk.', english: 'I am buying milk.', isSentence: true, category: 'Shopping' },
  { id: '253', latvian: 'Vai jums ir olas?', dutch: 'Heeft u eieren?', english: 'Do you have eggs?', isSentence: true, category: 'Shopping' },
  { id: '254', latvian: 'Es gribu nopirkt augļus.', dutch: 'Ik wil fruit kopen.', english: 'I want to buy fruit.', isSentence: true, category: 'Shopping' },
  { id: '255', latvian: 'Dārzeņi ir svaigi.', dutch: 'De groenten zijn vers.', english: 'The vegetables are fresh.', isSentence: true, category: 'Shopping' },
  { id: '256', latvian: 'Cik maksā siers?', dutch: 'Hoeveel kost de kaas?', english: 'How much does the cheese cost?', isSentence: true, category: 'Shopping' },
  { id: '257', latvian: 'Man vajag maisiņu.', dutch: 'Ik heb een tasje nodig.', english: 'I need a bag.', isSentence: true, category: 'Shopping' },
  { id: '258', latvian: 'Kur ir kase?', dutch: 'Waar is de kassa?', english: 'Where is the checkout?', isSentence: true, category: 'Shopping' },
  { id: '259', latvian: 'Es maksāšu ar skaidru naudu.', dutch: 'Ik betaal contant.', english: 'I will pay with cash.', isSentence: true, category: 'Shopping' },
  { id: '260', latvian: 'Paldies par pirkumu.', dutch: 'Bedankt voor uw aankoop.', english: 'Thank you for your purchase.', isSentence: true, category: 'Shopping' },

  // --- EMOTIONS & STATES (10) ---
  { id: '261', latvian: 'Es esmu dusmīgs.', dutch: 'Ik ben boos.', english: 'I am angry.', isSentence: true, category: 'Emotions' },
  { id: '262', latvian: 'Viņa ir bēdīga.', dutch: 'Zij is verdrietig.', english: 'She is sad.', isSentence: true, category: 'Emotions' },
  { id: '263', latvian: 'Mēs esam satraukti.', dutch: 'Wij zijn enthousiast.', dutchAlt: ['Wij zijn opgewonden.', 'We zijn enthousiast.'], english: 'We are excited.', isSentence: true, category: 'Emotions' },
  { id: '264', latvian: 'Es esmu noraizējies.', dutch: 'Ik ben bezorgd.', english: 'I am worried.', isSentence: true, category: 'Emotions' },
  { id: '265', latvian: 'Es jūtos slims.', dutch: 'Ik voel me ziek.', english: 'I feel sick.', isSentence: true, category: 'Emotions' },
  { id: '266', latvian: 'Tas ir pretīgi.', dutch: 'Dat is walgelijk.', english: 'That is disgusting.', isSentence: true, category: 'Emotions' },
  { id: '267', latvian: 'Tas ir brīnišķīgi.', dutch: 'Dat is geweldig.', english: 'That is wonderful.', isSentence: true, category: 'Emotions' },
  { id: '268', latvian: 'Es esmu vīlies.', dutch: 'Ik ben teleurgesteld.', english: 'I am disappointed.', isSentence: true, category: 'Emotions' },
  { id: '269', latvian: 'Es esmu lepns.', dutch: 'Ik ben trots.', english: 'I am proud.', isSentence: true, category: 'Emotions' },
  { id: '270', latvian: 'Es esmu apmulsis.', dutch: 'Ik ben in de war.', english: 'I am confused.', isSentence: true, category: 'Emotions' },

  // --- MISCELLANEOUS (10) ---
  { id: '271', latvian: 'Kas notika?', dutch: 'Wat is er gebeurd?', english: 'What happened?', isSentence: true, category: 'Misc' },
  { id: '272', latvian: 'Tas nav svarīgi.', dutch: 'Dat is niet belangrijk.', english: 'That is not important.', isSentence: true, category: 'Misc' },
  { id: '273', latvian: 'Es jokoju.', dutch: 'Ik maak een grapje.', english: 'I am joking.', isSentence: true, category: 'Misc' },
  { id: '274', latvian: 'Tā ir taisnība.', dutch: 'Dat is waar.', english: 'That is true.', isSentence: true, category: 'Misc' },
  { id: '275', latvian: 'Tie ir meli.', dutch: 'Dat is een leugen.', english: 'That is a lie.', isSentence: true, category: 'Misc' },
  { id: '276', latvian: 'Es tev ticu.', dutch: 'Ik geloof je.', english: 'I believe you.', isSentence: true, category: 'Misc' },
  { id: '277', latvian: 'Es tev neticu.', dutch: 'Ik geloof je niet.', english: 'I don\'t believe you.', isSentence: true, category: 'Misc' },
  { id: '278', latvian: 'Aizmirsti to.', dutch: 'Vergeet het maar.', english: 'Forget it.', isSentence: true, category: 'Misc' },
  { id: '279', latvian: 'Lai veicas!', dutch: 'Veel geluk!', english: 'Good luck!', isSentence: true, category: 'Misc' },
  { id: '280', latvian: 'Uz drīzu tikšanos!', dutch: 'Tot snel!', english: 'See you soon!', isSentence: true, category: 'Misc' },

  // --- COLORS & SHAPES (10) ---
  { id: '281', latvian: 'Sarkans', dutch: 'Rood', english: 'Red', category: 'Colors & Shapes' },
  { id: '282', latvian: 'Zils', dutch: 'Blauw', english: 'Blue', category: 'Colors & Shapes' },
  { id: '283', latvian: 'Zaļš', dutch: 'Groen', english: 'Green', category: 'Colors & Shapes' },
  { id: '284', latvian: 'Dzeltens', dutch: 'Geel', english: 'Yellow', category: 'Colors & Shapes' },
  { id: '285', latvian: 'Melns', dutch: 'Zwart', english: 'Black', category: 'Colors & Shapes' },
  { id: '286', latvian: 'Balts', dutch: 'Wit', english: 'White', category: 'Colors & Shapes' },
  { id: '287', latvian: 'Aplis', dutch: 'Cirkel', english: 'Circle', category: 'Colors & Shapes' },
  { id: '288', latvian: 'Kvadrāts', dutch: 'Vierkant', english: 'Square', category: 'Colors & Shapes' },
  { id: '289', latvian: 'Trīsstūris', dutch: 'Driehoek', english: 'Triangle', category: 'Colors & Shapes' },
  { id: '290', latvian: 'Krāsa', dutch: 'Kleur', english: 'Color', category: 'Colors & Shapes' },

  // --- BODY PARTS (10) ---
  { id: '291', latvian: 'Galva', dutch: 'Hoofd', english: 'Head', category: 'Body Parts' },
  { id: '292', latvian: 'Roka', dutch: 'Hand', dutchAlt: ['Arm'], english: 'Hand', englishAlt: ['Arm'], category: 'Body Parts' },
  { id: '293', latvian: 'Kāja', dutch: 'Been', dutchAlt: ['Voet'], english: 'Leg', englishAlt: ['Foot'], category: 'Body Parts' },
  { id: '294', latvian: 'Acis', dutch: 'Ogen', english: 'Eyes', category: 'Body Parts' },
  { id: '295', latvian: 'Deguns', dutch: 'Neus', english: 'Nose', category: 'Body Parts' },
  { id: '296', latvian: 'Mute', dutch: 'Mond', english: 'Mouth', category: 'Body Parts' },
  { id: '297', latvian: 'Ausis', dutch: 'Oren', english: 'Ears', category: 'Body Parts' },
  { id: '298', latvian: 'Mati', dutch: 'Haar', english: 'Hair', category: 'Body Parts' },
  { id: '299', latvian: 'Pirksts', dutch: 'Vinger', english: 'Finger', category: 'Body Parts' },
  { id: '300', latvian: 'Mugura', dutch: 'Rug', english: 'Back', category: 'Body Parts' },

  // --- CLOTHING & ACCESSORIES (10) ---
  { id: '301', latvian: 'Krekls', dutch: 'Overhemd', english: 'Shirt', category: 'Clothing & Accessories' },
  { id: '302', latvian: 'Bikses', dutch: 'Broek', english: 'Pants', category: 'Clothing & Accessories' },
  { id: '303', latvian: 'Kleita', dutch: 'Jurk', english: 'Dress', category: 'Clothing & Accessories' },
  { id: '304', latvian: 'Kurpes', dutch: 'Schoenen', english: 'Shoes', category: 'Clothing & Accessories' },
  { id: '305', latvian: 'Cepure', dutch: 'Hoed', dutchAlt: ['Muts', 'Pet'], english: 'Hat', category: 'Clothing & Accessories' },
  { id: '306', latvian: 'Mētelis', dutch: 'Jas', english: 'Coat', category: 'Clothing & Accessories' },
  { id: '307', latvian: 'Zeķes', dutch: 'Sokken', english: 'Socks', category: 'Clothing & Accessories' },
  { id: '308', latvian: 'Svārki', dutch: 'Rok', english: 'Skirt', category: 'Clothing & Accessories' },
  { id: '309', latvian: 'Brilles', dutch: 'Bril', english: 'Glasses', category: 'Clothing & Accessories' },
  { id: '310', latvian: 'Soma', dutch: 'Tas', english: 'Bag', category: 'Clothing & Accessories' },

  // --- ANIMALS (10) ---
  { id: '311', latvian: 'Lācis', dutch: 'Beer', english: 'Bear', category: 'Animals' },
  { id: '312', latvian: 'Vilks', dutch: 'Wolf', english: 'Wolf', category: 'Animals' },
  { id: '313', latvian: 'Lapsa', dutch: 'Vos', english: 'Fox', category: 'Animals' },
  { id: '314', latvian: 'Zaķis', dutch: 'Haas', english: 'Hare', category: 'Animals' },
  { id: '315', latvian: 'Zirgs', dutch: 'Paard', english: 'Horse', category: 'Animals' },
  { id: '316', latvian: 'Govs', dutch: 'Koe', english: 'Cow', category: 'Animals' },
  { id: '317', latvian: 'Cūka', dutch: 'Varken', english: 'Pig', category: 'Animals' },
  { id: '318', latvian: 'Putns', dutch: 'Vogel', english: 'Bird', category: 'Animals' },
  { id: '319', latvian: 'Zivs', dutch: 'Vis', english: 'Fish', category: 'Animals' },
  { id: '320', latvian: 'Pele', dutch: 'Muis', english: 'Mouse', category: 'Animals' },

  // --- FRUITS & VEGETABLES (10) ---
  { id: '321', latvian: 'Ābols', dutch: 'Appel', english: 'Apple', category: 'Fruits & Vegetables' },
  { id: '322', latvian: 'Bumbieris', dutch: 'Peer', english: 'Pear', category: 'Fruits & Vegetables' },
  { id: '323', latvian: 'Banāns', dutch: 'Banaan', english: 'Banana', category: 'Fruits & Vegetables' },
  { id: '324', latvian: 'Apelsīns', dutch: 'Sinaasappel', english: 'Orange', category: 'Fruits & Vegetables' },
  { id: '325', latvian: 'Kartupelis', dutch: 'Aardappel', english: 'Potato', category: 'Fruits & Vegetables' },
  { id: '326', latvian: 'Burkāns', dutch: 'Wortel', english: 'Carrot', category: 'Fruits & Vegetables' },
  { id: '327', latvian: 'Sīpols', dutch: 'Ui', english: 'Onion', category: 'Fruits & Vegetables' },
  { id: '328', latvian: 'Gurķis', dutch: 'Komkommer', english: 'Cucumber', category: 'Fruits & Vegetables' },
  { id: '329', latvian: 'Tomāts', dutch: 'Tomaat', english: 'Tomato', category: 'Fruits & Vegetables' },
  { id: '330', latvian: 'Kāposts', dutch: 'Kool', english: 'Cabbage', category: 'Fruits & Vegetables' },

  // --- DRINKS & BEVERAGES (10) ---
  { id: '331', latvian: 'Ūdens', dutch: 'Water', english: 'Water', category: 'Drinks & Beverages' },
  { id: '332', latvian: 'Tēja', dutch: 'Thee', english: 'Tea', category: 'Drinks & Beverages' },
  { id: '333', latvian: 'Kafija', dutch: 'Koffie', english: 'Coffee', category: 'Drinks & Beverages' },
  { id: '334', latvian: 'Sula', dutch: 'Sap', english: 'Juice', category: 'Drinks & Beverages' },
  { id: '335', latvian: 'Piens', dutch: 'Melk', english: 'Milk', category: 'Drinks & Beverages' },
  { id: '336', latvian: 'Alus', dutch: 'Bier', english: 'Beer', category: 'Drinks & Beverages' },
  { id: '337', latvian: 'Vīns', dutch: 'Wijn', english: 'Wine', category: 'Drinks & Beverages' },
  { id: '338', latvian: 'Limonāde', dutch: 'Limonade', english: 'Lemonade', category: 'Drinks & Beverages' },
  { id: '339', latvian: 'Kokteilis', dutch: 'Cocktail', english: 'Cocktail', category: 'Drinks & Beverages' },
  { id: '340', latvian: 'Ledus', latvianAlt: ['Saldējums'], dutch: 'IJs', english: 'Ice', category: 'Drinks & Beverages' },

  // --- SPORTS & ACTIVITIES (10) ---
  { id: '341', latvian: 'Futbols', dutch: 'Voetbal', english: 'Football', category: 'Sports & Activities' },
  { id: '342', latvian: 'Basketbols', dutch: 'Basketbal', english: 'Basketball', category: 'Sports & Activities' },
  { id: '343', latvian: 'Hokejs', dutch: 'IJshockey', dutchAlt: ['Hockey'], english: 'Hockey', category: 'Sports & Activities' },
  { id: '344', latvian: 'Teniss', dutch: 'Tennis', english: 'Tennis', category: 'Sports & Activities' },
  { id: '345', latvian: 'Peldēšana', latvianAlt: ['Peldēt'], dutch: 'Zwemmen', english: 'Swimming', category: 'Sports & Activities' },
  { id: '346', latvian: 'Skriešana', latvianAlt: ['Skriet'], dutch: 'Hardlopen', english: 'Running', category: 'Sports & Activities' },
  { id: '347', latvian: 'Riteņbraukšana', dutch: 'Fietsen', english: 'Cycling', category: 'Sports & Activities' },
  { id: '348', latvian: 'Slēpošana', dutch: 'Skiën', english: 'Skiing', category: 'Sports & Activities' },
  { id: '349', latvian: 'Dejošana', latvianAlt: ['Dejot'], dutch: 'Dansen', english: 'Dancing', category: 'Sports & Activities' },
  { id: '350', latvian: 'Pastaiga', dutch: 'Wandelen', english: 'Walking', category: 'Sports & Activities' },

  // --- PROFESSIONS & JOBS (10) ---
  { id: '351', latvian: 'Ārsts', dutch: 'Dokter', english: 'Doctor', category: 'Professions & Jobs' },
  { id: '352', latvian: 'Skolotājs', dutch: 'Leraar', english: 'Teacher', category: 'Professions & Jobs' },
  { id: '353', latvian: 'Inženieris', dutch: 'Ingenieur', english: 'Engineer', category: 'Professions & Jobs' },
  { id: '354', latvian: 'Pavārs', dutch: 'Kok', english: 'Cook', category: 'Professions & Jobs' },
  { id: '355', latvian: 'Policists', dutch: 'Politieagent', english: 'Police officer', category: 'Professions & Jobs' },
  { id: '356', latvian: 'Ugunsdzēsējs', dutch: 'Brandweerman', english: 'Firefighter', category: 'Professions & Jobs' },
  { id: '357', latvian: 'Pārdevējs', dutch: 'Verkoper', english: 'Salesperson', category: 'Professions & Jobs' },
  { id: '358', latvian: 'Vadītājs', latvianAlt: ['Šoferis'], dutch: 'Chauffeur', english: 'Driver', category: 'Professions & Jobs' },
  { id: '359', latvian: 'Mākslinieks', dutch: 'Kunstenaar', english: 'Artist', category: 'Professions & Jobs' },
  { id: '360', latvian: 'Zemnieks', dutch: 'Boer', english: 'Farmer', category: 'Professions & Jobs' },

  // --- COUNTRIES & NATIONALITIES (10) ---
  { id: '361', latvian: 'Latvija', dutch: 'Letland', english: 'Latvia', category: 'Countries & Nationalities' },
  { id: '362', latvian: 'Nīderlande', dutch: 'Nederland', english: 'Netherlands', category: 'Countries & Nationalities' },
  { id: '363', latvian: 'Igaunija', dutch: 'Estland', english: 'Estonia', category: 'Countries & Nationalities' },
  { id: '364', latvian: 'Lietuva', dutch: 'Litouwen', english: 'Lithuania', category: 'Countries & Nationalities' },
  { id: '365', latvian: 'Vācija', dutch: 'Duitsland', english: 'Germany', category: 'Countries & Nationalities' },
  { id: '366', latvian: 'Francija', dutch: 'Frankrijk', english: 'France', category: 'Countries & Nationalities' },
  { id: '367', latvian: 'Anglija', dutch: 'Engeland', english: 'England', category: 'Countries & Nationalities' },
  { id: '368', latvian: 'Eiropa', dutch: 'Europa', english: 'Europe', category: 'Countries & Nationalities' },
  { id: '369', latvian: 'Amerika', dutch: 'Amerika', english: 'America', category: 'Countries & Nationalities' },
  { id: '370', latvian: 'Pasaule', dutch: 'Wereld', english: 'World', category: 'Countries & Nationalities' },

  // --- MONTHS, DAYS & SEASONS (10) ---
  { id: '371', latvian: 'Janvāris', dutch: 'Januari', english: 'January', category: 'Months, Days & Seasons' },
  { id: '372', latvian: 'Februāris', dutch: 'Februari', english: 'February', category: 'Months, Days & Seasons' },
  { id: '373', latvian: 'Pirmdiena', dutch: 'Maandag', english: 'Monday', category: 'Months, Days & Seasons' },
  { id: '374', latvian: 'Otrdiena', dutch: 'Dinsdag', english: 'Tuesday', category: 'Months, Days & Seasons' },
  { id: '375', latvian: 'Pavasaris', dutch: 'Lente', english: 'Spring', category: 'Months, Days & Seasons' },
  { id: '376', latvian: 'Vasara', dutch: 'Zomer', english: 'Summer', category: 'Months, Days & Seasons' },
  { id: '377', latvian: 'Rudens', dutch: 'Herfst', english: 'Autumn', category: 'Months, Days & Seasons' },
  { id: '378', latvian: 'Ziema', dutch: 'Winter', english: 'Winter', category: 'Months, Days & Seasons' },
  { id: '379', latvian: 'Nedēļa', dutch: 'Week', english: 'Week', category: 'Months, Days & Seasons' },
  { id: '380', latvian: 'Gads', dutch: 'Jaar', english: 'Year', category: 'Months, Days & Seasons' },

  // --- NUMBERS & MATH (10) ---
  { id: '381', latvian: 'Nulle', dutch: 'Nul', english: 'Zero', category: 'Numbers & Math' },
  { id: '382', latvian: 'Viens', dutch: 'Een', english: 'One', category: 'Numbers & Math' },
  { id: '383', latvian: 'Divi', dutch: 'Twee', english: 'Two', category: 'Numbers & Math' },
  { id: '384', latvian: 'Trīs', dutch: 'Drie', english: 'Three', category: 'Numbers & Math' },
  { id: '385', latvian: 'Desmit', dutch: 'Tien', english: 'Ten', category: 'Numbers & Math' },
  { id: '386', latvian: 'Simts', dutch: 'Honderd', english: 'Hundred', category: 'Numbers & Math' },
  { id: '387', latvian: 'Tūkstotis', dutch: 'Duizend', english: 'Thousand', category: 'Numbers & Math' },
  { id: '388', latvian: 'Puse', dutch: 'Helft', english: 'Half', category: 'Numbers & Math' },
  { id: '389', latvian: 'Daudz', dutch: 'Veel', english: 'Many', category: 'Numbers & Math' },
  { id: '390', latvian: 'Maz', dutch: 'Weinig', english: 'Few', category: 'Numbers & Math' },

  // --- ORDINAL NUMBERS (10) ---
  { id: '391', latvian: 'Pirmais', dutch: 'Eerste', english: 'First', category: 'Ordinal Numbers' },
  { id: '392', latvian: 'Otrais', dutch: 'Tweede', english: 'Second', category: 'Ordinal Numbers' },
  { id: '393', latvian: 'Trešais', dutch: 'Derde', english: 'Third', category: 'Ordinal Numbers' },
  { id: '394', latvian: 'Ceturtais', dutch: 'Vierde', english: 'Fourth', category: 'Ordinal Numbers' },
  { id: '395', latvian: 'Piektais', dutch: 'Vijfde', english: 'Fifth', category: 'Ordinal Numbers' },
  { id: '396', latvian: 'Sestais', dutch: 'Zesde', english: 'Sixth', category: 'Ordinal Numbers' },
  { id: '397', latvian: 'Septītais', dutch: 'Zevende', english: 'Seventh', category: 'Ordinal Numbers' },
  { id: '398', latvian: 'Astotais', dutch: 'Achtste', english: 'Eighth', category: 'Ordinal Numbers' },
  { id: '399', latvian: 'Devītais', dutch: 'Negende', english: 'Ninth', category: 'Ordinal Numbers' },
  { id: '400', latvian: 'Desmitais', dutch: 'Tiende', english: 'Tenth', category: 'Ordinal Numbers' },

  // --- ADJECTIVES & OPPOSITES (20) ---
  { id: '401', latvian: 'Liels', dutch: 'Groot', english: 'Big', category: 'Adjectives' },
  { id: '402', latvian: 'Mazs', dutch: 'Klein', english: 'Small', category: 'Adjectives' },
  { id: '403', latvian: 'Garš', dutch: 'Lang', english: 'Long', category: 'Adjectives' },
  { id: '404', latvian: 'Īss', dutch: 'Kort', english: 'Short', category: 'Adjectives' },
  { id: '405', latvian: 'Jauns', dutch: 'Nieuw', english: 'New', category: 'Adjectives' },
  { id: '406', latvian: 'Vecs', dutch: 'Oud', english: 'Old', category: 'Adjectives' },
  { id: '407', latvian: 'Labs', dutch: 'Goed', latvianAlt: ['Labi'], english: 'Good', category: 'Adjectives' },
  { id: '408', latvian: 'Slikts', dutch: 'Slecht', latvianAlt: ['Slikti'], english: 'Bad', category: 'Adjectives' },
  { id: '409', latvian: 'Karsts', dutch: 'Heet', english: 'Hot', category: 'Adjectives' },
  { id: '410', latvian: 'Auksts', dutch: 'Koud', english: 'Cold', category: 'Adjectives' },
  { id: '411', latvian: 'Ātrs', dutch: 'Snel', english: 'Fast', category: 'Adjectives' },
  { id: '412', latvian: 'Lēns', dutch: 'Langzaam', english: 'Slow', category: 'Adjectives' },
  { id: '413', latvian: 'Smags', dutch: 'Zwaar', english: 'Heavy', category: 'Adjectives' },
  { id: '414', latvian: 'Viegls', dutch: 'Licht', english: 'Light', category: 'Adjectives' },
  { id: '415', latvian: 'Pilns', dutch: 'Vol', english: 'Full', category: 'Adjectives' },
  { id: '416', latvian: 'Tukšs', dutch: 'Leeg', english: 'Empty', category: 'Adjectives' },
  { id: '417', latvian: 'Tīrs', dutch: 'Schoon', english: 'Clean', category: 'Adjectives' },
  { id: '418', latvian: 'Netīrs', dutch: 'Vuil', english: 'Dirty', category: 'Adjectives' },
  { id: '419', latvian: 'Skaists', dutch: 'Mooi', english: 'Beautiful', category: 'Adjectives' },
  { id: '420', latvian: 'Neglīts', dutch: 'Lelijk', english: 'Ugly', category: 'Adjectives' },

  // --- PREPOSITIONS & DIRECTIONS (10) ---
  { id: '421', latvian: 'Uz', dutch: 'Op', english: 'On', category: 'Prepositions' },
  { id: '422', latvian: 'Zem', dutch: 'Onder', english: 'Under', category: 'Prepositions' },
  { id: '423', latvian: 'Iekšā', dutch: 'In', english: 'In', category: 'Prepositions' },
  { id: '424', latvian: 'Ārā', dutch: 'Buiten', dutchAlt: ['Uit'], english: 'Outside', englishAlt: ['Out'], category: 'Prepositions' },
  { id: '425', latvian: 'Pie', dutch: 'Bij', english: 'At/By', category: 'Prepositions' },
  { id: '426', latvian: 'Ar', dutch: 'Met', english: 'With', category: 'Prepositions' },
  { id: '427', latvian: 'Bez', dutch: 'Zonder', english: 'Without', category: 'Prepositions' },
  { id: '428', latvian: 'Pirms', dutch: 'Voor', english: 'Before', category: 'Prepositions' },
  { id: '429', latvian: 'Pēc', dutch: 'Na', english: 'After', category: 'Prepositions' },
  { id: '430', latvian: 'Starp', dutch: 'Tussen', english: 'Between', category: 'Prepositions' },

  // --- CONJUNCTIONS & CONNECTORS (10) ---
  { id: '431', latvian: 'Un', dutch: 'En', english: 'And', category: 'Conjunctions' },
  { id: '432', latvian: 'Bet', dutch: 'Maar', english: 'But', category: 'Conjunctions' },
  { id: '433', latvian: 'Vai', dutch: 'Of', english: 'Or', category: 'Conjunctions' },
  { id: '434', latvian: 'Jo', dutch: 'Omdat', english: 'Because', category: 'Conjunctions' },
  { id: '435', latvian: 'Ja', dutch: 'Als', english: 'If', category: 'Conjunctions' },
  { id: '436', latvian: 'Tāpēc', dutch: 'Daarom', english: 'Therefore', category: 'Conjunctions' },
  { id: '437', latvian: 'Lai', dutch: 'Zodat', english: 'So that', category: 'Conjunctions' },
  { id: '438', latvian: 'Kaut arī', dutch: 'Hoewel', english: 'Although', category: 'Conjunctions' },
  { id: '439', latvian: 'Tomēr', dutch: 'Echter', english: 'However', category: 'Conjunctions' },
  { id: '440', latvian: 'Arī', dutch: 'Ook', english: 'Also', category: 'Conjunctions' },

  // --- QUESTION WORDS (10) ---
  { id: '441', latvian: 'Kas?', dutch: 'Wie/Wat?', english: 'Who/What?', category: 'Questions' },
  { id: '442', latvian: 'Kur?', dutch: 'Waar?', english: 'Where?', category: 'Questions' },
  { id: '443', latvian: 'Kad?', dutch: 'Wanneer?', english: 'When?', category: 'Questions' },
  { id: '444', latvian: 'Kāpēc?', dutch: 'Waarom?', english: 'Why?', category: 'Questions' },
  { id: '445', latvian: 'Kā?', dutch: 'Hoe?', english: 'How?', category: 'Questions' },
  { id: '446', latvian: 'Kurš?', dutch: 'Welke?', english: 'Which?', category: 'Questions' },
  { id: '447', latvian: 'Cik daudz?', dutch: 'Hoeveel?', english: 'How much?', category: 'Questions' },
  { id: '448', latvian: 'Cik ilgi?', dutch: 'Hoe lang?', english: 'How long?', category: 'Questions' },
  { id: '449', latvian: 'Uz kurieni?', dutch: 'Waarheen?', english: 'Where to?', category: 'Questions' },
  { id: '450', latvian: 'No kurienes?', dutch: 'Waarvandaan?', english: 'Where from?', category: 'Questions' },

  // --- TECHNOLOGY (10) ---
  { id: '451', latvian: 'Dators', dutch: 'Computer', english: 'Computer', category: 'Technology' },
  { id: '452', latvian: 'Telefons', dutch: 'Telefoon', english: 'Phone', category: 'Technology' },
  { id: '453', latvian: 'Ekrāns', dutch: 'Scherm', english: 'Screen', category: 'Technology' },
  { id: '454', latvian: 'Pele', dutch: 'Muis', english: 'Mouse', category: 'Technology' }, // Note: 'Pele' is also mouse animal, context differs.
  { id: '455', latvian: 'Tastatūra', dutch: 'Toetsenbord', english: 'Keyboard', category: 'Technology' },
  { id: '456', latvian: 'Internets', dutch: 'Internet', english: 'Internet', category: 'Technology' },
  { id: '457', latvian: 'Programma', dutch: 'Programma', english: 'Program', category: 'Technology' },
  { id: '458', latvian: 'Fails', dutch: 'Bestand', english: 'File', category: 'Technology' },
  { id: '459', latvian: 'Mape', dutch: 'Map', english: 'Folder', category: 'Technology' },
  { id: '460', latvian: 'Saite', dutch: 'Link', english: 'Link', category: 'Technology' },

  // --- KITCHEN & COOKING (20) ---
  { id: '461', latvian: 'Virtuve', dutch: 'Keuken', english: 'Kitchen', category: 'Kitchen' },
  { id: '462', latvian: 'Galds', dutch: 'Tafel', english: 'Table', category: 'Kitchen' },
  { id: '463', latvian: 'Krēsls', dutch: 'Stoel', english: 'Chair', category: 'Kitchen' },
  { id: '464', latvian: 'Ledusskapis', dutch: 'Koelkast', english: 'Refrigerator', category: 'Kitchen' },
  { id: '465', latvian: 'Plīts', dutch: 'Fornuis', english: 'Stove', category: 'Kitchen' },
  { id: '466', latvian: 'Cepeškrāsns', dutch: 'Oven', english: 'Oven', category: 'Kitchen' },
  { id: '467', latvian: 'Dakša', dutch: 'Vork', english: 'Fork', category: 'Kitchen' },
  { id: '468', latvian: 'Nazis', dutch: 'Mes', english: 'Knife', category: 'Kitchen' },
  { id: '469', latvian: 'Karote', dutch: 'Lepel', english: 'Spoon', category: 'Kitchen' },
  { id: '470', latvian: 'Šķīvis', dutch: 'Bord', english: 'Plate', category: 'Kitchen' },
  { id: '471', latvian: 'Krūze', dutch: 'Mok', english: 'Mug', category: 'Kitchen' },
  { id: '472', latvian: 'Glāze', dutch: 'Glas', english: 'Glass', category: 'Kitchen' },
  { id: '473', latvian: 'Panna', dutch: 'Pan', english: 'Pan', category: 'Kitchen' },
  { id: '474', latvian: 'Katls', dutch: 'Kookpan', dutchAlt: ['Pan', 'Kookpot'], english: 'Pot', category: 'Kitchen' },
  { id: '475', latvian: 'Bļoda', dutch: 'Kom', english: 'Bowl', category: 'Kitchen' },
  { id: '476', latvian: 'Brokastis', dutch: 'Ontbijt', english: 'Breakfast', category: 'Kitchen' },
  { id: '477', latvian: 'Pusdienas', dutch: 'Lunch', english: 'Lunch', category: 'Kitchen' },
  { id: '478', latvian: 'Vakariņas', dutch: 'Avondeten', dutchAlt: ['Diner'], english: 'Dinner', category: 'Kitchen' },
  { id: '479', latvian: 'Sāls', dutch: 'Zout', english: 'Salt', category: 'Kitchen' },
  { id: '480', latvian: 'Pipari', dutch: 'Peper', english: 'Pepper', category: 'Kitchen' },

  // --- HEALTH & MEDICAL (20) ---
  { id: '481', latvian: 'Veselība', dutch: 'Gezondheid', english: 'Health', category: 'Health' },
  { id: '482', latvian: 'Slimnīca', dutch: 'Ziekenhuis', english: 'Hospital', category: 'Health' },
  { id: '484', latvian: 'Zāles', dutch: 'Medicijnen', english: 'Medicine', category: 'Health' },
  { id: '485', latvian: 'Aptieka', dutch: 'Apotheek', english: 'Pharmacy', category: 'Health' },
  { id: '486', latvian: 'Sāpes', dutch: 'Pijn', english: 'Pain', category: 'Health' },
  { id: '487', latvian: 'Drudzis', dutch: 'Koorts', english: 'Fever', category: 'Health' },
  { id: '488', latvian: 'Klepus', dutch: 'Hoest', english: 'Cough', category: 'Health' },
  { id: '489', latvian: 'Iesnas', dutch: 'Verkoudheid', english: 'Cold/Runny nose', category: 'Health' }, // Often used for runny nose/cold
  { id: '490', latvian: 'Galvassāpes', dutch: 'Hoofdpijn', english: 'Headache', category: 'Health' },
  { id: '491', latvian: 'Zobārsts', dutch: 'Tandarts', english: 'Dentist', category: 'Health' },
  { id: '492', latvian: 'Asinis', dutch: 'Bloed', english: 'Blood', category: 'Health' },
  { id: '493', latvian: 'Sirds', dutch: 'Hart', english: 'Heart', category: 'Health' },
  { id: '494', latvian: 'Vēders', dutch: 'Buik', dutchAlt: ['Maag'], english: 'Belly', englishAlt: ['Stomach'], category: 'Health' },
  { id: '496', latvian: 'Alerģija', dutch: 'Allergie', english: 'Allergy', category: 'Health' },
  { id: '497', latvian: 'Vakcīna', dutch: 'Vaccin', english: 'Vaccine', category: 'Health' },
  { id: '498', latvian: 'Vīruss', dutch: 'Virus', english: 'Virus', category: 'Health' },
  { id: '499', latvian: 'Palīdzība', dutch: 'Hulp', english: 'Help', category: 'Health' },
  { id: '500', latvian: 'Dzīvība', dutch: 'Leven', english: 'Life', category: 'Health' },
  // --- NUMBERS & MATH (added) ---
  { id: '501', latvian: 'Četri', dutch: 'Vier', english: 'Four', category: 'Numbers & Math' },
  { id: '502', latvian: 'Pieci', dutch: 'Vijf', english: 'Five', category: 'Numbers & Math' },
  { id: '503', latvian: 'Seši', dutch: 'Zes', english: 'Six', category: 'Numbers & Math' },
  { id: '504', latvian: 'Septiņi', dutch: 'Zeven', english: 'Seven', category: 'Numbers & Math' },
  { id: '505', latvian: 'Astoņi', dutch: 'Acht', english: 'Eight', category: 'Numbers & Math' },
  { id: '506', latvian: 'Deviņi', dutch: 'Negen', english: 'Nine', category: 'Numbers & Math' },
  { id: '507', latvian: 'Vienpadsmit', dutch: 'Elf', english: 'Eleven', category: 'Numbers & Math' },
  { id: '508', latvian: 'Divpadsmit', dutch: 'Twaalf', english: 'Twelve', category: 'Numbers & Math' },
  { id: '509', latvian: 'Piecpadsmit', dutch: 'Vijftien', english: 'Fifteen', category: 'Numbers & Math' },
  { id: '510', latvian: 'Divdesmit', dutch: 'Twintig', english: 'Twenty', category: 'Numbers & Math' },
  { id: '511', latvian: 'Trīsdesmit', dutch: 'Dertig', english: 'Thirty', category: 'Numbers & Math' },
  { id: '512', latvian: 'Piecdesmit', dutch: 'Vijftig', english: 'Fifty', category: 'Numbers & Math' },

  // --- MONTHS, DAYS & SEASONS (added) ---
  { id: '513', latvian: 'Trešdiena', dutch: 'Woensdag', english: 'Wednesday', category: 'Months, Days & Seasons' },
  { id: '514', latvian: 'Ceturtdiena', dutch: 'Donderdag', english: 'Thursday', category: 'Months, Days & Seasons' },
  { id: '515', latvian: 'Piektdiena', dutch: 'Vrijdag', english: 'Friday', category: 'Months, Days & Seasons' },
  { id: '516', latvian: 'Sestdiena', dutch: 'Zaterdag', english: 'Saturday', category: 'Months, Days & Seasons' },
  { id: '517', latvian: 'Svētdiena', dutch: 'Zondag', english: 'Sunday', category: 'Months, Days & Seasons' },
  { id: '518', latvian: 'Marts', dutch: 'Maart', english: 'March', category: 'Months, Days & Seasons' },
  { id: '519', latvian: 'Aprīlis', dutch: 'April', english: 'April', category: 'Months, Days & Seasons' },
  { id: '520', latvian: 'Maijs', dutch: 'Mei', english: 'May', category: 'Months, Days & Seasons' },
  { id: '521', latvian: 'Jūnijs', dutch: 'Juni', english: 'June', category: 'Months, Days & Seasons' },
  { id: '522', latvian: 'Jūlijs', dutch: 'Juli', english: 'July', category: 'Months, Days & Seasons' },
  { id: '523', latvian: 'Augusts', dutch: 'Augustus', english: 'August', category: 'Months, Days & Seasons' },
  { id: '524', latvian: 'Septembris', dutch: 'September', english: 'September', category: 'Months, Days & Seasons' },
  { id: '525', latvian: 'Oktobris', dutch: 'Oktober', english: 'October', category: 'Months, Days & Seasons' },
  { id: '526', latvian: 'Novembris', dutch: 'November', english: 'November', category: 'Months, Days & Seasons' },
  { id: '527', latvian: 'Decembris', dutch: 'December', english: 'December', category: 'Months, Days & Seasons' },
  { id: '528', latvian: 'Mēnesis', dutch: 'Maand', english: 'Month', category: 'Months, Days & Seasons' },
  { id: '529', latvian: 'Diena', dutch: 'Dag', english: 'Day', category: 'Months, Days & Seasons' },

  // --- TIME WORDS (added) ---
  { id: '530', latvian: 'Šodien', dutch: 'Vandaag', english: 'Today', category: 'Time Words' },
  { id: '531', latvian: 'Rīt', dutch: 'Morgen', english: 'Tomorrow', category: 'Time Words' },
  { id: '532', latvian: 'Vakar', dutch: 'Gisteren', english: 'Yesterday', category: 'Time Words' },
  { id: '533', latvian: 'Tagad', dutch: 'Nu', english: 'Now', category: 'Time Words' },
  { id: '534', latvian: 'Vēlāk', dutch: 'Later', english: 'Later', category: 'Time Words' },
  { id: '535', latvian: 'Vienmēr', dutch: 'Altijd', english: 'Always', category: 'Time Words' },
  { id: '536', latvian: 'Nekad', dutch: 'Nooit', english: 'Never', category: 'Time Words' },
  { id: '537', latvian: 'Dažreiz', dutch: 'Soms', english: 'Sometimes', category: 'Time Words' },
  { id: '538', latvian: 'Bieži', dutch: 'Vaak', english: 'Often', category: 'Time Words' },
  { id: '539', latvian: 'Jau', dutch: 'Al', english: 'Already', category: 'Time Words' },
  { id: '540', latvian: 'Vēl', dutch: 'Nog', english: 'Still/Yet', category: 'Time Words' },
  { id: '541', latvian: 'Drīz', dutch: 'Binnenkort', english: 'Soon', category: 'Time Words' },
  { id: '542', latvian: 'Rīts', dutch: 'Ochtend', english: 'Morning', dutchAlt: ['Morgen'], category: 'Time Words' },
  { id: '543', latvian: 'Vakars', dutch: 'Avond', english: 'Evening', category: 'Time Words' },
  { id: '544', latvian: 'Nakts', dutch: 'Nacht', english: 'Night', category: 'Time Words' },
  { id: '545', latvian: 'Stunda', dutch: 'Uur', english: 'Hour', category: 'Time Words' },
  { id: '546', latvian: 'Minūte', dutch: 'Minuut', english: 'Minute', category: 'Time Words' },
  { id: '547', latvian: 'Nedēļas nogale', dutch: 'Weekend', english: 'Weekend', category: 'Time Words' },

  // --- COMMON VERBS (added) ---
  { id: '548', latvian: 'Būt', dutch: 'Zijn', english: 'To be', category: 'Common Verbs' },
  { id: '549', latvian: 'Iet', dutch: 'Gaan', english: 'To go', category: 'Common Verbs' },
  { id: '550', latvian: 'Nākt', dutch: 'Komen', english: 'To come', category: 'Common Verbs' },
  { id: '551', latvian: 'Gribēt', dutch: 'Willen', english: 'To want', category: 'Common Verbs' },
  { id: '552', latvian: 'Varēt', dutch: 'Kunnen', english: 'To be able to', englishAlt: ['Can', 'To be able'], category: 'Common Verbs' },
  { id: '553', latvian: 'Zināt', dutch: 'Weten', english: 'To know', category: 'Common Verbs' },
  { id: '554', latvian: 'Redzēt', dutch: 'Zien', english: 'To see', category: 'Common Verbs' },
  { id: '555', latvian: 'Teikt', dutch: 'Zeggen', english: 'To say', category: 'Common Verbs' },
  { id: '556', latvian: 'Dot', dutch: 'Geven', english: 'To give', category: 'Common Verbs' },
  { id: '557', latvian: 'Ņemt', dutch: 'Nemen', english: 'To take', category: 'Common Verbs' },
  { id: '558', latvian: 'Pirkt', dutch: 'Kopen', english: 'To buy', category: 'Common Verbs' },
  { id: '559', latvian: 'Runāt', dutch: 'Spreken', english: 'To speak', dutchAlt: ['Praten'], englishAlt: ['To talk'], category: 'Common Verbs' },
  { id: '560', latvian: 'Saprast', dutch: 'Begrijpen', english: 'To understand', category: 'Common Verbs' },
  { id: '561', latvian: 'Dzīvot', dutch: 'Wonen', english: 'To live', dutchAlt: ['Leven'], category: 'Common Verbs' },
  { id: '562', latvian: 'Mīlēt', dutch: 'Houden van', english: 'To love', category: 'Common Verbs' },
  { id: '563', latvian: 'Gaidīt', dutch: 'Wachten', english: 'To wait', category: 'Common Verbs' },
  { id: '564', latvian: 'Palīdzēt', dutch: 'Helpen', english: 'To help', category: 'Common Verbs' },
  { id: '565', latvian: 'Atvērt', dutch: 'Openen', english: 'To open', dutchAlt: ['Opendoen'], category: 'Common Verbs' },
  { id: '566', latvian: 'Aizvērt', dutch: 'Sluiten', english: 'To close', dutchAlt: ['Dichtdoen'], category: 'Common Verbs' },
  { id: '567', latvian: 'Sēdēt', dutch: 'Zitten', english: 'To sit', category: 'Common Verbs' },
  { id: '568', latvian: 'Stāvēt', dutch: 'Staan', english: 'To stand', category: 'Common Verbs' },
  { id: '569', latvian: 'Braukt', dutch: 'Rijden', english: 'To drive', englishAlt: ['To ride'], category: 'Common Verbs' },
  { id: '570', latvian: 'Mācīties', dutch: 'Leren', english: 'To learn', latvianAlt: ['Mācīt'], category: 'Common Verbs' },
  { id: '571', latvian: 'Mācīt', dutch: 'Lesgeven', english: 'To teach', dutchAlt: ['Onderwijzen', 'Leren'], category: 'Common Verbs' },
  { id: '572', latvian: 'Domāt', dutch: 'Denken', english: 'To think', category: 'Common Verbs' },
  { id: '573', latvian: 'Klausīties', dutch: 'Luisteren', english: 'To listen', category: 'Common Verbs' },
  { id: '574', latvian: 'Skatīties', dutch: 'Kijken', english: 'To watch', englishAlt: ['To look'], category: 'Common Verbs' },
  { id: '575', latvian: 'Spēlēt', dutch: 'Spelen', english: 'To play', category: 'Common Verbs' },
  { id: '576', latvian: 'Gatavot', dutch: 'Koken', english: 'To cook', category: 'Common Verbs' },
  { id: '577', latvian: 'Maksāt', dutch: 'Betalen', english: 'To pay', category: 'Common Verbs' },
  { id: '578', latvian: 'Meklēt', dutch: 'Zoeken', english: 'To search', englishAlt: ['To look for'], category: 'Common Verbs' },
  { id: '579', latvian: 'Atrast', dutch: 'Vinden', english: 'To find', category: 'Common Verbs' },
  { id: '580', latvian: 'Aizmirst', dutch: 'Vergeten', english: 'To forget', category: 'Common Verbs' },
  { id: '581', latvian: 'Atcerēties', dutch: 'Onthouden', english: 'To remember', dutchAlt: ['Herinneren', 'Zich herinneren'], category: 'Common Verbs' },
  { id: '582', latvian: 'Smieties', dutch: 'Lachen', english: 'To laugh', category: 'Common Verbs' },
  { id: '583', latvian: 'Raudāt', dutch: 'Huilen', english: 'To cry', category: 'Common Verbs' },
  { id: '584', latvian: 'Dziedāt', dutch: 'Zingen', english: 'To sing', category: 'Common Verbs' },
  { id: '585', latvian: 'Dejot', dutch: 'Dansen', english: 'To dance', latvianAlt: ['Dejošana'], category: 'Common Verbs' },
  { id: '586', latvian: 'Skriet', dutch: 'Rennen', english: 'To run', latvianAlt: ['Skriešana'], dutchAlt: ['Hardlopen'], category: 'Common Verbs' },
  { id: '587', latvian: 'Peldēt', dutch: 'Zwemmen', english: 'To swim', latvianAlt: ['Peldēšana'], category: 'Common Verbs' },

  // --- PLACES (added) ---
  { id: '588', latvian: 'Pilsēta', dutch: 'Stad', english: 'City', englishAlt: ['Town'], category: 'Places' },
  { id: '589', latvian: 'Ciems', dutch: 'Dorp', english: 'Village', category: 'Places' },
  { id: '590', latvian: 'Iela', dutch: 'Straat', english: 'Street', category: 'Places' },
  { id: '591', latvian: 'Veikals', dutch: 'Winkel', english: 'Shop', englishAlt: ['Store'], category: 'Places' },
  { id: '592', latvian: 'Tirgus', dutch: 'Markt', english: 'Market', category: 'Places' },
  { id: '593', latvian: 'Baznīca', dutch: 'Kerk', english: 'Church', category: 'Places' },
  { id: '594', latvian: 'Parks', dutch: 'Park', english: 'Park', category: 'Places' },
  { id: '595', latvian: 'Pludmale', dutch: 'Strand', english: 'Beach', category: 'Places' },
  { id: '596', latvian: 'Restorāns', dutch: 'Restaurant', english: 'Restaurant', category: 'Places' },
  { id: '597', latvian: 'Kafejnīca', dutch: 'Café', english: 'Café', dutchAlt: ['Koffietent'], englishAlt: ['Cafe'], category: 'Places' },
  { id: '598', latvian: 'Muzejs', dutch: 'Museum', english: 'Museum', category: 'Places' },
  { id: '599', latvian: 'Stacija', dutch: 'Station', english: 'Station', category: 'Places' },
  { id: '600', latvian: 'Lidosta', dutch: 'Vliegveld', english: 'Airport', dutchAlt: ['Luchthaven'], category: 'Places' },
  { id: '601', latvian: 'Banka', dutch: 'Bank', english: 'Bank', category: 'Places' },
  { id: '602', latvian: 'Pasts', dutch: 'Postkantoor', english: 'Post office', category: 'Places' },
  { id: '603', latvian: 'Skola', dutch: 'School', english: 'School', category: 'Places' },
  { id: '604', latvian: 'Birojs', dutch: 'Kantoor', english: 'Office', category: 'Places' },
  { id: '605', latvian: 'Tilts', dutch: 'Brug', english: 'Bridge', category: 'Places' },
  { id: '606', latvian: 'Laukums', dutch: 'Plein', english: 'Square', category: 'Places' },
  { id: '607', latvian: 'Centrs', dutch: 'Centrum', english: 'Centre', englishAlt: ['Center', 'City centre'], category: 'Places' },

  // --- WEATHER (added) ---
  { id: '608', latvian: 'Laiks', dutch: 'Weer', english: 'Weather', dutchAlt: ['Tijd'], englishAlt: ['Time'], category: 'Weather' },
  { id: '609', latvian: 'Saule', dutch: 'Zon', english: 'Sun', category: 'Weather' },
  { id: '610', latvian: 'Lietus', dutch: 'Regen', english: 'Rain', category: 'Weather' },
  { id: '611', latvian: 'Sniegs', dutch: 'Sneeuw', english: 'Snow', category: 'Weather' },
  { id: '612', latvian: 'Vējš', dutch: 'Wind', english: 'Wind', category: 'Weather' },
  { id: '613', latvian: 'Mākonis', dutch: 'Wolk', english: 'Cloud', category: 'Weather' },
  { id: '614', latvian: 'Negaiss', dutch: 'Onweer', english: 'Thunderstorm', englishAlt: ['Storm'], category: 'Weather' },
  { id: '615', latvian: 'Migla', dutch: 'Mist', english: 'Fog', dutchAlt: ['Nevel'], englishAlt: ['Mist'], category: 'Weather' },

  // --- GROCERIES (added) ---
  { id: '616', latvian: 'Maize', dutch: 'Brood', english: 'Bread', category: 'Groceries' },
  { id: '617', latvian: 'Siers', dutch: 'Kaas', english: 'Cheese', category: 'Groceries' },
  { id: '618', latvian: 'Sviests', dutch: 'Boter', english: 'Butter', category: 'Groceries' },
  { id: '619', latvian: 'Ola', dutch: 'Ei', english: 'Egg', category: 'Groceries' },
  { id: '620', latvian: 'Gaļa', dutch: 'Vlees', english: 'Meat', category: 'Groceries' },
  { id: '621', latvian: 'Vista', dutch: 'Kip', english: 'Chicken', category: 'Groceries' },
  { id: '622', latvian: 'Cukurs', dutch: 'Suiker', english: 'Sugar', category: 'Groceries' },
  { id: '623', latvian: 'Rīsi', dutch: 'Rijst', english: 'Rice', category: 'Groceries' },
  { id: '624', latvian: 'Zupa', dutch: 'Soep', english: 'Soup', category: 'Groceries' },
  { id: '625', latvian: 'Kūka', dutch: 'Taart', english: 'Cake', dutchAlt: ['Gebak', 'Cake'], category: 'Groceries' },
  { id: '626', latvian: 'Saldējums', dutch: 'IJs', english: 'Ice cream', latvianAlt: ['Ledus'], category: 'Groceries' },
  { id: '627', latvian: 'Šokolāde', dutch: 'Chocolade', english: 'Chocolate', category: 'Groceries' },
  { id: '628', latvian: 'Rupjmaize', dutch: 'Roggebrood', english: 'Rye bread', englishAlt: ['Black bread'], category: 'Groceries' },
  { id: '629', latvian: 'Biezpiens', dutch: 'Kwark', english: 'Cottage cheese', englishAlt: ['Quark'], category: 'Groceries' },

  // --- LOVE & RELATIONSHIPS (added) ---
  { id: '630', latvian: 'Mīlestība', dutch: 'Liefde', english: 'Love', category: 'Love & Relationships' },
  { id: '631', latvian: 'Mīļā', dutch: 'Lieverd', english: 'Darling', latvianAlt: ['Mīļais'], dutchAlt: ['Schat'], englishAlt: ['Sweetheart', 'Honey'], category: 'Love & Relationships' },
  { id: '632', latvian: 'Skūpsts', dutch: 'Kus', english: 'Kiss', dutchAlt: ['Zoen'], category: 'Love & Relationships' },
  { id: '633', latvian: 'Apskāviens', dutch: 'Knuffel', english: 'Hug', category: 'Love & Relationships' },
  { id: '634', latvian: 'Draudzene', dutch: 'Vriendin', english: 'Girlfriend', category: 'Love & Relationships' },
  { id: '635', latvian: 'Kāzas', dutch: 'Bruiloft', english: 'Wedding', category: 'Love & Relationships' },
  { id: '636', latvian: 'Man tevis pietrūkst.', dutch: 'Ik mis je.', english: 'I miss you.', latvianAlt: ['Tu man pietrūksti.'], dutchAlt: ['Ik mis jou.'], isSentence: true, category: 'Love & Relationships' },
  { id: '637', latvian: 'Tu esi skaista.', dutch: 'Je bent mooi.', english: 'You are beautiful.', latvianAlt: ['Tu esi skaists.'], dutchAlt: ['Jij bent mooi.'], isSentence: true, category: 'Love & Relationships' },
  { id: '638', latvian: 'Es domāju par tevi.', dutch: 'Ik denk aan je.', english: 'I am thinking of you.', dutchAlt: ['Ik denk aan jou.'], englishAlt: ['I\'m thinking of you.'], isSentence: true, category: 'Love & Relationships' },
  { id: '639', latvian: 'Vai tu mani mīli?', dutch: 'Hou je van mij?', english: 'Do you love me?', dutchAlt: ['Hou jij van mij?'], isSentence: true, category: 'Love & Relationships' },
  { id: '640', latvian: 'Tu mani dari laimīgu.', dutch: 'Jij maakt me gelukkig.', english: 'You make me happy.', dutchAlt: ['Je maakt me gelukkig.'], isSentence: true, category: 'Love & Relationships' },
  { id: '641', latvian: 'Vai iesim kopā vakariņās?', dutch: 'Zullen we samen uit eten gaan?', english: 'Shall we go out for dinner together?', isSentence: true, category: 'Love & Relationships' },
  { id: '642', latvian: 'Saldus sapņus!', dutch: 'Slaap lekker!', english: 'Sweet dreams!', dutchAlt: ['Welterusten!'], isSentence: true, category: 'Love & Relationships' },
  { id: '643', latvian: 'Paldies, ka tu esi.', dutch: 'Bedankt dat je er bent.', english: 'Thank you for being there.', dutchAlt: ['Dank je dat je er bent.'], isSentence: true, category: 'Love & Relationships' },

  // --- SOCIAL (added) ---
  { id: '644', latvian: 'Kā tev gāja?', dutch: 'Hoe ging het?', english: 'How did it go?', isSentence: true, category: 'Social' },
  { id: '645', latvian: 'Kas jauns?', dutch: 'Wat is er nieuw?', english: 'What\'s new?', isSentence: true, category: 'Social' },
  { id: '646', latvian: 'Man iet labi, paldies.', dutch: 'Het gaat goed, dank je.', english: 'I\'m fine, thank you.', latvianAlt: ['Labi, paldies.'], dutchAlt: ['Goed, dank je.', 'Het gaat goed, bedankt.'], englishAlt: ['I am fine, thank you.'], isSentence: true, category: 'Social' },
  { id: '647', latvian: 'Un tev?', dutch: 'En met jou?', english: 'And you?', dutchAlt: ['En jij?'], isSentence: true, category: 'Social' },
  { id: '648', latvian: 'Līdz rītam!', dutch: 'Tot morgen!', english: 'See you tomorrow!', isSentence: true, category: 'Social' },
  { id: '649', latvian: 'Atā!', dutch: 'Doei!', english: 'Bye!', latvianAlt: ['Čau!'], dutchAlt: ['Dag!'], isSentence: true, category: 'Social' },
  { id: '650', latvian: 'Nav par ko.', dutch: 'Graag gedaan.', english: 'You\'re welcome.', dutchAlt: ['Geen dank.'], englishAlt: ['You are welcome.'], isSentence: true, category: 'Social' },
  { id: '651', latvian: 'Piedod.', dutch: 'Sorry.', english: 'Sorry.', latvianAlt: ['Atvaino.'], dutchAlt: ['Het spijt me.'], englishAlt: ['I\'m sorry.'], isSentence: true, category: 'Social' },
  { id: '652', latvian: 'Viss kārtībā.', dutch: 'Alles is in orde.', english: 'Everything is OK.', dutchAlt: ['Alles goed.', 'Prima.'], englishAlt: ['Everything is fine.'], isSentence: true, category: 'Social' },
  { id: '653', latvian: 'Es nezinu, kur tas ir.', dutch: 'Ik weet niet waar het is.', english: 'I don\'t know where it is.', isSentence: true, category: 'Social' },
  { id: '654', latvian: 'Vai drīkstu?', dutch: 'Mag ik?', english: 'May I?', isSentence: true, category: 'Social' },
];

export const getBaseVocabulary = (): VocabularyItem[] => {
  // Returns a shallow copy - vocabulary items are read-only so this is safe
  return [...initialVocabulary];
};

export const getCategories = (): string[] => {
  const categories = new Set(initialVocabulary.map(item => item.category).filter(Boolean) as string[]);
  return Array.from(categories).sort();
};

type LangKey = 'latvian' | 'dutch' | 'english';

const targetKey = (direction: LanguageDirection): LangKey => {
  switch (direction) {
    case LanguageDirection.NL_TO_LV:
      return 'latvian';
    case LanguageDirection.LV_TO_EN:
      return 'english';
    case LanguageDirection.LV_TO_NL:
    default:
      return 'dutch';
  }
};

/** The answer we show to the user as "the" correct translation. */
export const getPrimaryAnswer = (item: VocabularyItem, direction: LanguageDirection): string =>
  item[targetKey(direction)];

/**
 * Every answer that counts as correct for this item and direction:
 * the main translation, its slash-separated variants ("Wie/Wat?"),
 * listed alternatives, and the informal/formal "alsjeblieft"/"alstublieft" swap.
 */
export const getAcceptedAnswers = (item: VocabularyItem, direction: LanguageDirection): string[] => {
  const key = targetKey(direction);
  const primary = item[key];
  const alts = item[`${key}Alt` as const] ?? [];

  const answers = new Set<string>([primary, ...alts]);
  if (primary.includes('/')) {
    primary.split('/').forEach(part => answers.add(part.trim()));
  }

  if (key === 'dutch') {
    for (const answer of Array.from(answers)) {
      if (/alstublieft/i.test(answer)) answers.add(answer.replace(/alstublieft/gi, 'alsjeblieft'));
      if (/alsjeblieft/i.test(answer)) answers.add(answer.replace(/alsjeblieft/gi, 'alstublieft'));
    }
  }

  return Array.from(answers).filter(Boolean);
};
