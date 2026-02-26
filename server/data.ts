import type { Recipe, ShoppingList, WeeklyPlan } from "./types.js";

export const recipes: Recipe[] = [
  {
    id: "1",
    name: "Kyllingwok med hoisinsaus",
    imageUrl:
      "https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/yf0kinkj2um0ytfnwtjt/kyllingwok-med-hoisinsaus",
    ingredients: [
      { id: "1-1", name: "olje", amount: "1 ss" },
      { id: "1-2", name: "kyllingfilet", amount: "300 g" },
      { id: "1-3", name: "paprika", amount: "1 stk" },
      { id: "1-4", name: "brokkoli", amount: "1 stk" },
      { id: "1-5", name: "eggenudler", amount: "250 g" },
      { id: "1-6", name: "hoisin woksaus", amount: "0,7 dl" },
      { id: "1-7", name: "salt", amount: "etter smak" },
      { id: "1-8", name: "pepper", amount: "etter smak" },
    ],
    description:
      "1. Kutt kyllingfiletene i strimler, og stek strimlene på høy varme i litt olje, til de er gylne rundt hele. 2. Ta kyllingen ut, ha i grønnsakene og wok dem under omrøring i 2-3 minutter. 3. Nudler: Kok opp en kjele med lettsaltet vann og kok nudlene etter anvisningen på pakken. Hell av vannet og damp nudlene tørre. 4. Kyllingwok: Stek kyllingen og grønnsakene videre i ca 3-5 minutter. 5. Ha nudlene i woken sammen med kyllingen, grønnsakene og til slutt woksausen. Smak til med salt og pepper.",
  },
  {
    id: "2",
    name: "Kyllingtomatgryte med poteter",
    imageUrl:
      "https://gfx.nrk.no/uPOAYA1j48vqP0Ua-rsGUgY4l_-fcwhK_VxGegNd0MjQ.jpg",
    ingredients: [
      { id: "2-1", name: "olje", amount: "2 ss" },
      { id: "2-2", name: "rødløk, hakket", amount: "1 stk" },
      {
        id: "2-3",
        name: "kyllingfileter, skåret i terninger",
        amount: "3-4 stk",
      },
      { id: "2-4", name: "sammalt hvetemel", amount: "1 ss" },
      { id: "2-5", name: "hakkede tomater", amount: "3 bokser" },
      { id: "2-6", name: "poteter, skrelt og delt i 4", amount: "4-6 stk" },
      { id: "2-7", name: "gulrøtter, skrelte og revet", amount: "2 stk" },
      { id: "2-8", name: "svarte bønner, skylt og avrent", amount: "1 boks" },
      { id: "2-9", name: "honning", amount: "1 ts" },
      { id: "2-10", name: "salt", amount: "1-2 ts" },
      { id: "2-11", name: "pepper", amount: "1-2 ts" },
    ],
    description:
      "1. Varm opp rapsoljen på middels varme i en stor gryte, for eksempel en jerngryte. Ha i den hakkede løken. La løken surre til den blir blank. 2. Ha i kyllingen og stek den sammen med løken et par minutter. Bland inn melet og ha i tomatene, poteter og gulrøtter. La retten stå og småkoke under lokk i 20-30 minutter, til kyllingen er gjennomkokt og potetene møre. 3. Ha i bønnene og honningen. La gryten småkoke på svak varme i 5 minutter. Dersom gryten er for tykk, kan du ha i litt vann. Smak til med salt og pepper.",
  },
  {
    id: "3",
    name: "Fiskegrateng med potet",
    imageUrl:
      "https://gfx.nrk.no/oM9peiOYFx27-2LM6TDXKAvheZ7fP_Oo6hlQVcqKar1w.jpg",
    ingredients: [
      { id: "3-1", name: "mandel-poteter", amount: "600 g" },
      { id: "3-2", name: "hvitløk", amount: "2 fedd" },
      { id: "3-3", name: "torsk", amount: "600 g" },
      { id: "3-4", name: "melk", amount: "1,5-2 dl" },
      { id: "3-5", name: "smør", amount: "2 ss" },
      { id: "3-6", name: "salt", amount: "1 ts" },
      { id: "3-7", name: "pepper", amount: "1/2 ts" },
      { id: "3-8", name: "parmesan", amount: "50 g" },
    ],
    description:
      "1. Sett ovnen på 200 grader varmluft. 2. Skrell potetene, del dem i ca. 1 cm tykke skiver og legg dem i en kjele sammen med hele hvitløkfedd. Fyll opp med vann slik at det så vidt dekker og kok potetskivene møre under lokk. Det tar ca. 10–15 minutter, avhengig av potetene. 3. Kutt fisken i omtrent 2x2 cm store biter. 4. Når potetene er ferdig kokt siles vannet av og potetenes dampes lett. Tilsett melk og smør eller olivenolje og bland godt sammen med en visp eller potetmoser. 5. Tilsett salt, pepper og fiskebitene. Vend godt sammen med en slikkepott og ha det hele over i en ildfast form. Dryss revet parmesan på toppen. 6. Sett formen på et stekebrett kledd med bakepapir (det kan renne litt av formen og da er det greit å ha et bakepapir under) og sett det hele inn i ovnen. Stek i ca. 20 minutter til alt er gjennomvarmt og overflaten er gyllen. Skru gjerne på grillelementet mot slutten, men pass godt på slik at det ikke svir seg. Server gjerne fiskegratengen med ovnsbakte grønnsaker, som du med fordel kan steke samtidig med fisken, og en frisk salat.",
  },
  {
    id: "4",
    name: "Kyllinggryte med asiatiske smaker",
    imageUrl:
      "https://gfx.nrk.no/ZusUD8HykJ-p__FrSfmHvA3EzKhMoJLo5qRxnqw8_rRw.jpg",
    ingredients: [
      { id: "4-1", name: "kyllingfilet", amount: "600 g" },
      { id: "4-2", name: "gulrøtter", amount: "2 stk" },
      { id: "4-3", name: "rød chili", amount: "1 stk" },
      { id: "4-4", name: "spisspaprika", amount: "2 stk" },
      { id: "4-5", name: "hvitløk", amount: "2 fedd" },
      { id: "4-6", name: "ingefær", amount: "3 cm" },
      { id: "4-7", name: "red curry paste", amount: "2 ts" },
      { id: "4-8", name: "lime", amount: "1/2 stk" },
      { id: "4-9", name: "salt", amount: "etter smak" },
      { id: "4-10", name: "frisk koriander", amount: "til pynt" },
      { id: "4-11", name: "olje til steking", amount: "etter behov" },
      { id: "4-12", name: "kremfløte", amount: "1 1/2 dl" },
      { id: "4-13", name: "kokosmelk", amount: "2 dl" },
      { id: "4-14", name: "utblandet kyllingbuljong", amount: "3 dl" },
      { id: "4-15", name: "soyasaus", amount: "1 ss" },
      { id: "4-16", name: "maisenna", amount: "2 ss" },
      { id: "4-17", name: "ris", amount: "etter behov" },
    ],
    description:
      "1. Start med å koke risen. Det er trolig den som kommer til å ta lengst tid. 2. Skjær kyllingfiletene i biter, og stek dem kjapt i en tykkbunnet gryte eller stekepanne i en klunk med olje. Mens kyllingen steker skreller du gulrøttene og skraper frøene ut av chilien. 3. Kutt gulrøttene og paprikaen i terninger. Finhakk chilien. Ha gulrot, paprika og chili sammen med kyllingen når den har fått litt farge. Skrell og finhakk hvitløkfeddene og ingefæren, og ha i sammen med resten. 4. Lag en liten grop i midten av stekepannen eller gryten, og legg i et par teskjeer med curry paste. La karripastaen frese et par minutter i pannen. Tilsett litt mer olje dersom det er tørt i bunnen. 5. Samtidig som kyllingen og grønnsakene surrer, gjør du klart ingrediensene til sausen. Ha kremfløten, kokosmelken, kyllingbuljongen og soyasausen i en bolle. Rør maisennaen ut i en liten skvett med kaldt vann, og ha den i fløteblandingen. 6. Hell sausen over kyllingen og grønnsakene. Kok opp og la gryten trekke i 5–7 minutter, til den tykner og kyllingen er gjennomstekt. Skvis over limesaft og smak til med salt rett før servering. Server kyllinggryten med et dryss av frisk koriander, grovhakkede peanøtter og kokt ris.",
  },
  {
    id: "5",
    name: "Koreansk sesamkylling",
    imageUrl:
      "https://gfx.nrk.no/UIqHfpyMEhWGyMx3WaxnrAPnxvecwrIy4IRN-urseCqg.jpg",
    ingredients: [
      { id: "5-1", name: "kylling bryst", amount: "750 g" },
      { id: "5-2", name: "hvetemel", amount: "100 g" },
      { id: "5-3", name: "maisenna", amount: "75 g" },
      { id: "5-4", name: "salt", amount: "1 ts" },
      { id: "5-5", name: "pepper", amount: "1/2 ts" },
      { id: "5-6", name: "eggehvite", amount: "1 stk" },
      { id: "5-7", name: "olje til steking", amount: "etter behov" },
      { id: "5-8", name: "hakket hvitløk", amount: "1 fedd" },
      { id: "5-9", name: "ketchup", amount: "2 ss" },
      { id: "5-10", name: "soyasaus", amount: "2 ss" },
      { id: "5-11", name: "flytende honning", amount: "1-2 ss" },
      { id: "5-12", name: "sesamolje", amount: "1 ss" },
      { id: "5-13", name: "riseddik", amount: "1 ss" },
      { id: "5-14", name: "brunt sukker", amount: "1 ss" },
      { id: "5-15", name: "sesamfrø", amount: "1 ss" },
      { id: "5-16", name: "kokt ris", amount: "til servering" },
      { id: "5-17", name: "hakket vårløk", amount: "til pynt" },
      { id: "5-18", name: "ekstra sesamfrø", amount: "til pynt" },
    ],
    description:
      "1. Del kyllingen i terninger på 3 × 3 centimeter. Hell eggehviten over kyllingen så alt dekkes. 2. Bland mel, maisenna, salt og pepper i en bolle, og vend kyllingen i melblandingen. Eggehviten gjør at blandingen fester seg til kjøttet. 3. Varm opp olje til frityrsteking på middels høy varme. Bruk nok olje til at den dekker kyllingen. Frityrstek kjøttet i cirka fem minutter eller til kyllingen får en lys gyllen farge og blir sprø. Legg i litt og litt av gangen, så ikke temperaturen blir for lav. Legg kyllingen på en rist eller et papir til avrenning. 4. Bland sammen alle ingrediensene til sausen. Smak til med honning etter hvor søt saus du vil ha. 5. Gjør klar en stekepanne på middels høy varme og tilsett sausen når pannen er varm. La den putre i cirka ett minutt, senk så varmen og ha i kyllingen. Vend kyllingen i sausen og la den få sette seg i ett minutt. Ta stekepannen av varmen. 6. Dryss over vårløk og ekstra sesamfrø. Serveres med kokt ris.",
  },
];

export const weeklyPlans: WeeklyPlan[] = [
  {
    id: "1",
    meals: [],
  },
];

export const shoppingLists: ShoppingList[] = [
  {
    id: "1",
    weeklyPlanId: "1",
    items: [],
  },
];
