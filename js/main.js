'use strict';

/* ============ DATA ============ */
const SIZES = [
  { g: 100, mult: 0.6 },
  { g: 212, mult: 1 },
  { g: 350, mult: 1.5 }
];

const PRODUCTS = [
  {
    slug: 'arance', code: 'AGR-01', name: 'Marmellata di Arance a fette', price: 6.9, tint: '#fdeedd',
    type: { en: 'Sliced Orange Marmalade · Bio', it: 'Marmellata di arance a fette · Bio' },
    story: {
      en: 'Our bitter oranges ripen under the winter sun and are picked by hand, peel and all. Sliced thick and rested in sugar overnight, they keep the bright, slightly bitter taste of the grove.',
      it: 'Le nostre arance amare maturano al sole d\u2019inverno e si raccolgono a mano, con tutta la buccia. Tagliate a fette spesse e lasciate riposare nello zucchero una notte, conservano il gusto luminoso e leggermente amaro del frutteto.'
    },
    inside: {
      en: ['Bitter oranges (62%)', 'Raw cane sugar', 'Fresh lemon juice', 'Nothing else, no added pectin'],
      it: ['Arance amare (62%)', 'Zucchero di canna grezzo', 'Succo di limone fresco', 'Nient\u2019altro, senza pectina aggiunta']
    },
    making: {
      en: ['Oranges are washed and sliced with the peel on', 'Slices rest in sugar for 12 hours', 'Slow cooking in copper pans, then jarred hot'],
      it: ['Le arance si lavano e si tagliano a fette con la buccia', 'Le fette riposano nello zucchero per 12 ore', 'Cottura lenta in paioli di rame e invasettamento a caldo']
    },
    data: {
      en: [['Fruit', '62 g per 100 g'], ['Energy', '228 kcal / 100 g'], ['Shelf life', '24 months'], ['Origin', 'Our grove, Sicily']],
      it: [['Frutta', '62 g per 100 g'], ['Energia', '228 kcal / 100 g'], ['Conservazione', '24 mesi'], ['Origine', 'Il nostro agrumeto, Sicilia']]
    }
  },
  {
    slug: 'sinfonia', code: 'AGR-02', name: 'Sinfonia Barocca', price: 7.5, tint: '#f7ecf3',
    type: { en: 'Caponata Siciliana', it: 'Caponata Siciliana' },
    story: {
      en: 'Aubergines, tomatoes, celery and olives from the summer garden, cooked slowly in the classic sweet and sour way. It is the jar that sings of August in Sicily.',
      it: 'Melanzane, pomodori, sedano e olive dell\u2019orto estivo, cotti lentamente nel classico agrodolce. \u00c8 il vasetto che canta l\u2019agosto siciliano.'
    },
    inside: {
      en: ['Aubergines and tomatoes', 'Celery, onion and green olives', 'Capers, wine vinegar and a little sugar', 'Extra virgin olive oil'],
      it: ['Melanzane e pomodori', 'Sedano, cipolla e olive verdi', 'Capperi, aceto di vino e poco zucchero', 'Olio extravergine di oliva']
    },
    making: {
      en: ['Vegetables are cut large and fried separately', 'Everything meets in the pan with the sweet and sour sauce', 'Rested a day before jarring, so the flavours marry'],
      it: ['Le verdure si tagliano grandi e si friggono a parte', 'Tutto si incontra in padella con la salsa agrodolce', 'Riposa un giorno prima dell\u2019invasettamento, perch\u00e9 i sapori si sposino']
    },
    data: {
      en: [['Vegetables', '78 g per 100 g'], ['Energy', '96 kcal / 100 g'], ['Shelf life', '18 months'], ['Serve', 'At room temperature']],
      it: [['Verdure', '78 g per 100 g'], ['Energia', '96 kcal / 100 g'], ['Conservazione', '18 mesi'], ['Servire', 'A temperatura ambiente']]
    }
  },
  {
    slug: 'pesto-rosso', code: 'AGR-03', name: 'Pesto Rosso', price: 6.5, tint: '#fbe9e2',
    type: { en: 'Red Pesto', it: 'Pesto rosso' },
    story: {
      en: 'Tomatoes dried on cane mats under the August sun, then pounded with basil, almonds and pecorino. Deep red, dense, and made for hot pasta at midnight.',
      it: 'Pomodori essiccati su cannizzi sotto il sole di agosto, poi pestati con basilico, mandorle e pecorino. Rosso profondo, denso, fatto per la pasta calda di mezzanotte.'
    },
    inside: {
      en: ['Sun-dried tomatoes (48%)', 'Basil and almonds', 'Pecorino cheese', 'Extra virgin olive oil'],
      it: ['Pomodori secchi (48%)', 'Basilico e mandorle', 'Pecorino', 'Olio extravergine di oliva']
    },
    making: {
      en: ['Tomatoes dry on cane mats for four days', 'Pounded in small batches, never blended hot', 'Covered with oil and rested before jarring'],
      it: ['I pomodori essiccano sui cannizzi per quattro giorni', 'Pestato in piccole quantit\u00e0, mai frullato a caldo', 'Coperto d\u2019olio e lasciato riposare prima dell\u2019invasettamento']
    },
    data: {
      en: [['Tomatoes', '48 g per 100 g'], ['Energy', '342 kcal / 100 g'], ['Shelf life', '12 months'], ['After opening', 'Keep in the fridge']],
      it: [['Pomodori', '48 g per 100 g'], ['Energia', '342 kcal / 100 g'], ['Conservazione', '12 mesi'], ['Dopo l\u2019apertura', 'Conservare in frigorifero']]
    }
  },
  {
    slug: 'fragole', code: 'AGR-04', name: 'Confettura Extra di Fragole e Bacche Goji', price: 7.9, tint: '#fdeaea',
    type: { en: 'Strawberry & Goji Extra Jam', it: 'Confettura extra di fragole e bacche di goji' },
    story: {
      en: 'Small, dark strawberries from the spring beds, cooked fast with a handful of goji berries for depth. Extra means more fruit than sugar, always.',
      it: 'Fragole piccole e scure delle aiuole primaverili, cotte in fretta con una manciata di bacche di goji. Extra vuol dire pi\u00f9 frutta che zucchero, sempre.'
    },
    inside: {
      en: ['Strawberries (58%)', 'Goji berries (6%)', 'Raw cane sugar', 'Lemon juice'],
      it: ['Fragole (58%)', 'Bacche di goji (6%)', 'Zucchero di canna grezzo', 'Succo di limone']
    },
    making: {
      en: ['Fruit is sorted the morning it is picked', 'A short, fast boil to keep the colour', 'Jarred hot and turned upside down, the old way'],
      it: ['La frutta si sceglie la mattina della raccolta', 'Bollitura breve e veloce per tenere il colore', 'Invasettata a caldo e capovolta, come una volta']
    },
    data: {
      en: [['Fruit', '64 g per 100 g'], ['Energy', '196 kcal / 100 g'], ['Shelf life', '24 months'], ['Batch', 'Spring harvest']],
      it: [['Frutta', '64 g per 100 g'], ['Energia', '196 kcal / 100 g'], ['Conservazione', '24 mesi'], ['Lotto', 'Raccolta di primavera']]
    }
  },
  {
    slug: 'smeralda', code: 'AGR-05', name: 'Smeralda', price: 9.5, tint: '#e9f4e2',
    type: { en: 'Pistachio Cream Spread', it: 'Crema spalmabile al pistacchio' },
    story: {
      en: 'Green pistachios from the slopes of Etna, ground slowly with a little sugar and cocoa butter until the cream shines. The sweet half of our pistachio pair.',
      it: 'Pistacchi verdi delle pendici dell\u2019Etna, macinati lentamente con poco zucchero e burro di cacao finch\u00e9 la crema non luccica. La met\u00e0 dolce della nostra coppia di pistacchio.'
    },
    inside: {
      en: ['Pistachios (45%)', 'Cane sugar', 'Cocoa butter', 'A pinch of sea salt'],
      it: ['Pistacchi (45%)', 'Zucchero di canna', 'Burro di cacao', 'Un pizzico di sale marino']
    },
    making: {
      en: ['Pistachios are shelled and lightly toasted', 'Stone-ground in three slow passes', 'Rested, then jarred at room temperature'],
      it: ['I pistacchi si sgusciano e si tostano leggermente', 'Macinatura a pietra in tre passaggi lenti', 'Riposo e invasettamento a temperatura ambiente']
    },
    data: {
      en: [['Pistachios', '45 g per 100 g'], ['Energy', '548 kcal / 100 g'], ['Shelf life', '12 months'], ['Note', 'Oil on top is natural']],
      it: [['Pistacchi', '45 g per 100 g'], ['Energia', '548 kcal / 100 g'], ['Conservazione', '12 mesi'], ['Nota', 'L\u2019olio in superficie \u00e8 naturale']]
    }
  },
  {
    slug: 'gelsi', code: 'AGR-06', name: 'Confettura Extra di Gelsi Neri', price: 8.9, tint: '#e6ebf7',
    type: { en: 'Black Mulberry Extra Jam', it: 'Confettura extra di gelsi neri' },
    story: {
      en: 'Black mulberries stain the hands purple and ripen for barely two weeks a year. We cook them the same day, seeds and all, into the darkest jam we make.',
      it: 'I gelsi neri macchiano le mani di viola e maturano per appena due settimane l\u2019anno. Li cuociamo lo stesso giorno, semi e tutto, nella nostra confettura pi\u00f9 scura.'
    },
    inside: {
      en: ['Black mulberries (65%)', 'Raw cane sugar', 'Lemon juice'],
      it: ['Gelsi neri (65%)', 'Zucchero di canna grezzo', 'Succo di limone']
    },
    making: {
      en: ['Berries picked at dawn, cooked by noon', 'A gentle boil, stirred by hand', 'Jarred in small lots, numbered by hand'],
      it: ['Bacche raccolte all\u2019alba, cotte entro mezzogiorno', 'Bollitura dolce, mescolata a mano', 'Invasettata in piccoli lotti, numerati a mano']
    },
    data: {
      en: [['Fruit', '65 g per 100 g'], ['Energy', '188 kcal / 100 g'], ['Shelf life', '24 months'], ['Harvest', 'Two weeks a year']],
      it: [['Frutta', '65 g per 100 g'], ['Energia', '188 kcal / 100 g'], ['Conservazione', '24 mesi'], ['Raccolta', 'Due settimane l\u2019anno']]
    }
  },
  {
    slug: 'cipolla', code: 'AGR-07', name: 'Cipolla in Agrodolce', price: 6.9, tint: '#fbf0dc',
    type: { en: 'Sweet & Sour Onion · Gourmet', it: 'Cipolla in agrodolce · Gourmet' },
    story: {
      en: 'Red onions from our own beds, softened slowly and lifted with vinegar and a spoon of honey. Made for cheese boards, roast meats and brave sandwiches.',
      it: 'Cipolle rosse delle nostre aiuole, ammorbidite lentamente e sollevate da aceto e un cucchiaio di miele. Fatte per taglieri di formaggi, arrosti e panini coraggiosi.'
    },
    inside: {
      en: ['Red onions (72%)', 'Wine vinegar', 'Wildflower honey', 'Bay leaf and black pepper'],
      it: ['Cipolle rosse (72%)', 'Aceto di vino', 'Miele millefiori', 'Alloro e pepe nero']
    },
    making: {
      en: ['Onions rest in salt for a night', 'Slow cooking until they turn to silk', 'Vinegar and honey go in at the very end'],
      it: ['Le cipolle riposano nel sale una notte', 'Cottura lenta finch\u00e9 non diventano seta', 'Aceto e miele entrano solo alla fine']
    },
    data: {
      en: [['Onions', '72 g per 100 g'], ['Energy', '112 kcal / 100 g'], ['Shelf life', '18 months'], ['Serve', 'With cheese and roasts']],
      it: [['Cipolle', '72 g per 100 g'], ['Energia', '112 kcal / 100 g'], ['Conservazione', '18 mesi'], ['Servire', 'Con formaggi e arrosti']]
    }
  },
  {
    slug: 'mennulata', code: 'AGR-08', name: 'La Mennulata', price: 8.5, tint: '#f7ecdd',
    type: { en: 'Almond Cream Spread', it: 'Crema spalmabile di mandorle' },
    story: {
      en: 'Mennula is our dialect word for almond, and this cream is nothing but our almonds, toasted dark and ground until they pour. Two ingredients, no shortcuts.',
      it: 'Mennula in dialetto vuol dire mandorla, e questa crema \u00e8 fatta solo delle nostre mandorle, tostate scure e macinate finch\u00e9 non colano. Due ingredienti, nessuna scorciatoia.'
    },
    inside: {
      en: ['Almonds (92%)', 'A little cane sugar', 'Nothing else'],
      it: ['Mandorle (92%)', 'Poco zucchero di canna', 'Nient\u2019altro']
    },
    making: {
      en: ['Almonds toasted until deep gold', 'Ground in long, slow passes', 'Rested a week so the oils settle'],
      it: ['Mandorle tostate fino al dorato intenso', 'Macinatura in passaggi lunghi e lenti', 'Riposo di una settimana perch\u00e9 gli oli si assestino']
    },
    data: {
      en: [['Almonds', '92 g per 100 g'], ['Energy', '592 kcal / 100 g'], ['Shelf life', '12 months'], ['Note', 'Stir before use']],
      it: [['Mandorle', '92 g per 100 g'], ['Energia', '592 kcal / 100 g'], ['Conservazione', '12 mesi'], ['Nota', 'Mescolare prima dell\u2019uso']]
    }
  },
  {
    slug: 'pere', code: 'AGR-09', name: 'Confettura Extra di Pere e Cannella', price: 6.9, tint: '#eef5de',
    type: { en: 'Pear & Cinnamon Extra Jam', it: 'Confettura extra di pere e cannella' },
    story: {
      en: 'Late pears from the old trees behind the kitchen, cooked with a stick of cinnamon and nothing else. It tastes like the first cold evening of autumn.',
      it: 'Pere tardive degli alberi vecchi dietro la cucina, cotte con una stecca di cannella e nient\u2019altro. Sa della prima sera fredda d\u2019autunno.'
    },
    inside: {
      en: ['Pears (63%)', 'Raw cane sugar', 'Cinnamon (1%)', 'Lemon juice'],
      it: ['Pere (63%)', 'Zucchero di canna grezzo', 'Cannella (1%)', 'Succo di limone']
    },
    making: {
      en: ['Pears are peeled and cut by hand', 'Cinnamon steeps in the hot jam', 'Jarred the same evening'],
      it: ['Le pere si pelano e si tagliano a mano', 'La cannella resta in infusione nella confettura calda', 'Invasettata la stessa sera']
    },
    data: {
      en: [['Fruit', '63 g per 100 g'], ['Energy', '201 kcal / 100 g'], ['Shelf life', '24 months'], ['Batch', 'Autumn harvest']],
      it: [['Frutta', '63 g per 100 g'], ['Energia', '201 kcal / 100 g'], ['Conservazione', '24 mesi'], ['Lotto', 'Raccolta d\u2019autunno']]
    }
  },
  {
    slug: 'smeraldo', code: 'AGR-10', name: 'Smeraldo', price: 9.9, tint: '#e6f3e2',
    type: { en: 'Pistachio Pesto', it: 'Pesto di pistacchio' },
    story: {
      en: 'The savoury twin of Smeralda: the same Etna pistachios, pounded with olive oil, pecorino and black pepper instead of sugar. Made for pasta, bruschetta and spoon thieves.',
      it: 'Il gemello salato di Smeralda: gli stessi pistacchi dell\u2019Etna, pestati con olio d\u2019oliva, pecorino e pepe nero invece dello zucchero. Fatto per pasta, bruschette e ladri di cucchiai.'
    },
    inside: {
      en: ['Pistachios (52%)', 'Extra virgin olive oil', 'Pecorino cheese', 'Black pepper and sea salt'],
      it: ['Pistacchi (52%)', 'Olio extravergine di oliva', 'Pecorino', 'Pepe nero e sale marino']
    },
    making: {
      en: ['Pistachios pounded coarse, never fine', 'Oil folded in by hand', 'Rested two days before jarring'],
      it: ['Pistacchi pestati grossi, mai fini', 'Olio incorporato a mano', 'Riposo di due giorni prima dell\u2019invasettamento']
    },
    data: {
      en: [['Pistachios', '52 g per 100 g'], ['Energy', '615 kcal / 100 g'], ['Shelf life', '12 months'], ['After opening', 'Keep in the fridge']],
      it: [['Pistacchi', '52 g per 100 g'], ['Energia', '615 kcal / 100 g'], ['Conservazione', '12 mesi'], ['Dopo l\u2019apertura', 'Conservare in frigorifero']]
    }
  }
];

const STRINGS = {
  en: {
    menu: 'MENU', scroll: 'SCROLL TO DISCOVER', privacy: 'Privacy & Cookies', discover: 'DISCOVER THE PRODUCT',
    pantryKicker: 'LA DISPENSA', pantryTitle: 'The whole pantry',
    pantryLede: 'Ten jars, one farm. Everything is grown, picked and preserved within the same few hectares in Sicily.',
    storyKicker: 'LA NOSTRA STORIA', storyTitle: 'We grow, we preserve',
    storyText: 'AGRUMEA is a family farm under the Sicilian sun. Citrus groves, almond trees and vegetable gardens fill the land; the kitchen sits in the middle of it. What the season gives in abundance, we preserve at the right moment, in small copper pans, so winter tastes of summer.',
    v1t: 'Grown here', v1b: 'Fruit and vegetables from our own groves and gardens, picked at full ripeness.',
    v2t: 'Small batches', v2b: 'Each preserve is cooked in small pans and jarred by hand, never in industrial runs.',
    v3t: 'Nothing wasted', v3b: 'Peel, pulp and seeds all find their way back into the kitchen or the soil.',
    mWheel: 'The Wheel', mPantry: 'The Pantry', mStory: 'Our Story', mBag: 'Your Bag',
    menuFoot: 'AGRUMEA Farm, Sicily. We grow, we preserve.',
    inside: 'What is inside', making: 'How it is made', dataTitle: 'Good to know',
    sizeLabel: 'Jar size', qtyLabel: 'Quantity', add: 'ADD TO BAG',
    bagTitle: 'Your bag', bagEmpty: 'Your bag is empty. Turn the wheel and discover a jar.',
    total: 'TOTAL', checkout: 'CHECKOUT', orderDone: 'Thank you. Your order is placed, we will write to confirm it.',
    privacyTitle: 'Privacy & Cookies',
    privacyBody: 'We keep your data the way we keep our preserves: carefully, and only for as long as needed. This demonstration page stores nothing on your device and sends nothing anywhere. On the real farm shop, cookies are used only to keep your bag and your language choice, and never to follow you around the web.',
    footLine: 'Preserves from our farm in Sicily, shipped with care.',
    footNote: 'Demonstration build. Prices shown are illustrative.',
    discoverBtn: 'DISCOVER', added: 'added to your bag', jarWord: 'jar'
  },
  it: {
    menu: 'MENU', scroll: 'SCORRI PER SCOPRIRE', privacy: 'Privacy e Cookie', discover: 'SCOPRI IL PRODOTTO',
    pantryKicker: 'LA DISPENSA', pantryTitle: 'Tutta la dispensa',
    pantryLede: 'Dieci vasetti, una sola fattoria. Tutto cresce, si raccoglie e si conserva negli stessi pochi ettari in Sicilia.',
    storyKicker: 'LA NOSTRA STORIA', storyTitle: 'Coltiviamo, conserviamo',
    storyText: 'AGRUMEA \u00e8 una fattoria di famiglia sotto il sole siciliano. Agrumeti, mandorleti e orti riempiono la terra; la cucina sta nel mezzo. Ci\u00f2 che la stagione d\u00e0 in abbondanza, lo conserviamo al momento giusto, in piccoli paioli di rame, perch\u00e9 l\u2019inverno sappia d\u2019estate.',
    v1t: 'Coltivato qui', v1b: 'Frutta e verdura dei nostri frutteti e orti, raccolte a piena maturazione.',
    v2t: 'Piccoli lotti', v2b: 'Ogni conserva cuoce in piccoli paioli e si invasetta a mano, mai in produzioni industriali.',
    v3t: 'Niente sprechi', v3b: 'Buccia, polpa e semi tornano tutti in cucina o nella terra.',
    mWheel: 'La Ruota', mPantry: 'La Dispensa', mStory: 'La Nostra Storia', mBag: 'Il Carrello',
    menuFoot: 'AGRUMEA Farm, Sicilia. Coltiviamo, conserviamo.',
    inside: 'Cosa c\u2019\u00e8 dentro', making: 'Come si fa', dataTitle: 'Da sapere',
    sizeLabel: 'Formato', qtyLabel: 'Quantit\u00e0', add: 'AGGIUNGI AL CARRELLO',
    bagTitle: 'Il tuo carrello', bagEmpty: 'Il carrello \u00e8 vuoto. Gira la ruota e scopri un vasetto.',
    total: 'TOTALE', checkout: 'ORDINA', orderDone: 'Grazie. L\u2019ordine \u00e8 arrivato, ti scriveremo per confermarlo.',
    privacyTitle: 'Privacy e Cookie',
    privacyBody: 'Teniamo i tuoi dati come le nostre conserve: con cura, e solo per il tempo necessario. Questa pagina dimostrativa non memorizza nulla sul tuo dispositivo e non invia nulla da nessuna parte. Nel negozio vero della fattoria, i cookie servono solo a tenere il carrello e la lingua scelta, e mai a seguirti per il web.',
    footLine: 'Conserve della nostra fattoria in Sicilia, spedite con cura.',
    footNote: 'Pagina dimostrativa. I prezzi mostrati sono indicativi.',
    discoverBtn: 'SCOPRI', added: 'aggiunto al carrello', jarWord: 'vasetto'
  }
};

/* ============ STATE ============ */
let lang = 'en';
let step = 1;                 // track step 0..10, step 10 = product 0 again (loop)
let activeIdx = 1;
let sheetIdx = null, sheetSize = 1, sheetQty = 1;
const bag = new Map();        // key "idx:sizeIdx" -> { idx, sizeIdx, qty }
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const $ = s => document.querySelector(s);
const stage = $('#stage'), wheel = $('#wheel'), ring = $('#ring'), track = $('#wheelTrack');
const pill = $('#cursorPill');

function fmt(n) {
  return new Intl.NumberFormat(lang === 'it' ? 'it-IT' : 'en-GB', { style: 'currency', currency: 'EUR' }).format(n);
}
function priceFor(idx, sizeIdx) {
  return Math.round(PRODUCTS[idx].price * SIZES[sizeIdx].mult * 10) / 10;
}

/* ============ WHEEL BUILD ============ */
const slotEls = [];
function buildWheel() {
  /* One arc of ten jars at 20deg spacing, plus the first jar repeated at
     200deg: that is the loop point the film shows, where Arance comes round
     again at the right of Smeraldo and then takes the centre. */
  const slots = PRODUCTS.map((p, i) => ({ p, i, angle: i * 20 }));
  slots.push({ p: PRODUCTS[0], i: 0, angle: 200 });
  slots.forEach(({ p, i, angle }) => {
    const slot = document.createElement('div');
    slot.className = 'slot';
    slot.dataset.idx = i;
    slot.style.transform = `rotate(${angle}deg) translateY(-100vw)`;
    slot.innerHTML = `
      <div class="jar-scale">
        <div class="jar-float" style="--d:${(i * 0.45).toFixed(2)}s">
          <img src="img/jar-${p.slug}.png" alt="${p.name}">
        </div>
      </div>`;
    slot.querySelector('.jar-scale').addEventListener('click', () => onJarClick(i, slot));
    wheel.appendChild(slot);
    slotEls.push({ el: slot, angle, idx: i });
  });
}

function applyStep(newStep, instant) {
  step = newStep;
  activeIdx = ((step % 10) + 10) % 10;
  const rot = -20 * step;
  if (instant) {
    wheel.style.transition = 'none'; ring.style.transition = 'none';
  }
  wheel.style.transform = `rotate(${rot}deg)`;
  ring.style.transform = `translate(-50%, -50%) rotate(${-10 * step}deg)`;
  stage.style.setProperty('--bg', PRODUCTS[activeIdx].tint);
  $('#activeName').textContent = PRODUCTS[activeIdx].name;
  slotEls.forEach(({ el, angle }) => {
    let rel = ((angle + rot) % 360 + 360) % 360;
    if (rel > 180) rel = 360 - rel;
    const dist = Math.min(3, Math.round(rel / 20));
    el.dataset.dist = dist;
    el.style.zIndex = String(100 - dist * 10);
    el.querySelector('.jar-scale').style.pointerEvents = dist <= 3 ? 'auto' : 'none';
  });
  if (instant) {
    setTimeout(() => {
      wheel.style.transition = ''; ring.style.transition = '';
    }, 60);
  }
}

function onJarClick(idx, slotEl) {
  const dist = Number(slotEl.dataset.dist || 3);
  if (dist === 0) { openSheet(idx); return; }
  // step the wheel to the nearest track step showing this product
  let target = step;
  let best = Infinity;
  for (let s = 1; s <= 10; s++) {
    if (s % 10 === idx && Math.abs(s - step) < best) { best = Math.abs(s - step); target = s; }
  }
  scrollToStep(target);
}

function scrollToStep(s) {
  const total = track.offsetHeight - window.innerHeight;
  const trackTop = track.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: trackTop + total * ((s - 1) / 9), behavior: REDUCED ? 'auto' : 'smooth' });
}

/* scroll drives the steps (synchronous: cheap math, writes only on change).
   The track maps onto steps 1..10, so scroll position 0 already opens on
   Sinfonia Barocca, exactly as the film does, and step 10 is the loop point
   where the first product, Arance, comes round again. */
function onScroll() {
  const total = track.offsetHeight - window.innerHeight;
  const rect = track.getBoundingClientRect();
  const progress = Math.min(1, Math.max(0, -rect.top / total));
  const s = 1 + Math.round(progress * 9);
  if (s !== step) applyStep(s);
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);

window.addEventListener('keydown', e => {
  if (!$('#sheet').hidden || !$('#bag').hidden || !$('#menuOverlay').hidden) return;
  const rect = track.getBoundingClientRect();
  if (rect.bottom < 0 || rect.top > window.innerHeight) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); scrollToStep(Math.min(10, step + 1)); }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); scrollToStep(Math.max(1, step - 1)); }
});

/* ============ CURSOR PILL ============ */
if (window.matchMedia('(pointer: fine)').matches) {
  stage.addEventListener('mousemove', e => {
    pill.style.transform = `translate(${e.clientX + 18}px, ${e.clientY + 22}px)`;
    const scale = e.target.closest ? e.target.closest('.jar-scale') : null;
    const slot = scale ? scale.closest('.slot') : null;
    pill.classList.toggle('on', !!slot && slot.dataset.dist === '0');
  });
  stage.addEventListener('mouseleave', () => pill.classList.remove('on'));
}

/* ============ PANELS ============ */
function openPanel(el, backdrop) {
  el.hidden = false; if (backdrop) backdrop.hidden = false;
  requestAnimationFrame(() => setTimeout(() => el.classList.add('open'), 40));
}
function closePanel(el, backdrop) {
  el.classList.remove('open');
  setTimeout(() => { el.hidden = true; if (backdrop) backdrop.hidden = true; }, REDUCED ? 30 : 480);
}

/* ============ DETAIL SHEET ============ */
function openSheet(idx) {
  sheetIdx = idx; sheetSize = 1; sheetQty = 1;
  renderSheet();
  openPanel($('#sheet'), $('#sheetBackdrop'));
}
function renderSheet() {
  const p = PRODUCTS[sheetIdx];
  $('#sheetImg').src = `img/jar-${p.slug}.png`;
  $('#sheetImg').alt = p.name;
  $('#sheetCode').textContent = p.code + ' · AGRUMEA FARM';
  $('#sheetName').textContent = p.name;
  $('#sheetType').textContent = p.type[lang];
  $('#sheetStory').textContent = p.story[lang];
  $('#sheetInside').innerHTML = p.inside[lang].map(x => `<li>${x}</li>`).join('');
  $('#sheetMaking').innerHTML = p.making[lang].map(x => `<li>${x}</li>`).join('');
  $('#sheetData').innerHTML = p.data[lang].map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
  $('#sizeRow').innerHTML = SIZES.map((s, i) =>
    `<button type="button" class="size-btn${i === sheetSize ? ' is-active' : ''}" data-size="${i}">${s.g} g · ${fmt(priceFor(sheetIdx, i))}</button>`).join('');
  $('#sizeRow').querySelectorAll('.size-btn').forEach(b =>
    b.addEventListener('click', () => { sheetSize = Number(b.dataset.size); renderSheet(); }));
  $('#qtyVal').textContent = sheetQty;
  $('#sheetPrice').textContent = fmt(priceFor(sheetIdx, sheetSize) * sheetQty);
}
$('#qtyMinus').addEventListener('click', () => { sheetQty = Math.max(1, sheetQty - 1); renderSheet(); });
$('#qtyPlus').addEventListener('click', () => { sheetQty = Math.min(24, sheetQty + 1); renderSheet(); });
$('#sheetClose').addEventListener('click', () => closePanel($('#sheet'), $('#sheetBackdrop')));
$('#sheetBackdrop').addEventListener('click', () => closePanel($('#sheet'), $('#sheetBackdrop')));
$('#sheetAdd').addEventListener('click', () => {
  const key = sheetIdx + ':' + sheetSize;
  const cur = bag.get(key);
  bag.set(key, { idx: sheetIdx, sizeIdx: sheetSize, qty: (cur ? cur.qty : 0) + sheetQty });
  renderBag();
  toast(`${PRODUCTS[sheetIdx].name} ${STRINGS[lang].added}`);
  closePanel($('#sheet'), $('#sheetBackdrop'));
});

/* ============ BAG ============ */
function bagCount() { let n = 0; bag.forEach(i => n += i.qty); return n; }
function bagTotal() { let t = 0; bag.forEach(i => t += priceFor(i.idx, i.sizeIdx) * i.qty); return Math.round(t * 100) / 100; }

function renderBag() {
  $('#bagCount').textContent = bagCount();
  const wrap = $('#bagItems');
  const items = [...bag.entries()];
  $('#bagEmpty').hidden = items.length > 0;
  $('#bagFoot').hidden = items.length === 0;
  wrap.innerHTML = items.map(([key, i]) => {
    const p = PRODUCTS[i.idx];
    return `<div class="bag-item">
      <img src="img/jar-${p.slug}.png" alt="${p.name}">
      <div>
        <h5>${p.name}</h5>
        <p class="bi-meta">${STRINGS[lang].jarWord} ${SIZES[i.sizeIdx].g} g</p>
      </div>
      <div class="bi-right">
        <p class="bi-price">${fmt(priceFor(i.idx, i.sizeIdx) * i.qty)}</p>
        <div class="qty-ctrl">
          <button type="button" data-bag-minus="${key}" aria-label="Less">&#8722;</button>
          <span>${i.qty}</span>
          <button type="button" data-bag-plus="${key}" aria-label="More">+</button>
        </div>
      </div>
    </div>`;
  }).join('');
  $('#bagTotal').textContent = fmt(bagTotal());
  wrap.querySelectorAll('[data-bag-minus]').forEach(b => b.addEventListener('click', () => {
    const it = bag.get(b.dataset.bagMinus);
    it.qty -= 1; if (it.qty <= 0) bag.delete(b.dataset.bagMinus);
    renderBag();
  }));
  wrap.querySelectorAll('[data-bag-plus]').forEach(b => b.addEventListener('click', () => {
    bag.get(b.dataset.bagPlus).qty += 1; renderBag();
  }));
}
$('#bagOpen').addEventListener('click', () => { $('#bagDone').hidden = true; openPanel($('#bag'), $('#bagBackdrop')); });
$('#bagClose').addEventListener('click', () => closePanel($('#bag'), $('#bagBackdrop')));
$('#bagBackdrop').addEventListener('click', () => closePanel($('#bag'), $('#bagBackdrop')));
$('#checkoutBtn').addEventListener('click', () => {
  if (bag.size === 0) return;
  bag.clear(); renderBag();
  $('#bagDone').hidden = false;
});

/* ============ MENU / PRIVACY / TOAST ============ */
$('#menuOpen').addEventListener('click', () => { $('#menuOverlay').hidden = false; });
$('#menuClose').addEventListener('click', () => { $('#menuOverlay').hidden = true; });
document.querySelectorAll('[data-menu-link]').forEach(a =>
  a.addEventListener('click', () => { $('#menuOverlay').hidden = true; }));
$('#menuBag').addEventListener('click', () => {
  $('#menuOverlay').hidden = true;
  $('#bagDone').hidden = true;
  openPanel($('#bag'), $('#bagBackdrop'));
});
function openPrivacy() { $('#privacyModal').hidden = false; $('#privacyBackdrop').hidden = false; }
function closePrivacy() { $('#privacyModal').hidden = true; $('#privacyBackdrop').hidden = true; }
$('#privacyOpen').addEventListener('click', openPrivacy);
$('#privacyOpen2').addEventListener('click', openPrivacy);
$('#privacyClose').addEventListener('click', closePrivacy);
$('#privacyBackdrop').addEventListener('click', closePrivacy);

let toastTimer = null;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg; t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 2600);
}

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (!$('#privacyModal').hidden) closePrivacy();
  else if (!$('#menuOverlay').hidden) $('#menuOverlay').hidden = true;
  else if (!$('#sheet').hidden) closePanel($('#sheet'), $('#sheetBackdrop'));
  else if (!$('#bag').hidden) closePanel($('#bag'), $('#bagBackdrop'));
});

/* ============ GRID ============ */
function buildGrid() {
  $('#grid').innerHTML = PRODUCTS.map((p, i) => `
    <article class="card">
      <img src="img/jar-${p.slug}.png" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="card-type">${p.type[lang]}</p>
      <p class="card-price">${fmt(priceFor(i, 1))}</p>
      <button type="button" class="card-btn" data-open="${i}">${STRINGS[lang].discoverBtn}</button>
    </article>`).join('');
  $('#grid').querySelectorAll('[data-open]').forEach(b =>
    b.addEventListener('click', () => openSheet(Number(b.dataset.open))));
}

/* ============ LANGUAGE ============ */
function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dataset.lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => {
    const on = b.dataset.setLang === l;
    b.classList.toggle('is-active', on);
    b.setAttribute('aria-pressed', String(on));
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (STRINGS[l][k]) el.textContent = STRINGS[l][k];
  });
  buildGrid();
  renderBag();
  if (sheetIdx !== null && !$('#sheet').hidden) renderSheet();
  stage.style.setProperty('--bg', PRODUCTS[activeIdx].tint);
}
document.querySelectorAll('.lang-btn').forEach(b =>
  b.addEventListener('click', () => setLang(b.dataset.setLang)));

/* ============ INIT ============ */
buildWheel();
buildGrid();
renderBag();
applyStep(1, true);
