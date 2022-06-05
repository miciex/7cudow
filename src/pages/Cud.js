import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/Cud.css";
import Morpy from "../img/Paulmorphy.jpg";
import Lasker from "../img/EmmanuelLasker.jpg";
import Magnus from "../img/MagnusCarlsen.jpg";
import Capablanca from "../img/JoseRaulCapablanca.jpg";
import Kasparov from "../img/GarryKasparov.jpg";
import Viswanathan from "../img/ViswanathanAnand.jpg";
import Fischer from "../img/BobbyFischer.jpg";

const list = {
  cud1: {
    id: "Magnus Carlsen",
    text: "Magnus Carlsen został arcymistrzem w wieku 13 lat 7 miesięcy i 27 dni było wo najwcześniej jak do tąd. Teraz jednak ten wynik przebili Sergey Karjakin i Parimarjan Negi. Magnus streamuje czasami na twitchu czasem osiąga oglądalność rzędu ponad 20tys. Jest on mistrzem świata już 9 lat.",
    img: Magnus,
    title: "Obecny mistrz świata Magnus Carlsen",
    title2: `Najlepsza gra Magnusa Carlsena`,
    text2: `Magnus Carlsen vs Levon Aronian, co ciekawe nie wiadomo, gdzie w tej partii Levon popełnił błąd. Ta partia odbyła się w styczniu 2015r. na turnieju  Tata steel w Wijk An Zee.`,
    game: `1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Bb4 5. cxd5 exd5 6. Bg5 h6 7. Bxf6 Qxf6 8. Qa4+ Nc6 9. e3 O-O 10. Be2 Be6 11. O-O a6 12. Rfc1 Bd6 13. Qd1 Ne7 14. a3 Rfd8 15. b4 Nc8 16. Na4 b6 17. Nb2 Ne7 18. Nd3 Ng6 19. a4 a5 20. b5 Re8 21. Rc3 Bf5 22. Rac1 Rad8 23. Nd2 Rd7 24. g3 Nf8 25. Bg4 Nh7 26. Bxf5 Qxf5 27. Qf3 Qg5 28. h4 Qe7 29. Rc6 Nf6 30. Nf4 g6 31. h5 Kg7 32. hxg6 fxg6 33. Nxd5 Nxd5 34. Qxd5 Bxg3 35. Qg2 Bd6 36. Nc4 Rf8 37. Ne5 Bxe5 38. Qxg6+ Kh8 39. Qxh6+ Kg8 40. dxe5 Qxe5 41. Rg6+ Kf7 42. Rc4 Qa1+ 43. Kg2 Rh8 44. Rf4+ Ke8 45. Re6+ Re7 46. Rxe7+ Kxe7 47. Re4+ `,
    table: {
      birth: "30 listopada 1990",
      birthPlace: "Tønsberg, Norwegia",
      death: null,
      deathPlace: null,
    },
    information: "https://www.chess.com/players/magnus-carlsen",
  },
  cud2: {
    id: "Jose Raul Capablanca",
    text: "Jose Raul Capablanca był trzecim mistrzem świata w szachach. W okresie 1916-1924, nie przegrał żadnej gry w turnieju. W tym okresie wygrał 40 gier, a zremisował 23. Do dzisiaj jest uważany za jednego z najbardziej utalentowanych szachistów w historii. Szczególnie doceniana jest jego sztuka gry pozycyjnej i rozgrywania końcówek. Capablana osiągnął ranking rzędu 2877 punktów.",
    img: Capablanca,
    title: "Jose Raul Capablanca",
    title2: `Najpopularniejsza gra Morphy'ego znana jako Opera game`,
    text2: `Morphy grał tą w grze w operze w Paryżu w 1858r. Morphy spieszył się z wygraną w tej partii, ponieważ chiał obejrzeć spektakl, na który przyszedł. W tej grze Paul Morphy grał przeciwko Count Isourd'owi oraz Duke'owi Carl'owi`,
    game: "1.d4 d5 2.c4 e6 3.Nc3 c5 4.cxd5 exd5 5.Nf3 Nc6 6.g3 Be6 7.Bg2 Be7 8.O-O Nf6 9.Bg5 Ne4 10.Bxe7 Qxe7 11.Ne5 Nxd4 12.Nxe4 dxe4 13.e3 Nf3+ 14.Nxf3 exf3 15.Qxf3 O-O 16.Rfc1 Rab8 17.Qe4 Qc7 18.Rc3 b5 19.a3 c4 20.Bf3 Rfd8 21.Rd1 Rxd1+ 22.Bxd1 Rd8 23.Bf3 g6 24.Qc6 Qe5 25.Qe4 Qxe4 26.Bxe4 Rd1+ 27.Kg2 a5 28.Rc2 b4 29.axb4 axb4 30.Bf3 Rb1 31.Be2 b3 32.Rd2 Rc1 33.Bd1 c3 34.bxc3 b2 35.Rxb2 Rxd1 36.Rc2 Bf5 37.Rb2 Rc1 38.Rb3 Be4+ 39.Kh3 Rc2 40.f4 h5 41.g4 hxg4+ 42.Kxg4 Rxh2 43.Rb4 f5+ 44.Kg3 Re2 45.Rc4 Rxe3+ 46.Kh4 Kg7 47.Rc7+ Kf6 48.Rd7 Bg2 49.Rd6+ Kg7 0-1",
    table: {
      birth: "19 listopada 1888",
      birthPlace: "Hawana, Kuba",
      death: "8 marca 1942",
      deathPlace: "Nowy Jork, Nowy Jork, Stany Zjednoczone",
    },
    information: "https://www.chess.com/players/jose-raul-capablanca",
  },
  cud3: {
    id: "Garry Kasparov",
    text: `Garry Kasparov był radzieckim szachistą był również mistrzem świata przez 20 lat. Pomimo tego, że jest Rosjaninem, był bardzo przeciwny polityce ZSRR i głośno o tym mówił. Pokonał on w meczu o mistrzostwo świata Anatoly'a Karpova, który pochwalał politykę ZSRR i do dziś jest ambasadorem rosyjskim. Szachy są jednak o wiele bardziej polityczne niż się może wydawać na pierwszy rzut oka. Historia o jednej z symultan rezegranuch przez Garry'ego Kasparova Podczas jednej z symultan Garry Kasparov, w której mieli uczestniczyć sami zawodnicy 1600 FIDE, a on zauważyłm, że jeden z nich gra tak jak mistrz szachowy. Miał on rację, ponieważ  jednemu zawodnikowi podpowiadał gracz 2000 FIDE. Jednak nie można się mu dziwić, że się denerwował jeżeli został oszukany.`,
    img: Kasparov,
    title:
      "Garry Kasparov czasem potrafił być gwałtowny podczas swoich turniejów szachowych ",
    title2: `Gra z meczu Garry Kasparov vs The World`,
    text2: `Ta gra została zagrana pomiędzy Garrym Kasparovem, a kilkudziesięcioma innymi arcymistrzami. mieli oni jeden dzień na przeanalizowanie ruchu i wykonanie go. Działo się to tak, że oni głosowali na ruch, który ma zostać zagrany i ten na, którego padło najwięcej głosów był zagrany. Garry Kasparov wygrał tą grę.`,
    game: `1. e4 c5 2. Nf3 d6 3. Bb5+ Bd7 4. Bxd7+ Qxd7 5. c4 Nc6 6. Nc3 Nf6 7. O-O g6 8. d4 cxd4 9. Nxd4 Bg7 10. Nde2 Qe6 11. Nd5 Qxe4 12. Nc7+ Kd7 13. Nxa8 Qxc4 14. Nb6+ axb6 15. Nc3 Ra8 16. a4 Ne4 17. Nxe4 Qxe4 18. Qb3 f5 19. Bg5 Qb4 20. Qf7 Be5 21. h3 Rxa4 22. Rxa4 Qxa4 23. Qxh7 Bxb2 24. Qxg6 Qe4 25. Qf7 Bd4 26. Qb3 f4 27. Qf7 Be5 28. h4 b5 29. h5 Qc4 30. Qf5+ Qe6 31. Qxe6+ Kxe6 32. g3 fxg3 33. fxg3 b4 34. Bf4 Bd4+ 35. Kh1 b3 36. g4 Kd5 37. g5 e6 38. h6 Ne7 39. Rd1 e5 40. Be3 Kc4 41. Bxd4 exd4 42. Kg2 b2 43. Kf3 Kc3 44. h7 Ng6 45. Ke4 Kc2 46. Rh1 d3 47. Kf5 b1=Q 48. Rxb1 Kxb1 49. Kxg6 d2 50. h8=Q d1=Q 51. Qh7 b5 52. Kf6+ Kb2 53. Qh2+ Ka1 54. Qf4 b4 55. Qxb4 Qf3+ 56. Kg7 d5 57. Qd4+ Kb1 58. g6 Qe4 59. Qg1+ Kb2 60. Qf2+ Kc1 61. Kf6 d4 62. g7 1-0`,
    table: {
      birth: "13 kwietnia 1963",
      birthPlace: "Baku, Azerbejdżan",
      death: null,
      deathPlace: null,
    },
    information: "https://www.chess.com/players/garry-kasparov",
  },
  cud4: {
    id: "Viswanathan Anand",
    text: "Viswanathan Anand był 15 mistrzem świata w szachach w okresie 2000-2002 oraz 2007-2013. Jest on również bezsprzecznie najlepszym szachistą pochodzącym z Indii. Pomimo tego, że Viswanathan Anand ma już ponad 50 lat nadal wykazuje się niesamowitą grą np. w turnieju szachów szybkich w Warszawie, gdzie zajął 2 miejsce.",
    img: Viswanathan,
    title: "Viswanathan Anand",
    title2: `Najpopularniejsza gra Morphy'ego znana jako Opera game`,
    text2: `Morphy grał tą w grze w operze w Paryżu w 1858r. Morphy spieszył się z wygraną w tej partii, ponieważ chiał obejrzeć spektakl, na który przyszedł. W tej grze Paul Morphy grał przeciwko Count Isourd'owi oraz Duke'owi Carl'owi`,
    game: "1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Bg5 e6 7.Qd2 Be7 8.O-O-O O-O 9.f3 Nxd4 10.Qxd4 a6 11.h4 b5 12.Kb1 Qc7 13.h5 h6 14.Bh4 Bb7 15.Ne2 Rac8 16.Qd2 Rfd8 17.Re1 e5 18.Bxf6 Bxf6 19.Nc3 Bg5 20.Qd1 Qa5 21.Nd5 Bxd5 22.exd5 Rxc2 23.Kxc2 Qxa2 24.f4 Rc8+ 25.Kd2 Bxf4+ 26.Ke2 Qxb2+ 27.Kf3 Rc1 0-1",
    table: {
      birth: "11 grudnia 1969",
      birthPlace: "Mayiladuthurai, Indie",
      death: null,
      deathPlace: null,
    },
    information: "https://www.chess.com/players/viswanathan-anand",
  },
  cud5: {
    id: "Bobby Fisher",
    text: "Bobby Fischer był amerykańskim szachistą. Został on arcymistrzem w wieku 15 lat. Został mistrzem świata w w latach 1972r.- 1975r. Gdy Bobby Fisher grał w Rosji zawsze wyrywał wzsystkie kable, ponieważ myślał, że go podsłuchiwali. Uważali go przez to uważano wariata. Później okazało się jednak, że KGB go podsłuchiwało. Jeżeli Bobby miał grać w turniejach szachowych w Rosji, zdarzało się tak, że jego mama musiała mówić, że Fischer jest dobrym chłopcem, żeby wpuścili go na turnieje. Raz Bobby musiał grać przez telefon, ponieważ nie pozwolili mu grać bez tego.",
    img: Fischer,
    title: "Bobby Fischer",
    title2: `Jedna z gier rozegrana w meczu o mistrzostwo świa ta z Boryssem Spasskym`,
    text2: `Ten mecz był bardzo ważny, ponieważ odbywał się podczas zimnej wojny. Bobby Fischer można powiedzieć grał nie tylko dla siebie tylko całego USA, a Boryss Spassky grał za ZSRR.`,
    game: "1. c4 e6 2. Nf3 d5 3. d4 Nf6 4. Nc3 Be7 5. Bg5 OO 6. e3 h6 7. Bh4 b6 8. cd5 Nd5 9. Be7 Qe7 10. Nd5 ed5 11. Rc1 Be6 12. Qa4 c5 13. Qa3 Rc8 14. Bb5 a6 15. dc5 bc5 16. OO Ra7 17. Be2 Nd7 18. Nd4 Qf8 19. Ne6 fe6 20. e4 d4 21. f4 Qe7 22. e5 Rb8 23. Bc4 Kh8 24. Qh3 Nf8 25. b3 a5 26. f5 ef5 27. Rf5 Nh7 28. Rcf1 Qd8 29. Qg3 Re7 30. h4 Rbb7 31. e6 Rbc7 32. Qe5 Qe8 33. a4 Qd8 34. R1f2 Qe8 35. R2f3 Qd8 36. Bd3 Qe8 37. Qe4 Nf6 38. Rf6 gf6 39. Rf6 Kg8 40. Bc4 Kh8 41. Qf4",
    table: {
      birth: "9 marca 1943",
      birthPlace: "Chicago, Illinois, Stany Zjednoczone",
      death: "17 stycznia 2008",
    },
    information: "https://www.chess.com/players/bobby-fischer",
  },
  cud6: {
    id: "Emmanuel Lasker",
    text: "Emanuel Lasker był niemieckim szachistą co ciekawe urodził się w polskik mieście Barlinek. Był on mistrzem świata najdłużej ze wszystkich szachistów przez 27 lat. Był on też drugim mistrzem świata stał się nim po wygranym meczy z Wilhelmem Steinitzem.",
    img: Lasker,
    title: "Emanuel Lasker to bezsprzeczny numer 1 swych czasów",
    title2: `Najlepsza gra Emmanuel'a Lasker'a`,
    text2: `Partia odbyła się 1914r. w St. Petersburg. Emmanuel Lasker rozegrał tą partię z Jose Raul'em Capablancą`,
    game: "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bc6 dc6 5. d4 ed4 6. Qd4 Qd4 7. Nd4 Bd6 8. Nc3 Ne7 9. O-O O-O 10. f4 Re8 11. Nb3 f6 12. f5 b6 13. Bf4 Bb7 14. Bd6 cd6 15. Nd4 Rad8 16. Ne6 Rd7 17. Rad1 Nc8 18. Rf2 b5 19. Rfd2 Rde7 20. b4 Kf7 21. a3 Ba8 22. Kf2 Ra7 23. g4 h6 24. Rd3 a5 25. h4 ab4 26. ab4 Rae7 27. Kf3 Rg8 28. Kf4 g6 29. Rg3 g5 30. Kf3 Nb6 31. hg5 hg5 32. Rh3 Rd7 33. Kg3 Ke8 34. Rdh1 Bb7 35. e5 de5 36. Ne4 Nd5 37. N6c5 Bc8 38. Nd7 Bd7 39. Rh7 Rf8 40. Ra1 Kd8 41. Ra8 Bc8 42. Nc5",
    table: {
      birth: "24 grudnia 1868",
      birthPlace: "Barlinek, Polska",
      death: "11 stycznia 1941",
      deathPlace: "Nowy Jork, Nowy Jork, Stany Zjednoczone",
    },
    information: "https://www.chess.com/players/emanuel-lasker",
  },
  cud7: {
    id: "Paul Morphy",
    text: "Paul Morphy był amerykańskim szachistą, który był 1-szym nieoficjalnym mistrzem świata specjalnie podróżował do Europy, bo w USA nie było już nikogo z podobnym poziomem do jego. Jego ojciec nie pozwalał mu grać w szachy o pieniądze, w tamtym czasie było to jednak prawie niemożliwe, żeby przegrał, bo przewyższał wszystkich innych o około 200 punktów rankingu. Ciekawe w życiu Morphyego było to, że dzień przed ważnymi grami chodził po barach. Kiedy następnego dnia siadał do szachownicy następnego dnia to każdego ogrywał. Nie było nikogo kto wygrał mecz z Morphym.",
    img: Morpy,
    title:
      "Paul Morphy grał agresywne szachy. Typowe romantyczne XIX-sto wieczne szachy.",
    title2: `Najpopularniejsza gra Morphy'ego znana jako Opera game`,
    text2: `Morphy grał tą w grze w operze w Paryżu w 1858r. Morphy spieszył się z wygraną w tej partii, ponieważ chiał obejrzeć spektakl, na który przyszedł. W tej grze Paul Morphy grał przeciwko Count Isourd'owi oraz Duke'owi Carl'owi`,
    game: "1. e4 e5 2. Nf3 d6 3. d4 Bg4 4. dxe5 Bxf3 5. Qxf3 dxe5 6. Bc4 Nf6 7. Qb3 Qe7 8. Nc3 c6 9. Bg5 b5 10. Nxb5 cxb5 11. Bxb5+ Nbd7 12. O-O-O Rd8 13. Rxd7 Rxd7 14. Rd1 Qe6 15. Bxd7+ Nxd7 16. Qb8+ Nxb8 17. Rd8#",
    table: {
      birth: "22 czerwca 1837",
      birthPlace: "Nowy Orlean, Luizjana, Stany Zjednoczone",
      death: "10 lipca 1884",
      deathPlace: "Nowy Orlean, Luizjana, Stany Zjednoczone",
    },
    information: "https://www.chess.com/players/paul-morphy",
  },
};

export default function Cud() {
  let prz = "Przebieg partii: ";
  let a = useParams();
  let num = parseInt(a.id[a.id.length - 1]);
  let cud = list[a.id];
  return (
    <div className="cud">
      <div className="img">
        <img src={cud.img} alt={cud.title} />
      </div>
      <article>
        <h2>{cud.title}</h2>
        <span>{cud.text}</span>
        <div className="wrap">
          <table>
            <tbody>
              <tr>
                <td>Urodził się </td>
                <td>{cud.table.birth}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Urodził się w</td>
                <td>{cud.table.birthPlace}</td>
              </tr>
            </tbody>
            {cud.table.death && (
              <>
                <tbody>
                  <tr>
                    <td>Zmarł</td>
                    <td>{cud.table.death}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>Zmarł w</td>
                    <td>{cud.table.deathPlace}</td>
                  </tr>
                </tbody>
              </>
            )}
          </table>
        </div>
        <h3>{cud.title2}</h3>
        <p>{cud.text2}</p>
        <h3>{prz}</h3>
        <span>{cud.game}</span>
        <div className="margin">
          <span>
            <a href={cud.information} target="_blank" rel="noreferrer">
              Więcej informacji o {cud.id}
            </a>
          </span>
        </div>
        {num !== 1 && (
          <div className="margin">
            <Link to={`/cud/cud${num - 1}`}>Poprzedni szachista</Link>
          </div>
        )}
        {num !== 7 && (
          <div className="margin">
            <Link to={`/cud/cud${num + 1}`}>Następny szachista</Link>
          </div>
        )}
      </article>
    </div>
  );
}
