import type { Recipe } from "./types.js";

export const recipesEn: Recipe[] = [
  {
    id: "1",
    name: "Chicken Wok with Hoisin Sauce",
    imageUrl:
      "https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/yf0kinkj2um0ytfnwtjt/kyllingwok-med-hoisinsaus",
    ingredients: [
      { id: "1-1", name: "oil", amount: "1 tbsp" },
      { id: "1-2", name: "chicken breast", amount: "300 g" },
      { id: "1-3", name: "bell pepper", amount: "1 pc" },
      { id: "1-4", name: "broccoli", amount: "1 pc" },
      { id: "1-5", name: "egg noodles", amount: "250 g" },
      { id: "1-6", name: "hoisin wok sauce", amount: "0.7 dl" },
      { id: "1-7", name: "salt", amount: "to taste" },
      { id: "1-8", name: "pepper", amount: "to taste" },
    ],
    description:
      "A simple wok recipe with chicken and noodles — quick, tasty and a bit healthier. Here we use pre-cut, crispy vegetables like cabbage and broccoli. Mix it all together with a flavourful hoisin wok sauce. Asian chicken wok is quick to make and perfect weeknight dinner for the whole family.",
    steps:
      "1. Cut the chicken breasts into strips and fry on high heat in a little oil until golden all around. 2. Remove the chicken, add the vegetables and stir-fry for 2-3 minutes. 3. Noodles: Bring a pot of lightly salted water to a boil and cook the noodles according to the package instructions. Drain the water and steam the noodles dry. 4. Chicken wok: Continue frying the chicken and vegetables for about 3-5 minutes. 5. Add the noodles to the wok together with the chicken, vegetables and finally the wok sauce. Season with salt and pepper.",
  },
  {
    id: "2",
    name: "Chicken Tomato Stew with Potatoes",
    imageUrl:
      "https://gfx.nrk.no/uPOAYA1j48vqP0Ua-rsGUgY4l_-fcwhK_VxGegNd0MjQ.jpg",
    ingredients: [
      { id: "2-1", name: "oil", amount: "2 tbsp" },
      { id: "2-2", name: "red onion, chopped", amount: "1 pc" },
      {
        id: "2-3",
        name: "chicken breasts, diced",
        amount: "3-4 pcs",
      },
      { id: "2-4", name: "whole wheat flour", amount: "1 tbsp" },
      { id: "2-5", name: "chopped tomatoes", amount: "3 cans" },
      { id: "2-6", name: "potatoes, peeled and quartered", amount: "5 pcs" },
      { id: "2-7", name: "carrots, peeled and grated", amount: "2 pcs" },
      { id: "2-8", name: "black beans, rinsed and drained", amount: "1 can" },
      { id: "2-9", name: "honey", amount: "1 tsp" },
      { id: "2-10", name: "salt", amount: "1 tsp" },
      { id: "2-11", name: "pepper", amount: "1 tsp" },
    ],
    description:
      "A stew that cooks itself is perfect for weekdays. All you need to do is combine everything in the pot and let it simmer for half an hour.",
    steps:
      "1. Heat the rapeseed oil over medium heat in a large pot, such as a cast-iron pot. Add the chopped onion. Let it sauté until translucent. 2. Add the chicken and fry together with the onion for a couple of minutes. Stir in the flour and add the tomatoes, potatoes and carrots. Let the dish simmer under a lid for 20-30 minutes, until the chicken is cooked through and the potatoes are tender. 3. Add the beans and honey. Let the stew simmer on low heat for 5 minutes. If the stew is too thick, add a little water. Season with salt and pepper.",
  },
  {
    id: "3",
    name: "Fish Gratin with Potato",
    imageUrl:
      "https://gfx.nrk.no/oM9peiOYFx27-2LM6TDXKAvheZ7fP_Oo6hlQVcqKar1w.jpg",
    ingredients: [
      { id: "3-1", name: "waxy potatoes", amount: "600 g" },
      { id: "3-2", name: "garlic", amount: "2 cloves" },
      { id: "3-3", name: "cod", amount: "600 g" },
      { id: "3-4", name: "milk", amount: "2 dl" },
      { id: "3-5", name: "butter", amount: "2 tbsp" },
      { id: "3-6", name: "salt", amount: "1 tsp" },
      { id: "3-7", name: "pepper", amount: "1 tsp" },
      { id: "3-8", name: "parmesan", amount: "50 g" },
    ],
    description:
      "This dish is a classic that originally uses dried salted cod. Then it is called brandade. But it is also really good when made with fresh fish.",
    steps:
      "1. Preheat the oven to 200°C fan. 2. Peel the potatoes, cut them into roughly 1 cm thick slices and place them in a pot together with whole garlic cloves. Fill with water so it just covers and cook the potato slices until tender under a lid. It takes about 10-15 minutes, depending on the potatoes. 3. Cut the fish into roughly 2x2 cm pieces. 4. When the potatoes are done, drain the water and steam the potatoes lightly. Add milk and butter or olive oil and mix well with a whisk or potato masher. 5. Add salt, pepper and the fish pieces. Fold together with a spatula and transfer to an oven-safe dish. Sprinkle grated parmesan on top. 6. Place the dish on a baking tray lined with parchment paper and put it in the oven. Bake for about 20 minutes until everything is heated through and the surface is golden. You can turn on the grill element towards the end, but watch carefully so it doesn't burn. Serve the fish gratin with oven-roasted vegetables, which you can roast at the same time as the fish, and a fresh salad.",
  },
  {
    id: "4",
    name: "Chicken Stew with Asian Flavours",
    imageUrl:
      "https://gfx.nrk.no/ZusUD8HykJ-p__FrSfmHvA3EzKhMoJLo5qRxnqw8_rRw.jpg",
    ingredients: [
      { id: "4-1", name: "chicken breast", amount: "600 g" },
      { id: "4-2", name: "carrots", amount: "2 pcs" },
      { id: "4-3", name: "red chilli", amount: "1 pc" },
      { id: "4-4", name: "bell peppers", amount: "2 pcs" },
      { id: "4-5", name: "garlic", amount: "2 cloves" },
      { id: "4-6", name: "ginger", amount: "3 cm" },
      { id: "4-7", name: "red curry paste", amount: "2 tsp" },
      { id: "4-8", name: "lime", amount: "1 pc" },
      { id: "4-9", name: "salt", amount: "to taste" },
      { id: "4-10", name: "fresh coriander", amount: "for garnish" },
      { id: "4-11", name: "oil for frying", amount: "as needed" },
      { id: "4-12", name: "heavy cream", amount: "1 dl" },
      { id: "4-13", name: "coconut milk", amount: "2 dl" },
      { id: "4-14", name: "chicken broth", amount: "3 dl" },
      { id: "4-15", name: "soy sauce", amount: "1 tbsp" },
      { id: "4-16", name: "cornstarch", amount: "2 tbsp" },
      { id: "4-17", name: "rice", amount: "as needed" },
    ],
    description:
      "This chicken stew is great whether it's a busy weekday or you want to make something nice over the weekend. Red curry paste adds Asian flavours to this dish. Feel free to experiment to find the right amount.",
    steps:
      "1. Start by cooking the rice. It will likely take the longest. 2. Cut the chicken breasts into pieces and fry them quickly in a thick-bottomed pot or frying pan with a splash of oil. While the chicken is frying, peel the carrots and scrape the seeds out of the chilli. 3. Cut the carrots and peppers into cubes. Finely chop the chilli. Add carrots, peppers and chilli to the chicken once it has some colour. Peel and finely chop the garlic cloves and ginger, and add them to the rest. 4. Make a small well in the centre of the pan or pot, and add a couple of teaspoons of curry paste. Let the curry paste fry for a couple of minutes. Add a little more oil if the bottom is dry. 5. While the chicken and vegetables are simmering, prepare the sauce ingredients. Put the cream, coconut milk, chicken broth and soy sauce in a bowl. Dissolve the cornstarch in a small splash of cold water and add it to the cream mixture. 6. Pour the sauce over the chicken and vegetables. Bring to a boil and let the stew simmer for 5-7 minutes, until it thickens and the chicken is cooked through. Squeeze lime juice over and season with salt just before serving. Serve the chicken stew with a sprinkle of fresh coriander, roughly chopped peanuts and cooked rice.",
  },
  {
    id: "5",
    name: "Korean Sesame Chicken",
    imageUrl:
      "https://gfx.nrk.no/UIqHfpyMEhWGyMx3WaxnrAPnxvecwrIy4IRN-urseCqg.jpg",
    ingredients: [
      { id: "5-1", name: "chicken breast", amount: "750 g" },
      { id: "5-2", name: "wheat flour", amount: "100 g" },
      { id: "5-3", name: "cornstarch", amount: "75 g" },
      { id: "5-4", name: "salt", amount: "1 tsp" },
      { id: "5-5", name: "pepper", amount: "1 tsp" },
      { id: "5-6", name: "egg white", amount: "1 pc" },
      { id: "5-7", name: "oil for frying", amount: "as needed" },
      { id: "5-8", name: "chopped garlic", amount: "1 clove" },
      { id: "5-9", name: "ketchup", amount: "2 tbsp" },
      { id: "5-10", name: "soy sauce", amount: "2 tbsp" },
      { id: "5-11", name: "liquid honey", amount: "1 tbsp" },
      { id: "5-12", name: "sesame oil", amount: "1 tbsp" },
      { id: "5-13", name: "rice vinegar", amount: "1 tbsp" },
      { id: "5-14", name: "brown sugar", amount: "1 tbsp" },
      { id: "5-15", name: "sesame seeds", amount: "1 tbsp" },
      { id: "5-16", name: "cooked rice", amount: "for serving" },
      { id: "5-17", name: "chopped spring onion", amount: "for garnish" },
      { id: "5-18", name: "extra sesame seeds", amount: "for garnish" },
    ],
    description:
      "This is a non-spicy version of Korean Fried Chicken. Here you get a perfect balance between sweet, sour and a little salty — together with wonderfully aromatic sesame oil and seeds.",
    steps:
      "1. Cut the chicken into 3 × 3 cm cubes. Pour the egg white over the chicken so everything is coated. 2. Mix flour, cornstarch, salt and pepper in a bowl, and toss the chicken in the flour mixture. The egg white helps the coating stick to the meat. 3. Heat oil for deep frying over medium-high heat. Use enough oil to cover the chicken. Deep fry the meat for about five minutes or until the chicken gets a light golden colour and becomes crispy. Fry in batches so the temperature doesn't drop too low. Place the chicken on a rack or paper to drain. 4. Mix together all the sauce ingredients. Adjust with honey depending on how sweet you want the sauce. 5. Prepare a frying pan over medium-high heat and add the sauce when the pan is hot. Let it simmer for about one minute, then lower the heat and add the chicken. Toss the chicken in the sauce and let it set for one minute. Remove the pan from the heat. 6. Sprinkle with spring onion and extra sesame seeds. Serve with cooked rice.",
  },
];
