// Scenariusze i wydarzenia w grze Symulator Dyrektora Instytucji Kultury
export const legalScenarios = [
    {
        id: "political_hire",
        text: "Minister kultury sugeruje zatrudnienie \'odpowiedniej\' osoby na stanowisku zastępcy. Co robisz?",
        choices: [
            {
                text: "Zatrudniasz wskazaną osobę",
                consequences: {
                    political: +30,
                    morale: -20,
                    reputation: -15,
                    connections: +2
                }
            },
            {
                text: "Organizujesz prawdziwy konkurs",
                consequences: {
                    political: -25,
                    reputation: +20,
                    morale: +10,
                    innovation: +1
                }
            },
            {
                text: "Odkładasz decyzję w czasie",
                consequences: {
                    political: -10,
                    budget: -5
                }
            }
        ]
    },
    {
        id: "mobbing_case",
        text: "Pracownicy skarżą się na mobbing ze strony kierownika działu. Co robisz?",
        choices: [
            {
                text: "Zwalniasz kierownika",
                consequences: {
                    morale: +20,
                    political: -10,
                    reputation: +15
                }
            },
            {
                text: "Ignorujesz problem",
                consequences: {
                    morale: -30,
                    reputation: -20,
                    publicSatisfaction: -5
                }
            },
            {
                text: "Organizujesz mediacje",
                consequences: {
                    morale: +5,
                    budget: -5,
                    innovation: +1
                }
            }
        ]
    },
    {
        id: "budget_fraud",
        text: "Odkryto nieprawidłowości w rozliczeniu dużego projektu. Co robisz?",
        choices: [
            {
                text: "Przeprowadzasz wewnętrzny audyt",
                consequences: {
                    budget: -15,
                    morale: -5,
                    reputation: +10,
                    innovation: +2
                }
            },
            {
                text: "Tuszujesz sprawę",
                consequences: {
                    political: -5,
                    reputation: -25,
                    connections: -1
                }
            },
            {
                text: "Zgłaszasz sprawę do prokuratury",
                consequences: {
                    political: -30,
                    reputation: +25,
                    budget: -20
                }
            }
        ]
    },
    {
        id: "fake_receipts",
        text: "Twój zastępca proponuje rozliczenie prywatnego remontu mieszkania jako scenografii do spektaklu. Co robisz?",
        choices: [
            {
                text: "Zgadzasz się, w końcu wszyscy tak robią",
                consequences: {
                    budget: +10,
                    morale: -10,
                    reputation: -15,
                    political: +5
                }
            },
            {
                text: "Kategorycznie odmawiasz",
                consequences: {
                    reputation: +15,
                    political: -10,
                    connections: -2
                }
            },
            {
                text: "Proponujesz znalezienie legalnego rozwiązania",
                consequences: {
                    budget: -5,
                    morale: +5,
                    innovation: +1
                }
            }
        ]
    },
    {
        id: "artist_exploitation",
        text: "Możesz zaoszczędzić sporo pieniędzy, nie płacąc młodym artystom za udział w wystawie, argumentując że \'to świetna okazja do pokazania ich portfolio\'. Co robisz?",
        choices: [
            {
                text: "Nie płacisz - niech się cieszą z możliwości pokazania prac",
                consequences: {
                    budget: +20,
                    reputation: -20,
                    publicSatisfaction: -10
                }
            },
            {
                text: "Płacisz uczciwe stawki",
                consequences: {
                    budget: -20,
                    reputation: +15,
                    morale: +10,
                    publicSatisfaction: +5
                }
            },
            {
                text: "Proponujesz niższe stawki ale z obietnicą przyszłej współpracy",
                consequences: {
                    budget: -10,
                    reputation: -5,
                    connections: +1
                }
            }
        ]
    },
    {
        id: "alcohol_issue",
        text: "Podczas oficjalnego wydarzenia kilku pracowników przesadziło z alkoholem. Co robisz?",
        choices: [
            {
                text: "Ignorujesz sprawę - w końcu to branża artystyczna",
                consequences: {
                    morale: +5,
                    reputation: -15,
                    publicSatisfaction: -10
                }
            },
            {
                text: "Wprowadzasz surowy zakaz alkoholu",
                consequences: {
                    morale: -20,
                    reputation: +10,
                    political: +5
                }
            },
            {
                text: "Organizujesz szkolenie o odpowiedzialnym zachowaniu",
                consequences: {
                    budget: -5,
                    morale: -5,
                    innovation: +2,
                    reputation: +5
                }
            }
        ]
    },
    {
        id: "press_bribe",
        text: "Lokalny dziennikarz sugeruje, że pozytywna recenzja wydarzenia zależy od \'współpracy finansowej\'. Co robisz?",
        choices: [
            {
                text: "Oferujesz mu umowę na \'konsultacje\'",
                consequences: {
                    budget: -10,
                    reputation: -15,
                    political: +5,
                    publicSatisfaction: +10
                }
            },
            {
                text: "Odmawiasz jakiejkolwiek współpracy",
                consequences: {
                    reputation: +10,
                    publicSatisfaction: -15,
                    political: -5
                }
            },
            {
                text: "Proponujesz legalną współpracę promocyjną",
                consequences: {
                    budget: -15,
                    reputation: +5,
                    connections: +2
                }
            }
        ]
    },
    {
        id: "union_formation",
        text: "Pracownicy chcą założyć związek zawodowy. Jak reagujesz?",
        choices: [
            {
                text: "Aktywnie zniechęcasz pracowników",
                consequences: {
                    morale: -25,
                    reputation: -15,
                    political: +10
                }
            },
            {
                text: "Wspierasz inicjatywę",
                consequences: {
                    morale: +20,
                    budget: -10,
                    political: -15,
                    reputation: +15
                }
            },
            {
                text: "Zakładasz \'przyjazny zarządowi\' związek",
                consequences: {
                    morale: -10,
                    political: +15,
                    reputation: -10
                }
            }
        ]
    },
    {
        id: "ngo_funds",
        text: "Znajoma prowadzi NGO i prosi o \'kreatywne\' przelanie środków przez twoją instytucję. W zamian obiecuje pomóc przy następnym konkursie. Co robisz?",
        choices: [
            {
                text: "Pomagasz, tworząc fikcyjne faktury",
                consequences: {
                    budget: -10,
                    reputation: -20,
                    connections: +15,
                    political: +10
                }
            },
            {
                text: "Odmawiasz stanowczo",
                consequences: {
                    political: -15,
                    reputation: +10,
                    connections: -10
                }
            },
            {
                text: "Proponujesz legalną współpracę",
                consequences: {
                    budget: -5,
                    reputation: +5,
                    innovation: +5
                }
            }
        ]
    },
    {
        id: "fake_competition",
        text: "Trzeba zorganizować konkurs na stanowisko kierownicze, ale wiadomo już kto ma je objąć. Jak przeprowadzisz rekrutację?",
        choices: [
            {
                text: "Układasz wymagania pod konkretną osobę",
                consequences: {
                    morale: -20,
                    political: +15,
                    reputation: -15
                }
            },
            {
                text: "Przeprowadzasz uczciwy konkurs",
                consequences: {
                    political: -20,
                    reputation: +20,
                    morale: +15,
                    innovation: +5
                }
            },
            {
                text: "Wprowadzasz wymóg doświadczenia w instytucji",
                consequences: {
                    morale: -10,
                    political: +5,
                    reputation: -5
                }
            }
        ]
    },
    {
        id: "maternity_return",
        text: "Pracownica wraca z urlopu macierzyńskiego. Jej poprzednie stanowisko zostało zlikwidowane. Co robisz?",
        choices: [
            {
                text: "Przesuwasz ją na gorsze stanowisko",
                consequences: {
                    morale: -25,
                    budget: +5,
                    reputation: -15
                }
            },
            {
                text: "Tworzysz nowe stanowisko z podobnymi warunkami",
                consequences: {
                    budget: -15,
                    morale: +10,
                    reputation: +10
                }
            },
            {
                text: "Proponujesz \'dobrowolne\' odejście",
                consequences: {
                    budget: +10,
                    morale: -20,
                    reputation: -20
                }
            }
        ]
    },
    {
        id: "volunteer_exploitation",
        text: "Możesz zaoszczędzić sporo pieniędzy wykorzystując wolontariuszy do pracy, która powinna być płatna. Co robisz?",
        choices: [
            {
                text: "\'To świetna okazja do zdobycia doświadczenia\'",
                consequences: {
                    budget: +20,
                    morale: -15,
                    reputation: -20,
                    publicSatisfaction: -10
                }
            },
            {
                text: "Zatrudniasz płatny personel",
                consequences: {
                    budget: -20,
                    morale: +15,
                    reputation: +10
                }
            },
            {
                text: "Mieszany model - część płatna, część wolontariat",
                consequences: {
                    budget: -10,
                    morale: +5,
                    innovation: +5
                }
            }
        ]
    },
    {
        id: "political_event",
        text: "Zbliżają się wybory, a władze miasta chcą zorganizować w twojej instytucji \'kulturalne\' wydarzenie o wyraźnym wydźwięku politycznym.",
        choices: [
            {
                text: "Zgadzasz się i angażujesz instytucję",
                consequences: {
                    political: +30,
                    reputation: -25,
                    morale: -15,
                    publicSatisfaction: -20
                }
            },
            {
                text: "Odmawiasz, powołując się na apolityczność",
                consequences: {
                    political: -30,
                    reputation: +20,
                    morale: +10
                }
            },
            {
                text: "Wynajmujesz tylko przestrzeń, bez angażowania instytucji",
                consequences: {
                    political: -10,
                    budget: +10,
                    reputation: -5
                }
            }
        ]
    },
    {
        id: "foreign_artist",
        text: "Zaproszony artysta z zagranicy żąda 10 razy wyższej stawki niż lokalni twórcy. Organizator twierdzi, że \'tak trzeba w przypadku zachodnich artystów\'.",
        choices: [
            {
                text: "Płacisz żądaną kwotę",
                consequences: {
                    budget: -30,
                    political: +10,
                    publicSatisfaction: +15,
                    morale: -10
                }
            },
            {
                text: "Odmawiasz i stawiasz na lokalnych artystów",
                consequences: {
                    budget: +10,
                    political: -10,
                    morale: +15,
                    connections: -5
                }
            },
            {
                text: "Negocjujesz niższą stawkę",
                consequences: {
                    budget: -15,
                    connections: +5,
                    reputation: +5
                }
            }
        ]
    },
    {
        id: "eco_washing",
        text: "Możesz dostać spory grant na \'zieloną kulturę\', mimo że twoja instytucja generuje dużo odpadów i zużywa dużo energii. Co robisz?",
        choices: [
            {
                text: "Bierzesz grant i udajesz ekologiczność",
                consequences: {
                    budget: +25,
                    reputation: -20,
                    innovation: -5,
                    publicSatisfaction: -10
                }
            },
            {
                text: "Rezygnujesz z grantu",
                consequences: {
                    budget: -10,
                    reputation: +10,
                    morale: +5
                }
            },
            {
                text: "Bierzesz grant i faktycznie wprowadzasz zmiany",
                consequences: {
                    budget: -15,
                    reputation: +15,
                    innovation: +10,
                    publicSatisfaction: +5
                }
            }
        ]
    },
    // Nepotyzm i kumoterstwo
    {
        id: "family_hire",
        text: "Żona wpływowego polityka, bez doświadczenia w kulturze, aplikuje na stanowisko kuratora. Ma \'świetne pomysły na zmiany\'.",
        choices: [
            {
                text: "Zatrudniasz ją i dajesz wolną rękę",
                consequences: {
                    political: +25,
                    morale: -30,
                    reputation: -25,
                    innovation: -10
                }
            },
            {
                text: "Grzecznie odmawiasz",
                consequences: {
                    political: -30,
                    budget: -15,
                    connections: -10
                }
            },
            {
                text: "Proponujesz stanowisko doradcze bez realnej władzy",
                consequences: {
                    political: +10,
                    morale: -10,
                    budget: -5
                }
            }
        ]
    },
    {
        id: "relative_contractor",
        text: "Okazuje się, że firma remontowa twojego brata złożyła najlepszą ofertę w przetargu. Co robisz?",
        choices: [
            {
                text: "Akceptujesz ofertę, nie informując o pokrewieństwie",
                consequences: {
                    budget: +10,
                    reputation: -20,
                    political: -5,
                    connections: +5
                }
            },
            {
                text: "Unieważniasz przetarg",
                consequences: {
                    budget: -15,
                    reputation: +10,
                    morale: -5,
                    innovation: -5
                }
            },
            {
                text: "Zgłaszasz konflikt interesów i wyłączasz się z decyzji",
                consequences: {
                    reputation: +15,
                    political: -5,
                    connections: -5
                }
            }
        ]
    },

    // Manipulacje finansowe
    {
        id: "creative_accounting",
        text: "Kończy się rok budżetowy, a zostało sporo niewykorzystanych środków. Księgowa sugeruje \'kreatywne rozwiązania\'.",
        choices: [
            {
                text: "Tworzysz fikcyjne faktury na szkolenia",
                consequences: {
                    budget: +20,
                    reputation: -20,
                    morale: -10,
                    political: +5
                }
            },
            {
                text: "Zwracasz niewykorzystane środki",
                consequences: {
                    budget: -20,
                    reputation: +15,
                    political: -10,
                    connections: -5
                }
            },
            {
                text: "Organizujesz szybkie, ale realne wydarzenia",
                consequences: {
                    budget: -10,
                    morale: -5,
                    publicSatisfaction: +5,
                    innovation: +5
                }
            }
        ]
    },
    {
        id: "grant_manipulation",
        text: "Odkryłeś, że poprzednia dyrekcja fałszowała sprawozdania z realizacji grantów. Co robisz?",
        choices: [
            {
                text: "Ukrywasz sprawę dla dobra instytucji",
                consequences: {
                    political: +10,
                    reputation: -25,
                    morale: -15
                }
            },
            {
                text: "Zgłaszasz sprawę do organów ścigania",
                consequences: {
                    political: -20,
                    reputation: +20,
                    budget: -20,
                    morale: +10
                }
            },
            {
                text: "Cicho naprawiasz błędy i zmieniasz procedury",
                consequences: {
                    budget: -10,
                    innovation: +10,
                    morale: +5
                }
            }
        ]
    },

    // Relacje z mediami
    {
        id: "media_scandal",
        text: "Lokalna gazeta grozi publikacją kompromitujących (i prawdziwych) informacji o instytucji. Proponują \'współpracę reklamową\'.",
        choices: [
            {
                text: "Zgadzasz się na kosztowną umowę reklamową",
                consequences: {
                    budget: -20,
                    reputation: -5,
                    political: +5,
                    connections: +10
                }
            },
            {
                text: "Ignorujesz groźby i przygotowujesz się na kryzys",
                consequences: {
                    reputation: -20,
                    political: -15,
                    morale: +10
                }
            },
            {
                text: "Uprzedzasz publikację własnym oświadczeniem",
                consequences: {
                    reputation: -10,
                    political: -5,
                    innovation: +5,
                    morale: +5
                }
            }
        ]
    },

    // Konflikty pracownicze
    {
        id: "toxic_manager",
        text: "Ceniony kierownik artystyczny świetnie realizuje program, ale regularnie doprowadza pracowników do łez.",
        choices: [
            {
                text: "Ignorujesz skargi - liczy się efekt artystyczny",
                consequences: {
                    publicSatisfaction: +10,
                    morale: -30,
                    reputation: -15
                }
            },
            {
                text: "Zwalniasz go mimo świetnych wyników",
                consequences: {
                    publicSatisfaction: -20,
                    morale: +20,
                    budget: -10,
                    political: -5
                }
            },
            {
                text: "Kierujesz go na coaching i dajesz ultimatum",
                consequences: {
                    budget: -10,
                    morale: +5,
                    innovation: +5
                }
            }
        ]
    },

    // Problemy z infrastrukturą
    {
        id: "building_safety",
        text: "Inspekcja budowlana wykryła poważne naruszenia bezpieczeństwa. Naprawa pochłonie cały budżet remontowy na 2 lata.",
        choices: [
            {
                text: "Ignorujesz zalecenia i działasz dalej",
                consequences: {
                    budget: +20,
                    reputation: -20,
                    political: -10,
                    morale: -15
                }
            },
            {
                text: "Zamykasz instytucję do czasu remontu",
                consequences: {
                    budget: -30,
                    publicSatisfaction: -20,
                    political: -10,
                    infrastructure: +20
                }
            },
            {
                text: "Przeprowadzasz tylko najpilniejsze naprawy",
                consequences: {
                    budget: -15,
                    reputation: -5,
                    infrastructure: +10
                }
            }
        ]
    },
    {
        id: "accessibility_issues",
        text: "Aktywiści zwracają uwagę na brak dostępności dla osób z niepełnosprawnościami. Dostosowanie budynku to ogromny koszt.",
        choices: [
            {
                text: "Ignorujesz problem tłumacząc się brakiem środków",
                consequences: {
                    budget: +10,
                    reputation: -25,
                    publicSatisfaction: -15,
                    political: -10
                }
            },
            {
                text: "Przeprowadzasz pełną modernizację",
                consequences: {
                    budget: -30,
                    reputation: +20,
                    publicSatisfaction: +15,
                    infrastructure: +20
                }
            },
            {
                text: "Wprowadzasz tymczasowe rozwiązania i szukasz finansowania",
                consequences: {
                    budget: -10,
                    reputation: +5,
                    innovation: +5,
                    infrastructure: +5
                }
            }
        ]
    },
    // Współpraca z artystami
    {
        id: "artist_payment",
        text: "Znany artysta żąda podwyższenia honorarium już po podpisaniu umowy, grożąc odwołaniem występu na ostatnią chwilę.",
        choices: [
            {
                text: "Ulegasz szantażowi i płacisz więcej",
                consequences: {
                    budget: -20,
                    morale: -10,
                    reputation: -5,
                    connections: -5
                }
            },
            {
                text: "Odmawiasz i szukasz zastępstwa",
                consequences: {
                    publicSatisfaction: -15,
                    reputation: +5,
                    political: -5,
                    budget: -10
                }
            },
            {
                text: "Proponujesz kompromis z dodatkowymi występami",
                consequences: {
                    budget: -10,
                    publicSatisfaction: +10,
                    connections: +5
                }
            }
        ]
    },
    {
        id: "controversial_art",
        text: "Wystawa współczesnego artysty zawiera treści, które mogą obrazić uczucia religijne. Media już się zainteresowały.",
        choices: [
            {
                text: "Cenzurujesz najbardziej kontrowersyjne elementy",
                consequences: {
                    political: +10,
                    reputation: -20,
                    publicSatisfaction: -15,
                    morale: -10
                }
            },
            {
                text: "Bronisz wolności artystycznej za wszelką cenę",
                consequences: {
                    political: -25,
                    reputation: +15,
                    publicSatisfaction: +10,
                    connections: -10
                }
            },
            {
                text: "Dodajesz tabliczki z ostrzeżeniem i kontekstem",
                consequences: {
                    political: -5,
                    reputation: +5,
                    innovation: +5,
                    publicSatisfaction: +5
                }
            }
        ]
    },

    // Zarządzanie zespołem
    {
        id: "team_conflict",
        text: "Dwa kluczowe działy są w otwartym konflikcie, paraliżując pracę instytucji.",
        choices: [
            {
                text: "Zwalniasz szefów obu działów",
                consequences: {
                    morale: -20,
                    efficiency: -15,
                    budget: -10,
                    innovation: +5
                }
            },
            {
                text: "Ignorujesz konflikt licząc, że sam się rozwiąże",
                consequences: {
                    morale: -25,
                    efficiency: -20,
                    publicSatisfaction: -10
                }
            },
            {
                text: "Organizujesz warsztaty integracyjne i mediacje",
                consequences: {
                    budget: -10,
                    morale: +15,
                    innovation: +10,
                    efficiency: +5
                }
            }
        ]
    },
    {
        id: "burnout_crisis",
        text: "Połowa zespołu zgłasza objawy wypalenia zawodowego po intensywnym sezonie.",
        choices: [
            {
                text: "Ignorujesz problem - \'taka praca\'",
                consequences: {
                    morale: -30,
                    efficiency: -20,
                    reputation: -10
                }
            },
            {
                text: "Wprowadzasz program wsparcia i dodatkowe urlopy",
                consequences: {
                    budget: -15,
                    morale: +20,
                    efficiency: +10,
                    innovation: +5
                }
            },
            {
                text: "Zatrudniasz dodatkowych pracowników",
                consequences: {
                    budget: -25,
                    morale: +15,
                    efficiency: +15
                }
            }
        ]
    },

    // Relacje z politykami
    {
        id: "mayor_request",
        text: "Prezydent miasta chce organizować w twojej instytucji cotygodniowe spotkania z wyborcami. Za darmo.",
        choices: [
            {
                text: "Zgadzasz się bez warunków",
                consequences: {
                    political: +20,
                    reputation: -15,
                    morale: -10,
                    budget: -10
                }
            },
            {
                text: "Odmawiasz powołując się na regulamin",
                consequences: {
                    political: -25,
                    reputation: +10,
                    morale: +5,
                    budget: +5
                }
            },
            {
                text: "Proponujesz standardową odpłatność za wynajem",
                consequences: {
                    political: -10,
                    budget: +10,
                    reputation: +5
                }
            }
        ]
    },
    {
        id: "political_pressure",
        text: "Radni miejscy grożą cięciem budżetu, jeśli nie zmienisz \'kontrowersyjnego\' programu instytucji.",
        choices: [
            {
                text: "Uginasz się i cenzurujesz program",
                consequences: {
                    political: +20,
                    reputation: -25,
                    morale: -20,
                    publicSatisfaction: -15
                }
            },
            {
                text: "Bronisz autonomii instytucji",
                consequences: {
                    political: -30,
                    budget: -20,
                    reputation: +20,
                    morale: +15
                }
            },
            {
                text: "Szukasz kompromisu w programie",
                consequences: {
                    political: -5,
                    reputation: -10,
                    morale: -5,
                    innovation: +5
                }
            }
        ]
    },

    // Zarządzanie budżetem
    {
        id: "budget_cuts",
        text: "W połowie roku przychodzi informacja o 30% cięciu budżetu. Co robisz?",
        choices: [
            {
                text: "Zwalniasz część pracowników",
                consequences: {
                    budget: +20,
                    morale: -30,
                    efficiency: -20,
                    reputation: -10
                }
            },
            {
                text: "Redukujesz program artystyczny",
                consequences: {
                    budget: +15,
                    publicSatisfaction: -25,
                    reputation: -15,
                    morale: -10
                }
            },
            {
                text: "Szukasz dodatkowych źródeł finansowania",
                consequences: {
                    budget: +10,
                    innovation: +10,
                    morale: +5,
                    connections: +5
                }
            }
        ]
    },

    // Kryzysy wizerunkowe
    {
        id: "social_media_crisis",
        text: "Pracownik przypadkowo opublikował kontrowersyjny post z oficjalnego konta instytucji. Post już się szeroko rozszedł.",
        choices: [
            {
                text: "Zwalniasz pracownika i przepraszasz",
                consequences: {
                    reputation: +5,
                    morale: -20,
                    political: +10,
                    connections: -5
                }
            },
            {
                text: "Ignorujesz sprawę licząc, że przycichnie",
                consequences: {
                    reputation: -20,
                    political: -10,
                    publicSatisfaction: -15
                }
            },
            {
                text: "Przekuwasz wpadkę w dyskusję o ważnym temacie",
                consequences: {
                    reputation: +10,
                    innovation: +10,
                    publicSatisfaction: +5,
                    connections: +5
                }
            }
        ]
    },
    {
        id: "metoo_accusation",
        text: "Popularny pracownik twojej instytucji został publicznie oskarżony o molestowanie. Sprawa trafiła do mediów.",
        choices: [
            {
                text: "Stajesz murem za pracownikiem",
                consequences: {
                    morale: -10,
                    reputation: -25,
                    political: -15,
                    publicSatisfaction: -20
                }
            },
            {
                text: "Natychmiast go zwalniasz",
                consequences: {
                    morale: -15,
                    reputation: +10,
                    political: +5,
                    connections: -10
                }
            },
            {
                text: "Zawieszasz go do czasu wyjaśnienia sprawy",
                consequences: {
                    morale: -5,
                    reputation: +5,
                    political: -5,
                    efficiency: -10
                }
            }
        ]
    },
    // Organizacja dużych wydarzeń
    {
        id: "festival_crisis",
        text: "Na tydzień przed dużym festiwalem okazuje się, że główny sponsor się wycofał. Wydarzenie jest już szeroko rozreklamowane.",
        choices: [
            {
                text: "Odwołujesz festiwal",
                consequences: {
                    budget: -15,
                    reputation: -25,
                    publicSatisfaction: -30,
                    political: -10
                }
            },
            {
                text: "Organizujesz okrojoną wersję z własnych środków",
                consequences: {
                    budget: -40,
                    reputation: -5,
                    publicSatisfaction: -15,
                    innovation: +5
                }
            },
            {
                text: "Ogłaszasz zbiórkę społecznościową",
                consequences: {
                    budget: -20,
                    reputation: +10,
                    connections: +15,
                    publicSatisfaction: +5
                }
            }
        ]
    },
    {
        id: "vip_demands",
        text: "Gwiazda międzynarodowego festiwalu ma absurdalne wymagania w riderze, których spełnienie podwoi koszty.",
        choices: [
            {
                text: "Spełniasz wszystkie zachcianki",
                consequences: {
                    budget: -30,
                    reputation: +5,
                    publicSatisfaction: +15,
                    political: +5
                }
            },
            {
                text: "Odmawiasz i ryzykujesz odwołanie występu",
                consequences: {
                    reputation: -20,
                    publicSatisfaction: -25,
                    connections: -15
                }
            },
            {
                text: "Negocjujesz rozsądny kompromis",
                consequences: {
                    budget: -15,
                    connections: +5,
                    innovation: +5
                }
            }
        ]
    },

    // Współpraca międzynarodowa
    {
        id: "international_scandal",
        text: "Podczas wymiany kulturalnej zagraniczni artyści oskarżają twoją instytucję o ksenofobię i dyskryminację.",
        choices: [
            {
                text: "Zaprzeczasz wszystkiemu",
                consequences: {
                    reputation: -20,
                    connections: -25,
                    political: -10,
                    publicSatisfaction: -15
                }
            },
            {
                text: "Przeprowadzasz audyt i wprowadzasz zmiany",
                consequences: {
                    budget: -15,
                    reputation: +10,
                    innovation: +15,
                    morale: -5
                }
            },
            {
                text: "Organizujesz mediację i dialog",
                consequences: {
                    budget: -10,
                    connections: +5,
                    innovation: +10,
                    reputation: +5
                }
            }
        ]
    },
    {
        id: "cultural_appropriation",
        text: "Wystawa o kulturach świata jest krytykowana za kolonialną perspektywę i zawłaszczenie kulturowe.",
        choices: [
            {
                text: "Ignorujesz krytykę jako \'polityczną poprawność\'",
                consequences: {
                    political: +5,
                    reputation: -20,
                    connections: -15,
                    publicSatisfaction: -10
                }
            },
            {
                text: "Zamykasz wystawę",
                consequences: {
                    budget: -20,
                    reputation: -10,
                    morale: -15,
                    publicSatisfaction: -5
                }
            },
            {
                text: "Zapraszasz krytyków do współkuratorowania",
                consequences: {
                    budget: -10,
                    reputation: +15,
                    innovation: +10,
                    connections: +10
                }
            }
        ]
    },

    // Digitalizacja i nowe technologie
    {
        id: "ai_controversy",
        text: "Możesz znacząco obniżyć koszty, zastępując część pracy kuratorskiej przez AI. Co robisz?",
        choices: [
            {
                text: "Wprowadzasz AI bez konsultacji",
                consequences: {
                    budget: +20,
                    morale: -30,
                    reputation: -15,
                    innovation: +10
                }
            },
            {
                text: "Odrzucasz pomysł w całości",
                consequences: {
                    budget: -15,
                    morale: +10,
                    innovation: -10,
                    efficiency: -5
                }
            },
            {
                text: "Testujesz AI jako narzędzie wspierające",
                consequences: {
                    budget: +5,
                    innovation: +15,
                    efficiency: +10,
                    morale: -5
                }
            }
        ]
    },
    {
        id: "digital_archive",
        text: "System archiwizacji cyfrowej uległ awarii. Backup nie działał od miesięcy. Co robisz?",
        choices: [
            {
                text: "Ukrywasz problem",
                consequences: {
                    reputation: -20,
                    morale: -15,
                    innovation: -10,
                    efficiency: -20
                }
            },
            {
                text: "Inwestujesz w nowy, drogi system",
                consequences: {
                    budget: -35,
                    innovation: +20,
                    efficiency: +15,
                    morale: +5
                }
            },
            {
                text: "Próbujesz odzyskać dane własnymi siłami",
                consequences: {
                    efficiency: -10,
                    morale: -10,
                    innovation: +5
                }
            }
        ]
    },

    // Problemy kadrowe
    {
        id: "competence_gap",
        text: "Wieloletni pracownicy nie radzą sobie z nowymi technologiami, młodzi nie znają historii instytucji.",
        choices: [
            {
                text: "Zwalniasz starszych pracowników",
                consequences: {
                    efficiency: +10,
                    morale: -30,
                    reputation: -20,
                    connections: -15
                }
            },
            {
                text: "Organizujesz program mentoringu",
                consequences: {
                    budget: -10,
                    morale: +15,
                    innovation: +10,
                    efficiency: +5
                }
            },
            {
                text: "Ignorujesz problem",
                consequences: {
                    efficiency: -20,
                    morale: -15,
                    innovation: -10
                }
            }
        ]
    },
    {
        id: "mental_health",
        text: "Coraz więcej pracowników skarży się na problemy ze zdrowiem psychicznym związane z pracą.",
        choices: [
            {
                text: "\'To nie problem instytucji\'",
                consequences: {
                    morale: -30,
                    efficiency: -20,
                    reputation: -15,
                    publicSatisfaction: -5
                }
            },
            {
                text: "Wprowadzasz program wsparcia psychologicznego",
                consequences: {
                    budget: -20,
                    morale: +25,
                    efficiency: +15,
                    innovation: +10
                }
            },
            {
                text: "Reorganizujesz pracę i zmniejszasz obciążenia",
                consequences: {
                    efficiency: -10,
                    morale: +15,
                    budget: -5
                }
            }
        ]
    },

    // Relacje z lokalnymi społecznościami
    {
        id: "gentrification",
        text: "Lokalni mieszkańcy protestują, że działalność instytucji przyczynia się do gentryfikacji dzielnicy.",
        choices: [
            {
                text: "Ignorujesz protesty",
                consequences: {
                    reputation: -20,
                    publicSatisfaction: -25,
                    political: -10,
                    connections: -15
                }
            },
            {
                text: "Tworzysz program współpracy z mieszkańcami",
                consequences: {
                    budget: -15,
                    reputation: +20,
                    publicSatisfaction: +15,
                    connections: +10
                }
            },
            {
                text: "Organizujesz konsultacje społeczne",
                consequences: {
                    budget: -5,
                    reputation: +10,
                    connections: +5,
                    innovation: +5
                }
            }
        ]
    },
    {
        id: "local_traditions",
        text: "Twoja nowoczesna wizja instytucji kłóci się z tradycyjnymi oczekiwaniami lokalnej społeczności.",
        choices: [
            {
                text: "Forsujesz własną wizję",
                consequences: {
                    innovation: +15,
                    publicSatisfaction: -20,
                    connections: -15,
                    political: -10
                }
            },
            {
                text: "Rezygnujesz z modernizacji",
                consequences: {
                    publicSatisfaction: +10,
                    innovation: -20,
                    reputation: -10,
                    morale: -15
                }
            },
            {
                text: "Szukasz balansu między tradycją a nowoczesnością",
                consequences: {
                    innovation: +5,
                    publicSatisfaction: +5,
                    connections: +10,
                    efficiency: -5
                }
            }
        ]
    }
];

export const randomEvents = [
    {
        id: "audit",
        title: "Kontrola z ministerstwa!",
        description: "Niespodziewana kontrola z ministerstwa. Trzeba szybko uporządkować dokumentację.",
        consequences: {
            morale: -10,
            political: -5
        },
        probability: 0.1
    },
    {
        id: "protest",
        title: "Protest artystów",
        description: "Grupa artystów protestuje przeciwko cięciom budżetowym na projekty artystyczne.",
        consequences: {
            reputation: -15,
            publicSatisfaction: -10
        },
        probability: 0.15
    },
    {
        id: "grant",
        title: "Nieoczekiwany grant!",
        description: "Otrzymałeś dodatkowy grant na rozwój instytucji.",
        consequences: {
            budget: +20,
            morale: +10
        },
        probability: 0.08
    },
    {
        id: "scandal",
        title: "Skandal w mediach",
        description: "Media odkryły kontrowersyjne wydatki w twojej instytucji.",
        consequences: {
            reputation: -20,
            political: -15,
            morale: -5
        },
        probability: 0.12
    },
    {
        id: "political_change",
        title: "Zmiana władzy!",
        description: "Zmiana na stanowisku ministra kultury wpływa na twoje polityczne poparcie.",
        consequences: {
            political: -25,
            connections: -2
        },
        probability: 0.05
    }
];

export const developmentOptions = [
    {
        id: "training",
        name: "Program szkoleń",
        cost: 2,
        effects: {
            morale: +10,
            innovation: +2
        }
    },
    {
        id: "renovation",
        name: "Remont budynku",
        cost: 3,
        effects: {
            infrastructure: +15,
            publicSatisfaction: +10
        }
    },
    {
        id: "digitalization",
        name: "Cyfryzacja instytucji",
        cost: 4,
        effects: {
            innovation: +20,
            efficiency: +15
        }
    },
    {
        id: "pr_campaign",
        name: "Kampania wizerunkowa",
        cost: 3,
        effects: {
            reputation: +15,
            publicSatisfaction: +10,
            political: +5
        }
    },
    {
        id: "welfare_program",
        name: "Program socjalny",
        cost: 4,
        effects: {
            morale: +25,
            budget: -10,
            reputation: +5
        }
    }
];