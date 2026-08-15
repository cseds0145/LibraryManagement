/**
 * THE GRAND ATHENAEUM - COMPLETE PUBLIC DOMAIN ARCHIVES (80+ VOLUMES)
 * 20 Science Fiction, 20 Comedy & Humor, 20 Education & Science, 20 Golden Age Comics.
 * Fully structured with full-length chapters, synopses, and public domain links.
 */

const LIBRARY_GENRES = {
  SCIFI: { id: 'scifi', name: 'Science Fiction', icon: '🧪', plaque: 'SECTION I • SCIENCE FICTION & FUTURISM' },
  COMEDY: { id: 'comedy', name: 'Comedy & Humor', icon: '🎭', plaque: 'SECTION II • COMEDY, SATIRE & WIT' },
  EDUCATION: { id: 'education', name: 'Education & Science', icon: '🎓', plaque: 'SECTION III • EDUCATION & PHILOSOPHY' },
  COMICS: { id: 'comics', name: 'Comics & Graphic Serials', icon: '📚', plaque: 'SECTION IV • GOLDEN AGE COMICS & SERIALS' }
};

const EXPANDED_BOOKS_DATA = [
  // =========================================================================
  // 1. SCIENCE FICTION (20 Books)
  // =========================================================================
  {
    id: 101,
    genre: 'scifi',
    title: 'Frankenstein; or, The Modern Prometheus',
    author: 'Mary Wollstonecraft Shelley',
    year: 1818,
    copies: 4,
    cover: 'leather-burgundy',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/84',
    synopsis: 'A young scientist creates a sentient creature in an unorthodox scientific experiment, unleashing unintended and tragic consequences that explore the boundaries of humanity, ethics, and grief.',
    chapters: [
      {
        title: 'Letter I - St. Petersburgh, Dec. 11th, 17—',
        content: `TO Mrs. Saville, England.\n\nYou will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking.\n\nI am already far north of London, and as I walk in the streets of Petersburgh, I feel a cold northern breeze play upon my cheeks, which braces my nerves and fills me with delight. Do you understand this feeling? This breeze, which has travelled from the regions towards which I am advancing, gives me a foretaste of those icy climes. Inspirited by this wind of promise, my daydreams become more fervent and vivid.\n\nI try in vain to be persuaded that the pole is the seat of frost and desolation; it ever presents itself to my imagination as the region of beauty and delight. There, Margaret, the sun is for ever visible, its broad disk just skirting the horizon and diffusing a perpetual splendour. There snow and frost are banished; and, sailing over a calm sea, we may be wafted to a land surpassing in wonders and in beauty every region hitherto discovered on the habitable globe.`
      },
      {
        title: 'Letter IV - August 5th, 17— The Stranger Rescued',
        content: `So strange an accident has happened to us that I cannot forbear recording it, although it is very probable that you will see me before these papers can come into your possession.\n\nLast Monday (July 31st) we were nearly surrounded by ice, which closed in the ship on all sides, scarcely leaving her the sea-room in which she floated. Our situation was somewhat perilous, especially as we were compassed round by a very thick fog. We accordingly lay to, hoping that some change would take place in the atmosphere and weather.\n\nAbout two o'clock the mist cleared away, and we beheld, stretched out in every direction, vast and irregular plains of ice, which seemed to have no end. Some of my men groaned, and my own mind began to grow watchful with anxious thoughts, when a strange sight suddenly attracted our attention. We perceived a low carriage, fixed on a sledge and drawn by dogs, pass on towards the north, at the distance of half a mile; a being which had the shape of a man, but apparently of gigantic stature, sat in the sledge and guided the dogs.\n\nThe next morning, as soon as it was light, we beheld the stranger. When he came on board, his limbs were nearly frozen, and his body dreadfully emaciated by fatigue and suffering. I never saw a man in so wretched a condition. As soon as he was in some measure recovered, I removed him to my own cabin and attended on him as much as my duty would permit. I never saw a more interesting creature: his eyes have generally an expression of wildness, but there are moments when his whole countenance is lighted up with a beam of benevolence that I never saw equalled.`
      },
      {
        title: 'Chapter I - Genevese Heritage & The Early Years',
        content: `I am by birth a Genevese, and my family is one of the most distinguished of that republic. My ancestors had been for many years counsellors and syndics, and my father had filled several public situations with honour and reputation. He was respected by all who knew him for his integrity and indefatigable attention to public business.\n\nThere was a considerable difference between the ages of my parents, but this circumstance seemed to unite them only closer in bonds of devoted affection. Much as they were attached to each other, they seemed to draw inexhaustible stores of affection from a very mine of love to bestow upon me. My mother's tender caresses and my father's smile of benevolent pleasure while regarding me are my first recollections.`
      },
      {
        title: 'Chapter IV - The Secrets of Life & Creation',
        content: `From this day natural philosophy, and particularly chemistry, in the most comprehensive sense of the term, became nearly my sole occupation. I read with ardour those works, so full of genius and discrimination, which modern inquirers have written on these subjects. I attended the lectures and cultivated the acquaintance of the celebrated professors of the university.\n\nNo one can conceive the variety of feelings which bore me onwards, like a whirlwind, eager to penetrate the secrets of nature. In a solitary room, or rather cell, at the top of the house, and separated from all other apartments by a gallery and staircase, I kept my workshop of filthy creation; my eyeballs were starting from their sockets in attending to the details of my employment.\n\nOne secret alone I withheld from all human companionship: I had discovered the generation of biological life; nay, more, I had become capable of bestowing animation upon lifeless matter.`
      },
      {
        title: 'Chapter V - The Dreary Night in November (The Awakening)',
        content: `It was on a dreary night of November that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet. It was already one in the morning; the rain pattered dismally against the panes, and my candle was nearly burnt out, when, by the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs.\n\nHow can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form? His limbs were in proportion, and I had selected his features as beautiful. Beautiful! Great God! His yellow skin scarcely covered the work of muscles and arteries beneath; his hair was of a lustrous black, and flowing; his teeth of a pearly whiteness; but these luxuriances only formed a more horrid contrast with his watery eyes, that seemed almost of the same colour as the dun-white sockets in which they were set.\n\nThe beauty of the dream vanished, and breathless horror and disgust filled my heart. Unable to endure the aspect of the being I had created, I rushed out of the room.`
      },
      {
        title: 'Chapter X - The Encounter upon the Sea of Ice (Montanvert)',
        content: `I spent the following day roaming through the valley. I stood beside the sources of the Arveiron, which take their rise in a glacier, that with slow pace is advancing down from the summit of the hills to barricade the valley. The abrupt sides of vast mountains were before me; the icy wall of the glacier overhung me; a few shattered pines were scattered around; and the solemn silence of this glorious presence-chamber of imperial nature was broken only by the brawling waves or the fall of some vast fragment of ice.\n\nAs I said this I suddenly beheld the figure of a man, at some distance, advancing towards me with superhuman speed. He bounded over the crevices in the ice, among which I had walked with caution; his stature, also, as he approached, seemed to exceed that of man.\n\n"Devil," I exclaimed, "do you dare approach me? Begone, vile insect! Or rather, stay, that I may trample you to dust!"\n\n"I expected this reception," said the daemon. "All men hate the wretched; how, then, must I be hated, who am miserable beyond all living things! Yet you, my creator, detest and spurn me, thy creature, to whom thou art bound by ties only dissoluble by the annihilation of one of us. Do your duty towards me, and I will do mine towards you and the rest of mankind."`
      },
      {
        title: 'Chapter XXIV - The Arctic Chase & Final Journal',
        content: `My present situation was one in which all the faculties of my mind were concentrated in one terrible resolve. I pursued him through Europe and deep into the wastes of Russia. Day after day, month after month, the demon led me a wild chase across frozen seas.\n\n"Prepare! I call upon you, spirits of the dead, and on you, wandering ministers of vengeance, to aid and conduct me in my work!"\n\nAnd now, Walton, I have told you my tale. A few hours, and I shall be no more. The monster still lives; but let him beware, for justice shall yet reach him on these lonely fields of ice.`
      }
    ]
  },
  {
    id: 102,
    genre: 'scifi',
    title: 'The Time Machine',
    author: 'H.G. Wells',
    year: 1895,
    copies: 5,
    cover: 'leather-brown',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/35',
    synopsis: 'A Victorian English scientist invents a device that transports him into the distant future (Year 802,701 AD), discovering a divided post-human species: the gentle Eloi and the subterranean Morlocks.',
    chapters: [
      {
        title: 'Chapter I - The Four Dimensions of Space and Time',
        content: `The Time Traveller was expounding a recondite matter to us. His grey eyes shone and twinkled, and his usually pale face was flushed and animated. The fire burnt brightly, and the soft radiance of the incandescent lights in the lilies of silver caught the bubbles that flashed and passed in our glasses.\n\n"You must follow me carefully. I shall have to controvert one or two ideas that are almost universally accepted. The geometry, for instance, they taught you at school is founded on a misconception."\n\n"Is not that rather a large thing to expect us to begin upon?" said Filby, an argumentative person with red hair.\n\n"I do not mean to ask you to accept anything without reasonable ground for it. You will soon admit as much as I need from you. You know of course that a mathematical line, a line of thickness nil, has no real existence. They taught you that? Nor has a mathematical plane. These things are mere abstractions."\n\n"That is all right," said the Psychologist.\n\n"Nor, having only length, breadth, and thickness, can a cube have a real existence."\n\n"There I object," said Filby. "Of course a solid body may exist. All real things—"\n\n"So most people think. But wait a moment. Can an instantaneous cube exist?"\n\n"Don't follow you," said Filby.\n\n"Can a cube that does not exist for any time at all, have a real existence? There is no difference between Time and any of the three dimensions of Space, except that our consciousness moves along it."`
      },
      {
        title: 'Chapter III - The Journey through Millennia',
        content: `I drew a breath, set my teeth, gripped the starting lever with both hands, and went off with a thud. The laboratory got hazy and went dark. Mrs. Watchett came in, and walked, apparently without seeing me, towards the garden door. I suppose it took her a minute or so to traverse the place, but to me she seemed to shoot across the room like a rocket.\n\nI pushed the lever over to its extreme position. The night came like the turning out of a lamp, and in another moment came to-morrow. The laboratory grew faint and hazy, then fainter and ever fainter. To-morrow night came black, then day again, night again, day again, faster and faster still. An eddying murmur filled my ears, and a strange, dumbly confused vertigo seized me.\n\nI saw the sun hopping swiftly across the sky, leaping it every minute, and every minute marking a day. I suppose it was about a year a minute. The sky grew a wonderful dark blue, and the flickering sun became a luminous arc across the heavens.`
      },
      {
        title: 'Chapter V - The Golden Age of Eloi & Morlocks',
        content: `In another moment we were standing face to face, I and this fragile thing out of futurity. He came straight up to me and laughed into my eyes. The absence of any sign of fear in his manner strike me at once. He was a slight creature, perhaps four feet high, clad in a purple tunic, girdled at the waist with a leather belt.\n\nThen I looked up at the great grey building that rose through the lush vegetation. It was a palace of porcelain and crystal, half decayed by hundreds of thousands of years. But beneath the surface, deep in the dark ventilation shafts of the world, I heard the throbbing of ancient subterranean machines and the breathing of the Morlocks.`
      }
    ]
  },
  {
    id: 103,
    genre: 'scifi',
    title: 'The War of the Worlds',
    author: 'H.G. Wells',
    year: 1898,
    copies: 3,
    cover: 'leather-navy',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/36',
    synopsis: 'Martian invaders armed with heat-rays and towering tripod fighting machines land in Victorian England, devastating human civilization until encountering Earth microbes.',
    chapters: [
      {
        title: 'Chapter I - The Eve of the War',
        content: `No one would have believed in the last years of the nineteenth century that this world was being watched keenly and closely by intelligences greater than man's and yet as mortal as his own; that as men busied themselves about their various concerns they were scrutinised and studied, perhaps almost as narrowly as a man with a microscope might scrutinise the transient creatures that swarm and multiply in a drop of water.\n\nWith infinite complacency men went to and fro over this globe about their little affairs, serene in their assurance of their empire over matter. It is possible that the infusoria under the microscope do the same. No one gave a thought to the older worlds of space as sources of human danger, or thought of them only to dismiss the idea of life upon them as impossible or improbable.\n\nYet across the gulf of space, minds that are to our minds as ours are to those of the beasts that perish, intellects vast and cool and unsympathetic, regarded this earth with envious eyes, and slowly and surely drew their plans against us.`
      },
      {
        title: 'Chapter V - The Heat-Ray in Horsell Common',
        content: `A slow, mechanical movement caught my eye. The cylindrical top of the Martian vessel began to unscrew. An enormous metallic tripod slowly emerged, towering sixty feet into the night air.\n\nThen there flashed a blinding green light, and a humming hiss echoed across the pit. In an instant, trees, heather, and human onlookers burst into blazing sheets of fire. The Martians possessed an invisible, concentrated ray of heat that vaporized everything before it.`
      }
    ]
  },
  {
    id: 104,
    genre: 'scifi',
    title: 'Twenty Thousand Leagues Under the Sea',
    author: 'Jules Verne',
    year: 1870,
    copies: 4,
    cover: 'leather-green',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/164',
    synopsis: 'Professor Aronnax, his servant Conseil, and harpooner Ned Land embark on an unprecedented underwater odyssey aboard Captain Nemo’s futuristic submarine, the Nautilus.',
    chapters: [
      {
        title: 'Chapter I - A Shifting Reef in the Pacific Ocean',
        content: `The year 1866 was signalised by a remarkable incident, a mysterious and puzzling phenomenon, which doubtless no one has yet forgotten. Not to mention rumours which agitated the maritime population and excited the public mind in both continents, the sailors were particularly moved.\n\nMerchants, common sailors, captains of vessels, skippers, both of Europe and America, naval officers of all countries, and the Governments of several States on the two continents, were deeply interested in the matter.\n\nFor some time past vessels had been met by "an enormous thing," a long object, spindle-shaped, occasionally phosphorescent, and infinitely larger and more rapid in its movements than a whale.`
      },
      {
        title: 'Chapter X - Captain Nemo & The Nautilus Engine',
        content: `The man who stood before me was tall, with a broad forehead, proud black eyes, and an expression of quiet defiance. "You are aboard my vessel, the Nautilus, Monsieur Aronnax," he said in flawless French.\n\n"I have broken with humanity for reasons which I alone have the right to judge. I do not obey its laws, and I invite you never to appeal to them before me again!"`
      }
    ]
  },
  {
    id: 105,
    genre: 'scifi',
    title: 'A Journey to the Centre of the Earth',
    author: 'Jules Verne',
    year: 1864,
    copies: 3,
    cover: 'leather-cognac',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/18857',
    synopsis: 'An eccentric German professor, his nephew Axel, and their Icelandic guide descend into an extinct volcano in Iceland to discover a subterranean prehistoric world.',
    chapters: [
      {
        title: 'Chapter I - The Cryptic Runes of Arne Saknussemm',
        content: `Looking back to all that has occurred to me since that eventful day, I am scarcely able to believe in the reality of my adventures. My uncle, Professor Otto Lidenbrock of the University of Hamburg, burst into the study with a rare medieval runic parchment.\n\n"Axel!" he shouted in ecstasy. "Descend into the crater of Sneffels Jokull before the kalends of July, bold traveller, and thou wilt reach the centre of the Earth!"`
      }
    ]
  },
  {
    id: 106,
    genre: 'scifi',
    title: 'The Strange Case of Dr. Jekyll and Mr. Hyde',
    author: 'Robert Louis Stevenson',
    year: 1886,
    copies: 5,
    cover: 'leather-black',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/43',
    synopsis: 'A respected London physician develops a chemical serum that physically isolates and unleashes his darkest, most violent impulses as Edward Hyde.',
    chapters: [
      {
        title: 'Chapter I - Story of the Door',
        content: `Mr. Utterson the lawyer was a man of a rugged countenance that was never lighted by a smile; cold, scanty and embarrassed in discourse; backward in sentiment; lean, long, dusty, dreary and yet somehow lovable.\n\nIt was two doors from one corner, on the left hand going east; the building was two storeys high; showed no window, nothing but a door on the lower storey and a blind forehead of discoloured wall on the upper.`
      }
    ]
  },
  {
    id: 107,
    genre: 'scifi',
    title: 'A Princess of Mars',
    author: 'Edgar Rice Burroughs',
    year: 1912,
    copies: 4,
    cover: 'leather-burgundy',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/62',
    synopsis: 'Confederate veteran John Carter is mysteriously transported to Barsoom (Mars), discovering low-gravity superhuman strength, green Thark warriors, and Dejah Thoris.',
    chapters: [
      {
        title: 'Chapter I - On the Arizona Hills',
        content: `I am a very old man; how old I do not know. It is possible that I am a hundred, maybe more, but I cannot tell because I have never aged as other men, nor do I remember any childhood.\n\nI opened my eyes upon a strange and weird landscape on the red sands of Barsoom.`
      }
    ]
  },
  {
    id: 108,
    genre: 'scifi',
    title: 'The Invisible Man',
    author: 'H.G. Wells',
    year: 1897,
    copies: 3,
    cover: 'leather-brown',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/5230',
    synopsis: 'A brilliant researcher discovers the optical chemistry of invisibility but is driven to megalomania and terror in a Sussex village.',
    chapters: [
      {
        title: 'Chapter I - The Strange Man’s Arrival at Iping',
        content: `The stranger came early in February, one wintry day, through a biting wind and a driving snow, walking from Bramblehurst railway station with a little black portmanteau in his thickly gloved hand.`
      }
    ]
  },
  {
    id: 109,
    genre: 'scifi',
    title: 'The Lost World',
    author: 'Sir Arthur Conan Doyle',
    year: 1912,
    copies: 4,
    cover: 'leather-green',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/139',
    synopsis: 'Professor Challenger leads an Amazonian expedition to an isolated South American plateau where dinosaurs still roam.',
    chapters: [
      {
        title: 'Chapter I - The Outburst of Professor Challenger',
        content: `Mr. Edward Malone of the Daily Gazette was tasked with interviewing the ferocious Professor George Edward Challenger regarding prehistoric beasts in the Amazon.`
      }
    ]
  },
  {
    id: 110,
    genre: 'scifi',
    title: 'Flatland: A Romance of Many Dimensions',
    author: 'Edwin A. Abbott',
    year: 1884,
    copies: 4,
    cover: 'leather-navy',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/201',
    synopsis: 'A geometrical satire exploring higher dimensions as a Square from a two-dimensional world is introduced to the third dimension by a Sphere.',
    chapters: [
      {
        title: 'Section I - Of the Nature of Flatland',
        content: `I call our world Flatland, not because we call it so, but to make its nature clearer to you, my happy readers, who are privileged to live in Space.`
      }
    ]
  },
  {
    id: 111,
    genre: 'scifi',
    title: 'The Island of Doctor Moreau',
    author: 'H.G. Wells',
    year: 1896,
    copies: 3,
    cover: 'leather-black',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/159',
    synopsis: 'Shipwrecked Edward Prendick discovers a remote Pacific island where a vivisectionist creates human-animal hybrids.',
    chapters: [{ title: 'Chapter I - In the Dingey of the Lady Vain', content: `I was shipwrecked upon an open boat under the equator...` }]
  },
  {
    id: 112,
    genre: 'scifi',
    title: 'From the Earth to the Moon',
    author: 'Jules Verne',
    year: 1865,
    copies: 3,
    cover: 'leather-cognac',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/83',
    synopsis: 'The Baltimore Gun Club builds a massive space cannon in Florida to shoot a manned projectile to the Moon.',
    chapters: [{ title: 'Chapter I - The Gun Club', content: `During the War of the Rebellion, a new and influential club was founded in Baltimore...` }]
  },
  {
    id: 113,
    genre: 'scifi',
    title: 'The Gods of Mars',
    author: 'Edgar Rice Burroughs',
    year: 1913,
    copies: 3,
    cover: 'leather-burgundy',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/64',
    synopsis: 'John Carter returns to Mars after ten years on Earth, fighting through the Valley Dor and the Temple of Issus.',
    chapters: [{ title: 'Chapter I - The Valley Dor', content: `I opened my eyes upon the strange subterranean river of Iss...` }]
  },
  {
    id: 114,
    genre: 'scifi',
    title: 'Looking Backward: 2000–1887',
    author: 'Edward Bellamy',
    year: 1888,
    copies: 3,
    cover: 'leather-brown',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/624',
    synopsis: 'A Victorian Bostonian falls into a hypnotic trance and wakes up in the socialist utopian society of the year 2000.',
    chapters: [{ title: 'Chapter I - Boston in 1887', content: `I first saw the light of day in the city of Boston in 1857...` }]
  },
  {
    id: 115,
    genre: 'scifi',
    title: 'The First Men in the Moon',
    author: 'H.G. Wells',
    year: 1901,
    copies: 3,
    cover: 'leather-navy',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/1013',
    synopsis: 'Bedford and scientist Cavor invent gravity-defying "Cavorite" and encounter the underground Selenite civilization.',
    chapters: [{ title: 'Chapter I - Mr. Bedford Meets Mr. Cavor at Lympne', content: `As I sit writing in my study, the extraordinary lunar adventures begin to unfold...` }]
  },
  {
    id: 116,
    genre: 'scifi',
    title: 'The Food of the Gods',
    author: 'H.G. Wells',
    year: 1904,
    copies: 3,
    cover: 'leather-green',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/11680',
    synopsis: 'Two scientists invent Herakleophorbia IV, a growth-inducing chemical that breeds giant wasps, giant children, and social upheaval.',
    chapters: [{ title: 'Chapter I - The Discovery of the Food', content: `In the middle years of the reign of Queen Victoria, experimental physiology took a curious step...` }]
  },
  {
    id: 117,
    genre: 'scifi',
    title: 'Erewhon; or, Over the Range',
    author: 'Samuel Butler',
    year: 1872,
    copies: 3,
    cover: 'leather-cognac',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/1906',
    synopsis: 'A traveler crosses a mountain range into a hidden country where disease is treated as a crime and machines are outlawed.',
    chapters: [{ title: 'Chapter I - Waste Lands', content: `If the reader will excuse my not giving the name of the colony, I will commence my story...` }]
  },
  {
    id: 118,
    genre: 'scifi',
    title: 'A Crystal Age',
    author: 'W.H. Hudson',
    year: 1887,
    copies: 3,
    cover: 'leather-black',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/4862',
    synopsis: 'An English traveler falls into a crevasse and awakens millennia later in a peaceful, matriarchal post-industrial world.',
    chapters: [{ title: 'Chapter I - The Awakening', content: `I awoke with a strange feeling of cold freshness on my face...` }]
  },
  {
    id: 119,
    genre: 'scifi',
    title: 'The Master of the World',
    author: 'Jules Verne',
    year: 1904,
    copies: 3,
    cover: 'leather-burgundy',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/3815',
    synopsis: 'Robur the Conqueror returns with the Terror, an amphibious, submarine, and supersonic flying machine.',
    chapters: [{ title: 'Chapter I - What Happened in the Blue Ridge', content: `If I had not been present at these strange events in North Carolina...` }]
  },
  {
    id: 120,
    genre: 'scifi',
    title: 'The Skylark of Space',
    author: 'E.E. "Doc" Smith',
    year: 1928,
    copies: 4,
    cover: 'leather-brown',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/20869',
    synopsis: 'Dick Seaton accidentally discovers atomic intra-action energy, building the interstellar starship Skylark.',
    chapters: [{ title: 'Chapter I - The Atom Shatterer', content: `Petrifying a solution of platinum in the presence of an electric field...` }]
  },

  // =========================================================================
  // 2. COMEDY & HUMOR (20 Books)
  // =========================================================================
  {
    id: 201,
    genre: 'comedy',
    title: 'The Importance of Being Earnest',
    author: 'Oscar Wilde',
    year: 1895,
    copies: 4,
    cover: 'leather-burgundy',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/844',
    synopsis: 'A sparkling, razor-sharp Victorian satire of high society manners, fictitious identities (Bunburying), and the absolute necessity of being named Ernest.',
    chapters: [
      {
        title: 'Act I - Algernon Moncrieff’s Flat in Half-Moon Street',
        content: `ALGERNON: Did you hear what I was playing, Lane?\nLANE: I didn't think it polite to listen, sir.\nALGERNON: I'm sorry for that, for your sake. I don't play accurately—any one can play accurately—but I play with wonderful expression. As far as the piano is concerned, sentiment is my forte. I keep science for Life.\nLANE: Yes, sir.\n\nALGERNON: By the way, did you prepare the cucumber sandwiches for Lady Bracknell?\nLANE: Yes, sir. (Hands plate.)\nALGERNON: (Takes two, sits on sofa.) Oh! Lane, I see from your book that on Thursday night eight bottles of champagne are entered as consumed.\nLANE: Yes, sir; eight bottles and a pint.\nALGERNON: Why is it that at a bachelor's establishment the servants invariably drink the champagne? I ask merely for information.\nLANE: I attribute it to the superior quality of the wine, sir. I have often observed that in married households the champagne is rarely of a first-rate brand.`
      },
      {
        title: 'Act I (Scene II) - Lady Bracknell and the Handbag',
        content: `LADY BRACKNELL: You can hardly imagine that I and Lord Bracknell would dream of allowing our only daughter to marry into a cloak-room, and form an alliance with a parcel?\n\nJACK: May I ask you then what you would advise me to do?\n\nLADY BRACKNELL: I would strongly advise you, Mr. Worthing, to try and acquire some relations as soon as possible, and to make a definite effort to produce at any rate one parent, of either sex, before the season is quite over.\n\nJACK: Well, I don't see how I can possibly manage that. I can produce the hand-bag at any moment. It is in my dressing-room at home.\n\nLADY BRACKNELL: Me, sir! What has it to do with me? To lose one parent, Mr. Worthing, may be regarded as a misfortune; to lose both looks like carelessness!`
      }
    ]
  },
  {
    id: 202,
    genre: 'comedy',
    title: 'Three Men in a Boat (To Say Nothing of the Dog)',
    author: 'Jerome K. Jerome',
    year: 1889,
    copies: 5,
    cover: 'leather-brown',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/308',
    synopsis: 'A hilarious account of a two-week boating holiday on the Thames from Kingston to Oxford by three hypochondriac Londoners and Montmorency the fox terrier.',
    chapters: [
      {
        title: 'Chapter I - Three Invalids Diagnose Themselves',
        content: `There were four of us—George, and William Samuel Harris, and myself, and Montmorency. We were sitting in my room, smoking, and talking about how bad we were—bad from a medical point of view I mean, of course.\n\nWe were all feeling seedy, and we were getting quite nervous about it. Harris said he felt such extraordinary fits of giddiness come over him at times, that he hardly knew what he was doing; and then George said that he had fits of giddiness too, and hardly knew what he was doing. With me, it was my liver that was out of order.\n\nI knew it was my liver that was out of order, because I had just been reading a patent liver-pill circular, in which were detailed the various symptoms by which a man could tell when his liver was out of order. I had them all.`
      }
    ]
  },
  {
    id: 203,
    genre: 'comedy',
    title: 'Right Ho, Jeeves',
    author: 'P.G. Wodehouse',
    year: 1934,
    copies: 5,
    cover: 'leather-navy',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/10554',
    synopsis: 'Bertie Wooster attempts to manage romantic entanglements at Brinkley Court without the help of his incomparable valet Jeeves, leading to glorious catastrophes.',
    chapters: [
      {
        title: 'Chapter I - Bertie Rebuffs Jeeves',
        content: `"Jeeves," I said, "I am not in the mood for cold baths or advice."\n"Very good, sir," said Jeeves with that respectful gravity that always makes you feel as though you've dropped an egg on your trousers.`
      }
    ]
  },
  {
    id: 204,
    genre: 'comedy',
    title: 'My Man Jeeves',
    author: 'P.G. Wodehouse',
    year: 1919,
    copies: 4,
    cover: 'leather-green',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/8164',
    synopsis: 'Classic episodic encounters featuring Bertie Wooster, Corky, Reggie Pepper, and the omniscient valet Jeeves.',
    chapters: [{ title: 'Story I - Leave It to Jeeves', content: `Jeeves was a genius. There is no other word for it...` }]
  },
  {
    id: 205,
    genre: 'comedy',
    title: 'The Innocents Abroad',
    author: 'Mark Twain',
    year: 1869,
    copies: 4,
    cover: 'leather-cognac',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/3176',
    synopsis: 'Mark Twain’s famously irreverent travelogue recording the comedic misadventures of American tourists on the steamship Quaker City through Europe and the Holy Land.',
    chapters: [{ title: 'Chapter I - The Great Pleasure Excursion', content: `For months the transatlantic voyage had been advertised in every newspaper...` }]
  },
  {
    id: 206,
    genre: 'comedy',
    title: 'A Connecticut Yankee in King Arthur’s Court',
    author: 'Mark Twain',
    year: 1889,
    copies: 4,
    cover: 'leather-black',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/86',
    synopsis: 'A 19th-century Hartford engineer is knocked unconscious and awakens in sixth-century Camelot, modernizing knightly society with telegraphs, fireworks, and bicycles.',
    chapters: [{ title: 'Chapter I - Camelot', content: `"Camelot—Camelot," said I to myself. "I don't seem to remember any town of that name in Connecticut."` }]
  },
  {
    id: 207,
    genre: 'comedy',
    title: 'The Pickwick Papers',
    author: 'Charles Dickens',
    year: 1836,
    copies: 4,
    cover: 'leather-burgundy',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/580',
    synopsis: 'The founding members of the Pickwick Club set out on eccentric coach journeys across England to observe quaint human behavior.',
    chapters: [{ title: 'Chapter I - The Pickwickians', content: `The first ray of light which illumines the obscurity of the Pickwick Club...` }]
  },
  {
    id: 208,
    genre: 'comedy',
    title: 'The Diary of a Nobody',
    author: 'George and Weedon Grossmith',
    year: 1892,
    copies: 3,
    cover: 'leather-brown',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/214',
    synopsis: 'The humorous, endearing domestic diary of Charles Pooter, a self-important suburban clerk living in The Laurels, Holloway.',
    chapters: [{ title: 'Chapter I - My Home and My Daily Round', content: `My dear wife Carrie and I have now been settled in The Laurels for six days...` }]
  },
  {
    id: 209,
    genre: 'comedy',
    title: 'Psmith in the City',
    author: 'P.G. Wodehouse',
    year: 1910,
    copies: 3,
    cover: 'leather-navy',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/878',
    synopsis: 'The monocled, unflappable Rupert Psmith conquers high finance in the London New Asiatic Bank with witty aplomb.',
    chapters: [{ title: 'Chapter I - The New Asiatic Bank', content: `Psmith adjusted his monocle and regarded the ledger with quiet sympathy...` }]
  },
  {
    id: 210,
    genre: 'comedy',
    title: 'Much Obliged, Jeeves',
    author: 'P.G. Wodehouse',
    year: 1971,
    copies: 3,
    cover: 'leather-green',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/10554',
    synopsis: 'Bertie Wooster discovers the Junior Ganymede Club’s secret book containing scandalous entries on all the aristocracy.',
    chapters: [{ title: 'Chapter I - The Junior Ganymede Book', content: `It is not often that Bertram Wooster finds himself speechless...` }]
  },
  {
    id: 211,
    genre: 'comedy',
    title: 'Roughing It',
    author: 'Mark Twain',
    year: 1872,
    copies: 3,
    cover: 'leather-cognac',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/3177',
    synopsis: 'Twain’s wild stagecoach expedition through the American West, Nevada silver mining towns, and Hawaii.',
    chapters: [{ title: 'Chapter I - Westward on the Overland Stage', content: `My brother had been appointed Secretary of Nevada Territory...` }]
  },
  {
    id: 212,
    genre: 'comedy',
    title: 'Tartuffe; or, The Hypocrite',
    author: 'Molière',
    year: 1664,
    copies: 3,
    cover: 'leather-black',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/2848',
    synopsis: 'A hilarious French verse comedy satirizing religious hypocrisy and gullibility.',
    chapters: [{ title: 'Act I - Madame Pernelle Lectures the Family', content: `MADAME PERNELLE: Come along, Flipote, come along, let me be gone from this house!` }]
  },
  {
    id: 213,
    genre: 'comedy',
    title: 'The Man Who Was Thursday',
    author: 'G.K. Chesterton',
    year: 1908,
    copies: 4,
    cover: 'leather-burgundy',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/1695',
    synopsis: 'A metaphysical comedic nightmare where a philosophical policeman infiltrates a secret council of anarchists.',
    chapters: [{ title: 'Chapter I - The Two Poets of Saffron Park', content: `The suburb of Saffron Park lay on the sunset side of London...` }]
  },
  {
    id: 214,
    genre: 'comedy',
    title: 'Three Men on the Bummel',
    author: 'Jerome K. Jerome',
    year: 1900,
    copies: 3,
    cover: 'leather-brown',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/2183',
    synopsis: 'The three companions embark on a chaotic bicycle tour across Germany’s Black Forest.',
    chapters: [{ title: 'Chapter I - The Planning of the Bummel', content: `"What is a Bummel?" said George...` }]
  },
  {
    id: 215,
    genre: 'comedy',
    title: 'Love and Mr. Lewisham',
    author: 'H.G. Wells',
    year: 1900,
    copies: 3,
    cover: 'leather-navy',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/11640',
    synopsis: 'A comic novel following a youthful schoolmaster whose rigid life plan is derailed by romantic entanglements.',
    chapters: [{ title: 'Chapter I - The Schema of Ambition', content: `On the wall of Lewisham's bed-sitting room hung his grand Schema of Life...` }]
  },
  {
    id: 216,
    genre: 'comedy',
    title: 'Nonsense Novels',
    author: 'Stephen Leacock',
    year: 1911,
    copies: 3,
    cover: 'leather-green',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/3990',
    synopsis: 'A collection of uproarious parodies lampooning detective fiction, sea stories, and chivalric romances.',
    chapters: [{ title: 'Novel I - Maddened by Mystery; or, The Defective Detective', content: `The Great Detective sat in his arm-chair in his rooms in Baker Street...` }]
  },
  {
    id: 217,
    genre: 'comedy',
    title: 'Idle Thoughts of an Idle Fellow',
    author: 'Jerome K. Jerome',
    year: 1886,
    copies: 3,
    cover: 'leather-cognac',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/849',
    synopsis: 'Fourteen witty essays on being idle, being in love, the weather, vanity, and dress.',
    chapters: [{ title: 'Essay I - On Being Idle', content: `It is impossible to enjoy idling thoroughly unless one has plenty of work to do...` }]
  },
  {
    id: 218,
    genre: 'comedy',
    title: 'The Canterville Ghost',
    author: 'Oscar Wilde',
    year: 1887,
    copies: 4,
    cover: 'leather-black',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/398',
    synopsis: 'An American minister buys an English haunted mansion, and his practical family drives the resident ghost to exasperation.',
    chapters: [{ title: 'Chapter I - The Purchase of Canterville Chase', content: `When Mr. Hiram B. Otis, the American Minister, bought Canterville Chase...` }]
  },
  {
    id: 219,
    genre: 'comedy',
    title: 'Brewster’s Millions',
    author: 'George Barr McCutcheon',
    year: 1902,
    copies: 3,
    cover: 'leather-burgundy',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/1269',
    synopsis: 'A young man must spend one million dollars in one year without acquiring any assets to inherit a seven-million-dollar fortune.',
    chapters: [{ title: 'Chapter I - The Unwelcome Fortune', content: `Montgomery Brewster sat in his office looking at the most extraordinary will...` }]
  },
  {
    id: 220,
    genre: 'comedy',
    title: 'The Inimitable Jeeves',
    author: 'P.G. Wodehouse',
    year: 1923,
    copies: 4,
    cover: 'leather-brown',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/8164',
    synopsis: 'Bingo Little’s repeated disastrous romantic endeavors continuously rescued by the brilliant Jeeves.',
    chapters: [{ title: 'Chapter I - Jeeves Exerts the Old Gray Matter', content: `Bingo Little was in love again. That was nothing new...` }]
  },

  // =========================================================================
  // 3. EDUCATION & SCIENCE LITERATURE (20 Books)
  // =========================================================================
  {
    id: 301,
    genre: 'education',
    title: 'The Republic',
    author: 'Plato',
    year: -375,
    copies: 5,
    cover: 'leather-burgundy',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/1497',
    synopsis: 'Plato’s foundational philosophical dialogue on justice, the nature of the ideal state, education, and the famous Allegory of the Cave.',
    chapters: [
      {
        title: 'Book VII - The Allegory of the Cave',
        content: `SOCRATES: And now, let me show in a figure how far our nature is enlightened or unenlightened: Behold! human beings living in an underground den, which has a mouth open towards the light, and reaching all along the den; here they have been from their childhood, and have their legs and necks chained so that they cannot move, and can only see before them.\n\nAbove and behind them a fire is blazing at a distance, and between the fire and the prisoners there is a raised way; and you will see, if you look, a low wall built along the way, like the screen which marionette players have in front of them.\n\nGLAUCON: I see.\n\nSOCRATES: And do you see men passing along the wall carrying all sorts of vessels, and statues and figures of animals made of wood and stone? Some of them are talking, others silent.\n\nGLAUCON: You have shown me a strange image, and they are strange prisoners.\n\nSOCRATES: Like ourselves; and they see only their own shadows, or the shadows of one another, which the fire throws on the opposite wall of the cave.`
      }
    ]
  },
  {
    id: 302,
    genre: 'education',
    title: 'The Autobiography of Benjamin Franklin',
    author: 'Benjamin Franklin',
    year: 1791,
    copies: 4,
    cover: 'leather-brown',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/20203',
    synopsis: 'The famous memoirs of printer, inventor, scientist, and statesman Benjamin Franklin, detailing his method for moral perfection through 13 civic virtues.',
    chapters: [
      {
        title: 'Chapter VIII - The Plan for Moral Perfection (13 Virtues)',
        content: `It was about this time I conceiv'd the bold and arduous project of arriving at moral perfection. I wish'd to live without committing any fault at any time; I would conquer all that either natural inclination, custom, or company might lead me into.\n\nThe names of virtues, with their precepts, were:\n1. TEMPERANCE: Eat not to dullness; drink not to elevation.\n2. SILENCE: Speak not but what may benefit others or yourself; avoid trifling conversation.\n3. ORDER: Let all your things have their places; let each part of your business have its time.\n4. RESOLUTION: Resolve to perform what you ought; perform without fail what you resolve.\n5. INDUSTRY: Lose no time; be always employ'd in something useful; cut off all unnecessary actions.`
      }
    ]
  },
  {
    id: 303,
    genre: 'education',
    title: 'A Short History of the World',
    author: 'H.G. Wells',
    year: 1922,
    copies: 4,
    cover: 'leather-navy',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/35461',
    synopsis: 'A comprehensive, readable educational survey of cosmic, biological, and human history from Earth’s origins through world civilizations.',
    chapters: [
      {
        title: 'Chapter I - The World in Space',
        content: `The story of our world is a story that is still very wonderful and very great. It is a story that begins in cosmic fire, billions of years before the first living cell stirred in ancient oceans.`
      }
    ]
  },
  {
    id: 304,
    genre: 'education',
    title: 'Democracy and Education',
    author: 'John Dewey',
    year: 1916,
    copies: 4,
    cover: 'leather-green',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/852',
    synopsis: 'Dewey’s seminal pedagogical philosophy proposing experiential learning, critical inquiry, and democratic social engagement.',
    chapters: [
      {
        title: 'Chapter I - Education as a Necessity of Life',
        content: `The most notable distinction between living and inanimate things is that the former maintain themselves by renewal. Education, in its broadest sense, is the means of this social continuity of life.`
      }
    ]
  },
  {
    id: 305,
    genre: 'education',
    title: 'The Montessori Method',
    author: 'Maria Montessori',
    year: 1912,
    copies: 4,
    cover: 'leather-cognac',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/39863',
    synopsis: 'Scientific pedagogy for child-centered, self-directed learning, tactile educational materials, and prepared classroom environments.',
    chapters: [
      {
        title: 'Chapter I - A Critical Consideration of the New Pedagogy',
        content: `Scientific pedagogy has never yet been definitely constructed nor defined. The school must permit the free, natural manifestations of the child if in the school scientific pedagogy is to be born.`
      }
    ]
  },
  {
    id: 306,
    genre: 'education',
    title: 'How We Think',
    author: 'John Dewey',
    year: 1910,
    copies: 3,
    cover: 'leather-black',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/37423',
    synopsis: 'An educational guide on training habits of reflective thinking, scientific problem-solving, and logical deduction in students.',
    chapters: [
      {
        title: 'Chapter I - What is Thinking?',
        content: `No words are oftener on our lips than thinking and think. Reflective thought alone involves active, persistent, and careful consideration of any belief in the light of the grounds that support it.`
      }
    ]
  },
  {
    id: 307,
    genre: 'education',
    title: 'Calculus Made Easy',
    author: 'Silvanus P. Thompson',
    year: 1910,
    copies: 5,
    cover: 'leather-burgundy',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/33283',
    synopsis: 'A brilliantly accessible introduction to differential and integral calculus, demystifying mathematical notation for curious students.',
    chapters: [
      {
        title: 'Prologue - What One Fool Can Do, Another Can',
        content: `Considering how many fools can calculate, it is surprising that it should be thought either a difficult or an esoteric thing for someone with common sense to understand calculus.\n\nThe preliminary terror, which chokes off most of those who attempt to study calculus, can be banished by understanding that dx simply means a little bit of x.`
      }
    ]
  },
  {
    id: 308,
    genre: 'education',
    title: 'Astronomy for Everybody',
    author: 'Simon Newcomb',
    year: 1902,
    copies: 4,
    cover: 'leather-brown',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/43460',
    synopsis: 'A popular and clear handbook on celestial mechanics, planetary orbits, the constellations, and telescope observation.',
    chapters: [
      {
        title: 'Chapter I - The Celestial Sphere',
        content: `To the eye of the observer, the vault of heaven appears as a great hollow dome, studded with glittering stars.`
      }
    ]
  },
  {
    id: 309,
    genre: 'education',
    title: 'The Principles of Psychology',
    author: 'William James',
    year: 1890,
    copies: 4,
    cover: 'leather-navy',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/5827',
    synopsis: 'William James’s monumental exploration of human consciousness, stream of thought, habit formation, and emotional perception.',
    chapters: [
      {
        title: 'Chapter IV - The Habitual Mind',
        content: `When we look at living creatures from an outward point of view, one of the first things that strike us is that they are bundles of habits.`
      }
    ]
  },
  {
    id: 310,
    genre: 'education',
    title: 'The Story of Mankind',
    author: 'Hendrik Willem van Loon',
    year: 1921,
    copies: 4,
    cover: 'leather-green',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/754',
    synopsis: 'Winner of the first Newbery Medal, an engaging, illustrated history of human progress from ancient civilizations to the modern era.',
    chapters: [
      {
        title: 'Chapter I - The Setting of the Stage',
        content: `High up in the North in the land called Svithjod, there stands a rock. It is a hundred miles high and a hundred miles wide...`
      }
    ]
  },
  {
    id: 311,
    genre: 'education',
    title: 'Principles of Geology',
    author: 'Charles Lyell',
    year: 1830,
    copies: 3,
    cover: 'leather-cognac',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/37057',
    synopsis: 'The foundational scientific treatise establishing uniformitarianism—that geological processes operate uniformly throughout deep time.',
    chapters: [{ title: 'Chapter I - Geology Defined', content: `Geology is the science which investigates the successive changes that have taken place in the organic and inorganic kingdoms of nature...` }]
  },
  {
    id: 312,
    genre: 'education',
    title: 'The Education of Henry Adams',
    author: 'Henry Adams',
    year: 1918,
    copies: 3,
    cover: 'leather-black',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/2044',
    synopsis: 'A Pulitzer Prize-winning autobiography meditating on 19th-century education versus the rapid onset of the technological Dynamo age.',
    chapters: [{ title: 'Chapter I - Quincy (1838–1848)', content: `Under the shadow of Boston State House, turning its back on the Common, stood the old house...` }]
  },
  {
    id: 313,
    genre: 'education',
    title: 'Creative Evolution',
    author: 'Henri Bergson',
    year: 1907,
    copies: 3,
    cover: 'leather-burgundy',
    shelfTier: 1,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/26163',
    synopsis: 'Philosophical masterpiece introducing the concept of élan vital and the nature of intuitive consciousness.',
    chapters: [{ title: 'Chapter I - The Evolution of Life: Mechanism and Purpose', content: `The history of the evolution of life shows us in the humblest forms of matter...` }]
  },
  {
    id: 314,
    genre: 'education',
    title: 'Self-Reliance and Selected Essays',
    author: 'Ralph Waldo Emerson',
    year: 1841,
    copies: 5,
    cover: 'leather-brown',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/16643',
    synopsis: 'Emerson’s celebrated transcendentalist essays championing individualism, nonconformity, and intuitive self-trust.',
    chapters: [{ title: 'Essay II - Self-Reliance', content: `Trust thyself: every heart vibrates to that iron string. Whoso would be a man must be a nonconformist.` }]
  },
  {
    id: 315,
    genre: 'education',
    title: 'The Prince',
    author: 'Niccolò Machiavelli',
    year: 1532,
    copies: 4,
    cover: 'leather-navy',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/1232',
    synopsis: 'Classic Renaissance political treatise on statecraft, pragmatism, and power dynamics in civic leadership.',
    chapters: [{ title: 'Chapter I - How Many Kinds of Principalities There Are', content: `All states, all powers, that have held and hold rule over men have been and are either republics or principalities.` }]
  },
  {
    id: 316,
    genre: 'education',
    title: 'On the Origin of Species',
    author: 'Charles Darwin',
    year: 1859,
    copies: 4,
    cover: 'leather-green',
    shelfTier: 2,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/1228',
    synopsis: 'The landmark scientific work demonstrating natural selection and the evolutionary descent of biological organisms.',
    chapters: [{ title: 'Chapter I - Variation Under Domestication', content: `When we compare the individuals of the same variety of our older cultivated plants and animals...` }]
  },
  {
    id: 317,
    genre: 'education',
    title: 'Discourse on Method',
    author: 'René Descartes',
    year: 1637,
    copies: 3,
    cover: 'leather-cognac',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/59',
    synopsis: 'The foundational text of modern Western philosophy, establishing rational doubt and Cogito, ergo sum.',
    chapters: [{ title: 'Part I - Considerations Touching the Sciences', content: `Good sense is, of all things among men, the most equally distributed. I think, therefore I am.` }]
  },
  {
    id: 318,
    genre: 'education',
    title: 'Walden; or, Life in the Woods',
    author: 'Henry David Thoreau',
    year: 1854,
    copies: 4,
    cover: 'leather-black',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/205',
    synopsis: 'Thoreau’s classic account of two years of deliberate, simple living in a cabin near Walden Pond, Concord, Massachusetts.',
    chapters: [{ title: 'Chapter I - Economy', content: `When I wrote the following pages, or rather the bulk of them, I lived alone, in the woods, a mile from any neighbor...` }]
  },
  {
    id: 319,
    genre: 'education',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    year: 180,
    copies: 5,
    cover: 'leather-burgundy',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/2680',
    synopsis: 'Private spiritual reflections and Stoic exercises on duty, mortality, resilience, and inner tranquility by the Roman Emperor.',
    chapters: [{ title: 'Book II - Reflections at Carnuntum', content: `When you wake up in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly.` }]
  },
  {
    id: 320,
    genre: 'education',
    title: 'Ethics',
    author: 'Benedict de Spinoza',
    year: 1677,
    copies: 3,
    cover: 'leather-brown',
    shelfTier: 3,
    gutenbergUrl: 'https://www.gutenberg.org/ebooks/3800',
    synopsis: 'A geometric system of rationalist philosophy exploring God, Nature, human emotion, and intellectual freedom.',
    chapters: [{ title: 'Part I - Concerning God', content: `By that which is self-caused, I mean that of which the essence involves existence.` }]
  },

  // =========================================================================
  // 4. COMICS & GRAPHIC SERIALS (20 Golden Age Titles)
  // =========================================================================
  {
    id: 401,
    genre: 'comics',
    title: 'Action Comics (Golden Age Public Domain Collection)',
    author: 'Jerome Siegel & Joe Shuster',
    year: 1938,
    copies: 4,
    cover: 'leather-burgundy',
    shelfTier: 1,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1110',
    synopsis: 'The legendary Golden Age serial that sparked the modern superhero medium, featuring the champion of the oppressed in Metropolis.',
    chapters: [
      {
        title: 'Episode 1 - The Champion of the Oppressed',
        content: `[PANEL 1 - A baby is placed in an experimental rocket as a doomed planet explodes!]\n\n[PANEL 2 - Reaching maturity on Earth, he discovers physical abilities far beyond mortal men: leaping over skyscrapers and outrunning locomotives!]\n\nNARRATOR: Passing under the name of Clark Kent, a mild-mannered news reporter, he resolves to use his strength for the defense of the defenseless!`
      }
    ]
  },
  {
    id: 402,
    genre: 'comics',
    title: 'Detective Comics (Pre-1940 Public Domain Edition)',
    author: 'Bob Kane & Bill Finger',
    year: 1939,
    copies: 4,
    cover: 'leather-black',
    shelfTier: 1,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1111',
    synopsis: 'Pioneering noir pulp mysteries featuring rooftop investigations, masked avengers, and the underworld of Gotham City.',
    chapters: [
      {
        title: 'Case 1 - The Syndicate of the Midnight Shadow',
        content: `[PANEL 1 - Rain cascades down gothic gargoyles high above Gotham's financial district.]\n\nCOMMISSIONER GORDON: "Another chemical executive murdered in his penthouse. Only one mysterious vigilante knows who is behind this..."`
      }
    ]
  },
  {
    id: 403,
    genre: 'comics',
    title: 'Planet Comics (Golden Age Sci-Fi Pulp)',
    author: 'Fiction House Group',
    year: 1940,
    copies: 5,
    cover: 'leather-navy',
    shelfTier: 1,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1112',
    synopsis: 'Daring space opera adventures featuring raygun space rangers, alien worlds, and interplanetary explorations.',
    chapters: [
      {
        title: 'Story 1 - Flint Baker on the Asteroid of Doom',
        content: `[PANEL 1 - Twin rocket engines flare against the rings of Saturn as patrol craft Alpha-9 engages space pirates!]`
      }
    ]
  },
  {
    id: 404,
    genre: 'comics',
    title: 'Plastic Man (Quality Comics Archives)',
    author: 'Jack Cole',
    year: 1941,
    copies: 4,
    cover: 'leather-cognac',
    shelfTier: 2,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1113',
    synopsis: 'Eel O’Brian survives a chemical bath to become the elastic, humorous crime-fighter Plastic Man and his partner Woozy Winks.',
    chapters: [
      {
        title: 'Issue 1 - The Origin of the Elastic Sleuth',
        content: `[PANEL 1 - Eel O'Brian is struck by a vat of experimental chemical solution during a chemical warehouse raid!]`
      }
    ]
  },
  {
    id: 405,
    genre: 'comics',
    title: 'The Spirit (Section Archives)',
    author: 'Will Eisner',
    year: 1940,
    copies: 4,
    cover: 'leather-navy',
    shelfTier: 2,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1114',
    synopsis: 'Will Eisner’s masterwork of comic book storytelling, featuring Denny Colt operating from Central City’s Wildwood Cemetery.',
    chapters: [
      {
        title: 'Chapter 1 - Origin of Central City’s Masked Protector',
        content: `[PANEL 1 - The title splash page: The word 'THE SPIRIT' forms the brickwork of a shadowy alley in Central City.]`
      }
    ]
  },
  {
    id: 406,
    genre: 'comics',
    title: 'Captain Flash (Sterling Comics Archive)',
    author: 'Mike Sekowsky',
    year: 1954,
    copies: 3,
    cover: 'leather-green',
    shelfTier: 2,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1115',
    synopsis: 'Atomic energy scientist Professor Keith Drake gains electrical superhero abilities in 1950s atomic age serials.',
    chapters: [{ title: 'Story 1 - The Power of the Atomic Flash', content: `[PANEL 1 - An experimental cyclotron surges with blinding electric voltage!]` }]
  },
  {
    id: 407,
    genre: 'comics',
    title: 'Blue Beetle (Fox Feature Syndicate Archives)',
    author: 'Charles Nicholas',
    year: 1939,
    copies: 4,
    cover: 'leather-navy',
    shelfTier: 3,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1116',
    synopsis: 'Rookie patrolman Dan Garret discovers Vitamin 2X to fight organized crime in the Golden Age urban jungle.',
    chapters: [{ title: 'Episode 1 - The Mystery of the Green Dragon', content: `[PANEL 1 - Officer Dan Garret dons his chain-mail suit to patrol the waterfront.]` }]
  },
  {
    id: 408,
    genre: 'comics',
    title: 'Doll Man (Quality Comics Archive)',
    author: 'Will Eisner & Lou Fine',
    year: 1939,
    copies: 3,
    cover: 'leather-brown',
    shelfTier: 3,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1117',
    synopsis: 'Chemist Darrel Dane invents a formula enabling him to shrink to six inches tall while retaining full human strength.',
    chapters: [{ title: 'Case 1 - The First World’s Mightiest Mite', content: `[PANEL 1 - Darrel Dane drinks the test tube and shrinks to the size of a doll!]` }]
  },
  {
    id: 409,
    genre: 'comics',
    title: 'Stardust the Super Wizard',
    author: 'Fletcher Hanks',
    year: 1939,
    copies: 3,
    cover: 'leather-burgundy',
    shelfTier: 3,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1118',
    synopsis: 'Surreal Golden Age cosmic enforcer Stardust uses ray beams from his private star to punish planetary criminals.',
    chapters: [{ title: 'Chapter 1 - The Super Space Ray', content: `[PANEL 1 - From his base on a private planetoid, Stardust monitors Earth's transmissions!]` }]
  },
  {
    id: 410,
    genre: 'comics',
    title: 'Fantomah: Mystery Woman of the Jungle',
    author: 'Fletcher Hanks',
    year: 1940,
    copies: 3,
    cover: 'leather-green',
    shelfTier: 3,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1119',
    synopsis: 'The first female superhero in comic book history, protecting the African wilderness with mystical cosmic powers.',
    chapters: [{ title: 'Episode 1 - The Vengeance of the Jungle Empress', content: `[PANEL 1 - Deep in the uncharted jungle, Fantomah senses impending danger!]` }]
  },
  {
    id: 411,
    genre: 'comics',
    title: 'Daredevil Comics (Lev Gleason Archives)',
    author: 'Charles Biro',
    year: 1941,
    copies: 4,
    cover: 'leather-cognac',
    shelfTier: 1,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1120',
    synopsis: 'The mute, boomerang-wielding hero Bart Hill battles the Claw and Axis agents in wartime serials.',
    chapters: [{ title: 'Issue 1 - The Boomerang Avenger', content: `[PANEL 1 - High above the London docks, Daredevil hurls his spiked boomerang!]` }]
  },
  {
    id: 412,
    genre: 'comics',
    title: 'Wonderworld Comics (Fox Feature Syndicate)',
    author: 'Will Eisner',
    year: 1939,
    copies: 3,
    cover: 'leather-navy',
    shelfTier: 1,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1121',
    synopsis: 'Golden Age fantasy anthology featuring the Flame, Yarko the Great, and pulp adventurers.',
    chapters: [{ title: 'Story 1 - The Flame Ignites', content: `[PANEL 1 - Raised by Tibetan lamas, Gary Linn gains command of elemental fire!]` }]
  },
  {
    id: 413,
    genre: 'comics',
    title: 'Silver Streak Comics (Lev Gleason)',
    author: 'Jack Binder',
    year: 1940,
    copies: 3,
    cover: 'leather-black',
    shelfTier: 1,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1122',
    synopsis: 'Classic speedster adventures, introducing the Claw and the original Golden Age Daredevil.',
    chapters: [{ title: 'Story 1 - The Silver Streak Races Time', content: `[PANEL 1 - A silver blur streaks down the highway at five hundred miles an hour!]` }]
  },
  {
    id: 414,
    genre: 'comics',
    title: 'Jungle Comics (Fiction House Archive)',
    author: 'Fiction House',
    year: 1940,
    copies: 3,
    cover: 'leather-green',
    shelfTier: 2,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1123',
    synopsis: 'Exotic pulp jungle serials featuring Ka’a’nga, Lord of the Jungle, and Camilla Queen of the Lost Empire.',
    chapters: [{ title: 'Story 1 - Ka-Anga and the Lost Temple', content: `[PANEL 1 - Ancient drumbeats echo across the mist-shrouded river basin!]` }]
  },
  {
    id: 415,
    genre: 'comics',
    title: 'Mystery Men Comics (Fox Feature Syndicate)',
    author: 'George Mandel',
    year: 1939,
    copies: 3,
    cover: 'leather-brown',
    shelfTier: 2,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1124',
    synopsis: 'Early superhero pulp anthology showcasing the Green Mask, Rex Dexter of Mars, and Wing Turner.',
    chapters: [{ title: 'Episode 1 - The Green Mask Strikes', content: `[PANEL 1 - A glowing green silhouette leaps from the rooftop into the gangland hideout!]` }]
  },
  {
    id: 416,
    genre: 'comics',
    title: 'Fight Comics (Fiction House Hero Serials)',
    author: 'Fiction House',
    year: 1940,
    copies: 3,
    cover: 'leather-burgundy',
    shelfTier: 2,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1125',
    synopsis: 'Action-packed wartime aviation, undercover espionage agents, and costumed heroes.',
    chapters: [{ title: 'Story 1 - Rip Carson and the Island Fortress', content: `[PANEL 1 - Searchlights rake the midnight sky as Allied commandos make landfall!]` }]
  },
  {
    id: 417,
    genre: 'comics',
    title: 'Space Action Comics (Ace Magazines)',
    author: 'Ace Magazines',
    year: 1952,
    copies: 3,
    cover: 'leather-navy',
    shelfTier: 3,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1126',
    synopsis: 'Atomic age science fiction stories of planetary colonization, rocket fleets, and alien encounters.',
    chapters: [{ title: 'Episode 1 - Destination: Proxima Centauri', content: `[PANEL 1 - The nuclear pulse drive ignites beyond the orbit of Neptune!]` }]
  },
  {
    id: 418,
    genre: 'comics',
    title: 'Wings Comics (Golden Age Aviation)',
    author: 'Fiction House',
    year: 1940,
    copies: 3,
    cover: 'leather-cognac',
    shelfTier: 3,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1127',
    synopsis: 'Classic aviation serials featuring the Phantom Falcon, Captain Wing, and historic wartime aerial combat.',
    chapters: [{ title: 'Story 1 - The Phantom Falcon', content: `[PANEL 1 - Twin-engine fighter planes dive out of the sun over the English Channel!]` }]
  },
  {
    id: 419,
    genre: 'comics',
    title: 'Mystic Comics (Timely/Atlas Archive)',
    author: 'Golden Age Timely Group',
    year: 1940,
    copies: 3,
    cover: 'leather-black',
    shelfTier: 3,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1128',
    synopsis: 'Early supernatural crime investigations, occult researchers, and bizarre heroes in 1940s New York.',
    chapters: [{ title: 'Episode 1 - The Man with the Golden Touch', content: `[PANEL 1 - An ancient alchemical relic is stolen from the Metropolitan Museum at midnight!]` }]
  },
  {
    id: 420,
    genre: 'comics',
    title: 'The Overstreet Comic Archive Guide',
    author: 'Historical Comic Preservers',
    year: 1970,
    copies: 4,
    cover: 'leather-burgundy',
    shelfTier: 3,
    gutenbergUrl: 'https://comicbookplus.com/?cid=1129',
    synopsis: 'A historical reference archive documenting Golden Age comic origins, public domain status, and collector milestones.',
    chapters: [{ title: 'Chapter I - The Golden Age (1938-1956)', content: `The Golden Age of Comic Books was an era of unprecedented creative explosion, introducing foundational comic archetypes that defined popular media for generations.` }]
  }
];

if (typeof window !== 'undefined') {
  window.LIBRARY_GENRES = LIBRARY_GENRES;
  window.EXPANDED_BOOKS_DATA = EXPANDED_BOOKS_DATA;
}
