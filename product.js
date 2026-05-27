// Comprehensive Database: 52 Authentic Ethiopian Products with Realistic Prices & Image Contexts
const products = [
    // --- CATEGORY: COFFEE & SPICES (Items 1-13) ---
    {
        id: 1, name: 'Tomoca Ground Coffee (500g)', category: 'coffee_spices', price: 460.00,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600',
        description: 'Authentic rich, bold dark roast from Addis Ababa’s historic Tomoca mills. Packaged freshly for premium aroma. [Source: Deliver Addis Catalog]'
    },
    {
        id: 2, name: 'Premium Yirgacheffe Kochere Whole Beans (1kg)', category: 'coffee_spices', price: 920.00,
        image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=600',
        description: 'High-altitude micro-lot specialty beans natively processed with distinct black tea and citrus floral notes. [Source: Adobe Stock Premium Coffee Selections]'
    },
    {
        id: 3, name: 'Organic Pure Berbere Powder Mix (1kg)', category: 'coffee_spices', price: 480.00,
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600',
        description: 'Fiery, aromatic ground chili base blended with over 12 indigenous spice crops, vital for classic Doro Wot stew dishes. [Source: Jiji.com.et Spice Merchants]'
    },
    {
        id: 4, name: 'Guji Honey-Processed Grade 1 Beans (500g)', category: 'coffee_spices', price: 580.00,
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600',
        description: 'Exquisite single-origin coffee presenting sweet stone-fruit profiles, sourced responsibly from Southern farmers. [Source: Deliver Addis Marketplace]'
    },
    {
        id: 5, name: 'Traditional Hand-Roasted Shiro Powder (1kg)', category: 'coffee_spices', price: 340.00,
        image: 'https://images.unsplash.com/photo-1620584742468-b7c844284814?w=600',
        description: 'Roasted chickpea flour masterfully seasoned with garlic, ginger, and red onion flakes for silky Shiro Wot dinners. [Source: Local Mercato Mills via Jiji]'
    },
    {
        id: 6, name: 'Aromatic Mitmita Hot Spice Blend (500g)', category: 'coffee_spices', price: 290.00,
        image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600',
        description: 'Extra-spicy dipping powder ground from bird’s eye chili peppers, cardamom, and sea salt grains. Essential accompaniment for Kitfo. [Source: Deliver Addis]'
    },
    {
        id: 7, name: 'Harrar Longberry Grade 4 Beans (1kg)', category: 'coffee_spices', price: 1150.00,
        image: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=600',
        description: 'Sun-dried natural Ethiopian beans showcasing complex blueberry wine notes and an intense heavy-bodied feel. [Source: Adobe Stock Assorted Crops]'
    },
    {
        id: 8, name: 'Premium Korarima Cardamom Pods (250g)', category: 'coffee_spices', price: 420.00,
        image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600',
        description: 'Whole wild black cardamom pods harvested from pristine south-western rain forests, offering sharp woodsy aromatics. [Source: Jiji Market]'
    },
    {
        id: 9, name: 'Organic Tikur Azmud Black Cumin (500g)', category: 'coffee_spices', price: 310.00,
        image: 'https://images.unsplash.com/photo-1608797178974-15b35a61d121?w=600',
        description: 'Pure local black seed selections historically implemented across traditional baking items, stews, and herbal remedies. [Source: Deliver Addis]'
    },
    {
        id: 10, name: 'Mekelesha Wot Multi-Spice Finish (250g)', category: 'coffee_spices', price: 240.00,
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600',
        description: 'A delicate, fragrant finish spice mix of cinnamon, cloves, and nutmeg added at the final minutes of stew preparation. [Source: Jiji.com.et]'
    },
    {
        id: 11, name: 'Dried Koseeret Herb Leaves (100g)', category: 'coffee_spices', price: 160.00,
        image: 'https://images.unsplash.com/photo-1546811750-e44a7a422e37?w=600',
        description: 'Wild native herbal leaves crucial for clarifying authentic Ethiopian spiced butter (Niter Kibbeh). [Source: Organic Artisanal Cooperatives]'
    },
    {
        id: 12, name: 'Premium Besobela Sacred Basil (150g)', category: 'coffee_spices', price: 180.00,
        image: 'https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?w=600',
        description: 'Sun-dried holy basil sprigs that offer the distinct underlying botanical aroma native to Ethiopian red sauces. [Source: Deliver Addis Spices]'
    },
    {
        id: 13, name: 'Premium Grade White Teff Flour (5kg)', category: 'coffee_spices', price: 890.00,
        image: 'https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?w=600',
        description: 'Superfine, iron-rich white teff grain flour optimized for baking spongy, beautifully fermented traditional Injera bread. [Source: Jiji Bulk Grain Wholesalers]'
    },

    // --- CATEGORY: TRADITIONAL WEAR (Items 14-26) ---
    {
        id: 14, name: 'Handwoven Luxury Menza Habesha Kemis', category: 'traditional_wear', price: 15500.00,
        image: 'https://images.unsplash.com/photo-1583391265517-35bbdad01209?w=600',
        description: 'Exquisite, full-length formal bridal attire meticulously hand-woven from fine local cotton with modern golden Tibeb borders. [Source: Jiji Boutique Fashion]'
    },
    {
        id: 15, name: 'Modern Men’s Cross-Embroidered Tunic', category: 'traditional_wear', price: 3900.00,
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600',
        description: 'Elegant long-sleeve cotton shirt designed for holidays, highlighting custom minimalist geometric embroidery on cuffs. [Source: Deliver Addis Apparel]'
    },
    {
        id: 16, name: 'Heavy Double-Layer Traditional Gabi Blanket', category: 'traditional_wear', price: 2600.00,
        image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600',
        description: 'Ultra-thick, incredibly soft hand-spun pure cotton blanket providing great insulation, favored by elders across cool climates. [Source: Adobe Stock Handloom]'
    },
    {
        id: 17, name: 'Classic Sheer Netela Scarf (Gold Trim)', category: 'traditional_wear', price: 1400.00,
        image: 'https://images.unsplash.com/photo-1604077350837-c7f82f28653f?w=600',
        description: 'Lightweight, semi-transparent fine accent shawl paired elegantly over everyday garments during church ceremonies. [Source: Jiji.com.et]'
    },
    {
        id: 18, name: 'Children’s Holiday Tibeb Vest & Pants Set', category: 'traditional_wear', price: 2900.00,
        image: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600',
        description: 'Adorable cultural festival matching vestment tailored perfectly for toddlers using bright red and green patterns. [Source: Deliver Addis Kids]'
    },
    {
        id: 19, name: 'Ceremonial Velvet Wedding Kaba (Gold Stitch)', category: 'traditional_wear', price: 18500.00,
        image: 'https://images.unsplash.com/photo-1601639014266-9e909569ce41?w=600',
        description: 'A luxurious deep velvet cape heavily decorated with intricate metal bullion threads, symbolizing maximum prestige. [Source: Adobe Stock Bridal Collections]'
    },
    {
        id: 20, name: 'Premium Hand-spun Men’s Kuta Wrap', category: 'traditional_wear', price: 3400.00,
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600',
        description: 'Fine high-grade cotton presentation wrap configured cleanly with symmetrical, dignified dark line embroidery accents. [Source: Jiji Clothiers]'
    },
    {
        id: 21, name: 'Contemporary Geometrical Axum Print Dress', category: 'traditional_wear', price: 8800.00,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600',
        description: 'Casual modern linen dress showcasing stylized historic obelisk silhouette highlights along its lower trim lines. [Source: Deliver Addis Designers]'
    },
    {
        id: 22, name: 'Authentic Oromo Cultural Attire Set', category: 'traditional_wear', price: 9800.00,
        image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600',
        description: 'Bright red, white, and black striped premium cultural dress highlighting gorgeous traditional beadwork accents along the neckline. [Source: Jiji Costumes]'
    },
    {
        id: 23, name: 'Tigray Heritage Tilf Shifon Gown', category: 'traditional_wear', price: 7900.00,
        image: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?w=600',
        description: 'Flowy, sheer high-grade chiffon dress featuring authentic handwoven golden cross motifs along the central panel. [Source: Adobe Stock Wear]'
    },
    {
        id: 24, name: 'Gondar-Style Braided Cotton Men’s Suit', category: 'traditional_wear', price: 4500.00,
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600',
        description: 'Traditional matching linen drawstring trousers and tunic featuring thick hand-twisted white rope accent trims. [Source: Deliver Addis Luxury]'
    },
    {
        id: 25, name: 'Handcrafted Festive Gurage Vest Outfit', category: 'traditional_wear', price: 4100.00,
        image: 'https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?w=600',
        description: 'Eye-catching vestment using yellow and black woven highlights, traditionally donned during celebratory cultural dances. [Source: Jiji Clothing]'
    },
    {
        id: 26, name: 'Premium Handcrafted Leather Sabot Sandals', category: 'traditional_wear', price: 1950.00,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600',
        description: '100% genuine vegetable-tanned local cattle hide sandals offering modern comfort with classic rugged longevity. [Source: Jiji Shoe Artisans]'
    },

    // --- CATEGORY: ART & DECOR (Items 27-39) ---
    {
        id: 27, name: 'Handmade Black Clay Coffee Jebena Pot', category: 'art_decor', price: 890.00,
        image: 'https://images.unsplash.com/photo-1563604771569-705a108d48de?w=600',
        description: 'Traditional porous black earthenware clay pot optimized for delivering smooth, aromatic coffee ceremonies. [Source: Deliver Addis Giftwares]'
    },
    {
        id: 28, name: 'Vibrant Handwoven Large Mesob Basket', category: 'art_decor', price: 5400.00,
        image: 'https://images.unsplash.com/photo-1600171221799-a4185d992e59?w=600',
        description: 'Large, brightly colored straw basket used natively to hold, store, and gracefully present circles of fresh Injera bread. [Source: Adobe Stock Decor]'
    },
    {
        id: 29, name: 'Carved Wooden Axum Obelisk Replica (40cm)', category: 'art_decor', price: 2400.00,
        image: 'https://images.unsplash.com/photo-1597825828456-4b2a9d8fa7af?w=600',
        description: 'Sturdy olive wood desktop sculpture capturing the grand architectural detailing of historic Aksumite stelae monuments. [Source: Jiji Handicrafts]'
    },
    {
        id: 30, name: 'Lalibela Rock Church Olivewood Miniature', category: 'art_decor', price: 2850.00,
        image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600',
        description: 'Detailed carving depicting the cross-shaped monolithic church of Biete Ghiorgis, crafted by local heritage masters. [Source: Jiji Art]'
    },
    {
        id: 31, name: 'Traditional Religious Leather Painting Canvas', category: 'art_decor', price: 4600.00,
        image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600',
        description: 'Hand-painted iconic biblical depictions using natural historical pigments on authentic treated goat-hide parchment sheets. [Source: Deliver Addis Artifacts]'
    },
    {
        id: 32, name: 'Set of 6 Timeless Saba Design Ceramic Sini', category: 'art_decor', price: 780.00,
        image: 'https://images.unsplash.com/photo-1550980562-b1e7c992f442?w=600',
        description: 'Six delicate porcelain handling cups displaying the timeless green and gold Queen of Sheba graphic pattern work. [Source: Deliver Addis Home]'
    },
    {
        id: 33, name: 'Woven Straw Colorful Table Mats (Set of 6)', category: 'art_decor', price: 1250.00,
        image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600',
        description: 'Heat-resistant, highly vibrant hand-coiled dining table placemats designed to safely hold heavy heated serving dishes. [Source: Jiji Decor]'
    },
    {
        id: 34, name: 'Vintage Ethiopian Embossed Leather Shield', category: 'art_decor', price: 6900.00,
        image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=600',
        description: 'Thick, hardened collector’s item shield highlighting embossed concentric geometric protection ring artwork. [Source: Antique Dealers via Jiji]'
    },
    {
        id: 35, name: 'Handcrafted Jimma Wooden Tribal Headrest', category: 'art_decor', price: 1950.00,
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600',
        description: 'Authentic single-block wooden ergonomic neck rest reflecting historic design trends from Southwest Ethiopian tribes. [Source: Adobe Stock Crafts]'
    },
    {
        id: 36, name: 'Hand-painted Merkat Mud-Cloth Accent Banner', category: 'art_decor', price: 3200.00,
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600',
        description: 'Stunning organic wall hanging prepared with fermented river-mud dyes on thick heavy handloom cotton backing. [Source: Deliver Addis Decor]'
    },
    {
        id: 37, name: 'Silver Axumite Filigree Cross Pendant', category: 'art_decor', price: 2500.00,
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600',
        description: 'Masterfully wire-welded authentic pure silver cross pendant mimicking royal lineage patterns from historical eras. [Source: Jiji Jewelry]'
    },
    {
        id: 38, name: 'Genuine Raw Welo Opal Accent Silver Ring', category: 'art_decor', price: 9200.00,
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600',
        description: 'Stunning premium silver band mounting a real Ethiopian iridescent neon opal excavated from Wollo mines. [Source: High Fashion Jewelry via Jiji]'
    },
    {
        id: 39, name: 'Hand-woven Tall Bamboo Storage Basket', category: 'art_decor', price: 680.00,
        image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600',
        description: 'Splendid lightweight laundry or dry good collection basket split cleanly out of organic highlands river bamboo rods. [Source: Jiji Utility]'
    },

    // --- CATEGORY: INSTRUMENTS (Items 40-52) ---
    {
        id: 40, name: 'Authentic 6-String Acoustic Wooden Krar', category: 'instruments', price: 6700.00,
        image: 'https://images.unsplash.com/photo-1543884393-27ea2a37397b?w=600',
        description: 'Classic bowl-lyre string setup optimized for beautiful acoustic performance during traditional Azmari songs. [Source: Jiji Music Stores]'
    },
    {
        id: 41, name: 'Single-String Bowed Wooden Masinqo Lute', category: 'instruments', price: 5900.00,
        image: 'https://images.unsplash.com/photo-1460036521480-c4b507a53c90?w=600',
        description: 'Diamond-shaped box fiddle wrapped tightly in clean rawhide, operated gracefully with a horsehair string bow. [Source: Deliver Addis Cultural]'
    },
    {
        id: 42, name: 'Hand-Carved Large Church Ceremonial Kebero', category: 'instruments', price: 8900.00,
        image: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=600',
        description: 'Substantial conical double-headed prayer drum hollowed smoothly from massive local logs and bound in thick hide. [Source: Adobe Stock Church Supplies]'
    },
    {
        id: 43, name: 'Traditional Bamboo Washint Flute (Key G)', category: 'instruments', price: 880.00,
        image: 'https://images.unsplash.com/photo-1573871666457-7c7329415201?w=600',
        description: 'End-blown wooden microtonal flute offering dark, hauntingly beautiful melodic intervals essential to pastoral music. [Source: Jiji Instruments]'
    },
    {
        id: 44, name: 'Sacred Liturgical 10-String Begena Lyre', category: 'instruments', price: 1600.00,
        image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600',
        description: 'Massive meditative string instrument referred historically as King David’s Harp, engineered for deep bass buzzing tones. [Source: Jiji]'
    },
    {
        id: 45, name: 'Orthodox Church Embossed Brass Sistrum', category: 'instruments', price: 3600.00,
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600',
        description: 'Authentic Tsenatsil rattle built with rigid structural columns and jangling metal discs for liturgical timing tracks. [Source: Deliver Addis Collectibles]'
    },
    {
        id: 46, name: 'Custom Electronic Amplified Studio Krar', category: 'instruments', price: 9500.00,
        image: 'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=600',
        description: 'Modernized solid-body electrified krar incorporating built-in magnetic pickups for seamless quarter-inch line outputs. [Source: Jiji Electronic Outlets]'
    },
    {
        id: 47, name: 'Handmade Gourd Shaker Percussion instrument', category: 'instruments', price: 740.00,
        image: 'https://images.unsplash.com/photo-1527383442579-df607ae96545?w=600',
        description: 'Natural dried shell shaker wrapped with a mesh grid of native clay beads to generate dry, crisp rhythm beats. [Source: Deliver Addis]'
    },
    {
        id: 48, name: 'Shepherd Short Wooden Woodwind Washint', category: 'instruments', price: 620.00,
        image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600',
        description: 'Four-hole compact bamboo flute tuned to traditional pentatonic Tizita scales, easily carried across the country. [Source: Jiji Market]'
    },
    {
        id: 49, name: 'Medium Sized Secular Festival Kebero Drum', category: 'instruments', price: 5100.00,
        image: 'https://images.unsplash.com/photo-1543443374-b6fe10a6ab7b?w=600',
        description: 'Sturdy, shoulder-slung traditional drum ideal for handling quick upbeat tempos during outdoor weddings and parties. [Source: Adobe Stock]'
    },
    {
        id: 50, name: 'Vintage Goat-skin Travel Hand Drum', category: 'instruments', price: 5600.00,
        image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600',
        description: 'Beautifully aged compact drum body decorated around with weathered red leather structural braids. [Source: Jiji Antiques]'
    },
    {
        id: 51, name: 'Professional Concert-Grade Hand-Cut Krar', category: 'instruments', price: 12500.00,
        image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600',
        description: 'Masterwork instrument constructed from continuous rare seasoned mahogany wood logs, maximizing acoustic projection. [Source: High-End Music Merchants]'
    },
    {
        id: 52, name: 'Traditional Handheld Debtera Prayer Staff Bell', category: 'instruments', price: 1150.00,
        image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=600',
        description: 'Cast bronze heavy liturgical prayer handle bell producing clear high-pitched reverberations within large rooms. [Source: Jiji Artifacts]'
    }
];