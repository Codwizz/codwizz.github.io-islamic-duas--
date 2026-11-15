// Dua data. Each entry: id, title, arabic, transliteration, meaning, source, count (optional)
// Please have a scholar/teacher double-check wording before wide sharing.
const DUAS = {
  morning: [
    {
      id: "m1", title: "Upon waking up",
      arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
      translit: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur.",
      meaning: "All praise is for Allah who gave us life after having taken it from us, and to Him is the resurrection.",
      source: "Sahih al-Bukhari"
    },
    {
      id: "m2", title: "Morning remembrance",
      arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
      translit: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namutu, wa ilaykan-nushur.",
      meaning: "O Allah, by You we enter the morning and by You we enter the evening; by You we live and by You we die, and to You is the resurrection.",
      source: "Sunan at-Tirmidhi"
    },
    {
      id: "m3", title: "Sayyidul Istighfar (master of seeking forgiveness)",
      arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
      translit: "Allahumma anta Rabbi la ilaha illa ant, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't. A'udhu bika min sharri ma sana't. Abu'u laka bi ni'matika 'alayya, wa abu'u bidhanbi faghfir li, fa innahu la yaghfirudh-dhunuba illa ant.",
      meaning: "O Allah, You are my Lord; there is no god but You. You created me and I am Your servant, and I keep Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me and I acknowledge my sin, so forgive me, for none forgives sins but You.",
      source: "Sahih al-Bukhari"
    },
    {
      id: "m4", title: "Protection from harm (3 times)",
      arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
      translit: "Bismillahil-ladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i, wa huwas-Sami'ul-'Alim.",
      meaning: "In the name of Allah, with whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, All-Knowing.",
      source: "Abu Dawud, At-Tirmidhi", count: 3
    }
  ],
  evening: [
    {
      id: "e1", title: "Evening remembrance",
      arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
      translit: "Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namutu, wa ilaykal-masir.",
      meaning: "O Allah, by You we enter the evening and by You we enter the morning; by You we live and by You we die, and to You is the final return.",
      source: "Sunan at-Tirmidhi"
    },
    {
      id: "e2", title: "Sayyidul Istighfar (evening)",
      arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
      translit: "Allahumma anta Rabbi la ilaha illa ant, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't. A'udhu bika min sharri ma sana't. Abu'u laka bi ni'matika 'alayya, wa abu'u bidhanbi faghfir li, fa innahu la yaghfirudh-dhunuba illa ant.",
      meaning: "O Allah, You are my Lord; there is no god but You. You created me and I am Your servant... I acknowledge Your favour upon me and I acknowledge my sin, so forgive me, for none forgives sins but You.",
      source: "Sahih al-Bukhari"
    },
    {
      id: "e3", title: "Protection from harm (3 times)",
      arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
      translit: "Bismillahil-ladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i, wa huwas-Sami'ul-'Alim.",
      meaning: "In the name of Allah, with whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, All-Knowing.",
      source: "Abu Dawud, At-Tirmidhi", count: 3
    },
    {
      id: "e4", title: "Seeking refuge in Allah's perfect words (3 times)",
      arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
      translit: "A'udhu bikalimatillahit-tammati min sharri ma khalaq.",
      meaning: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
      source: "Sahih Muslim", count: 3
    }
  ],
  night: [
    {
      id: "n1", title: "Before sleeping",
      arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
      translit: "Bismika Allahumma amutu wa ahya.",
      meaning: "In Your name, O Allah, I die and I live.",
      source: "Sahih al-Bukhari"
    },
    {
      id: "n2", title: "Dua with hand under the cheek",
      arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
      translit: "Allahumma qini 'adhabaka yawma tab'athu 'ibadak.",
      meaning: "O Allah, protect me from Your punishment on the day You resurrect Your servants.",
      source: "Abu Dawud, At-Tirmidhi"
    },
    {
      id: "n3", title: "Tasbih before sleep",
      arabic: "سُبْحَانَ اللَّهِ (٣٣) ، الْحَمْدُ لِلَّهِ (٣٣) ، اللَّهُ أَكْبَرُ (٣٤)",
      translit: "SubhanAllah (33), Alhamdulillah (33), Allahu Akbar (34).",
      meaning: "Glory be to Allah (33), All praise is for Allah (33), Allah is the Greatest (34).",
      source: "Sahih al-Bukhari & Muslim"
    },
    {
      id: "n4", title: "Upon waking at night / seeking safety",
      arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ وَشَرِّ عِبَادِهِ",
      translit: "A'udhu bikalimatillahit-tammati min ghadabihi wa 'iqabihi wa sharri 'ibadih.",
      meaning: "I seek refuge in the perfect words of Allah from His anger and punishment, and from the evil of His servants.",
      source: "Abu Dawud, At-Tirmidhi"
    }
  ],
  anxiety: [
    {
      id: "a1", title: "Refuge from worry and grief",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
      translit: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dayni wa ghalabatir-rijal.",
      meaning: "O Allah, I seek refuge in You from worry and grief, from helplessness and laziness, from miserliness and cowardice, from being overcome by debt and overpowered by men.",
      source: "Sahih al-Bukhari"
    },
    {
      id: "a2", title: "Dua of Yunus (Jonah) ﷺ",
      arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
      translit: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin.",
      meaning: "There is no god but You; glory be to You. Indeed, I have been among the wrongdoers.",
      source: "Quran 21:87; At-Tirmidhi"
    },
    {
      id: "a3", title: "Allah is sufficient for us",
      arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
      translit: "Hasbunallahu wa ni'mal-wakil.",
      meaning: "Allah is sufficient for us, and He is the best disposer of affairs.",
      source: "Quran 3:173"
    },
    {
      id: "a4", title: "Asking for help in distress",
      arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
      translit: "Ya Hayyu ya Qayyum, birahmatika astaghith.",
      meaning: "O Ever-Living, O Sustainer of all, in Your mercy I seek relief.",
      source: "Sunan at-Tirmidhi"
    },
    {
      id: "a5", title: "Ease my chest and my affairs",
      arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
      translit: "Rabbi-shrah li sadri wa yassir li amri.",
      meaning: "My Lord, expand my chest for me and ease my task for me.",
      source: "Quran 20:25-26"
    }
  ],
  parents: [
    {
      id: "p1", title: "Mercy for parents",
      arabic: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
      translit: "Rabbir-hamhuma kama rabbayani saghira.",
      meaning: "My Lord, have mercy on them as they raised me when I was small.",
      source: "Quran 17:24"
    },
    {
      id: "p2", title: "Forgive me, my parents and the believers",
      arabic: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
      translit: "Rabbanagh-fir li wa liwalidayya wa lil-mu'minina yawma yaqumul-hisab.",
      meaning: "Our Lord, forgive me, my parents and the believers on the Day the reckoning takes place.",
      source: "Quran 14:41"
    },
    {
      id: "p3", title: "Gratitude for blessings upon me and my parents",
      arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ",
      translit: "Rabbi awzi'ni an ashkura ni'matakal-lati an'amta 'alayya wa 'ala walidayya wa an a'mala salihan tardah.",
      meaning: "My Lord, enable me to be grateful for Your favour which You have bestowed upon me and my parents, and to do righteous deeds that please You.",
      source: "Quran 27:19"
    }
  ],
  // Duas linked to each of the five daily prayers (after the salah)
  prayers: {
    Fajr: [
      {
        id: "pf1", title: "After Fajr salam",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
        translit: "Allahumma inni as'aluka 'ilman nafi'a, wa rizqan tayyiba, wa 'amalan mutaqabbala.",
        meaning: "O Allah, I ask You for beneficial knowledge, good provision and accepted deeds.",
        source: "Sunan Ibn Majah"
      }
    ],
    Dhuhr: [
      {
        id: "pd1", title: "After Dhuhr — help to worship well",
        arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
        translit: "Allahumma a'inni 'ala dhikrika wa shukrika wa husni 'ibadatik.",
        meaning: "O Allah, help me to remember You, to thank You, and to worship You in the best manner.",
        source: "Abu Dawud, An-Nasa'i"
      }
    ],
    Asr: [
      {
        id: "pa1", title: "After Asr — seeking forgiveness (3 times)",
        arabic: "أَسْتَغْفِرُ اللَّهَ",
        translit: "Astaghfirullah.",
        meaning: "I seek forgiveness from Allah.",
        source: "Sahih Muslim", count: 3
      }
    ],
    Maghrib: [
      {
        id: "pm1", title: "After Maghrib — evening protection (7 times, tradition)",
        arabic: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ",
        translit: "Allahumma ajirni minan-nar.",
        meaning: "O Allah, protect me from the Fire.",
        source: "Abu Dawud (reported chain is discussed by scholars)", count: 7
      }
    ],
    Isha: [
      {
        id: "pi1", title: "After Isha — peace and blessing",
        arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
        translit: "Allahumma antas-Salam wa minkas-salam, tabarakta ya dhal-jalali wal-ikram.",
        meaning: "O Allah, You are Peace and from You comes peace. Blessed are You, O Possessor of majesty and honour.",
        source: "Sahih Muslim"
      }
    ]
  },
  // Duas recited inside the prayer
  inPrayer: [
    {
      id: "ip0", title: "Before prayer — after wudu",
      arabic: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      translit: "Ash-hadu an la ilaha illallahu wahdahu la sharika lah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh.",
      meaning: "I bear witness that there is no god but Allah alone, with no partner, and I bear witness that Muhammad is His servant and messenger.",
      source: "Sahih Muslim"
    },
    {
      id: "ip1", title: "Opening supplication (Thana)",
      arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ",
      translit: "Subhanakal-lahumma wa bihamdika wa tabarakasmuka wa ta'ala jadduka wa la ilaha ghayruk.",
      meaning: "Glory and praise be to You, O Allah. Blessed is Your name, exalted is Your majesty, and there is no god but You.",
      source: "Abu Dawud, At-Tirmidhi"
    },
    {
      id: "ip2", title: "In ruku (bowing)",
      arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
      translit: "Subhana Rabbiyal-'Azim.",
      meaning: "Glory be to my Lord, the Most Great.",
      source: "Sahih Muslim; At-Tirmidhi", count: 3
    },
    {
      id: "ip3", title: "Rising from ruku",
      arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا وَلَكَ الْحَمْدُ",
      translit: "Sami'allahu liman hamidah. Rabbana wa lakal-hamd.",
      meaning: "Allah hears the one who praises Him. Our Lord, to You belongs all praise.",
      source: "Sahih al-Bukhari"
    },
    {
      id: "ip4", title: "In sujood (prostration)",
      arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
      translit: "Subhana Rabbiyal-A'la.",
      meaning: "Glory be to my Lord, the Most High.",
      source: "Sahih Muslim; At-Tirmidhi", count: 3
    },
    {
      id: "ip5", title: "Between the two sujood",
      arabic: "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي",
      translit: "Rabbighfir li, Rabbighfir li.",
      meaning: "My Lord, forgive me. My Lord, forgive me.",
      source: "Abu Dawud, Ibn Majah"
    },
    {
      id: "ip6", title: "Tashahhud (sitting)",
      arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      translit: "At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh. As-salamu 'alayna wa 'ala 'ibadillahis-salihin. Ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh.",
      meaning: "All greetings, prayers and good words are for Allah. Peace be upon you, O Prophet, and the mercy and blessings of Allah. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and that Muhammad is His servant and messenger.",
      source: "Sahih al-Bukhari & Muslim"
    },
    {
      id: "ip7", title: "Durood Ibrahim (last sitting)",
      arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
      translit: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad, kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidum Majid. Allahumma barik 'ala Muhammadin wa 'ala ali Muhammad, kama barakta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidum Majid.",
      meaning: "O Allah, send prayers upon Muhammad and the family of Muhammad as You sent prayers upon Ibrahim and his family; You are Praiseworthy and Glorious. O Allah, bless Muhammad and the family of Muhammad as You blessed Ibrahim and his family; You are Praiseworthy and Glorious.",
      source: "Sahih al-Bukhari"
    },
    {
      id: "ip8", title: "Before salam",
      arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
      translit: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar.",
      meaning: "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
      source: "Quran 2:201"
    }
  ]
};
