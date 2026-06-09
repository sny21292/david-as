const CATEGORIES = [
  {
    id: "ladies",
    label: "Ladies",
    subcategories: [
      { id: "bracelets", label: "Bracelets" },
      { id: "earrings", label: "Earrings" },
      { id: "pendants", label: "Pendants" },
      { id: "rings", label: "Rings" }
    ]
  },
  {
    id: "religious",
    label: "Religious Jewelry",
    subcategories: [
      { id: "cross", label: "Cross" },
      { id: "gospel-necklace", label: "Gospel Necklace" }
    ]
  },
  {
    id: "wedding",
    label: "Wedding",
    subcategories: [
      { id: "engagement", label: "Engagement & Bands" }
    ]
  },
  {
    id: "gents",
    label: "Gents",
    subcategories: [
      { id: "rings", label: "Rings" },
      { id: "pendants", label: "Pendants" }
    ]
  },
  {
    id: "specialty",
    label: "Specialty",
    subcategories: [
      { id: "professional", label: "Professional" },
      { id: "novelty", label: "Novelty" }
    ]
  }
];

const PRODUCTS = [
  // Ladies — Bracelets
  {
    style: "260-105",
    name: "Mermaid Bracelet",
    category: "ladies",
    subcategory: "bracelets",
    description: "This captivating mermaid bracelet is a sculptural statement inspired by the mystery and movement of the sea. The centerpiece features a beautifully detailed mermaid in solid gold, weighing approximately one ounce, her form gracefully draped across a multi-strand cuff of twisted metal that evokes flowing ocean currents.\nA line of vivid blue diamonds, totaling 0.50 carats, shimmers through the design like sunlight dancing across the waves, adding brilliance and depth to the piece. Bold yet refined, this bracelet is a celebration of femininity, fluidity, and power. An unforgettable piece designed to command attention and endure as a true work of wearable art.",
    metals: "Silver, Gold",
    sizes: "",
    karats: "14K",
    image: "images/Ladies_Bracelets/777-421/H.png",
    video: "https://ijewel.design/embedded?slug=ce10df2&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "260-101",
    name: "Wave Bracelet",
    category: "ladies",
    subcategory: "bracelets",
    description: "A striking blend of movement and structure, this wave cuff bracelet features layered, rope-inspired strands that flow seamlessly around the wrist. The sculpted design creates a sense of fluidity and depth. Bold yet elegant, this open cuff makes a distinctive statement, perfect for elevating both everyday wear and special occasions.",
    metals: "Silver",
    sizes: "",
    karats: "",
    image: "images/Ladies_Bracelets/117-211/B.png",
    video: "https://ijewel.design/embedded?slug=11e6410&isRemoveLoadingBgImg=false&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "260-102",
    name: "Forget-Me-Not Cuff Bracelet",
    category: "ladies",
    subcategory: "bracelets",
    description: "Delicate and enduring, this forget-me-not cuff bracelet captures the quiet beauty of nature in a refined, everyday design. Intricately sculpted blossoms bloom across a polished band, creating a graceful contrast that is both timeless and feminine. Lightweight and effortlessly wearable, this cuff bracelet is perfect for daily elegance or meaningful gifting.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies_Bracelets/415-627/C.png",
    video: "https://ijewel.design/embedded?slug=0e45f19&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "260-103",
    name: "Music Bracelet",
    category: "ladies",
    subcategory: "bracelets",
    description: "A fusion of music and design, this cuff bracelet brings F\u00fcr Elise to life in sculptural form. The bracelet features layered bands that echo the flow of a musical staff, adorned with raised notes taken directly from Beethoven's original composition. Each note is rendered in crisp detail, creating a rhythmic, dimensional effect that wraps elegantly around the wrist.\nMeasuring 1.8 to 2.4 inches in width, this cuff makes a statement while maintaining a refined, artistic balance.\nPerfect for musicians and admirers of classical artistry alike, this piece transforms one of history's most beloved melodies into a wearable expression of beauty, movement, and timeless sophistication.",
    metals: "Silver",
    sizes: "",
    karats: "",
    image: "images/Ladies_Bracelets/741-333/G.png",
    video: "https://ijewel.design/embedded?slug=59897a7&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "260-104",
    name: "Forget-Me-Not Mother's Bracelet",
    category: "ladies",
    subcategory: "bracelets",
    description: "A graceful expression of memory and devotion, this forget-me-not cuff bracelet can be a timeless tribute to those held closest to the heart with sculpted floral motifs. At the center of each flower rests a gemstone of your choosing, allowing the bracelet to be personalized as a meaningful mother's piece. Birthstones may be set to represent children or loved ones, transforming the design into a personal narrative of family, connection, and enduring love.\nThis cuff balances artistry with significance, an heirloom-quality piece designed to be worn daily and cherished for a lifetime.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies_Bracelets/260-104/D.png",
    video: "https://ijewel.design/embedded?slug=0fcfcd0&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },

  {
    style: "260-106",
    name: "Openwork Bangle Bracelet",
    category: "ladies",
    subcategory: "bracelets",
    description: "A bold expression of sculptural elegance, this openwork bangle bracelet is available in striking 1-inch and dramatic 2-inch widths.  Flowing ribbons intertwine in an airy, organic design that feels both modern and timeless, creating a bracelet with exceptional dimension and light.  Whether chosen as an everyday statement in the narrower width or as a commanding couture piece in the wider version, this bangle wraps the wrist in refined artistry and unmistakable feminine sophistication.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies_Bracelets/260-106/H.png",
    video: "https://ijewel.design/embedded?slug=fdf4465&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "260-107",
    name: "Woven Cuff Bracelet",
    category: "ladies",
    subcategory: "bracelets",
    description: "Elegant and distinctive, this woven cuff bracelet blends sculptural form with timeless craftsmanship.  Its richly textured basketweave design creates depth and brilliance, while the graceful open-cuff silhouette offers both comfort and effortless wear.  Bold enough to make a statement yet refined for everyday elegance, this bracelet is a striking expression of feminine sophistication.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies_Bracelets/260-107/K.png",
    video: "https://ijewel.design/embedded?slug=a1bfdf6&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },

  // Ladies — Earrings
  {
    style: "250-101",
    name: "Dangle Earrings",
    category: "ladies",
    subcategory: "earrings",
    description: "Elegant and eye-catching, these dangle earrings are designed to radiate color and sophistication. Each piece features a vivid oval center gemstone, bezel-set and surrounded by a halo of brilliant accent stones that enhance its depth and brilliance.\nThe double-drop design creates graceful movement, allowing the stones to catch and reflect light with every turn. Refined yet bold, these earrings are the perfect statement piece for adding vibrant elegance to any occasion.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies%20Earrings/843-117/L.png",
    video: "https://ijewel.design/embedded?slug=2bb4a26&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "250-102",
    name: "Honeycomb Earrings",
    category: "ladies",
    subcategory: "earrings",
    description: "A modern statement in texture and light, these earrings feature an intricate honeycomb pattern that creates depth, dimension, and subtle brilliance with every movement. The openwork design enhances their airy feeling while maintaining a bold, eye-catching presence.\nAvailable in two sizes - 15 and 20 mm - these earrings balance versatility with distinctive style. Contemporary yet timeless, they are the perfect finishing touch for both casual elegance and elevated occasions.",
    metals: "Gold, Silver",
    sizes: "",
    karats: "",
    image: "images/Ladies%20Earrings/843-331/M.png",
    video: "https://ijewel.design/embedded?slug=717e7b2&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },

  // Ladies — Pendants
  {
    style: "230-102",
    name: "Halo Pendant",
    category: "ladies",
    subcategory: "pendants",
    description: "A refined statement of elegance, this pendant features a geometric inner halo complemented by a softly contoured outer frame, creating depth, contrast, and exceptional sparkle.\nThe gemstone-accented bail adds a graceful finishing touch, enhancing its brilliance. Distinctive and radiant, it is a striking addition to any collection, perfect for elevating both everyday wear and special occasions.",
    metals: "Gold, Silver, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Pendants/113-213/N.png",
    video: "https://ijewel.design/embedded?slug=e3a357d&isRemoveLoadingBgImg=false&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "230-104",
    name: "Trillion Pendant",
    category: "ladies",
    subcategory: "pendants",
    description: "This pendant features a trillion-cut center gemstone framed by a halo of shimmering gemstones and delicate milgrain detailing. The sculptural setting adds dimension and presence and balances modern geometry with timeless elegance. Distinctive and luminous, it is a statement piece designed to stand out.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies_Pendants/117-431/O.png",
    video: "https://ijewel.design/embedded?slug=770cfa2&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "230-108",
    name: "Pearl Pendant",
    category: "ladies",
    subcategory: "pendants",
    description: "This pearl pendant features a lustrous Tahitian pearl cradled within a sculptural sweep of polished gold. The graceful, open design wraps around the pearl in a continuous curve, creating a sense of movement and balance while allowing the gem's natural beauty to take center stage.\nMinimal yet expressive, the clean lines and high-polish finish offer a modern interpretation of a classic motif. The contrast between the deep, iridescent tones of the pearl and the warmth of gold adds depth and sophistication.\nTimeless and refined, this pendant is an effortlessly elegant piece designed for both everyday wear and special occasions.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies_Pendants/554-701/D.png",
    video: "https://ijewel.design/embedded?slug=c4fa5e5&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "230-109",
    name: "Cupid Heart Pendant",
    category: "ladies",
    subcategory: "pendants",
    description: "A romantic tribute to love and devotion, this heart-shaped pendant captures the timeless spirit of Cupid poised with bow in hand, framed within a softly contoured heart.\nDelicate rose-toned flowers and green leaves add dimension, creating a contrast against the polished gold and silver finishes. The layered composition brings depth and artistry, making the pendant both meaningful and visually captivating.\nElegant and symbolic, this piece is a celebration of love's power - perfect as a heartfelt gift or a cherished personal keepsake.",
    metals: "Sterling Silver, Gold",
    sizes: "",
    karats: "14K",
    image: "images/Ladies_Pendants/623-743/A.png",
    video: "https://ijewel.design/embedded?slug=eae08a7&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "230-101",
    name: "Twin Arches Pendant",
    category: "ladies",
    subcategory: "pendants",
    description: "A striking blend of elegance and modern luxury, the pendant features twin arches set with shimmering accent stones to create a graceful, architectural silhouette that draws the eye with every movement. This pendant offers a bold sophistication for both special occasions and elevated everyday wear.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies_Pendants/230-101/G.png",
    video: "https://ijewel.design/embedded?slug=ae646b6&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "230-105",
    name: "Trillion Scrollwork Pendant",
    category: "ladies",
    subcategory: "pendants",
    description: "An exquisite statement of artistry and elegance, this pendant showcases a trillion-cut gemstone at its center, surrounded by radiant accent stones and intricate scrollwork. The design blends vintage inspiration with contemporary sophistication. Rich in texture, brilliance, and bold color, this pendant is a striking piece made to stand out on any occasion.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies_Pendants/230-105/H.png",
    video: "https://ijewel.design/embedded?slug=43bb8b3&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "230-106",
    name: "Emerald-Cut Gemstone Pendant",
    category: "ladies",
    subcategory: "pendants",
    description: "Bold yet refined, this pendant features an emerald-cut gemstone with brilliant round accent stones on each side, enhancing the pendant's clean geometric lines. This piece is perfect for adding a luxurious statement to any jewelry collection.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies_Pendants/230-106/K.png",
    video: "https://ijewel.design/embedded?slug=0b14966&isRemoveLoadingBgImg=false&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },

  // Ladies — Rings (ordered per client: 210-120, 210-104, 210-102, 210-117, 210-111, 210-108, 210-118, 210-114, 210-113, 210-119, then 409-157 kept as-is)
  {
    style: "210-120",
    name: "Cluster Ring",
    category: "ladies",
    subcategory: "rings",
    description: "A striking blend of elegance and artistry, this two-tone ring showcases a brilliant round center gem framed by a scalloped halo of shimmering accent stones. The intricate gold filigree scrollwork along the shoulders adds a touch of vintage-inspired sophistication. Bold yet graceful, this design captures light from every angle, making it a captivating statement piece for any occasion.",
    metals: "Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/933-301/F.png",
    video: "https://ijewel.design/embedded?slug=cb443b7&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "210-104",
    name: "Baguette Diamond Ring",
    category: "ladies",
    subcategory: "rings",
    description: "A bold expression of luxury and craftsmanship, this striking ring features a layered architectural design that commands attention. Multiple rows of tapered baguette diamonds create a seamless field of brilliance, with round gemstones adding a rich, contrasting accent between each band giving the piece a sculptural, dimensional presence. Designed for those who appreciate statement jewelry, this ring embodies both opulence and modern elegance, perfect as a signature piece for special occasions.",
    metals: "Gold, Platinum",
    sizes: "",
    karats: "14K, 18K",
    image: "images/Ladies_Rings/777-353/F.png",
    video: "https://ijewel.design/embedded?slug=6da5d4e&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "210-102",
    name: "Multi-Cluster Gemstone Ring",
    category: "ladies",
    subcategory: "rings",
    description: "An opulent statement of luxury, this ring features a multi-cluster design adorned with brilliant gemstones. Each cluster is arranged in layered halos, creating a rich, dimensional sparkle that captures light from every angle. Striking and sophisticated, this ring is designed for those who appreciate grandeur and exceptional craftsmanship.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/210-102/A.png",
    video: "https://ijewel.design/embedded?slug=89cf1e4&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "210-117",
    name: "Tahitian Pearl Ring",
    category: "ladies",
    subcategory: "rings",
    description: "A refined statement of elegance, this Tahitian pearl ring showcases a lustrous, deep-toned pearl crowned atop a delicately sculpted gold setting. The band features graceful, intertwining curves adorned with pav\u00e9-set diamonds, adding brilliance and dimension from every angle.\nThe rich, natural hues of the Tahitian pearl contrast beautifully with the warm gold and sparkling accents, creating a piece that is both timeless and distinctive. Designed for sophistication and versatility, this ring is an exquisite choice for those who appreciate understated luxury with a modern, artistic touch.",
    metals: "Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/933-101/D.png",
    video: "https://ijewel.design/embedded?slug=1389bb9&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "210-111",
    name: "Branch Ring",
    category: "ladies",
    subcategory: "rings",
    description: "A striking expression of modern elegance, this sculptural diamond ring features flowing, interwoven bands that wrap gracefully around the finger. Each curve is adorned with brilliant round gemstones, creating a seamless rhythm of light and movement. The organic, layered design offers both depth and dimension, making it a bold statement piece, perfect for those who appreciate artistry, sophistication, and distinctive style.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/417-186/A.png",
    video: "https://ijewel.design/embedded?slug=c719184&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "210-108",
    name: "Forget-Me-Not Ring",
    category: "ladies",
    subcategory: "rings",
    description: "A sleek silver band featuring an intricate, flowing filigree pattern, this ring blends modern polish with artistic, handcarved elegance. Its swirling cutout design adds depth and movement, giving the piece a refined yet expressive character.",
    metals: "Gold, Silver",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/405-713/A.png",
    video: "https://ijewel.design/embedded?slug=3438fc6&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "210-118",
    name: "Dome Ring",
    category: "ladies",
    subcategory: "rings",
    description: "A radiant fusion of bold design and refined detail, this dome ring is crafted to captivate. The luminous dome centerpiece is encircled by a halo of vibrant gemstones that catches the light from every angle. Beneath, delicate accents of round-cut stones add depth and dimension, while the gracefully split band enhances its sculptural elegance.\nStriking yet sophisticated, this piece is a perfect statement ring for those who appreciate distinctive design paired with timeless luxury.",
    metals: "Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/933-222/A.png",
    video: "https://ijewel.design/embedded?slug=77be2f1&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "210-114",
    name: "Leaf Ring",
    category: "ladies",
    subcategory: "rings",
    description: "This wide-band ring features an intricate openwork design adorned with 24 karat gold accents. The flowing, organic pattern creates a sense of lightness while maintaining a bold, sculptural presence. The interplay of negative space and shimmering 24 karat gold adds depth and contrast, making this piece a sophisticated statement of elegance and contemporary craftsmanship.",
    metals: "Silver, Gold",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/721-353/F.png",
    video: "https://ijewel.design/embedded?slug=3438fc6&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "210-113",
    name: "Oval Gemstone Ring",
    category: "ladies",
    subcategory: "rings",
    description: "A bold fusion of luxury and artistry. The sculpted band features flowing architectural lines that add dimension and modern sophistication. Designed to captivate, this piece is a powerful statement of elegance, individuality, and refined taste.",
    metals: "Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/417-727/A.png",
    video: "https://ijewel.design/embedded?slug=c018265&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "210-119",
    name: "Football Ring",
    category: "ladies",
    subcategory: "rings",
    description: "A bold expression of passion and elegance, this football-inspired ring is designed for women who carry their love of the game with style. Sculpted in rich gold, the design captures the iconic form of a football accented with a row of vibrant gemstones that evoke the energy and excitement of the field.\nBrilliant gemstones line the band, adding refined sparkle and balance to the dynamic centerpiece. The flowing, sculptural setting enhances the sense of motion, as if the piece itself is in play.\nStriking yet sophisticated, this ring is the perfect fusion of sport and luxury, crafted for the woman who celebrates both her competitive spirit and her sense of style.",
    metals: "Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/933-227/J.png",
    video: "https://ijewel.design/embedded?slug=f973b13&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "110-102",
    name: "Fox Ring",
    category: "ladies",
    subcategory: "rings",
    description: "Graceful and playful, this lady's fox ring with vivid green gemstone eyes that bring the design to life. The sculpted wraparound silhouette creates an elegant, modern statement while capturing the clever charm and beauty of the fox. Perfect for everyday luxury or as a unique gift for animal and nature lovers.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/110-102/C.png",
    video: "https://ijewel.design/embedded?slug=a2763fc&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "210-103",
    name: "Trillion Gemstone Statement Ring",
    category: "ladies",
    subcategory: "rings",
    description: "Rich in detail and dramatic elegance, this statement ring showcases a trillion-cut gemstone. Intricate sculpted metalwork along the band adds an artistic, regal touch, creating a design that feels both bold and timeless. Perfect for those who love distinctive jewelry with vintage-inspired glamour and modern brilliance.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/210-103/E.png",
    video: "https://ijewel.design/embedded?slug=dd9a309&isRemoveLoadingBgImg=false&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "210-115",
    name: "Black Pearl Open-Band Ring",
    category: "ladies",
    subcategory: "rings",
    description: "Minimalist elegance defines this contemporary open-band ring, featuring a lustrous black pearl suspended within a sleek polished gold design. Its fluid sculptural shape creates a refined, modern silhouette that feels artistic. Perfect for effortless everyday luxury or as a sophisticated statement piece for special occasions.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/210-115/F.png",
    video: "https://ijewel.design/embedded?slug=94afb1f&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },

  // Religious Jewelry — Cross
  {
    style: "330-104",
    name: "Dogwood Flower Cross Pendant",
    category: "religious",
    subcategory: "cross",
    description: "This exquisite sterling silver cross pendant draws inspiration from the beauty of the Dogwood Flower. Its fine craftsmanship, wonderfully sculpted flower petals, and rich symbolic meaning, all come together to form a captivating pendant. The Dogwood Flower forms a cross and has ties to the crucifixion, making it a symbol of Christianity. Optional contrasting center flower bud in yellow or rose gold to signify the blood of Jesus.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Cross%20Pendants/117-326/S.png",
    video: "https://ijewel.design/embedded?slug=11b4b1a&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false",
    formHint: "Metal Karat, Color and Arrangement"
  },
  {
    style: "330-102",
    name: "Filigree Cross Pendant",
    category: "religious",
    subcategory: "cross",
    description: "This beautifully crafted cross pendant is a reminder of the Savior\u2019s love woven into every detail. The frame represents the unshakable strength of God\u2019s promises, while the intricate filigree symbolizes the grace that fills and sustains every believer. Designed to be both elegant and deeply meaningful, this piece serves as a quiet testimony of faith \u2014 a way to carry the story of Christ close to your heart and let His light shine through your life. Whether worn daily or given as a gift, it speaks of devotion, hope, and the beauty of walking with Him.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Cross%20Pendants/345-452/P.png",
    video: "https://ijewel.design/embedded?slug=802ddc2&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false",
    formHint: "Metal Karat, Color and Arrangement"
  },
  {
    style: "330-105",
    name: "Black & White Diamond Cross Pendant",
    category: "religious",
    subcategory: "cross",
    description: "Crafted with reverence and intention, this diamond cross pendant is a radiant reminder of Christ\u2019s sacrifice and His unending love. Set with 138 handplaced diamonds \u2014 a total weight of 1.25 carats \u2014 each stone reflects the light much like the grace that covers every believer. The black and white diamonds reflect the contrast between light and darkness \u2014 a reminder of the moment when Christ overcame the shadows and hope was born. Each gemstone combination can be set to honor the majesty of a believer\u2019s faith, turning this piece into a testimony you wear, a conversation it invites, and a quiet declaration of what you believe.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Cross%20Pendants/113-334/A.png",
    video: "https://ijewel.design/embedded?slug=020c23e&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false",
    formHint: "Metal Karat, Color and Gemstone Arrangement"
  },
  {
    style: "330-101",
    name: "Gemstone Cross Pendant",
    category: "religious",
    subcategory: "cross",
    description: "Crafted with intention and reverence, this cross pendant features 54 gems, and can be set with any combination of gemstones, allowing every piece to become a personal expression of faith. Whether adorned with diamonds, emeralds, sapphires, or a meaningful blend of colors, this cross becomes more than jewelry. It becomes a reminder of grace, a spark for conversation, and a quiet declaration of the hope you carry.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Cross%20Pendants/117-542/R.png",

    video: "https://ijewel.design/embedded?slug=7391e8e&isRemoveLoadingBgImg=false&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false",
    formHint: "Metal Karat, Color and Gemstone Arrangement"
  },

  {
    style: "330-103",
    name: "Gemstone Cross Pendant",
    category: "religious",
    subcategory: "cross",
    description: "Graceful and commanding, this cross-pendant blends sacred symbolism with refined craftsmanship.  Accented with five brilliant gemstones, its elegant, flared silhouette and intricate rope detailing evoke both strength and devotion.  A striking expression of faith, heritage, and timeless style, this pendant is designed to be worn as a personal testament of belief and distinguished taste.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Cross%20Pendants/330-103/M.png",
    video: "https://ijewel.design/embedded?slug=0fc4078&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false",
    formHint: "Metal Karat, Color and Arrangement"
  },
  {
    style: "330-106",
    name: "Rounded Cross Pendant",
    category: "religious",
    subcategory: "cross",
    description: "Clean, bold, and timeless, this cross pendant reflects the beauty of faith through elegant simplicity.  Its smooth rounded form and layered dimensional design create a striking balance of refinement.  Crafted for everyday wear, this pendant is a classic expression of devotion, making it a meaningful heirloom and enduring symbol of grace.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Cross%20Pendants/330-106/N.png",
    video: "https://ijewel.design/embedded?slug=25420b8&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false",
    formHint: "Metal Karat, Color and Arrangement"
  },

  // Wedding — Engagement & Bands
  {
    style: "410-101",
    name: "Antique Style Engagement Ring",
    category: "wedding",
    subcategory: "engagement",
    description: "A captivating blend of vintage artistry and radiant warmth, this engagement ring features a brilliant round center stone with intricate filigree and delicate milgrain. The openwork design adds lightness and elegance, creating a piece that feels both timeless and distinctive. Crafted for those who value intricate beauty and enduring sophistication, this ring is a striking symbol of love's depth and brilliance.",
    metals: "Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/409-157/D.png",
    video: "https://ijewel.design/embedded?slug=fde3418&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "410-102",
    name: "Edwardian Engagement Ring",
    category: "wedding",
    subcategory: "engagement",
    description: "A captivating blend of vintage artistry and radiant warmth, this engagement ring features a brilliant round center stone with intricate filigree and delicate milgrain. The openwork design adds lightness and elegance, creating a piece that feels both timeless and distinctive. Crafted for those who value intricate beauty and enduring sophistication, this ring is a striking symbol of love's depth and brilliance.",
    metals: "Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Ladies_Rings/409-203/E.png",
    video: "https://ijewel.design/embedded?slug=a19ecd5&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "410-103",
    name: "Bezel Set Filigree Engagement Ring",
    category: "wedding",
    subcategory: "engagement",
    description: "A masterful fusion of elegance and contrast, this engagement ring showcases delicate milgrain detailing with ornate filigree patterns woven into the design and accented by shimmering diamonds, blending classic refinement with artistic craftsmanship. A truly distinctive piece.",
    metals: "Gold, Platinum, Two-Tone",
    sizes: "Any center stone size",
    karats: "",
    image: "images/Engagement/409-222/D.png",
    video: "https://ijewel.design/embedded?slug=1a4f159&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "410-105",
    name: "Scroll Engagement Ring",
    category: "wedding",
    subcategory: "engagement",
    description: "An expression of vintage-inspired elegance, this engagement ring features graceful scrollwork with diamonds accenting the shoulders, adding brilliance from every angle. Intricate engraving along the band enhances its timeless character, creating a design that is both sophisticated and enduring. Perfect for those who appreciate classic detail with a touch of artistry, this ring is a beautiful symbol of lasting love.",
    metals: "Gold, Platinum",
    sizes: "Any center stone size",
    karats: "",
    image: "images/Engagement/409-374/H.png",
    video: "https://ijewel.design/embedded?slug=42c3043&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "410-106",
    name: "Halo Engagement Ring",
    category: "wedding",
    subcategory: "engagement",
    description: "A striking display of modern elegance, this engagement ring features a brilliant round center stone elevated by a floating halo of shimmering diamonds. Intricate detailing and graceful lines give the ring a sense of movement and brilliance from every angle. Bold yet refined, it is a radiant symbol of love designed to stand apart.",
    metals: "Gold, Platinum, Two-Tone",
    sizes: "Any center stone size",
    karats: "",
    image: "images/Engagement/409-777/B.png",
    video: "https://ijewel.design/embedded?slug=7a7e33a&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "410-107",
    name: "Pear Halo Engagement Ring",
    category: "wedding",
    subcategory: "engagement",
    description: "An opulent expression of brilliance, this double halo engagement ring showcases a dazzling round center stone encircled by two shimmering halos of diamonds. The band features a striking two-tone design, with fan-like detailing gracefully unfolding beneath the setting, adding depth and contrast. Diamond accents continue along the shank, enhancing its radiant presence from every angle. Bold, luxurious, and intricately crafted, this ring is a breathtaking symbol of enduring love and grandeur.",
    metals: "Gold, Platinum, Two-Tone",
    sizes: "Any center stone size",
    karats: "",
    image: "images/Engagement/409-912/D.png",
    video: "https://ijewel.design/embedded?slug=be961cb&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "430-101",
    name: "Bezel Set Two-Tone Wedding Band",
    category: "wedding",
    subcategory: "engagement",
    description: "A bold celebration of unity and artistry, this wedding band features a striking two-tone design that blends with intricate detailing. The outer edges are lined with pav\u00e9-set diamonds, delivering continuous brilliance, while the interior showcases ornate scrollwork accented with bezel-set diamonds for added depth and dimension. Crafted to captivate from every angle, this band is a powerful symbol of enduring commitment and refined sophistication.",
    metals: "Gold, Platinum, Two-Tone",
    sizes: "",
    karats: "",
    image: "images/Engagement/417-681/A.png",
    video: "https://ijewel.design/embedded?slug=753a92e&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "430-102",
    name: "Woven Diamond Wedding Band",
    category: "wedding",
    subcategory: "engagement",
    description: "A bold expression, this woven wedding band features an intricate interlacing design that symbolizes the strength and continuity of two lives joined as one. Brilliant diamonds are set throughout the weave, adding sparkle and depth, enhancing the complexity of the design. The wide profile offers a substantial presence, balanced by the precision and elegance of its construction.\nDistinctive and enduring, this band is a powerful representation of connection, resilience, and timeless commitment.",
    metals: "Gold, Platinum",
    sizes: "12mm wide",
    karats: "",
    image: "images/Engagement/847-239/K.png",
    video: "https://ijewel.design/embedded?slug=40f6c44&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "510-107",
    name: "Channel Set Diamond Wedding Band",
    category: "wedding",
    subcategory: "engagement",
    description: "This gents ring is defined by its smooth, flowing lines and bold, contemporary profile. The band features a sleek, sculpted curvature that wraps seamlessly around the finger, offering both comfort, clean form, and modern character. Understated yet powerful, this piece is ideal for the man who values design with a distinctive edge.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Gents%20Rings/419-657/A.png",
    video: "https://ijewel.design/embedded?slug=14fd7aa&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "410-108",
    name: "Modern Engagement Ring",
    category: "wedding",
    subcategory: "engagement",
    description: "Bold sophistication meets contemporary elegance in this modern engagement ring. Brilliant accent stones and flowing openwork details create striking dimension and light from every angle. Designed for women who love distinctive luxury, this ring is a radiant symbol of individuality, and style.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Engagement/410-108/D.png",
    video: "https://ijewel.design/embedded?slug=726800b&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },

  // Gents — Rings
  {
    style: "510-101",
    name: "Lattice Gemstone Ring",
    category: "gents",
    subcategory: "rings",
    description: "Bold and architectural, this gent's ring features a gemstone framed by intricate latticework and sculpted scroll detailing.  The profile is enhanced by ornate side panels with a heraldic-inspired motif, giving the piece a regal, old-world character.  Designed for the man drawn to statement jewelry, this ring has an unmistakable presence.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Gents%20Rings/510-101/A.png",
    video: "https://ijewel.design/embedded?slug=041ce39&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "510-102",
    name: "Diagonal Channel Set Diamond Ring",
    category: "gents",
    subcategory: "rings",
    description: "This gentleman's ring features a round brilliant center gem in a sculpted, elevated setting. The smooth, flowing lines taper upward, creating balance and structural integrity. Open architectural shoulders beneath the setting allow light to enhance the brilliance of the stone while adding a modern, masculine edge. Designed for those who appreciate clean sophistication with presence and timeless appeal. Equally suited as a contemporary traditional solitaire or birthstone ring.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Gents%20Rings/415-821/E.png",
    video: "https://ijewel.design/embedded?slug=c3d8cb0&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "510-103",
    name: "Scalloped Solitaire Ring",
    category: "gents",
    subcategory: "rings",
    description: "This bold and sculptural ring is defined by smooth, flowing contours that form a refined, petal-like motif, creating both depth and dimension while maintaining a clean, modern silhouette. The high-polish finish enhances the warmth of the gold, contrasting beautifully with the cool brilliance of the stone. Substantial in presence yet elegantly balanced, this piece is designed for those who appreciate distinctive craftsmanship and confident, contemporary style.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Gents%20Rings/420-337/B.png",
    video: "https://ijewel.design/embedded?slug=bab941c&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "510-104",
    name: "Gypsy Solitaire Ring",
    category: "gents",
    subcategory: "rings",
    description: "This distinguished men's ring is crafted showcasing a brilliant gem elevated in a bold, sculptural setting. The sweeping lines of the band draws the eye upward to the center stone while creating a dynamic sense of movement and structure. The open, tapered design beneath the diamond allows light to flow freely, enhancing its brilliance while maintaining a clean, masculine profile. Substantial yet refined, this ring is a statement of confidence - ideal for the gentleman who values both modern design and craftsmanship.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Gents%20Rings/554-741/A.png",
    video: "https://ijewel.design/embedded?slug=1611932&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "510-105",
    name: "Fluted Solitaire Ring",
    category: "gents",
    subcategory: "rings",
    description: "This gent fluted solitaire ring features a brilliant round gem set in a sculptural, multi-prong crown. The distinctive fluted shoulders flow upward in smooth, contoured ridges, creating a powerful sense of movement and elevating the center stone with architectural elegance. The high-polish finish enhances both the depth of the fluting and the brilliance of the gem, offering a refined balance of strength and sophistication. Designed for a commanding presence, this ring is an exceptional statement of modern masculinity and style.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Gents%20Rings/671-531/101.png",
    video: "https://ijewel.design/embedded?slug=f600c2d&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "510-106",
    name: "Trillion Filigree Ring",
    category: "gents",
    subcategory: "rings",
    description: "This gents ring is a bold, sculpted design, contoured and open for a comfortable fit. Designed with a modern aesthetic sophistication - ideal for the man who appreciates confident style and appeal.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Gents%20Rings/933-268/A.png",
    video: "https://ijewel.design/embedded?slug=ae8f025&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },

  {
    style: "510-108",
    name: "Horseshoe Signet Ring",
    category: "gents",
    subcategory: "rings",
    description: "A bold expression of heritage, this horseshoe ring is crafted with a commanding presence and sculptural detail.  The iconic horseshoe centerpiece symbolizes luck, protection, and perseverance, while the openwork shoulders and polished bead accents add dimension and character.  This ring is designed for those who appreciate meaningful symbolism paired with timeless masculine style.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Gents%20Rings/510-108/P.png",
    video: "https://ijewel.design/embedded?slug=b5aac6a&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },

  // Gents — Pendants
  {
    style: "120-101",
    name: "Fin Whale Fishhook Pendant",
    category: "gents",
    subcategory: "pendants",
    description: "This fin whale fishhook pendant is designed for those who live for the pull of the deep and the thrill of the catch. Inspired by the graceful power of the fin whale, the form curves seamlessly into a traditional fishhook representing a deep connection to the sea. This piece captures the spirit of offshore adventure - perfect for deep sea fishing enthusiasts who carry their passion with them, both on the water and beyond.",
    metals: "",
    sizes: '2" tall \u00d7 3/4" wide',
    karats: "",
    image: "images/Gents_Pendants/113-109/A.png",
    video: "https://ijewel.design/embedded?slug=05e0391&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "120-102",
    name: "Sperm Whale Fishhook Pendant",
    category: "gents",
    subcategory: "pendants",
    description: "This sperm whale fishhook pendant captures the commanding presence of one of the ocean's most powerful creatures. Perfect for those drawn to deep waters and ocean adventure, it is a meaningful piece that reflects both passion for the sea and respect for the great creatures of the sea.",
    metals: "",
    sizes: '2" tall \u00d7 1" wide',
    karats: "",
    image: "images/Gents_Pendants/113-110/A.png",
    video: "https://ijewel.design/embedded?slug=fe4d690&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "110-101",
    name: "Labrador Retriever Duck Hunting Pendant",
    category: "gents",
    subcategory: "pendants",
    description: "This Labrador Retriever pendant honors the loyal companion of every true duck hunting enthusiast. The finely sculpted lab, known for its intelligence and dedication in the field, is paired with a detailed duck capturing the essence of a successful retrieve and the bond between hunter and dog. Perfect for those who appreciate the heritage of waterfowl hunting, it's a meaningful keepsake that reflects passion, loyalty, and the spirit of the hunt.",
    metals: "",
    sizes: '1.3" tall',
    karats: "",
    image: "images/Gents_Pendants/113-554/101.png",
    video: "https://ijewel.design/embedded?slug=a4ef690&isAutoplay=true"
  },
  {
    style: "120-103",
    name: "Swordfish Diamond Pendant",
    category: "gents",
    subcategory: "pendants",
    description: "This striking swordfish pendant captures the speed, power, and elegance of one of the ocean's most iconic game fish. The sleek, sculpted form is enhanced by a shimmering row of pav\u00e9-set gemstones along the dorsal line, adding brilliance and depth to its dynamic design. This pendant embodies the thrill of the open water and the pursuit of the catch. Perfect for sport fishing enthusiasts, it is a bold and refined piece that reflects both passion for the sea and a taste for exceptional craftsmanship.",
    metals: "",
    sizes: '1.2"',
    karats: "",
    image: "images/Gents_Pendants/114-541/A.png",
    video: "https://ijewel.design/embedded?slug=7293b4b&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "650-101",
    name: "Arrowhead Pendant",
    category: "gents",
    subcategory: "pendants",
    description: "This sleek arrowhead pendant is crafted for the dedicated archery enthusiast, combining precision-inspired design with a bold, modern edge. The sculpted form reflects the clean lines and balance of a finely tuned arrow, symbolizing focus, discipline, and accuracy. Finished with a high-polish sheen, this piece captures the spirit of the sport where patience meets power and every shot is intentional. A meaningful accessory for those who appreciate the art and tradition of archery, both on and off the range.",
    metals: "Gold, Silver",
    sizes: '1.6" tall with bail',
    karats: "",
    image: "images/Gents_Pendants/115-704/A.png",
    video: "https://ijewel.design/embedded?slug=6dcada3&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "530-103",
    name: "Lineman Pendant",
    category: "gents",
    subcategory: "pendants",
    description: "Honor the line worker's trade with this distinctive pendant, crafted for the men who climb poles and keep the power and communications running. Featuring a lineman ascending a utility pole within a bold circular design, this piece symbolizes skill, and dedication in one of the toughest professions on earth. A meaningful tribute for electrical and telephone linemen who take pride in working high above the ground to keep the world connected.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Gents_Pendants/530-103/A.png",
    video: "https://ijewel.design/embedded?slug=133e203&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },

  {
    style: "530-101",
    name: "Melancholy Man Pendant",
    category: "gents",
    subcategory: "pendants",
    description: "Melancholy Man Pendant \u2014 A quiet expression of remembrance, this sculptural pendant speaks to love that endures beyond loss.  Designed as a reflective figure bowed in contemplation, it symbolizes grief, memory, and the unbroken bond shared with someone, or a cherished pet, held deeply in the heart.  Crafted as a meaningful keepsake, Melancholy Man offers comfort, honoring those whose presence is gone, but whose love remains.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Gents_Pendants/530-101/C.png",
    video: "https://ijewel.design/embedded?slug=ae12391&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  // Specialty — Professional
  {
    style: "610-101",
    name: "Truck Driving Ring \u2014 Oval Signet",
    category: "specialty",
    subcategory: "professional",
    description: "Crafted for the professional truck driver, this distinctive gentleman's ring honors the men who keep America moving.  The personalized shank and bold signet styling make it a meaningful tribute to a life behind the wheel - built for those who understand trucking is more than a job, it's a calling.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Professional/647-333/F.png",
    video: "https://ijewel.design/embedded?slug=3e97995&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "610-102",
    name: "Truck Driving Ring \u2014 Square Signet",
    category: "specialty",
    subcategory: "professional",
    description: "Built for those who live by the long haul, this bold professional truck driver ring pairs rugged pride with refined craftsmanship.  A detailed big-rig design stands at the center, framed by brilliant gemstones that honor the grit, endurance, and excellence of the road.  Designed as a tribute to those who keep freight moving coast to coast, this striking ring is a symbol of dedication, independence, and pride in the trucking profession.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Professional/647-335/A.png",
    video: "https://ijewel.design/embedded?slug=6d23865&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "610-104",
    name: "Truck Driving Ring",
    category: "specialty",
    subcategory: "professional",
    description: "Celebrate life on the open road with this distinctive truck driver ring, featuring a sculpted semi-truck.  Designed for professionals who take pride in the long haul, this unique piece is available with brilliant diamond headlights (see style #610-105).  A bold tribute to the men and women who keep the country moving.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Professional/662-278/C.png",
    video: "https://ijewel.design/embedded?slug=2ad4f1a&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "610-105",
    name: "Truck Ring with Diamond Headlights",
    category: "specialty",
    subcategory: "professional",
    description: "Celebrate life on the open road with this distinctive truck driver ring, featuring a sculpted semi-truck.  Designed for professionals who take pride in the long haul, this unique piece is available with brilliant diamond headlights for added brilliance, or without diamonds for a classic understated look (see style #610-104).  A bold tribute to the men and women who keep the country moving.",
    metals: "Silver, Gold, Platinum",
    sizes: "",
    karats: "",
    image: "images/Professional/662-279/102.png",
    video: "https://ijewel.design/embedded?slug=5f11404&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },

  {
    style: "610-103",
    name: "Lineman Pendant",
    category: "specialty",
    subcategory: "professional",
    description: "Honor the line worker's trade with this distinctive pendant, crafted for the men who climb poles and keep the power and communications running.  Featuring a lineman ascending a utility pole within a bold circular design, this piece symbolizes skill, and dedication in one of the toughest professions on earth.  A meaningful tribute for electrical and telephone linemen who take pride in working high above the ground to keep the world connected.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Professional/610-103/G.png",
    video: "https://ijewel.design/embedded?slug=9843fc6&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },

  // Specialty — Novelty
  {
    style: "630-101",
    name: "Confederate States Seal Pendant",
    category: "specialty",
    subcategory: "novelty",
    description: "Confederate Seal Pendant \u2014 Rich in historical symbolism, this finely detailed pendant features the Confederate seal with its iconic mounted figure, laurel wreath motif, and the Latin motto Deo Vindice (With God as our Defender).  Expertly rendered with striking contrast and dimensional detail, it is designed for collectors and history enthusiasts who appreciate heritage-inspired jewelry.",
    metals: "",
    sizes: '1" diameter seal, 1.37" tall with bail',
    karats: "",
    image: "images/Novelty/Confederate%20States/A.png",
    video: "https://ijewel.design/embedded?slug=a93d860&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "630-102",
    name: "Confederate Navy Department Pendant",
    category: "specialty",
    subcategory: "novelty",
    description: "Honor a remarkable chapter of maritime history with this Confederate States Navy Department pendant, featuring a proud sailing vessel above crossed naval emblems.  Rich in historical character and finely crafted for collectors, historians, and those with a passion for naval heritage, this pendant makes a distinguished statement whether worn daily or reserved as a treasured keepsake.",
    metals: "",
    sizes: '1" diameter seal, 1.37" tall with bail',
    karats: "",
    image: "images/Novelty/Confederate%20Navy/A.png",
    video: "https://ijewel.design/embedded?slug=d3b4012&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "630-103",
    name: "Gadsden Flag Signet Ring",
    category: "specialty",
    subcategory: "novelty",
    description: "Make a bold statement of independence with this striking \"Don't Tread on Me\" signet ring, inspired by the enduring symbolism of the Gadsden emblem.  Featuring a raised coiled rattlesnake, this distinctive design embodies vigilance, resolve, and unapologetic strength.  Crafted with commanding presence and heirloom appeal, it is a meaningful piece for those who value liberty, history, and rugged American character.",
    metals: "Gold, Silver",
    sizes: "",
    karats: "",
    image: "images/Novelty/347-423/A.png",
    video: "https://ijewel.design/embedded?slug=9b0e28c&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "630-104",
    name: "Confederate Flag Signet Ring",
    category: "specialty",
    subcategory: "novelty",
    description: "Celebrate Southern heritage with this bold Confederate battle flag signet ring, crafted as a striking symbol of history, identity, and tradition.  Featuring vivid enamel detail set within a classic, substantial signet silhouette, this piece combines rugged character with heirloom craftsmanship.  Designed for collectors and those who value historical symbolism, it is a distinctive ring that makes a strong and enduring statement.",
    metals: "Gold, Silver",
    sizes: "",
    karats: "",
    image: "images/Novelty/347-509/A.png",
    video: "https://ijewel.design/embedded?slug=3678e4f&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "630-105",
    name: "Confederate Seal Round Signet Ring",
    category: "specialty",
    subcategory: "novelty",
    description: "Rich in symbolism and Southern heritage, this Confederate States of America signet ring is a bold heirloom design by intricate relief detail, vivid enamel accents, and the historic Deo Vindice motto.  Centered with a mounted rider motif and framed by commemorative inscription, this ring reflects pride, tradition, and enduring craftsmanship.  A striking piece for collectors and those drawn to history-inspired jewelry.",
    metals: "Gold, Silver",
    sizes: "",
    karats: "",
    image: "images/Novelty/347-812/D.png",
    video: "https://ijewel.design/embedded?slug=813c43f&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "630-106",
    name: "Confederate Seal Signet Ring",
    category: "specialty",
    subcategory: "novelty",
    description: "This distinguished Confederate signet ring pairs historic symbolism with elegant artistry, featuring the Deo Vindice seal framed in vivid enamel and accented by an intricately sculpted mounted rider motif.  The beautifully detailed scrollwork in the shank adds a refined, old-world character, elevating the ring beyond a traditional signet into a true heirloom statement.  Rich in heritage and craftsmanship, it is a striking piece for collectors and admirers of historically inspired design.",
    metals: "Gold, Silver",
    sizes: "",
    karats: "",
    image: "images/Novelty/347-817/E.png",
    video: "https://ijewel.design/embedded?slug=7d4a319&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  },
  {
    style: "630-107",
    name: "Vietnam War Era Army Ring",
    category: "specialty",
    subcategory: "novelty",
    description: "A tribute to the soldiers who served during the Vietnam War era, this ring features the seal of the United States of America Army. Inspired by classic service rings worn by veterans and servicemen of the era, it represents duty, sacrifice, honor, and remembrance. Ideal as a commemorative piece, collector's item, or meaningful gift for veterans and military families.",
    metals: "",
    sizes: "",
    karats: "",
    image: "images/Novelty/630-107/B.png",
    video: "https://ijewel.design/embedded?slug=70dd38c&isAutoplay=true&isResetView=false&isPlayCameraViews=false&isPlayAnimations=false"
  }
];

const PROCUREMENT_TEXT = "Our website predominately features our own designs and services but we are able to supply any jewelry item, even something you see at other jewelry outlets, usually at very competitive prices.";
