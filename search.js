const pokemons = [
{
id:1,
name:"Bulbasaur",
type:"Grass / Poison",
description:"A calm Pokémon that stores solar energy in the bulb on its back.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
},
{
id:2,
name:"Ivysaur",
type:"Grass / Poison",
description:"Its bulb grows larger as it absorbs sunlight.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
},
{
id:3,
name:"Venusaur",
type:"Grass / Poison",
description:"The giant flower blooms after absorbing plenty of sunlight.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
},
{
id:4,
name:"Charmander",
type:"Fire",
description:"Its tail flame reflects its health and emotions.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
},
{
id:5,
name:"Charmeleon",
type:"Fire",
description:"A fierce Pokémon that constantly seeks stronger opponents.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
},
{
id:6,
name:"Charizard",
type:"Fire / Flying",
description:"Breathes intense flames capable of melting almost anything.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
},
{
id:7,
name:"Squirtle",
type:"Water",
description:"Uses its shell for protection and sprays water at foes.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
},
{
id:8,
name:"Wartortle",
type:"Water",
description:"Known for its fluffy tail, a symbol of longevity.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
},
{
id:9,
name:"Blastoise",
type:"Water",
description:"Its powerful water cannons can punch through steel.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
},
{
id:10,
name:"Caterpie",
type:"Bug",
description:"Releases a strong odor to repel enemies.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
},
{
id:11,
name:"Metapod",
type:"Bug",
description:"Its shell is extremely hard but it can barely move.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
},
{
id:12,
name:"Butterfree",
type:"Bug / Flying",
description:"Scatters toxic scales from its wings.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
},
{
id:13,
name:"Weedle",
type:"Bug / Poison",
description:"Has a sharp poisonous stinger on its head.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
},
{
id:14,
name:"Kakuna",
type:"Bug / Poison",
description:"Remains almost motionless while evolving.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
},
{
id:15,
name:"Beedrill",
type:"Bug / Poison",
description:"Attacks using three poisonous stingers.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
},
{
id:16,
name:"Pidgey",
type:"Normal / Flying",
description:"Very docile and often found in forests.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
},
{
id:17,
name:"Pidgeotto",
type:"Normal / Flying",
description:"Protects its territory aggressively.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"
},
{
id:18,
name:"Pidgeot",
type:"Normal / Flying",
description:"Flies at Mach 2 speeds while hunting.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
},
{
id:19,
name:"Rattata",
type:"Normal",
description:"Known for its sharp incisors.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
},
{
id:20,
name:"Raticate",
type:"Normal",
description:"Its whiskers help it maintain balance.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
},
{
id:21,
name:"Spearow",
type:"Normal / Flying",
description:"A tiny bird Pokémon with a loud cry.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png"
},
{
id:22,
name:"Fearow",
type:"Normal / Flying",
description:"Uses its long neck to attack from afar.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png"
},
{
id:23,
name:"Ekans",
type:"Poison",
description:"Slithers silently through grass.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png"
},
{
id:24,
name:"Arbok",
type:"Poison",
description:"Its body patterns look terrifying.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"
},
{
id:25,
name:"Pikachu",
type:"Electric",
description:"Stores electricity in its cheeks.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
},
{
id:26,
name:"Raichu",
type:"Electric",
description:"Can discharge over 100,000 volts.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
},
{
id:27,
name:"Sandshrew",
type:"Ground",
description:"Loves dry sandy places.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png"
},
{
id:28,
name:"Sandslash",
type:"Ground",
description:"Its claws can shred tree roots.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png"
},
{
id:29,
name:"Nidoran♀",
type:"Poison",
description:"Small but courageous.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png"
},
{
id:30,
name:"Nidorina",
type:"Poison",
description:"Gentle but fiercely protective.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"
},
{
id:31,
name:"Nidoqueen",
type:"Poison / Ground",
description:"Uses its tough body to defend its young.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png"
},
{
id:32,
name:"Nidoran♂",
type:"Poison",
description:"Uses its horn to sense danger.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"
},
{
id:33,
name:"Nidorino",
type:"Poison",
description:"Quick-tempered and powerful.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png"
},
{
id:34,
name:"Nidoking",
type:"Poison / Ground",
description:"A brutal Pokémon with immense strength.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"
},
{
id:35,
name:"Clefairy",
type:"Fairy",
description:"Rarely seen by people.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
},
{
id:36,
name:"Clefable",
type:"Fairy",
description:"Lives quietly in remote mountains.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"
},
{
id:37,
name:"Vulpix",
type:"Fire",
description:"Its six tails grow as it matures.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png"
},
{
id:38,
name:"Ninetales",
type:"Fire",
description:"Said to live for a thousand years.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
},
{
id:39,
name:"Jigglypuff",
type:"Normal / Fairy",
description:"Sings lullabies that put listeners to sleep.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
},
{
id:40,
name:"Wigglytuff",
type:"Normal / Fairy",
description:"Its body is incredibly soft.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"
},
{
id:41,
name:"Zubat",
type:"Poison / Flying",
description:"Navigates using ultrasonic waves.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png"
},
{
id:42,
name:"Golbat",
type:"Poison / Flying",
description:"Drinks blood from its prey.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"
},
{
id:43,
name:"Oddish",
type:"Grass / Poison",
description:"Buries itself in the soil during the day.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png"
},
{
id:44,
name:"Gloom",
type:"Grass / Poison",
description:"Releases an unpleasant smell.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png"
},
{
id:45,
name:"Vileplume",
type:"Grass / Poison",
description:"Its petals scatter toxic pollen.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png"
},
{
id:46,
name:"Paras",
type:"Bug / Grass",
description:"Mushrooms grow on its back.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png"
},
{
id:47,
name:"Parasect",
type:"Bug / Grass",
description:"Controlled by the mushroom on its back.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png"
},
{
id:48,
name:"Venonat",
type:"Bug / Poison",
description:"Has huge eyes for night vision.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png"
},
{
id:49,
name:"Venomoth",
type:"Bug / Poison",
description:"Its wings are covered with poisonous scales.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png"
},
{
id:50,
name:"Diglett",
type:"Ground",
description:"Lives underground and rarely shows its full body.",
image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png"
},
 {
    name: "Dugtrio",
    type: "Ground",
    description: "A trio of Diglett that work together underground, causing powerful earthquakes.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png"
  },
  {
    name: "Meowth",
    type: "Normal",
    description: "A clever Pokémon that loves collecting shiny objects, especially coins.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png"
  },
  {
    name: "Persian",
    type: "Normal",
    description: "An elegant and swift Pokémon known for its graceful movements.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png"
  },
  {
    name: "Psyduck",
    type: "Water",
    description: "Constant headaches awaken mysterious psychic powers.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
  },
  {
    name: "Golduck",
    type: "Water",
    description: "A fast swimmer often mistaken for a mythical sea creature.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png"
  },
  {
    name: "Mankey",
    type: "Fighting",
    description: "A short-tempered Pokémon that becomes furious at the slightest provocation.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png"
  },
  {
    name: "Primeape",
    type: "Fighting",
    description: "Its anger never subsides once it loses its temper.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png"
  },
  {
    name: "Growlithe",
    type: "Fire",
    description: "A loyal Fire-type Pokémon that fearlessly protects its Trainer.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png"
  },
  {
    name: "Arcanine",
    type: "Fire",
    description: "A legendary Pokémon admired for its speed and noble appearance.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"
  },
  {
    name: "Poliwag",
    type: "Water",
    description: "Its spiral belly pattern helps it confuse enemies.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png"
  },
  {
    name: "Poliwhirl",
    type: "Water",
    description: "An excellent swimmer that can also walk on land.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png"
  },
  {
    name: "Poliwrath",
    type: "Water/Fighting",
    description: "Its muscular body allows it to swim across oceans.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png"
  },
  {
    name: "Abra",
    type: "Psychic",
    description: "It sleeps for 18 hours a day but can teleport instantly when threatened.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png"
  },
  {
    name: "Kadabra",
    type: "Psychic",
    description: "Its psychic powers are strong enough to bend spoons.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png"
  },
  {
    name: "Alakazam",
    type: "Psychic",
    description: "Its brain never stops growing, giving it incredible intelligence.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"
  },
  {
    name: "Machop",
    type: "Fighting",
    description: "It constantly trains to build its powerful muscles.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png"
  },
  {
    name: "Machoke",
    type: "Fighting",
    description: "Its body is so strong that it wears a power-saving belt.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png"
  },
  {
    name: "Machamp",
    type: "Fighting",
    description: "With four powerful arms, it can throw hundreds of punches in seconds.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png"
  },
  {
    name: "Bellsprout",
    type: "Grass/Poison",
    description: "It traps prey using its flexible vine-like body.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png"
  },
  {
    name: "Weepinbell",
    type: "Grass/Poison",
    description: "It uses poison and acid to dissolve captured prey.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png"
  },
  {
    name: "Victreebel",
    type: "Grass/Poison",
    description: "It lures prey with sweet aromas before swallowing them whole.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png"
  },
  {
    name: "Tentacool",
    type: "Water/Poison",
    description: "Its tentacles deliver painful venomous stings.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png"
  },
  {
    name: "Tentacruel",
    type: "Water/Poison",
    description: "Its many tentacles can trap and poison its opponents.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png"
  },
  {
    name: "Geodude",
    type: "Rock/Ground",
    description: "A rocky Pokémon that blends into mountainsides.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png"
  },
  {
    name: "Graveler",
    type: "Rock/Ground",
    description: "It rolls down mountain slopes to move quickly.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png"
  },
   {
    name: "Golem",
    type: "Rock/Ground",
    description: "Its rock-like body is incredibly tough and can withstand powerful explosions.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png"
  },
  {
    name: "Ponyta",
    type: "Fire",
    description: "Its fiery mane grows stronger as it races across open fields.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png"
  },
  {
    name: "Rapidash",
    type: "Fire",
    description: "It can reach incredible speeds while its mane blazes brightly.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png"
  },
  {
    name: "Slowpoke",
    type: "Water/Psychic",
    description: "A laid-back Pokémon that often doesn't notice what's happening around it.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png"
  },
  {
    name: "Slowbro",
    type: "Water/Psychic",
    description: "When Shellder bites its tail, it becomes smarter and stronger.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png"
  },
  {
    name: "Magnemite",
    type: "Electric/Steel",
    description: "It floats using electromagnetic waves and attracts metal objects.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png"
  },
  {
    name: "Magneton",
    type: "Electric/Steel",
    description: "Three Magnemite linked together, generating intense magnetic power.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png"
  },
  {
    name: "Farfetch'd",
    type: "Normal/Flying",
    description: "It always carries a leek stalk, using it as both a weapon and food.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png"
  },
  {
    name: "Doduo",
    type: "Normal/Flying",
    description: "Its two heads work together to stay alert for danger.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png"
  },
  {
    name: "Dodrio",
    type: "Normal/Flying",
    description: "Its three heads each express different emotions while running at high speed.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png"
  },
  {
    name: "Seel",
    type: "Water",
    description: "A playful Pokémon that enjoys swimming in icy waters.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png"
  },
  {
    name: "Dewgong",
    type: "Water/Ice",
    description: "Its streamlined body allows it to glide gracefully through freezing oceans.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png"
  },
  {
    name: "Grimer",
    type: "Poison",
    description: "Born from polluted sludge, it thrives in filthy environments.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png"
  },
  {
    name: "Muk",
    type: "Poison",
    description: "Its toxic body leaves poisonous residue wherever it goes.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png"
  },
  {
    name: "Shellder",
    type: "Water",
    description: "Its hard shell protects its soft body from predators.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png"
  },
  {
    name: "Cloyster",
    type: "Water/Ice",
    description: "Its shell is harder than diamond and nearly impossible to crack.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png"
  },
  {
    name: "Gastly",
    type: "Ghost/Poison",
    description: "Its gaseous body can envelop opponents and make them faint.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png"
  },
  {
    name: "Haunter",
    type: "Ghost/Poison",
    description: "It lurks in darkness, waiting to frighten unsuspecting victims.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png"
  },
  {
    name: "Gengar",
    type: "Ghost/Poison",
    description: "It hides in shadows and steals warmth from those nearby.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
  },
  {
    name: "Onix",
    type: "Rock/Ground",
    description: "It tunnels underground at high speed, leaving massive trails behind.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png"
  },
  {
    name: "Drowzee",
    type: "Psychic",
    description: "It feeds on dreams and is often found near sleeping people.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png"
  },
  {
    name: "Hypno",
    type: "Psychic",
    description: "Using its pendulum, it can hypnotize opponents with ease.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png"
  },
  {
    name: "Krabby",
    type: "Water",
    description: "Its large pincers grow back quickly if lost in battle.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png"
  },
  {
    name: "Kingler",
    type: "Water",
    description: "One of its giant claws is powerful enough to crush solid steel.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png"
  },
  {
    name: "Voltorb",
    type: "Electric",
    description: "Often mistaken for a Poké Ball, it can explode without warning.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png"
  },
   {
    name: "Electrode",
    type: "Electric",
    description: "It stores massive amounts of electricity and can explode without warning.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png"
  },
  {
    name: "Exeggcute",
    type: "Grass/Psychic",
    description: "Though it appears to be eggs, each one is actually a living Pokémon.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png"
  },
  {
    name: "Exeggutor",
    type: "Grass/Psychic",
    description: "Its three heads think independently but work together in harmony.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png"
  },
  {
    name: "Cubone",
    type: "Ground",
    description: "It wears its deceased mother's skull and rarely reveals its true face.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png"
  },
  {
    name: "Marowak",
    type: "Ground",
    description: "It has become skilled at wielding its bone as a powerful weapon.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png"
  },
  {
    name: "Hitmonlee",
    type: "Fighting",
    description: "Its legs stretch freely, allowing it to deliver devastating kicks.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png"
  },
  {
    name: "Hitmonchan",
    type: "Fighting",
    description: "It throws punches faster than the eye can follow.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png"
  },
  {
    name: "Lickitung",
    type: "Normal",
    description: "Its long tongue can stretch farther than its own height.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png"
  },
  {
    name: "Koffing",
    type: "Poison",
    description: "Its body is filled with poisonous gases that can explode.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png"
  },
  {
    name: "Weezing",
    type: "Poison",
    description: "Two Koffing merged together, producing even more toxic gases.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png"
  },
  {
    name: "Rhyhorn",
    type: "Ground/Rock",
    description: "Its thick hide lets it charge through almost any obstacle.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png"
  },
  {
    name: "Rhydon",
    type: "Ground/Rock",
    description: "Its horn can drill through solid rock with ease.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png"
  },
  {
    name: "Chansey",
    type: "Normal",
    description: "It lays highly nutritious eggs that bring happiness to anyone who eats them.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png"
  },
  {
    name: "Tangela",
    type: "Grass",
    description: "Its entire body is covered by blue vines that constantly wiggle.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png"
  },
  {
    name: "Kangaskhan",
    type: "Normal",
    description: "It fiercely protects the baby in its pouch from any danger.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png"
  },
  {
    name: "Horsea",
    type: "Water",
    description: "It sprays ink to escape from enemies while swimming backward.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png"
  },
  {
    name: "Seadra",
    type: "Water",
    description: "Its poisonous fins protect it while it swims gracefully.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png"
  },
  {
    name: "Goldeen",
    type: "Water",
    description: "Its elegant fins allow it to swim with incredible beauty.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png"
  },
  {
    name: "Seaking",
    type: "Water",
    description: "It fearlessly swims upstream during spawning season.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png"
  },
  {
    name: "Staryu",
    type: "Water",
    description: "Its mysterious core glows brightly whenever it regenerates.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png"
  },
  {
    name: "Starmie",
    type: "Water/Psychic",
    description: "Its central core shines with the colors of a rainbow.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png"
  },
  {
    name: "Mr. Mime",
    type: "Psychic/Fairy",
    description: "It creates invisible walls using its extraordinary pantomime skills.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png"
  },
  {
    name: "Scyther",
    type: "Bug/Flying",
    description: "Its razor-sharp scythes slice through tall grass with ease.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png"
  },
  {
    name: "Jynx",
    type: "Ice/Psychic",
    description: "Its graceful dance movements can hypnotize anyone watching.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png"
  },
  {
    name: "Electabuzz",
    type: "Electric",
    description: "It loves thunderstorms and feeds on electrical energy.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png"
  },
  {
    name: "Magmar",
    type: "Fire",
    description: "Born in volcanic craters, its body radiates intense heat.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png"
  },
  {
    name: "Pinsir",
    type: "Bug",
    description: "Its massive pincers can crush opponents with incredible force.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png"
  },
  {
    name: "Tauros",
    type: "Normal",
    description: "It charges wildly with its three tails whipping behind it.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png"
  },
  {
    name: "Magikarp",
    type: "Water",
    description: "A weak Pokémon famous for its endless splashing.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
  },
  {
    name: "Gyarados",
    type: "Water/Flying",
    description: "Its violent rage can destroy entire cities when provoked.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png"
  },
  {
    name: "Lapras",
    type: "Water/Ice",
    description: "A gentle Pokémon that carries people across the sea.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png"
  },
  {
    name: "Ditto",
    type: "Normal",
    description: "It can transform into any Pokémon by copying its appearance.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
  },
  {
    name: "Eevee",
    type: "Normal",
    description: "Its unstable genes allow it to evolve into many different forms.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
  },
  {
    name: "Vaporeon",
    type: "Water",
    description: "Its body can melt into water, making it nearly invisible.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png"
  },
  {
    name: "Jolteon",
    type: "Electric",
    description: "It generates electricity that crackles through its sharp fur.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"
  },
  {
    name: "Flareon",
    type: "Fire",
    description: "It stores heat in its body and can breathe scorching flames.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"
  },
  {
    name: "Porygon",
    type: "Normal",
    description: "A man-made Pokémon created entirely from computer code.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png"
  },
  {
    name: "Omanyte",
    type: "Rock/Water",
    description: "A prehistoric Pokémon revived from an ancient fossil.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png"
  },
  {
    name: "Omastar",
    type: "Rock/Water",
    description: "Its heavy shell and powerful tentacles make it a fearsome predator.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png"
  },
  {
    name: "Kabuto",
    type: "Rock/Water",
    description: "A fossil Pokémon that lived on the ocean floor millions of years ago.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png"
  },
  {
    name: "Kabutops",
    type: "Rock/Water",
    description: "Its sharp scythes were used to slice prey in ancient seas.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png"
  },
  {
    name: "Aerodactyl",
    type: "Rock/Flying",
    description: "A fierce prehistoric Pokémon restored from fossilized DNA.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png"
  },
  {
    name: "Snorlax",
    type: "Normal",
    description: "It spends most of its life sleeping and eating enormous meals.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
  },
  {
    name: "Articuno",
    type: "Ice/Flying",
    description: "A legendary bird Pokémon said to appear during snowstorms.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png"
  },
  {
    name: "Zapdos",
    type: "Electric/Flying",
    description: "A legendary bird that appears from thunderclouds.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png"
  },
  {
    name: "Moltres",
    type: "Fire/Flying",
    description: "A legendary bird whose fiery wings light up the sky.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png"
  },
  {
    name: "Dratini",
    type: "Dragon",
    description: "A rare Dragon Pokémon that molts repeatedly as it grows.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png"
  },
  {
    name: "Dragonair",
    type: "Dragon",
    description: "Its elegant body is said to control the weather.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png"
  },
  {
    name: "Dragonite",
    type: "Dragon/Flying",
    description: "Despite its size, it can fly around the world in just hours.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
  },
  {
    name: "Mewtwo",
    type: "Psychic",
    description: "A genetically engineered Pokémon created through scientific experiments.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
  },


];

let cc=document.querySelector(".card-container");

function showUsers(arr){

    arr.forEach(function(pok){


    const card = document.createElement("div");
    card.classList.add("card");

    // Create image
    const img = document.createElement("img");
    img.src = pok.image;
    // img.classList.add("bg-img");

    // Create blurred-layer div
    // const blurredLayer = document.createElement("div");
    // blurredLayer.style.backgroundImage = `url(${pok.image})`;
    // blurredLayer.classList.add("blurred-layer");

    // Create content div
    const content = document.createElement("div");
    content.classList.add("content");

    // Create h3 and paragraph
    const heading = document.createElement("h3");
    heading.textContent = pok.name;

    const type = document.createElement("h4");
    type.textContent = pok.type;

    const para = document.createElement("p");
    para.textContent = pok.description;

    // Append heading and paragraph to content
    content.appendChild(heading);
    content.appendChild(type);
    content.appendChild(para);

    // Append all to card
    card.appendChild(img);
    // card.appendChild(blurredLayer);
    card.appendChild(content);

    // Finally, append card to the body or any container
    cc.appendChild(card);

    });

}




let input = document.querySelector(".inp");

input.addEventListener("input", function () {

    let value = input.value.trim().toLowerCase();

    cc.innerHTML = "";

    if (value === "") {
        return; // Stop here if input is empty
    }

    let newUser = pokemons.filter((pk) => {
        return pk.name.toLowerCase().startsWith(value);
    });

    showUsers(newUser);
});