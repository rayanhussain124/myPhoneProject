import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function Recipe({ navigation }) {
    //useState stores all the data and is used to change and manipulate data
    const [recipe, setRecipe] = useState([
        { name: 'Macaroni Cheese', 
        ingredients: `

1) 50g baguette cut into small chunk
2) 2 tbsp butter, plus 1 tbsp melted
3) 350g spiral or other short pasta
4) 1 garlic clove, finely chopped'
5) 1 tsp English mustard powder
6) 3 tbsp plain flour
7) 500ml whole milk
8) 250g vegetarian mature cheddar, grated
9) 50g parmesan (or vegetarian alternative), grated`, 
        instructions: `
        
STEP 1

Heat the oven to 200C/180C fan/gas 6. Spread the baguette chunks over a baking sheet, drizzle with the melted butter and season. Bake for 6 mins until crisp, then set aside.

STEP 2

Boil the pasta for 2 mins less than stated on the pack, then drain. Meanwhile, melt the butter in a saucepan. Add the garlic and English mustard powder, cook for 1 min, then stir in the plain flour.

STEP 3

Cook for 1 min more, then gradually whisk in the milk until you have a lump-free sauce. Simmer for 5 mins, whisking all the time until thickened. Take off the heat, then stir in the cheddar and half the parmesan.

STEP 4

Stir the pasta and some seasoning into the cheesy sauce. Tip into a large ovenproof dish, or four individual dishes.

STEP 5

Scatter over the bread and the remaining parmesan, then bake for 20 mins until crisp and golden. Can be frozen before baking – defrost thoroughly before cooking.`, key: '1'},
        { name: 'Lasagna', 
        ingredients: `
        
1) 2 olive oil, plus a little for the dish
2) 750g lean beef mince
3) 90g pack prosciutto
4) tomato sauce
5) 200ml hot beef stock
6) a little grated nutmeg
7) 300g pack fresh lasagne sheets
8) white sauce
9) 125g ball mozzarella, torn into thin strips`, 
        instructions: `
        
STEP 1

To make the meat sauce, heat 2 tbsp olive oil in a frying pan and cook 750g lean beef mince in two batches for about 10 mins until browned all over.
        
STEP 2

Finely chop 4 slices of prosciutto from a 90g pack, then stir through the meat mixture.
        
STEP 3

Pour over 800g passata or half our basic tomato sauce recipe and 200ml hot beef stock. Add a little grated nutmeg, then season.
        
STEP 4

Bring up to the boil, then simmer for 30 mins until the sauce looks rich.
        
STEP 5

Heat oven to 180C/fan/160C/gas 4 and lightly oil an ovenproof dish (about 30 x 20cm).
        
STEP 6

Spoon one third of the meat sauce into the dish, then cover with some fresh lasagne sheets from a 300g pack. Drizzle over roughly 130g ready-made or homemade white sauce.
        
STEP 7

Repeat until you have 3 layers of pasta. Cover with the remaining 390g white sauce, making sure you can’t see any pasta poking through.
        
STEP 8

Scatter 125g torn mozzarella over the top.
        
STEP 9

Arrange the rest of the prosciutto on top. Bake for 45 mins until the top is bubbling and lightly browned.`, key: '2'},
        { name: 'Steak Diane', 
        ingredients: `
        
1) 2 fillet steaks (about 200g each), cut from the centre of the fillet
2) 25g butter
3) 1 thyme sprig
4) ½ tsp cracked black pepper
5) 1 large or 2 small shallots, peeled and finely chopped
6) 3 tbsp brandy
7) 2 tsp Dijion mustard
8) 1 tsp Worcestershire sauce
9) 200ml strong beef stock
10) 3 tbsp crème fraîche
11) 1 tbsp chopped tarragon (optional)`, 
        instructions: `
        
STEP 1

Generously season the steaks all over with salt, then press them down slightly with the palm of your hand so they’re roughly the same thickness. Heat the butter in a heavy-based frying pan over a medium-high heat until foaming, then add the thyme so it crackles and sizzles. Add the steaks and use tongs to turn them every 1 min over the course of 6 mins (for very rare), 8 mins (rare) or 10 mins (medium). This helps build an even crust on both sides. Remove the steaks to a warm plate and leave to rest while you make the sauce.
        
STEP 2

Scatter the pepper over the butter and thyme already in the pan. Toast for 1 min, then stir in the shallots and cook for another minute until they start to soften. Turn the heat up to high and tilt the pan so the side is against the flame (if using a gas hob). Carefully splash in the brandy. Flambé the shallots until the flames have died down.
        
STEP 3

Reduce the heat to medium and stir in the mustard and Worcestershire sauce. Bubble for a minute, then pour in the stock. Bring to the boil and cook for 2 mins until reduced by half. Stir in the crème fraîche and simmer until rich and creamy. Taste and add more salt if needed. Scoop out the thyme sprig, then return the steaks and any juices to the pan, spooning the sauce over the steaks. Sprinkle over the tarragon, if using. Bring the steaks to the table in the pan and serve drizzled with more sauce.`, key: '3'},
        { name: 'Roast Chicken and Broccoli', 
        ingredients: `

1) 1 small free-range chicken (about 1kg)
2) 2 garlic cloves
3) 1 tsp rapeseed oil
4) small bunch thyme
5) 1 lemon, halved
6) 1 small head broccoli (about 200g), cut into small florets
7) 200g sweet potato, peeled and cubed (cook 100g extra if you are using for Chicken wrap with sticky sweet potato, see 'goes well with')
8) 1 tbsp low-fat cream cheese`, 
        instructions: `
        
STEP 1

Heat oven to 200C/180C fan/gas 6 and put the chicken in a large non-stick roasting tin. Halve 1 garlic clove and rub it over the chicken. Drizzle with oil, rub in with your fingers, then stuff the cavity with the thyme, 1 lemon half and the garlic you just used.

STEP 2

Cut the other lemon half into quarters and scatter around the chicken with the other garlic clove, halved.

STEP 3

Cover the tin with foil and bake for 40 mins, then remove the foil and spoon over the hot juices. Arrange the broccoli around the chicken, turning well in the juices, and return the tin to the oven for another 20-30 mins. To check that it is cooked through, pierce between the leg and thigh – if the juices run clear, the chicken is ready. Re-cover with foil and set aside while you prepare the sweet potatoes.

STEP 4

Put the sweet potatoes in a pan of boiling water, return to the boil, then simmer for 7-10 mins until tender. Drain well, then mash. Set aside 100g of sweet potato mash if using for Chicken wrap with sticky sweet potato, see 'goes well with', then add the cream cheese to the rest and stir well.

STEP 5

Remove the broccoli from the roasting tin and divide between 2 plates. Put the chicken on a serving plate, discard the lemon and garlic from the tin and remove as much of the fat from the juices as possible. Pour the remaining juices into a serving jug.

STEP 6

Carve the chicken and serve about 100g (1-2 slices) per person (keep the rest of the chicken for Chicken wrap with sticky sweet potato if making, see 'goes well with'). Serve with the broccoli and mashed sweet potatoes, and a drizzle of the lemony-garlic juices on top.`, key: '4'},
        { name: 'Mixed Salad', 
        ingredients: `
        
1) 1 lemon
2) 4 tbsp extra virgin olive oil
3) 1 tsp Dijon mustard
4) 1 tsp honey
5) 10 cherry tomatoes (use a mixture of different colours, if you like)
6) 1⁄2 cucumber
7) 2 Little Gem lettuces
8) 1 punnet of cress
9) 100g pomegranate seeds
10) 25g mixed seeds (we used sunflower and pumpkin seeds; see tip below)`, 
        instructions: `
        
STEP 1

Before you get started take a look at our chopping and knife skills guide. If your chopping board doesn’t have anti-slip grips, lay a dampened tea towel or sheet of kitchen paper on the work surface, then place the board on top to stop it from slipping.

STEP 2

Holding the lemon with your hand in the bridge position, cut the lemon in half. Push one half onto a citrus juicer, twist and squeeze to release the juice. Repeat with the second lemon half. Pour the juice into a jam jar or small bowl along with the oil.

STEP 3

Add the mustard, honey and a good pinch each of salt and black pepper. Seal the jar and shake to combine, or whisk the ingredients together. Will keep covered in the fridge for up to a week.

STEP 4

Cut the tomatoes in half by pinching each one between your thumb and a finger and carefully slicing through the middle with a small serrated knife. Cut each piece in half again to make quarters, then tip the tomatoes into a large bowl.

STEP 5

Wipe down the chopping board, then cut the cucumber in half lengthways. Put the two halves cut-side down on the board so they don’t roll around, then cut in half again along the length, so you have four chunky sticks of cucumber. Cut across the cucumber now to make little triangles, keeping your free hand in the claw position with your fingers tucked away from the blade of the knife. Tip the cucumber into the bowl with the tomatoes.

STEP 6

Cut the hard stalk off the lettuces, then cut each lettuce in half and in half again to get four wedges. Working with one lettuce wedge at a time, hold the wedge with your hand in the claw position and chop it into small ribbons – the smaller, the better for this salad. Repeat with the remaining wedges and tip the lettuce into the bowl.

STEP 7

Snip the cress straight into the bowl using kitchen scissors. Weigh out the pomegranate seeds using the scales and add these to the bowl. Repeat with the mixed seeds. Drizzle over roughly half of the dressing over the salad (you will have some leftover) and toss everything together to coat.`, key: '5'},
        { name: 'Lamb Curry and Rice', 
        ingredients: `
        
1) thumb-sized piece ginger, ½ cut into matchsticks, the rest left whole
2) 2 onions, quartered
3) 4 garlic cloves
4) 2 tbsp rapeseed oil
5) 1 cinnamon stick
6) 1 tbsp ground coriander
7) 1 tsp ground cumin
8) 1 tsp ground turmeric
9) ½ tsp fennel seeds
10) 750g leg of lamb, diced
11) 400g can chopped tomatoes
12) 1 red chilli or green chilli, deseeded and sliced
13) small bunch coriander, stalks finely chopped, leaves roughly chopped
14) basmati rice and mango chutney or raita, to serve`, instructions: `

STEP 1

Put ½ the thumb-sized piece of ginger, 2 quartered onions and 4 garlic cloves in a food processor with 300ml water. Blitz to a smooth purée.

STEP 2

Scrape down the sides with a spoon and blitz again to make it as smooth as you can. Tip into a deep sauté pan, cover with a lid and simmer for 15 mins.

STEP 3

Remove the lid and cook for 5 mins more, stirring occasionally. By now the liquid should be all gone. If not, cook a little longer.

STEP 4

Add 2 tbsp rapeseed oil to the pan with the remaining piece of ginger, cut into matchsticks. Turn up the heat and fry, stirring, for 3-5 mins until it starts to colour.

STEP 5

Stir in 1 cinnamon stick, 1 tbsp ground coriander, 1 tsp ground cumin, 1 tsp ground turmeric and ½ tsp fennel seeds, then add 750g leg of lamb. Stir-fry until the lamb changes colour.

STEP 6

Tip in 400g can chopped tomatoes with a can of water and 1 deseeded and sliced red or green chilli, season well, cover and leave to simmer for 1 hr.

STEP 7

Stir in the finely chopped stalks from a small bunch coriander, re-cover and cook for a final 30 mins until the lamb is tender. Add a splash of water if necessary to loosen the consistency as it cooks.

STEP 8

Stir in the roughly chopped coriander leaves and serve with basmati rice and mango chutney or raita.`, key: '6'},
        { name: 'Prawn Stir Fry', ingredients: `
        
1) 200g raw, peeled tiger prawns from a sustainable source
2) 1 green Thai chilli, chopped
3) 3 garlic cloves, 1 crushed and 2 finely sliced
4) 1 bunch coriander, leaves and stalks separated
5) 1 tbsp caster sugar
6) juice 1 lime
7) 3 tbsp fish sauce
8) 2 tbsp groundnut oil
9) 3cm piece ginger, finely sliced, then shredded
10) 8 spring onions, finely sliced
11) 1 red pepper, thinly sliced
12) 85g water chestnuts, sliced
13) 100g beansprouts
14) 1 tbsp soy sauce
15) egg or rice noodles, to serve
16) lime wedges, to serve`, 
        instructions: `
        
STEP 1

Put the prawns in a bowl. Put the chilli, garlic, coriander stalks (snip these up using scissors first) and caster sugar in a spice grinder or small food processor and whizz together. Add half of the lime juice and the fish sauce, then pour this over the prawns.

STEP 2

Heat 1 tbsp oil in a wok, add the ginger and spring onions and fry for 1 min. Add the red pepper and fry for 1 min, until the pepper starts to soften. Add the water chestnuts and bean sprouts, and toss together until the bean sprouts start to wilt. Add the soy sauce and a really good grind of black pepper, then tip the lot into a serving dish.

STEP 3

Heat the remaining oil in the wok and add the prawns, lifting them out of their juices. Toss for 1-2 mins until they turn pink, add the marinade and swirl the wok quickly, then tip the lot onto the veg. Snip over the coriander leaves and sprinkle on the remaining lime. Serves over noodles with extra lime for squeezing over.`, key: '7'},
    ]);

    //return function returns JSX code to structure the page
    return (
        <View style={styles.container}>
            <FlatList
              data={recipe}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', item)}>
                  <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
        </View>
    )
    
}

    //create function returns CSS to style the page
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: 40,
          paddingHorizontal: 20,
        },
        item: {
            marginTop: 24,
            padding: 30,
            backgroundColor: 'teal',
            fontSize: 24,
            color: 'white'
        }
      });