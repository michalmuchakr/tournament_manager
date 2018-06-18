const polishTranslations = {
  pl: {
    charts: {
      january: 'Styczeń',
      february: 'Luty',
      march: 'Marzec',
      april: 'Kwiecień',
      may: 'Maj',
      june: 'Czerwiec',
      july: 'Lipiec',
      playedMatches: 'Rozegrane mecze',
    },
    home: {
      mainHeader: 'Witaj w świecie piłkarzyków',
      subheader: 'Ciesz się pięknem piłki stołowej',
    },
    pages: {
      players: {
        mainHeader: 'Gracze',
        noPlayers: 'Żaden gracz nie został dodany, jeszcze!',
        noPlayersToDisplay: 'Brak graczy do wyświetlenia!',
        patience: 'Pobieranie listy graczy, proszę o cierpliwość...',
        addNew: 'Dodaj nowego gracza',
        player: {
          position: {
            attack: 'Ataker',
            defence: 'Obrońca',
            whatever: 'Cokolwiek',
          },
          edit: 'Edytuj',
          archive: 'Zarchiwizuj',
          form: {
            editPlayer: 'Edytuj Gracza',
            addPlayer: 'Dodaj Gracza',
            firstName: 'Imię',
            lastName: 'Nazwisko',
            email: 'Email',
            position: 'Preferowana Pozycja',
            descript: 'Opis',
            gender: 'Gender',
            more: 'Więcej...',
            save: 'Zapisz',
            waiting: 'Czekam...',
            male: 'Mężczyzna',
            female: 'Kobieta',
            errors: {
              blank: '%{field} nie może być puste!'
            },
          },
        },
      },
    },
    shared: {
      nav: {
        brand: 'Manager Turniejów',
        home: 'Start',
        players: 'Gracze',
        player: 'Gracz',
        games: 'Turnieje',
        stats: 'Statystyki',
        userPanel: 'Panel Użytkownika',
        welcomeUser: 'Witaj, %{userName}',
        adminDashboard: 'Panel Administratora',
        logOut: 'Wyloguj'
      },
      pagination: {
        ofPages: 'z %{count} stron',
        ofPages_1: 'z %{count} strony',
        itemsPerPage: '%{count} na stronie',
        searchFor: 'Wyszukaj...',
      },
    },
    single_game: {
      result_handler: {
        finish: 'Zakończ fazę grupową'
      }
    }
  },
};

export default polishTranslations;
