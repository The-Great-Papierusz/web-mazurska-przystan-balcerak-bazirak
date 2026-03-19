# 📄 Dokumentacja Techniczna – Projekt "Mazurska Przystań"

**Zespół:** Mikolaj Bazirak & Bartosz Balcerak
**Klasa:** 3 Technikum
**Data:** 03-19-2026

---
## 1. Wymagania klienta
* Formularz pobiera dane z klienta:
  * Imie klienta
  * Wybór sprzęta, między Kajakiem (20zł/h), Rowerem Wodnym (35zł/h), Żaglówka omega (150zł/h)
  * Przez ile godzin chcę się wynając sprzęt
  * Opcja kapoka dla dziecka za 5zł
  * Instruktor za 50zł/h
  * Wybór płatności
  * Akceptowanie regulaminu
* Nie da się przesłać formularz jeżeli nie wypełniłeś:
    * Imie nazwisko
    * Wybór płatności
    * Zaakceptowanie regulaminu
* Po wybieraniu Żaglówce Omega, użytkownikowi wyświetla się tekst o wymaganym patencie.
* Cena jest obliczona.
* Cena się aktualizuje wraz z wyborami jakimi robi użytkownik.

---
## 2. Architektura rozwiązania
Architektura i budowa strony się znajduje się w App.tsx, a wygląd w App.css.

App.tsx jest podielony w następny sposób:

* Na początku sa podane useStates które są używane które są podzielone na 3 sekcje
  * UseState które pobieraja dane z forumlarza
  * Cena ostateczna obliczona przez funkcje priceCalculate()
  * Właściwości niektóryś elementów strony
* Następująco są Metody i funkcje applikacji
  * Pierw jest handle gdy się naciska Submit
  * Potem handles na gdy się zmieniają wartości w formularzu.
  * Potem priceCalculator, co oblicza cenę ostateczną,<br> argumenty są wszystkie wartości  które zmieniają cenę w jakiś sposób
  * Potem jest funkcja disableButtonCheck() która sprawdza czy odpowiednia pole są wypełnione aby submit był enabled
  * Ostatecznie jest submitAlert() który jest wywołany przy funkcji handleSubmit. Pokazuje alert gdy się naciska submit.
* Wkraczamy teraz do wygląd aplikacji.
* Formularz jest formatowany w następujący sposób
  * Imie
  * Sprzęt
  * [Opcjonalne] Informacje o patencie
  * Wyświetlona ilość godzin
  * Slider do wybierania ilość godzin
  * [Checkbox] Opcjonalny wybory do dokupienia
  * Wybór płatności
  * Przycisk do akceptowania regulaminu
  * informacja o cenie i wyświetlona ostateczna cena
  * Button Submit

---
## 3. Zarządzanie stanem (`useState`)
| Nazwa zmiennej stanu | Typ danych | Za co odpowiada?                                            |
|:---------------------|:-----------|:------------------------------------------------------------|
| nameInput            | string     | Przechowuje imię klienta                                    |
| rideSelect           | string     | Przechowuje wybór sprzętu                                   |
| timeRange            | string     | Przechowuje wybór godzin wyporzyczenia sprzętu              |
| lsuitCheckBox        | boolean    | Przechowuje wybór o dokupienie kapoka dla dziecka           |
| instructorCheckBox   | boolean    | Przechowuje wybór o dokupienie instruktora                  | 
| paymentMethod        | string     | Przechowuje wybór o rodzaj płatności                        | 
| statuteCheckBox      | boolean    | Przechowuje informacje czy regulamin został zaakceptowany   | 
| price                | number     | Przechowuje ostateczna cena                                 | 
| patentVisibility     | string     | Przechowuje jaki display ma [p] o className="Patent"        |  
| submitDisable        | boolean    | Przechowuje czy button submit jest [disabled] lub [enabled] |  
| submitBackground     | string     | Przechowuje jaki [color] ma button submit                   |  

---
## 4. Algorytm obliczania ceny

* **Cena bazowa:** Zależna od wybranego sprzętu
  * Kajak: 20zł / h
  * Rower Wodny: 35zł / h
  * Omega: 150zł / h
* **Wpływ godzin:** Cena bazowa potem jest pomnożona przez ilość godzin wybranych
* **Opcje dodatkowe:** Mamy 2 opcje do wybrania
  *  Instruktor kosztuje 50zł, co jest potem pomnożone przez ilość godzin wybranych poprzednio
  * Kapoki kosztują stałe 5zł, nie są przez nic pomnożone i jest dodane do końcowej ceny
---
## 5. Layout i Stylizacja (`Flexbox`)
(Opisz, jakich właściwości `Flexbox` użyliście, aby formularz był responsywny i wyśrodkowany.
Wymień co najmniej 3 właściwości CSS).
1. `display: flex` - ładnie układa elementy i je wyrównuje
2. `flex-direction: column` - ładnie ustawia elementy jeden pod drugim
3. `justify-content: center` - wyrównuje elementy w poziomie
---
## 6. Wnioski z realizacji projektu (SDLC)
(Krótka autorefleksja zespołu).
* **Co było najtrudniejsze?** 
  * Mikołaj: Zmiana ceny wraz z wyborami
  * Bartek: Ustawienie w css aby ładnie wyglądało
* **Czego nowego się nauczyliście?**
  * Mikołaj: Fajne sposoby do zastosowania useState
  * Bartek: Jak ładnie ułożyć wygląd strony
* **Co byście zmienili, gdybyście mieli więcej czasu?**
  * Mikołaj: "Interaktywność" strony, aby nie była taka statyczna bardzo
  * Bartek: Upiększyłbym wygląd, dodał obrazki
---
## 7. Checklisty
- [x] Aplikacja uruchamia się bez błędów (npm start).
- [x] Konsola przeglądarki jest czysta (brak "red errors").
- [x] Wszystkie commity są widoczne na kanale #github-feed.
- [x] Pull Requesty zostały zaakceptowane przez partnera.