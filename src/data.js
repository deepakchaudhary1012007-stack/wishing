// Family Members Data Array
// Configured with personal photos and custom songs
export const familyMembers = [
  {
    id: 'krishna',
    name: 'Krishn Bhai',
    hindiName: 'कृष्ण भाई',
    relation: 'Dearest Brother',
    type: 'brother',
    photo: './photos/krishna.jpg',
    objectPosition: 'center 15%',
    diwaliPhoto: './photos/krishna_diwali.jpg',
    govardhanPhoto: './photos/krishna_govardhan.jpg',
    bhaiDoojPhoto: './photos/krishna_bhaidooj.jpg',
    extraPhoto: './photos/krishna_siblings.jpg',
    audio: './audio/krishna_bada_bhai.mp3',
    fallbackInitial: 'KB',
    tagColor: 'bg-orange-500/20 text-orange-300 border-orange-400/30',
    diwaliShayari: 'दीपक की जगमगाहट से महके हर शाम आपकी,\nदुनिया में सबसे अलग हो पहचान आपकी।\nभाई, आपके चेहरे पर सदा खिलती रहे यह मुस्कान,\nखुशियों और कामयाबी से भर जाए झोली आपकी! 🪔✨',
    govardhanShayari: 'मुरली मनोहर कान्हा की बरसे सदा कृपा आप पर,\nगोवर्धन महाराज का हाथ रहे हमेशा आपके सिर पर।\nभाई, सुख-समृद्धि और शांति से भर जाए जीवन,\nप्रभु का आशीर्वाद बना रहे आप पर उम्र भर! 🐄🌿',
    bhaiDoojShayari: 'तिलक लगाकर माथे पर, मांगी है रब से दुआएं हजार,\nसदा सलामत रहे हमारे भाई का यह सच्चा प्यार।\nहौसले बुलंद रहें और मंजिलें चूमें आपके कदम,\nभाई-बहन का यह पावन रिश्ता महकता रहे हर बार! 💮🔴',
    blessingDiwali: 'Wishing you overflowing happiness, flourishing prosperity, and glorious adventures ahead!',
    blessingGovardhan: 'May your life be graced with sacred devotion, boundless peace, and divine harmony!',
    blessingBhaiDooj: 'To the most fun-loving, protective brother—wishing you countless joys on this Bhai Dooj!'
  },
  {
    id: 'vishnu',
    name: 'Vishnu Bhai',
    hindiName: 'विष्णु भाई',
    relation: 'Beloved Brother',
    type: 'brother',
    photo: './photos/vishnu.jpg',
    objectPosition: 'center 28%',
    diwaliPhoto: './photos/vishnu_diwali.jpg',
    govardhanPhoto: './photos/vishnu_govardhan.jpg',
    bhaiDoojPhoto: './photos/vishnu_bhaidooj.jpg',
    extraPhoto: './photos/vishnu_siblings.jpg',
    // Custom song with first 5 seconds skipped: "Pichhe tureya aunda ae Vadda Bai"
    audio: './audio/vishnu_vadda_bai_trimmed.mp3',
    fallbackInitial: 'VB',
    tagColor: 'bg-amber-500/20 text-amber-300 border-amber-400/30',
    diwaliShayari: 'दीपों की तरह रोशन रहे जिंदगी आपकी,\nहर कदम पर मिले नई कामयाबी आपकी।\nभाई, आपके साथ से ही हर त्यौहार में रौनक है,\nखुशियों और मुस्कानों से भरी रहे हर घड़ी आपकी! 🪔✨',
    govardhanShayari: 'भगवान श्री कृष्ण का मिले सदा वरदान,\nभाई, बढ़ता रहे आपका मान और सम्मान।\nगोवर्धन महाराज दूर करें जीवन के सारे कष्ट,\nसुख-समृद्धि से महकता रहे आपका हर मुकाम! 🐄🌿',
    bhaiDoojShayari: 'माथे पर चमकता रहे तिलक का यह पावन मान,\nआप केवल भाई नहीं, हमारी ताकत और अभिमान।\nभाई, ईश्वर लंबी उम्र और असीम खुशियाँ दे आपको,\nसदा सलामत रहे भाई-बहन का यह अनमोल प्यार! 💮🔴',
    blessingDiwali: 'Bhai, may your path always be lighted with supreme glory, wisdom, and triumphant success!',
    blessingGovardhan: 'May Lord Krishna protect you like Govardhan Parvat and shower eternal health on you!',
    blessingBhaiDooj: 'No matter the miles, a sister’s prayer and love will forever surround you. Happy Bhai Dooj!'
  },
  {
    id: 'kamlesh',
    name: 'Kamlesh Didi',
    hindiName: 'कमलेश दीदी',
    relation: 'Loving Elder Sister',
    type: 'sister',
    photo: './photos/kamlesh.jpg',
    objectPosition: 'center 22%',
    diwaliPhoto: './photos/kamlesh_diwali.jpg',
    govardhanPhoto: './photos/kamlesh_govardhan.jpg',
    bhaiDoojPhoto: './photos/kamlesh_bhaidooj.jpg',
    extraPhoto: './photos/kamlesh_siblings.jpg',
    groupPhoto: './photos/kamlesh_group.jpg',
    // Audio for Kamlesh Didi (First 5 seconds skipped - "Teri gail gail chalu teri bane parchhai"):
    audio: './audio/kamlesh_teri_gail_trimmed.mp3',
    fallbackInitial: 'KD',
    tagColor: 'bg-pink-500/20 text-pink-300 border-pink-400/30',
    diwaliShayari: 'दीयों की रोशनी से जगमगाए आँगन आपका,\nसदा खुशियों और उमंगों से भरा रहे मन आपका।\nदीदी, ईश्वर हर बला से दूर रखे आपको,\nसुख, शांति और समृद्धि से महकता रहे जीवन आपका! 🪔✨',
    govardhanShayari: 'गोवर्धन की पावन कृपा से हर संकट मिट जाए,\nकान्हा की मुरली की धुन से खुशियों का सावन आए।\nदीदी, अन्नकूट का यह पावन पर्व आपके लिए,\nढेरों खुशियाँ, अच्छी सेहत और बरकत लेकर आए! 🐄🌿',
    bhaiDoojShayari: 'माथे पर सजाया आपने तिलक, उतारी भाई की आरती,\nआपकी दुआओं में है वो शक्ति जो हर मुसीबत को टालती।\nदीदी, ईश्वर आपको लंबी उम्र और सदा मुस्कुराता रखे,\nभाई-बहन के इस पावन रिश्ते को दुनिया की हर खुशी मिलती रहे! 💮🔴',
    blessingDiwali: 'दीपावली के इस पावन पर्व पर कमलेश दीदी के जीवन में सुख, शांति, समृद्धि और अपार खुशियाँ आएं। शुभ दीपावली!',
    blessingGovardhan: 'भगवान श्री कृष्ण और गोवर्धन महाराज की असीम कृपा कमलेश दीदी और पूरे परिवार पर सदा बनी रहे। शुभ गोवर्धन पूजा!',
    blessingBhaiDooj: 'दीदी का पावन टीका और दिल से निकली दुआएं भाई की सबसे बड़ी ढाल हैं। भाई दूज की हार्दिक शुभकामनाएं, कमलेश दीदी!'
  },
  {
    id: 'vimlesh',
    name: 'Vimlesh Didi',
    hindiName: 'विमलेश दीदी',
    relation: 'Caring Sister',
    type: 'sister',
    photo: './photos/vimlesh.jpg',
    objectPosition: 'center 20%',
    diwaliPhoto: './photos/vimlesh_diwali.jpg',
    govardhanPhoto: './photos/vimlesh_govardhan.jpg',
    bhaiDoojPhoto: './photos/vimlesh_bhaidooj.jpg',
    extraPhoto: './photos/vimlesh_turban.jpg',
    // Audio for Vimlesh Didi ("Ve Tom and Jerry ja, tera mera ae rishta..."):
    audio: './audio/vimlesh_tom_and_jerry.mp3',
    fallbackInitial: 'VD',
    tagColor: 'bg-rose-500/20 text-rose-300 border-rose-400/30',
    diwaliShayari: 'दीयों की रोशनी से जगमगाए आपका संसार,\nखुशियों से भर जाए आपका प्यारा घर-द्वार।\nदीदी आपके चेहरे की यह प्यारी सी मुस्कान,\nसदा महकती रहे जैसे खिलता हुआ गुलज़ार! 🪔✨',
    govardhanShayari: 'गोवर्धन की पावन महिमा, कृष्ण कन्हैया का प्यार,\nदीदी आपके जीवन में आए सुख-समृद्धि अपार।\nहर कदम पर मिले प्रभु का आशीर्वाद आपको,\nसदा खुशहाल और रोशन रहे हमारा परिवार! 🐄🌿',
    bhaiDoojShayari: 'थाल सजाकर आरती उतारी, माथे पर लगाया टीका,\nदीदी आपके प्यार और दुआओं से हर ग़म हुआ फीका।\nजब तक रहेगी यह दुनिया, रहेगा यह पावन नाता,\nभाई के दिल में सदा बसेगी आपकी ममता की छाया! 💮🔴',
    blessingDiwali: 'दीपावली के इस पावन पर्व पर आपके जीवन में सुख, समृद्धि और अपार खुशियाँ आएं। दीपों की रोशनी से आपका हर दिन जगमगाता रहे!',
    blessingGovardhan: 'भगवान श्री कृष्ण आप और आपके परिवार पर अपनी कृपा सदा बनाए रखें। गोवर्धन महाराज आपके जीवन में सुख, शांति और समृद्धि भर दें।',
    blessingBhaiDooj: 'भाई-बहन के अटूट विश्वास, स्नेह और समर्पण के इस पावन पर्व पर हार्दिक बधाई। यह पवित्र रिश्ता जीवन भर यूं ही महकता रहे!'
  },
  {
    id: 'membati',
    name: 'Membati Didi',
    hindiName: 'मेमबती दीदी',
    relation: 'Sweet Sister',
    type: 'sister',
    photo: './photos/membati.jpg',
    objectPosition: 'center 32%',
    diwaliPhoto: './photos/membati_diwali.jpg',
    govardhanPhoto: './photos/membati_govardhan.jpg',
    bhaiDoojPhoto: './photos/membati_bhaidooj.jpg',
    extraPhoto: './photos/membati_siblings.jpg',
    familyPhoto: './photos/membati_family.jpg',
    // Audio for Membati Didi ("Veer naal bhain vi hove, sohne lagde ne dovein..."):
    audio: './audio/membati_veer_naal_bhain.mp3',
    fallbackInitial: 'MD',
    tagColor: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
    diwaliShayari: 'खुशियों के दीप आपके आँगन में सदा जगमगाएं,\nजीवन में आपके कभी कोई ग़म पास न आए।\nदीदी, प्यार और दुआओं से महके संसार आपका,\nदीपावली का यह पावन पर्व नई खुशियाँ और तरक्की लाए! 🪔✨',
    govardhanShayari: 'मुरलीधर कान्हा की बरसे सदा अनुकंपा आप पर,\nगोवर्धन महाराज का रहे सदा पावन हाथ आपके सिर पर।\nदीदी, आरोग्य, शांति और सुख-समृद्धि मिले आपको,\nखुशहाली और मिठास से भरा रहे आपका हर एक सफर! 🐄🌿',
    bhaiDoojShayari: 'चंदन का टीका और रेशम का पावन दुलार,\nदीदी, अमर रहे हमारा यह भाई-बहन का प्यार।\nमांगी है रब से यही मन्नत हर सांस में,\nखुशियों से भरी रहे आपकी दुनिया हर बार! 💮🔴',
    blessingDiwali: 'दीपावली के इस पावन अवसर पर मेमबती दीदी के जीवन में सुख, शांति, समृद्धि और अपार खुशियाँ आएं। शुभ दीपावली!',
    blessingGovardhan: 'भगवान श्री कृष्ण और गोवर्धन महाराज का आशीर्वाद मेमबती दीदी पर सदा बना रहे। शुभ गोवर्धन पूजा!',
    blessingBhaiDooj: 'बहन का पावन टीका और दिल से निकला स्नेह भाई के जीवन की सबसे अनमोल पूंजी है। भाई दूज की हार्दिक शुभकामनाएं, मेमबती दीदी!'
  },
  {
    id: 'memory',
    name: 'Memories',
    hindiName: '',
    relation: 'Golden Family Moments',
    type: 'memory',
    photo: './photos/memory_family_temple.jpg',
    objectPosition: 'center 30%',
    // Audio for Memories ("Yeh tasveer hai khwabon ke rangon ki, apnon ki..."):
    audio: './audio/memories_yeh_tasveer_hai.mp3',
    fallbackInitial: '💖',
    tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
    isMemory: true,
    trueLines: [
      "Family is not just an important thing. It's everything — built on love, trust, and unconditional presence.",
      "A parents' sheltering blessing is life's strongest foundation; a sibling's laughter is its greatest treasure.",
      "No matter where life takes us, the memories we create together will forever keep our hearts bound as one. 💖"
    ],
    photos: [
      {
        url: './photos/memory_family_temple.jpg',
        title: 'The Entire Family United in Faith',
        subtitle: "Sheltered by our parents' blessings, bound by eternal sibling love"
      },
      {
        url: './photos/memory_parents.jpg',
        title: 'Pillars of Our Life: Beloved Parents',
        subtitle: 'Whose sacrifices, boundless love, and grace built our happy world'
      },
      {
        url: './photos/memory_family_selfie.jpg',
        title: 'Pure Joy, Laughter & Little Smiles',
        subtitle: 'The radiant heartbeat of our home with siblings and little ones'
      },
      {
        url: './photos/memory_siblings_group.jpg',
        title: 'Brothers & Sisters: Companions for Life',
        subtitle: 'Walking hand in hand together through every season of life'
      },
      {
        url: './photos/memory_rakhi_blue.jpg',
        title: 'The Sacred Thread of Protection',
        subtitle: "A sister's prayers wrapped around a brother's wrist with eternal love"
      },
      {
        url: './photos/memory_tilak_turquoise.jpg',
        title: 'Auspicious Tilak & Sweetest Blessings',
        subtitle: 'Traditions of honor, sweet sweets, and a sister’s heartfelt wishes'
      },
      {
        url: './photos/memory_rakhi_purple.jpg',
        title: 'Pure Devotion & Sibling Trust',
        subtitle: 'A bond forged in childhood, blossoming into lifelong strength'
      },
      {
        url: './photos/memory_wedding.jpg',
        title: 'Celebrations & Golden Occasions',
        subtitle: 'Dressed in traditional elegance, cherishing vibrant festive days'
      },
      {
        url: './photos/memory_kids_siblings.jpg',
        title: 'Sweet Traditions & Festive Warmth',
        subtitle: 'Sharing festive sweets, sacred tilaks, and endless laughs'
      },
      {
        url: './photos/memory_siblings_smile.jpg',
        title: 'An Unbreakable Sibling Bond',
        subtitle: 'A protector, a cheerleader, and a lifelong blessing'
      }
    ]
  }
];
