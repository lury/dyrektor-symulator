import { legalScenarios } from './scenarios.js';

export const illegalChoices = [
    // Nadużycia finansowe i fałszerstwa dokumentów

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
                },
                legalWarning: `Możliwe zarzuty:
- Art. 271 § 1 KK - Poświadczenie nieprawdy w dokumentach (do 5 lat)
- Art. 286 § 1 KK - Oszustwo (do 8 lat)
- Art. 231 § 2 KK - Przekroczenie uprawnień w celu osiągnięcia korzyści majątkowej (do 10 lat)
- Art. 18 pkt 1 Ustawy o finansach publicznych - Naruszenie dyscypliny finansów publicznych
- Art. 296 KK - Wyrządzenie szkody w obrocie gospodarczym (do 10 lat)

Dodatkowe konsekwencje:
- Obowiązek zwrotu środków publicznych
- Zakaz pełnienia funkcji w instytucjach publicznych
- Odpowiedzialność cywilna za szkodę`
            }
        ]
    },

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
                },
                legalWarning: `Możliwe zarzuty:
- Art. 271 § 1 KK - Poświadczenie nieprawdy w dokumentach (do 5 lat)
- Art. 297 § 1 KK - Oszustwo finansowe (do 5 lat)
- Art. 77 pkt 1 Ustawy o rachunkowości - Prowadzenie ksiąg rachunkowych niezgodnie z prawdą
- Art. 61 § 1 Ustawy o finansach publicznych - Naruszenie dyscypliny finansów publicznych

Dodatkowe konsekwencje:
- Odpowiedzialność solidarna z księgową
- Utrata uprawnień do zarządzania środkami publicznymi
- Obowiązek zwrotu nieprawidłowo wydatkowanych środków`
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
                },
                legalWarning: `Możliwe zarzuty:
- Art. 231 § 1 KK - Niedopełnienie obowiązków (do 3 lat)
- Art. 239 § 1 KK - Utrudnianie postępowania karnego (do 5 lat)
- Art. 18 § 3 KK - Pomocnictwo przez zaniechanie (wymiar kary jak za sprawstwo)

Dodatkowe konsekwencje:
- Współodpowiedzialność za wcześniejsze nadużycia
- Utrata wiarygodności przy przyszłych wnioskach grantowych
- Ryzyko kontroli wszystkich realizowanych projektów`
            }
        ]
    },

    {
        id: "budget_fraud_cover",
        text: "Kontrola wykryła poważne nieprawidłowości w wydatkowaniu środków. Wicedyrektor proponuje \'skorygowanie\' dokumentacji.",
        choices: [
            {
                text: "Zgadzasz się na zmiany w dokumentach",
                consequences: {
                    political: +5,
                    reputation: -20,
                    morale: -15
                },
                legalWarning: `Możliwe zarzuty:
- Art. 270 § 1 KK - Fałszerstwo dokumentów (do 5 lat)
- Art. 273 KK - Użycie poświadczenia nieprawdy (do 5 lat)
- Art. 276 KK - Niszczenie/ukrywanie dokumentów (do 2 lat)
- Art. 77 Ustawy o rachunkowości - Nieprawidłowości w księgach rachunkowych

Dodatkowe konsekwencje:
- Odpowiedzialność za wcześniejsze nieprawidłowości
- Zwrot środków z odsetkami
- Zakaz pełnienia funkcji w instytucjach publicznych`
            }
        ]
    },

    // Kontynuacja w kolejnych częściach...
    // Nepotyzm i nieuczciwa rekrutacja

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
                },
                legalWarning: `Możliwe zarzuty:
- Art. 231 § 1 KK - Przekroczenie uprawnień (do 3 lat)
- Art. 228 § 3 KK - Przyjęcie korzyści osobistej (do 8 lat)
- Art. 18 Ustawy o pracownikach samorządowych - Naruszenie zasad naboru
- Art. 183a § 1 Kodeksu pracy - Naruszenie zasady równego traktowania

Dodatkowe konsekwencje:
- Nieważność umowy o pracę
- Odpowiedzialność odszkodowawcza wobec innych kandydatów
- Ryzyko kontroli PIP i CBA`
            }
        ]
    },

    {
        id: "fake_competition",
        text: "Trzeba zorganizować konkurs na stanowisko kierownicze, ale wiadomo już kto ma je objąć.",
        choices: [
            {
                text: "Układasz wymagania pod konkretną osobę",
                consequences: {
                    morale: -20,
                    political: +15,
                    reputation: -15
                },
                legalWarning: `Możliwe zarzuty:
- Art. 231 § 1 KK - Przekroczenie uprawnień (do 3 lat)
- Art. 271 § 1 KK - Poświadczenie nieprawdy w dokumentacji konkursowej (do 5 lat)
- Art. 18 Ustawy o pracownikach samorządowych - Naruszenie procedur naboru
- Art. 183b Kodeksu pracy - Dyskryminacja w zatrudnieniu

Dodatkowe konsekwencje:
- Możliwość zaskarżenia wyników konkursu
- Roszczenia odszkodowawcze innych kandydatów
- Konieczność powtórzenia procedury konkursowej`
            }
        ]
    },

    // Mobbing i naruszenia praw pracowniczych

    {
        id: "mobbing_case",
        text: "Pracownicy skarżą się na mobbing ze strony kierownika działu. Co robisz?",
        choices: [
            {
                text: "Ignorujesz problem",
                consequences: {
                    morale: -30,
                    reputation: -20,
                    publicSatisfaction: -5
                },
                legalWarning: `Możliwe zarzuty:
- Art. 943 § 1 Kodeksu pracy - Odpowiedzialność za mobbing
- Art. 218 § 1a KK - Złośliwe naruszanie praw pracownika (do 2 lat)
- Art. 231 KK - Niedopełnienie obowiązków (do 3 lat)

Konsekwencje cywilne:
- Odszkodowanie za mobbing (min. wynagrodzenie minimalne)
- Zadośćuczynienie za rozstrój zdrowia
- Odpowiedzialność solidarna z mobberem

Dodatkowe skutki:
- Kontrola PIP
- Pozwy zbiorowe
- Koszty procesów sądowych`
            }
        ]
    },

    {
        id: "maternity_return",
        text: "Pracownica wraca z urlopu macierzyńskiego. Jej poprzednie stanowisko zostało zlikwidowane.",
        choices: [
            {
                text: "Przesuwasz ją na gorsze stanowisko",
                consequences: {
                    morale: -25,
                    budget: +5,
                    reputation: -15
                },
                legalWarning: `Możliwe zarzuty:
- Art. 183e § 1 Kodeksu pracy - Dyskryminacja ze względu na rodzicielstwo
- Art. 1864 Kodeksu pracy - Naruszenie ochrony pracownika po urlopie macierzyńskim
- Art. 218 § 1a KK - Złośliwe naruszanie praw pracownika

Konsekwencje:
- Przywrócenie do pracy na poprzednich warunkach
- Odszkodowanie za okres pozostawania bez pracy
- Zadośćuczynienie za naruszenie dóbr osobistych
- Grzywna od PIP`
            }
        ]
    },

    {
        id: "volunteer_exploitation",
        text: "Możesz zaoszczędzić sporo pieniędzy wykorzystując wolontariuszy do pracy, która powinna być płatna.",
        choices: [
            {
                text: "\'To świetna okazja do zdobycia doświadczenia\'",
                consequences: {
                    budget: +20,
                    morale: -15,
                    reputation: -20,
                    publicSatisfaction: -10
                },
                legalWarning: `Możliwe zarzuty:
- Art. 282 § 1 Kodeksu pracy - Niewypłacanie wynagrodzenia (grzywna)
- Art. 22 § 1 Kodeksu pracy - Zatrudnienie w warunkach charakterystycznych dla stosunku pracy
- Art. 219 KK - Naruszenie praw pracownika (do 2 lat)

Dodatkowe konsekwencje:
- Obowiązek zawarcia umów o pracę z wyrównaniem
- Zaległe składki ZUS z odsetkami
- Kary nakładane przez PIP
- Odpowiedzialność za wypadki przy pracy`
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
                },
                legalWarning: `Możliwe zarzuty:
- Art. 207 § 2 Kodeksu pracy - Naruszenie obowiązku zapewnienia bezpiecznych warunków pracy
- Art. 220 KK - Narażenie pracownika na niebezpieczeństwo (do 3 lat)
- Art. 221 KK - Niedopełnienie obowiązków BHP

Konsekwencje:
- Odpowiedzialność za wypadki przy pracy
- Zwiększone składki wypadkowe ZUS
- Kontrole PIP i sanepidu
- Roszczenia pracownicze z tytułu chorób zawodowych`
            }
        ]
    },
    // Korupcja i płatna protekcja

    {
        id: "press_bribe",
        text: "Lokalny dziennikarz sugeruje, że pozytywna recenzja wydarzenia zależy od \'współpracy finansowej\'.",
        choices: [
            {
                text: "Oferujesz mu umowę na \'konsultacje\'",
                consequences: {
                    budget: -10,
                    reputation: -15,
                    political: +5,
                    publicSatisfaction: +10
                },
                legalWarning: `Możliwe zarzuty:
- Art. 229 § 1 KK - Wręczenie korzyści majątkowej (do 8 lat)
- Art. 271 § 3 KK - Poświadczenie nieprawdy dla korzyści majątkowej (do 8 lat)
- Art. 44 Ustawy o finansach publicznych - Naruszenie dyscypliny finansowej

Dodatkowe konsekwencje:
- Obowiązek zwrotu nieprawidłowo wydatkowanych środków
- Odpowiedzialność za współudział w przestępstwie
- Ryzyko szantażu w przyszłości
- Utrata wiarygodności medialnej`
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
                },
                legalWarning: `Możliwe zarzuty:
- Art. 231 § 1 KK - Przekroczenie uprawnień (do 3 lat)
- Art. 228 § 4 KK - Uzależnienie wykonania czynności służbowej od korzyści
- Art. 51 Ustawy o organizowaniu działalności kulturalnej - Naruszenie autonomii instytucji

Konsekwencje:
- Naruszenie wolności twórczości artystycznej (Art. 73 Konstytucji)
- Możliwość zaskarżenia decyzji przez artystów
- Odpowiedzialność odszkodowawcza wobec twórców`
            }
        ]
    },

    // Nadużycia przy zamówieniach publicznych

    {
        id: "relative_contractor",
        text: "Okazuje się, że firma remontowa twojego brata złożyła najlepszą ofertę w przetargu.",
        choices: [
            {
                text: "Akceptujesz ofertę, nie informując o pokrewieństwie",
                consequences: {
                    budget: +10,
                    reputation: -20,
                    political: -5,
                    connections: +5
                },
                legalWarning: `Możliwe zarzuty:
- Art. 17 ust. 1 Prawo zamówień publicznych - Naruszenie zasady bezstronności
- Art. 305 KK - Udaremnienie przetargu publicznego (do 3 lat)
- Art. 230 KK - Płatna protekcja (do 8 lat)
- Art. 296a KK - Korupcja gospodarcza (do 8 lat)

Dodatkowe konsekwencje:
- Nieważność umowy z wykonawcą
- Kary finansowe od UZP
- Wykluczenie z przyszłych przetargów
- Odpowiedzialność odszkodowawcza wobec innych oferentów`
            }
        ]
    },

    {
        id: "building_safety",
        text: "Inspekcja budowlana wykryła poważne naruszenia bezpieczeństwa.",
        choices: [
            {
                text: "Ignorujesz zalecenia i działasz dalej",
                consequences: {
                    budget: +20,
                    reputation: -20,
                    political: -10,
                    morale: -15
                },
                legalWarning: `Możliwe zarzuty:
- Art. 91 Prawa budowlanego - Niezapewnienie bezpieczeństwa obiektu
- Art. 160 KK - Narażenie na niebezpieczeństwo (do 5 lat)
- Art. 220 KK - Narażenie pracowników (do 3 lat)

Dodatkowe konsekwencje:
- Pełna odpowiedzialność karna w przypadku wypadku
- Natychmiastowe zamknięcie obiektu przez nadzór budowlany
- Utrata ubezpieczenia
- Osobista odpowiedzialność cywilna za szkody`
            }
        ]
    },

    // Przestępstwa przeciwko dokumentom i mieniu

    {
        id: "digital_archive",
        text: "System archiwizacji cyfrowej uległ awarii. Backup nie działał od miesięcy.",
        choices: [
            {
                text: "Ukrywasz problem",
                consequences: {
                    reputation: -20,
                    morale: -15,
                    innovation: -10,
                    efficiency: -20
                },
                legalWarning: `Możliwe zarzuty:
- Art. 276 KK - Niszczenie/ukrywanie dokumentów (do 2 lat)
- Art. 231 KK - Niedopełnienie obowiązków (do 3 lat)
- Ustawa o narodowym zasobie archiwalnym - Naruszenie obowiązku ochrony

Dodatkowe konsekwencje:
- Odpowiedzialność za utratę dziedzictwa kulturowego
- Kary nakładane przez Naczelną Dyrekcję Archiwów Państwowych
- Osobista odpowiedzialność finansowa za odtworzenie zbiorów`
            }
        ]
    },

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
                },
                legalWarning: `Możliwe zarzuty:
- Art. 257 KK - Dyskryminacja ze względu na przynależność narodową (do 3 lat)
- Art. 119 KK - Dyskryminacja w życiu publicznym (do 5 lat)
- Art. 183a Kodeksu pracy - Naruszenie zasady równego traktowania

Dodatkowe konsekwencje:
- Wykluczenie z międzynarodowych programów wymiany
- Utrata grantów unijnych
- Postępowanie przed rzecznikiem praw człowieka
- Pozwy cywilne o naruszenie dóbr osobistych`
            }
        ]
    },
    // Naruszenia praw autorskich i własności intelektualnej

    {
        id: "ai_controversy",
        text: "Możesz znacząco obniżyć koszty, zastępując część pracy kuratorskiej przez AI.",
        choices: [
            {
                text: "Wprowadzasz AI bez konsultacji",
                consequences: {
                    budget: +20,
                    morale: -30,
                    reputation: -15,
                    innovation: +10
                },
                legalWarning: `Możliwe zarzuty:
- Art. 79 Ustawy o prawie autorskim - Naruszenie praw autorskich
- Art. 23 RODO - Nieprawidłowe przetwarzanie danych osobowych
- Art. 231 KK - Przekroczenie uprawnień (przy wykorzystaniu chronionych zbiorów)

Dodatkowe konsekwencje:
- Kary od UODO (do 20 mln euro lub 4% rocznego obrotu)
- Roszczenia twórców o naruszenie praw osobistych
- Odpowiedzialność za naruszenie praw do wizerunku
- Problemy z ubezpieczeniem zbiorów`
            }
        ]
    },

    {
        id: "artist_exploitation",
        text: "Możesz zaoszczędzić sporo pieniędzy, nie płacąc młodym artystom za udział w wystawie.",
        choices: [
            {
                text: "Nie płacisz - niech się cieszą z możliwości pokazania prac",
                consequences: {
                    budget: +20,
                    reputation: -20,
                    publicSatisfaction: -10
                },
                legalWarning: `Możliwe zarzuty:
- Art. 115 Ustawy o prawie autorskim - Naruszenie praw majątkowych
- Art. 43 Ustawy o działalności kulturalnej - Naruszenie zasad wynagradzania twórców
- Art. 282 Kodeksu pracy (przy ukrytym stosunku pracy)

Dodatkowe konsekwencje:
- Zakaz korzystania z utworów
- Obowiązek zapłaty trzykrotności wynagrodzenia
- Utrata reputacji w środowisku artystycznym
- Bojkot ze strony związków twórczych`
            }
        ]
    },

    // Naruszenia bezpieczeństwa danych osobowych

    {
        id: "data_breach",
        text: "Odkryto, że dane osobowe uczestników warsztatów są przechowywane bez zabezpieczeń na współdzielonym dysku.",
        choices: [
            {
                text: "Ignorujesz problem - nic się nie stało",
                consequences: {
                    budget: +5,
                    reputation: -15,
                    innovation: -10
                },
                legalWarning: `Możliwe zarzuty:
- Art. 107 Ustawy o ochronie danych osobowych - Niezgodne z prawem przetwarzanie
- Art. 266 KK - Ujawnienie informacji (do 2 lat)
- Art. 52 RODO - Naruszenie ogólnych zasad przetwarzania

Dodatkowe konsekwencje:
- Kary finansowe od UODO
- Obowiązek powiadomienia osób poszkodowanych
- Dodatkowe kontrole i audyty
- Koszty wdrożenia zabezpieczeń`
            }
        ]
    },

    // Naruszenia specyficzne dla sektora kultury

    {
        id: "collection_damage",
        text: "Podczas remontu doszło do uszkodzenia cennych eksponatów. Ubezpieczyciel sugeruje ukrycie szkód.",
        choices: [
            {
                text: "Ukrywasz szkody i przyjmujesz odszkodowanie",
                consequences: {
                    budget: +30,
                    reputation: -20,
                    morale: -15
                },
                legalWarning: `Możliwe zarzuty:
- Art. 286 § 1 KK - Oszustwo ubezpieczeniowe (do 8 lat)
- Art. 108 Ustawy o ochronie zabytków - Zniszczenie zabytku
- Art. 44 Ustawy o muzeach - Naruszenie obowiązku opieki nad zbiorami

Dodatkowe konsekwencje:
- Utrata akredytacji muzealnej
- Wykluczenie z programów ministerialnych
- Osobista odpowiedzialność za zniszczenie dziedzictwa
- Problemy z przyszłymi ubezpieczeniami`
            }
        ]
    },

    // Naruszenia przepisów o finansowaniu kultury

    {
        id: "grant_misuse",
        text: "Minister sugeruje wykorzystanie grantu na cel inny niż zapisany we wniosku.",
        choices: [
            {
                text: "Realizujesz sugestię ministra",
                consequences: {
                    political: +20,
                    budget: +10,
                    reputation: -15
                },
                legalWarning: `Możliwe zarzuty:
- Art. 297 KK - Oszustwo dotacyjne (do 5 lat)
- Art. 231 KK - Przekroczenie uprawnień
- Art. 8 Ustawy o odpowiedzialności za naruszenie dyscypliny finansów publicznych

Dodatkowe konsekwencje:
- Zwrot dotacji z odsetkami
- Wykluczenie z przyszłych programów dotacyjnych
- Odpowiedzialność solidarna z członkami zarządu
- Utrata możliwości pełnienia funkcji w instytucjach publicznych`
            }
        ]
    },

    // Naruszenia zasad etyki i przejrzystości

    {
        id: "conflict_of_interest",
        text: "Masz okazję zasiadać w komisji przyznającej granty, gdzie aplikuje też twoja instytucja.",
        choices: [
            {
                text: "Nie ujawniasz konfliktu interesów",
                consequences: {
                    budget: +25,
                    political: +10,
                    reputation: -20
                },
                legalWarning: `Możliwe zarzuty:
- Art. 230 KK - Płatna protekcja (do 8 lat)
- Art. 231 KK - Przekroczenie uprawnień
- Art. 12 Ustawy o ograniczeniu prowadzenia działalności gospodarczej przez osoby pełniące funkcje publiczne

Dodatkowe konsekwencje:
- Unieważnienie decyzji grantowych
- Wykluczenie z przyszłych komisji konkursowych
- Postępowanie dyscyplinarne
- Utrata zaufania środowiska`
            }
        ]
    },
    {
        id: "budget_fraud",
        text: "Odkryto nieprawidłowości w rozliczeniu dużego projektu. Co robisz?",
        choices: [
            {
                text: "Tuszujesz sprawę",
                consequences: {
                    political: -5,
                    reputation: -25,
                    connections: -1
                },
                legalWarning: `Możliwe zarzuty:
    - Art. 231 § 1 KK - Niedopełnienie obowiązków (do 3 lat)
    - Art. 271 § 1 KK - Poświadczenie nieprawdy w dokumentach (do 5 lat)
    - Art. 239 § 1 KK - Utrudnianie postępowania karnego (do 5 lat)
    - Art. 296 KK - Nadużycie zaufania w obrocie gospodarczym (do 10 lat)
    
Dodatkowe konsekwencje:
    - Odpowiedzialność za szkodę w pełnej wysokości
    - Zakaz pełnienia funkcji w instytucjach publicznych
    - Ryzyko kontroli wszystkich projektów`
            }
        ]
    },
    
    {
        id: "eco_washing",
        text: "Możesz dostać spory grant na 'zieloną kulturę', mimo że twoja instytucja generuje dużo odpadów i zużywa dużo energii.",
        choices: [
            {
                text: "Bierzesz grant i udajesz ekologiczność",
                consequences: {
                    budget: +25,
                    reputation: -20,
                    innovation: -5,
                    publicSatisfaction: -10
                },
                legalWarning: `Możliwe zarzuty:
    - Art. 286 § 1 KK - Oszustwo (do 8 lat)
    - Art. 297 § 1 KK - Oszustwo dotacyjne (do 5 lat)
    - Art. 271 § 1 KK - Poświadczenie nieprawdy w dokumentach (do 5 lat)
    - Ustawa o odpowiedzialności za szkody w środowisku
    
Dodatkowe konsekwencje:
    - Obowiązek zwrotu dotacji z odsetkami
    - Wykluczenie z przyszłych programów dotacyjnych
    - Odpowiedzialność za szkody środowiskowe
    - Utrata certyfikatów środowiskowych`
            }
        ]
    },
    
    {
        id: "social_media_scandal",
        text: "Pracownik przypadkowo opublikował kontrowersyjny post z oficjalnego konta instytucji. Post już się szeroko rozszedł.",
        choices: [
            {
                text: "Ignorujesz sprawę licząc, że przycichnie",
                consequences: {
                    reputation: -20,
                    political: -10,
                    publicSatisfaction: -15
                },
                legalWarning: `Możliwe zarzuty:
    - Art. 231 § 1 KK - Niedopełnienie obowiązków (do 3 lat)
    - Art. 23 i 24 KC - Naruszenie dóbr osobistych
    - Ustawa o ochronie danych osobowych (jeśli post zawierał dane osobowe)
    
Dodatkowe konsekwencje:
    - Pozwy cywilne o naruszenie dóbr osobistych
    - Kary od UODO
    - Utrata zaufania publicznego
    - Ryzyko pozwu zbiorowego`
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
                },
                legalWarning: `Możliwe zarzuty:
    - Art. 231 § 1 KK - Niedopełnienie obowiązków (do 3 lat)
    - Art. 220 KK - Narażenie pracownika na niebezpieczeństwo (do 3 lat)
    - Art. 207 § 2 Kodeksu pracy - Naruszenie przepisów BHP
    
Dodatkowe konsekwencje:
    - Odpowiedzialność za ewentualne wypadki
    - Kontrole PIP i sanepidu
    - Problemy z ubezpieczeniem OC
    - Ryzyko pozwu w przypadku incydentu`
            }
        ]
    },
    {
        id: "festival_crisis",
        text: "Na tydzień przed dużym festiwalem okazuje się, że główny sponsor się wycofał. Wydarzenie jest już szeroko rozreklamowane.",
        choices: [
            {
                text: "Organizujesz okrojoną wersję z własnych środków",
                consequences: {
                    budget: -40,
                    reputation: -5,
                    publicSatisfaction: -15,
                    innovation: +5
                },
                legalWarning: `Możliwe zarzuty:
    - Art. 296 § 1a KK - Nadużycie zaufania w obrocie gospodarczym (do 10 lat)
    - Art. 231 § 2 KK - Przekroczenie uprawnień w celu osiągnięcia korzyści (do 10 lat)
    - Art. 61 Ustawy o finansach publicznych - Naruszenie dyscypliny finansowej
    
Dodatkowe konsekwencje:
    - Odpowiedzialność za przekroczenie budżetu
    - Ryzyko kontroli NIK
    - Osobista odpowiedzialność finansowa
    - Utrata uprawnień do zarządzania środkami publicznymi`
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
                },
                legalWarning: `Możliwe zarzuty:
    - Art. 231 § 1 KK - Niedopełnienie obowiązków (do 3 lat)
    - Ustawa o zapewnianiu dostępności osobom ze szczególnymi potrzebami
    - Art. 23 KC - Naruszenie dóbr osobistych
    
Dodatkowe konsekwencje:
    - Kary administracyjne
    - Pozwy o naruszenie praw osób niepełnosprawnych
    - Utrata możliwości organizacji wydarzeń publicznych
    - Wykluczenie z programów ministerialnych`
            }
        ]
    },
    
    {
        id: "team_conflict",
        text: "Dwa kluczowe działy są w otwartym konflikcie, paraliżując pracę instytucji.",
        choices: [
            {
                text: "Ignorujesz konflikt licząc, że sam się rozwiąże",
                consequences: {
                    morale: -25,
                    efficiency: -20,
                    publicSatisfaction: -10
                },
                legalWarning: `Możliwe zarzuty:
    - Art. 231 § 1 KK - Niedopełnienie obowiązków (do 3 lat)
    - Art. 218 § 1a KK - Złośliwe naruszanie praw pracownika
    - Art. 943 § 1 Kodeksu pracy - Odpowiedzialność za mobbing
    
Dodatkowe konsekwencje:
    - Odpowiedzialność za straty wynikające z konfliktu
    - Kontrola PIP
    - Pozwy pracownicze o mobbing
    - Ryzyko strajku`
            }
        ]
    },
    
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
                },
                legalWarning: `Możliwe zarzuty:
    - Art. 183a § 1 Kodeksu pracy - Dyskryminacja ze względu na wiek
    - Art. 218 § 1a KK - Złośliwe naruszanie praw pracownika
    - Art. 45 § 1 Kodeksu pracy - Nieuzasadnione wypowiedzenie
    
Dodatkowe konsekwencje:
    - Przywrócenie do pracy na mocy wyroku sądu
    - Odszkodowania dla zwolnionych pracowników
    - Kontrola PIP
    - Pozwy o dyskryminację`
            }
        ]
    },
    
    {
        id: "mental_health",
        text: "Coraz więcej pracowników skarży się na problemy ze zdrowiem psychicznym związane z pracą.",
        choices: [
            {
                text: "'To nie problem instytucji'",
                consequences: {
                    morale: -30,
                    efficiency: -20,
                    reputation: -15,
                    publicSatisfaction: -5
                },
                legalWarning: `Możliwe zarzuty:
    - Art. 220 KK - Narażenie pracownika na niebezpieczeństwo (do 3 lat)
    - Art. 221 KK - Niedopełnienie obowiązków BHP
    - Art. 207 § 2 Kodeksu pracy - Obowiązek ochrony zdrowia pracowników
    
Dodatkowe konsekwencje:
    - Odpowiedzialność za rozstrój zdrowia pracowników
    - Zwiększone składki wypadkowe ZUS
    - Kontrole PIP i sanepidu
    - Pozwy o mobbing i nadmierny stres w pracy`
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
                },
                legalWarning: `Możliwe zarzuty:
    - Art. 231 § 2 KK - Przekroczenie uprawnień w celu osiągnięcia korzyści (do 10 lat)
    - Art. 296 § 1 KK - Nadużycie zaufania w obrocie gospodarczym
    - Ustawa o odpowiedzialności za naruszenie dyscypliny finansów publicznych
    
Dodatkowe konsekwencje:
    - Odpowiedzialność za niegospodarność
    - Obowiązek zwrotu nadmiernie wydanych środków
    - Kontrola NIK
    - Zakaz dysponowania środkami publicznymi`
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
                },
                legalWarning: `Możliwe zarzuty:
    - Art. 73 Konstytucji RP - Naruszenie wolności twórczości artystycznej
    - Art. 23 i 24 KC - Naruszenie dóbr osobistych artysty
    - Art. 78 Ustawy o prawie autorskim - Naruszenie autorskich praw osobistych
    
Dodatkowe konsekwencje:
    - Odszkodowanie dla artysty
    - Pozew o naruszenie integralności dzieła
    - Bojkot ze strony środowiska artystycznego
    - Utrata wiarygodności w środowisku kulturalnym`
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
                },
                legalWarning: `Możliwe zarzuty:
    - Art. 231 § 1 KK - Niedopełnienie obowiązków (do 3 lat)
    - Ustawa o organizowaniu działalności kulturalnej - Naruszenie misji instytucji
    - Art. 63 Ustawy o samorządzie gminnym - Naruszenie interesu społecznego
    
Dodatkowe konsekwencje:
    - Utrata dotacji samorządowych
    - Ryzyko odwołania przez organizatora
    - Protesty społeczne
    - Interpelacje radnych`
            }
        ]
    },
    
    {
        id: "cultural_appropriation",
        text: "Wystawa o kulturach świata jest krytykowana za kolonialną perspektywę i zawłaszczenie kulturowe.",
        choices: [
            {
                text: "Ignorujesz krytykę jako 'polityczną poprawność'",
                consequences: {
                    political: +5,
                    reputation: -20,
                    connections: -15,
                    publicSatisfaction: -10
                },
                legalWarning: `Możliwe zarzuty:
    - Art. 257 KK - Publiczne znieważenie grupy z powodu przynależności etnicznej (do 3 lat)
    - Art. 119 KK - Dyskryminacja w życiu publicznym
    - Art. 23 i 24 KC - Naruszenie dóbr osobistych grup etnicznych
    
Dodatkowe konsekwencje:
    - Protesty organizacji międzynarodowych
    - Utrata partnerów zagranicznych
    - Wykluczenie z międzynarodowych sieci kulturalnych
    - Pozwy o naruszenie dóbr osobistych`
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
                },
                legalWarning: `Możliwe zarzuty:
    - Art. 231 § 1 KK - Niedopełnienie obowiązków (do 3 lat)
    - Art. 241 KK - Publiczne rozpowszechnianie wiadomości z postępowania
    - Art. 218 § 1a KK - Złośliwe naruszanie praw pracownika
    
Dodatkowe konsekwencje:
    - Odpowiedzialność za zaniedbanie środowiska pracy
    - Pozwy cywilne od ofiar
    - Kontrola PIP
    - Bojkot ze strony organizacji społecznych`
            }
        ]
    },
]

// Najpierw przekształćmy tablicę illegalChoices w obiekt
const illegalChoicesMap = illegalChoices.reduce((acc, item) => {
    acc[item.id] = item.choices[0];  // Bierzemy pierwsze (i jedyne) choice z każdego illegalChoice
    return acc;
}, {});

// Teraz możemy użyć tego w naszym mapowaniu scenariuszy
export const scenarios = legalScenarios
    .filter(scenario => illegalChoicesMap[scenario.id])
    .map(scenario => {
        const illegalChoice = illegalChoicesMap[scenario.id];
        
        // Remove any duplicates of the illegal choice in the existing choices
        const filteredChoices = scenario.choices.filter(choice => choice.text !== illegalChoice.text);

        // Combine legal choices with the illegal choice and randomize the order
        const randomizedChoices = [...filteredChoices, illegalChoice].sort(() => Math.random() - 0.5);


        return {
            ...scenario,
            choices: randomizedChoices 
        };
    });


// Dodajmy też sprawdzenie ile scenariuszy zostało po filtrowaniu
console.log(`Załadowano ${scenarios.length} scenariuszy z nielegalnymi wyborami`);

// Możemy też wyświetlić ich ID dla debugowania
console.log('Dostępne scenariusze:', scenarios.map(s => s.id));

if (scenarios.length === 0) {
    console.error('UWAGA: Brak scenariuszy z nielegalnymi wyborami!');
    // Możemy dodać jakiś podstawowy scenariusz awaryjny
    scenarios.push({
        id: 'emergency_scenario',
        text: 'Sytuacja kryzysowa w instytucji wymaga twojej natychmiastowej decyzji.',
        choices: [
            {
                text: 'Działaj zgodnie z procedurami',
                consequences: {
                    budget: -10,
                    morale: +5,
                    reputation: +5
                }
            },
            {
                text: 'Zignoruj procedury dla szybszego efektu',
                consequences: {
                    budget: +10,
                    reputation: -10,
                    morale: -5
                },
                legalWarning: `Możliwe zarzuty:
- Art. 231 KK - Niedopełnienie obowiązków (do 3 lat)
- Art. 271 KK - Poświadczenie nieprawdy (do 5 lat)`
            }
        ]
    });
}

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