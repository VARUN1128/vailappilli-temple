import {
  TempleInfo,
  PoojaTiming,
  Festival,
  Vazhipadu,
  HistoricalEvent,
  GalleryImage,
  Announcement,
  ContactInfo,
} from "@/types/temple";

export const templeInfoData: TempleInfo = {
  nameMl: "വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം",
  nameEn: "Vailappilly Sree Krishna Swamy Kshethram",
  deityMl: "ശ്രീകൃഷ്ണസ്വാമി",
  deityEn: "Sree Krishna Swamy",
  locationMl: "പെരുമ്പിള്ളി · മുളന്തുരുത്തി · എറണാകുളം",
  locationEn: "Perumpilly, Mulanthuruthy, Ernakulam, Kerala",
  taglineMl: "ഭക്തിയുടെ പാരമ്പര്യം തലമുറകളിലൂടെ",
  devotionalMantra: "ഓം നമോ ഭഗവതേ വാസുദേവായ",
  introParagraphs: [
    "എറണാകുളം ജില്ലയിൽ മുളന്തുരുത്തിക്കടുത്ത് പെരുമ്പിള്ളി ഗ്രാമത്തിന്റെ ശാന്തസുന്ദരമായ അന്തരീക്ഷത്തിൽ സ്ഥിതിചെയ്യുന്ന പുരാതനമായ ഒരു പുണ്യസങ്കേതമാണ് വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം.",
    "നാടിന്റെ നന്മയ്ക്കും ഭക്തജനങ്ങളുടെ സമാധാനത്തിനും അനുഗ്രഹ വർഷം ചൊരിയുന്ന ഭഗവാൻ ശ്രീകൃഷ്ണന്റെ ദിവ്യസാന്നിധ്യം ഇവിടെ അനുഭവേദ്യമാകുന്നു. ഗ്രാമീണ സൗന്ദര്യവും വൈഷ്ണവ ഭക്തിയുടെ വിശുദ്ധിയും സമന്വയിക്കുന്ന അന്തരീക്ഷമാണ് ഈ ക്ഷേത്രത്തിന്റെ സവിശേഷത.",
    "പാരമ്പര്യ തനിമയും ആചാര മര്യാദകളും കാത്തുസൂക്ഷിച്ചുകൊണ്ട് ദിനംപ്രതി നിരവധിയായ ഭക്തജനങ്ങൾക്ക് കൃഷ്ണകൃപ പകർന്നുനൽകുന്ന ഈ പുണ്യതീർത്ഥത്തിലേക്ക് ഏവർക്കും ഹൃദ്യമായ സ്വാഗതം.",
  ],
  deityDescription: [
    "ചതുർബാഹു ധാരിയായ മുരളിധരന്റെ അനുഗ്രഹപൂർണ്ണമായ ഭാവത്തിലാണ് വൈലപ്പിള്ളിയിൽ ഭഗവാൻ ശ്രീകൃഷ്ണസ്വാമി കുടികൊള്ളുന്നത്.",
    "ഭക്തരുടെ മനോഭീഷ്ടങ്ങൾ സാധിച്ചുനൽകുന്ന കരുണാസാഗരനായ ഭഗവാന്റെ ദർശനം ഏവർക്കും ശാന്തിയും സംതൃപ്തിയും നൽകുന്നു.",
  ],
};

export const poojaTimingsData: PoojaTiming[] = [
  {
    id: "p1",
    time: "05:00 AM",
    nameMl: "നട തുറക്കൽ & പള്ളിഉണർത്തൽ",
    nameEn: "Nada Opening & Nirmalya Darshanam",
    descriptionMl: "നിർമ്മാല്യ ദർശനവും ഉഷഃപൂജയ്ക്കുള്ള ഒരുക്കങ്ങളും.",
    isMainPooja: true,
  },
  {
    id: "p2",
    time: "06:30 AM",
    nameMl: "ഉഷഃപൂജ",
    nameEn: "Usha Pooja",
    descriptionMl: "പ്രഭാതത്തിലെ മുഖ്യ വഴിപാടുകളും നിവേദ്യ സമർപ്പണവും.",
  },
  {
    id: "p3",
    time: "08:00 AM",
    nameMl: "എതിർത്തുപൂജ & ദീപാരാധന",
    nameEn: "Ethirthu Pooja",
    descriptionMl: "രാവിലത്തെ ദീപാരാധനയും ഭക്ത ജനങ്ങളുടെ ദർശന സമയവും.",
  },
  {
    id: "p4",
    time: "10:30 AM",
    nameMl: "ഉച്ചപ്പൂജ",
    nameEn: "Ucha Pooja",
    descriptionMl: "ഉച്ചയ്ക്കത്തെ പ്രധാന പൂജയും നട അടയ്ക്കലും (11:00 AM).",
    isMainPooja: true,
  },
  {
    id: "p5",
    time: "05:00 PM",
    nameMl: "വൈകുന്നേരം നട തുറക്കൽ",
    nameEn: "Evening Nada Opening",
    descriptionMl: "സന്ധ്യാ വന്ദനത്തിനും ദീപാരാധനയ്ക്കുമുള്ള ഒരുക്കങ്ങൾ.",
  },
  {
    id: "p6",
    time: "06:45 PM",
    nameMl: "ദീപാരാധന",
    nameEn: "Deeparadhana",
    descriptionMl: "സന്ധ്യാ ദീപാരാധനയും തായമ്പക / ചോറ്റാനിക്കര മേള ശബ്ദവീചികളും.",
    isMainPooja: true,
  },
  {
    id: "p7",
    time: "07:30 PM",
    nameMl: "അത്താഴപ്പൂജ & നട അടയ്ക്കൽ",
    nameEn: "Athazha Pooja & Nada Closure",
    descriptionMl: "രാത്രിയിലെ അവസാന പൂജയ്ക്ക് ശേഷം 08:00 മണിക്ക് നട അടയ്ക്കുന്നു.",
  },
];

export const festivalsData: Festival[] = [
  {
    id: "f1",
    titleMl: "പ്രതിഷ്ഠാദിന മഹോത്സവം",
    titleEn: "Prathishta Dina Mahotsavam",
    dateMl: "വാർഷിക തീയതികൾ ക്ഷേത്ര ബോർഡിൽ അറിയാം",
    malayalamMonth: "മീനം - മേടം",
    descriptionMl: "ക്ഷേത്രത്തിലെ ഏറ്റവും പ്രധാനപ്പെട്ട വാർഷിക ആഘോഷം. വിശേഷാൽ കൊടിയേറ്റ്, തന്ത്രിമുഖ്യന്മാരുടെ കാർമ്മികത്വത്തിൽ ശുദ്ധിക്രിയകൾ, കളഭാഭിഷേകം എന്നിവ നടക്കുന്നു.",
    rituals: [
      "വിശേഷാൽ തന്ത്രിപൂജകൾ & കൊടിയേറ്റ്",
      "മഹാ സുദർശന ഹോമം",
      "കളഭാഭിഷേകം & പുഷ്പാഞ്ജലി",
      "കാഴ്ചശീവേലി & പഞ്ചവാദ്യം",
    ],
    programmes: [
      "ഭക്തിഗാനസുധ & പ്രഭാഷണം",
      "പരമ്പരാഗത കഥകളി / തിരുവാതിരക്കളി",
      "അന്നദാനം (പ്രസാദമൂട്ട്)",
    ],
    imageUrl: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=1200&auto=format&fit=crop",
    isMainFestival: true,
  },
  {
    id: "f2",
    titleMl: "ശ്രീകൃഷ്ണ ജന്മാഷ്ടമി (അഷ്ടമിരോഹിണി)",
    titleEn: "Sree Krishna Janmashtami",
    dateMl: "ചിങ്ങമാസത്തിലെ രോഹിണി നക്ഷത്രം",
    malayalamMonth: "ചിങ്ങം",
    descriptionMl: "ഭഗവാൻ ശ്രീകൃഷ്ണന്റെ ജന്മദിനാഘോഷം. കുട്ടികളുടെ ശോഭയാത്രയും വിശേഷാൽ വെണ്ണ നിവേദ്യവും ഉറിയടിയും ഉടനീളം നടക്കുന്നു.",
    rituals: [
      "ശോഭയാത്ര സമർപ്പണം",
      "വിശേഷാൽ ഉണ്ണിക്കണ്ണൻ പൂജ",
      "വെണ്ണയും കൽക്കണ്ടവും നിവേദ്യം",
    ],
    programmes: ["ഉറിയടി മത്സരം", "ഉണ്ണിക്കണ്ണൻ വേഷമത്സരം"],
    imageUrl: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "f3",
    titleMl: "വിഷു മഹോത്സവം",
    titleEn: "Vishu Mahotsavam",
    dateMl: "മേടം 1",
    malayalamMonth: "മേടം",
    descriptionMl: "ഐശ്വര്യപൂർണ്ണമായ വിഷുകണി ദർശനവും വിഷുകൈനീട്ട വിതരണവും. പുലർച്ചെ മുതൽ തന്ത്രിയുടെയും മേൽശാന്തിയുടെയും സാന്നിധ്യത്തിൽ വിഷുകണി ഒരുക്കുന്നു.",
    rituals: ["വിഷുകണി ദർശനം", "വിഷുകൈനീട്ടം വിതരണം"],
    programmes: ["പ്രത്യേക ഭജന", "വിഷു സദ്യ"],
    imageUrl: "https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?q=80&w=1200&auto=format&fit=crop",
  },
];

export const vazhipaduData: Vazhipadu[] = [
  {
    id: "v1",
    nameMl: "അർച്ചന",
    categoryMl: "സാധാരണ വഴിപാടുകൾ",
    ratePlaceholder: "തുക ക്ഷേത്ര ഓഫീസിൽ ലഭ്യം",
    descriptionMl: "ഭഗവാന് പേരും നാളും ചൊല്ലി നടത്തുന്ന പ്രാർത്ഥനാ വഴിപാട്.",
  },
  {
    id: "v2",
    nameMl: "പുഷ്പാഞ്ജലി",
    categoryMl: "സാധാരണ വഴിപാടുകൾ",
    ratePlaceholder: "തുക ക്ഷേത്ര ഓഫീസിൽ ലഭ്യം",
    descriptionMl: "നാനാവിധ തൃപ്പൂക്കളാൽ ഭഗവത് പാദങ്ങളിൽ സമർപ്പിക്കുന്ന അർച്ചന.",
  },
  {
    id: "v3",
    nameMl: "ഭാഗ്യസൂക്ത പുഷ്പാഞ്ജലി",
    categoryMl: "വിശേഷാൽ വഴിപാടുകൾ",
    ratePlaceholder: "തുക ക്ഷേത്ര ഓഫീസിൽ ലഭ്യം",
    descriptionMl: "ഐശ്വര്യത്തിനും ധനസമൃദ്ധിക്കും വേണ്ടി വേദമന്ത്രങ്ങൾ ചൊല്ലിയുള്ള പ്രാർത്ഥന.",
  },
  {
    id: "v4",
    nameMl: "വിളക്ക് കൊളുത്തൽ / നെയ്‌വിളക്ക്",
    categoryMl: "ദീപ വഴിപാടുകൾ",
    ratePlaceholder: "തുക ക്ഷേത്ര ഓഫീസിൽ ലഭ്യം",
    descriptionMl: "അജ്ഞാന അന്ധകാരം നീക്കി മനോശാന്തി ലഭിക്കാൻ നെയ്‌വിളക്ക് സമർപ്പണം.",
  },
  {
    id: "v5",
    nameMl: "പാൽപ്പായസം നിവേദ്യം",
    categoryMl: "നിവേദ്യ വഴിപാടുകൾ",
    ratePlaceholder: "തുക ക്ഷേത്ര ഓഫീസിൽ ലഭ്യം",
    descriptionMl: "ശ്രീകൃഷ്ണസ്വാമിക്ക് അതീവ പ്രിയങ്കരമായ ശുദ്ധമായ പാൽപ്പായസ സമർപ്പണം.",
  },
  {
    id: "v6",
    nameMl: "തൃക്കൈവെണ്ണ നിവേദ്യം",
    categoryMl: "നിവേദ്യ വഴിപാടുകൾ",
    ratePlaceholder: "തുക ക്ഷേത്ര ഓഫീസിൽ ലഭ്യം",
    descriptionMl: "ഉണ്ണിക്കണ്ണന്റെ പ്രിയപ്പെട്ട വെണ്ണ നിവേദ്യം.",
  },
  {
    id: "v7",
    nameMl: "സുദർശന ഹോമം (മാസ വിശേഷാൽ)",
    categoryMl: "ഹോമങ്ങൾ",
    ratePlaceholder: "മുൻകൂട്ടി ബുക്ക് ചെയ്യുക",
    descriptionMl: "ശത്രുദോഷ പരിഹാരത്തിനും ആപത്ത് രക്ഷയ്ക്കും വിശേഷാൽ സുദർശന മന്ത്രത്തോടെ.",
  },
  {
    id: "v8",
    nameMl: "സഹസ്രനാമാർച്ചന",
    categoryMl: "വിശേഷാൽ വഴിപാടുകൾ",
    ratePlaceholder: "തുക ക്ഷേത്ര ഓഫീസിൽ ലഭ്യം",
    descriptionMl: "വിഷ്ണു സഹസ്രനാമജപത്തോടെയുള്ള സമർപ്പണം.",
  },
];

export const historyTimelineData: HistoricalEvent[] = [
  {
    id: "h1",
    eraMl: "പാരമ്പര്യം",
    titleMl: "ഗ്രാമീണ ക്ഷേത്ര സംസ്കൃതി",
    descriptionMl: "പെരുമ്പിള്ളി ഗ്രാമത്തിന്റെ സാംസ്കാരികവും ഭക്തിപരവുമായ കേന്ദ്രമായി വൈലപ്പിള്ളി ക്ഷേത്രം കാലങ്ങളായി നിലകൊള്ളുന്നു. പരമ്പരാഗത കേരളീയ വാസ്തുശില്പ ശൈലിയിലാണ് ശ്രീകോവിലും ചുറ്റമ്പലവും സംവിധാനം ചെയ്തിരിക്കുന്നത്.",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "h2",
    eraMl: "സേവനം",
    titleMl: "ഭക്തജന സമിതി & പുനരുദ്ധാരണം",
    descriptionMl: "നാട്ടുകാരുടെയും ഭക്തജനങ്ങളുടെയും സംയുക്ത സഹകരണത്തോടെ ക്ഷേത്രചടങ്ങുകളും ഉత్సവങ്ങളും ഭംഗിയായി നടന്നുപോരുന്നു. ക്ഷേത്ര സംരക്ഷണത്തിനും വികസന പ്രവർത്തനങ്ങൾക്കുമായി നാട്ടുകാർ ഒത്തൊരുമയോടെ പ്രവർത്തിക്കുന്നു.",
    imageUrl: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "h3",
    eraMl: "വർത്തമാനം",
    titleMl: "തുടരുന്ന ആത്മീയ യാത്ര",
    descriptionMl: "നിത്യപൂജകളും വിശേഷാൽ ആഘോഷങ്ങളും മുടക്കമില്ലാതെ നടന്നുപോരുന്നു. വരും തലമുറകളിലേക്ക് സനാതന ധർമ്മ സംസ്കാരം പകർന്നുനൽകാനുള്ള ധർമ്മകേന്ദ്രമായി ക്ഷേത്രം പ്രവർത്തിക്കുന്നു.",
  },
];

export const galleryImagesData: GalleryImage[] = [
  {
    id: "g1",
    titleMl: "ക്ഷേത്ര ദർശനം",
    captionMl: "പ്രഭാത വെളിച്ചത്തിൽ തിളങ്ങുന്ന ക്ഷേത്ര മുറ്റവും ദീപസ്തംഭവും.",
    url: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=1200&auto=format&fit=crop",
    category: "temple",
    aspectRatio: "landscape",
  },
  {
    id: "g2",
    titleMl: "ചുറ്റുവിളക്ക് ദീപാലങ്കാരം",
    captionMl: "സന്ധ്യാ ദീപാരാധന വേളയിൽ ക്ഷേത്രത്തിൽ തെളിയുന്ന മൺവിളക്കുകൾ.",
    url: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?q=80&w=1200&auto=format&fit=crop",
    category: "rituals",
    aspectRatio: "portrait",
  },
  {
    id: "g3",
    titleMl: "ശ്രീകൃഷ്ണാലങ്കാരം",
    captionMl: "വിശേഷാൽ പൂജാദിനത്തിൽ പുഷ്പങ്ങളാൽ അലങ്കരിച്ച ദേവസന്നിധി.",
    url: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop",
    category: "deity",
    aspectRatio: "square",
  },
  {
    id: "g4",
    titleMl: "ഉത്സവ ശോഭ",
    captionMl: "വാർഷിക ആഘോഷ വേളയിലെ വാദ്യമേളങ്ങളും ഭക്തജന തിരക്കും.",
    url: "https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?q=80&w=1200&auto=format&fit=crop",
    category: "festivals",
    aspectRatio: "landscape",
  },
  {
    id: "g5",
    titleMl: "നിർമ്മല ശാന്തത",
    captionMl: "പെരുമ്പിള്ളി ഗ്രാമാന്തരീക്ഷത്തിലെ ക്ഷേത്രവും പ്രകൃതിഭംഗിയും.",
    url: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
    category: "temple",
    aspectRatio: "portrait",
  },
  {
    id: "g6",
    titleMl: "മേളപ്പെരുക്കം",
    captionMl: "കേരളീയ പരമ്പരാഗത തായമ്പകയും വഞ്ചീപ്പാട്ടും.",
    url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    category: "festivals",
    aspectRatio: "square",
  },
];

export const announcementsData: Announcement[] = [
  {
    id: "a1",
    dateMl: "2026 ഒക്ടോബർ 05",
    titleMl: "പ്രതിഷ്ഠാദിന വാർഷിക ആഘോഷ തീയതി പ്രഖ്യാപനം",
    descriptionMl: "ഈ വർഷത്തെ വിശേഷാൽ പൂജകളുടെയും സാംസ്കാരിക പരിപാടികളുടെയും വിശദ വിവരങ്ങൾ ക്ഷേത്ര കാര്യാലയത്തിൽ പ്രസിദ്ധീകരിച്ചു.",
    isImportant: true,
  },
  {
    id: "a2",
    dateMl: "2026 സെപ്റ്റംബർ 28",
    titleMl: "മാസ വിശേഷാൽ സുദർശന ഹോമം",
    descriptionMl: "വരുന്ന ഞായറാഴ്ച രാവിലെ 06:30 ന് സുദർശന ഹോമം നടക്കും. വഴിപാടുകൾ മുൻകൂട്ടി ബുക്ക് ചെയ്യാവുന്നതാണ്.",
  },
  {
    id: "a3",
    dateMl: "2026 സെപ്റ്റംബർ 15",
    titleMl: "ക്ഷേത്ര പുനരുദ്ധാരണ ഫണ്ട് സമാഹരണം",
    descriptionMl: "ക്ഷേത്രത്തിന്റെ ചുറ്റുമതിൽ നവീകരണ പ്രവർത്തനങ്ങൾക്കായി ഭക്തജനങ്ങളിൽ നിന്നും സംഭാവനകൾ സ്വീകരിക്കുന്നു.",
  },
];

export const contactInfoData: ContactInfo = {
  addressMl: [
    "വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം",
    "പെരുമ്പിള്ളി പി.ഒ.",
    "മുളന്തുരുത്തി വഴികാട്ടി",
    "എറണാകുളം ജില്ല, കേരളം - 682314",
  ],
  addressEn: [
    "Vailappilly Sree Krishna Swamy Kshethram",
    "Perumpilly P.O., Mulanthuruthy",
    "Ernakulam District, Kerala - 682314",
  ],
  phonePlaceholders: ["+91 94000 00000 (ഓഫീസ്)", "+91 98470 00000 (സെക്രട്ടറി)"],
  emailPlaceholder: "info@vailappillykshethram.org (പ്രതീക്ഷിത ഇമെയിൽ)",
  googleMapsUrl: "https://maps.app.goo.gl/NKEDHiw7dnzqEWVSA",
  facebookUrl: "https://facebook.com",
  instagramUrl: "https://instagram.com",
};
