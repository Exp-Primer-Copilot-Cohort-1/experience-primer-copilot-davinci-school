# Flappy Bird - Three.js

Kompletní implementace hry Flappy Bird pomocí knihovny Three.js.

## Jak spustit hru

### Varianta 1: Přímé otevření v prohlížeči
1. Stáhněte soubor `index.html`
2. Otevřete ho v moderním webovém prohlížeči (Chrome, Firefox, Edge, Safari)
3. **Poznámka:** Vyžaduje připojení k internetu pro načtení Three.js knihovny z CDN

### Varianta 2: Lokální server
Pokud chcete spustit hru přes lokální server:
```bash
# Python 3
python3 -m http.server 8080

# Nebo Node.js
npx http-server -p 8080
```
Poté otevřete `http://localhost:8080/index.html` v prohlížeči.

## Ovládání

- **MEZERNÍK** - Start hry / Skok ptáka / Restart po Game Over

## Herní mechanika

### Cíl hry
Proletět co nejvíce překážek bez kolize.

### Pravidla
1. Pták padá dolů kvůli gravitaci
2. Stisknutí mezerníku dá ptákovi impuls nahoru
3. Překážky (zelené trubky) se pohybují zleva doprava
4. Za každou úspěšně proletěnou překážku získáte 1 bod
5. Hra končí při:
   - Kolizi s překážkou
   - Kolizi se zemí (dolní okraj)
   - Kolizi se stropem (horní okraj)

## Technické detaily

### Použité technologie
- **Three.js** (v0.160.0) - 3D grafická knihovna
- **Ortografická kamera** - Pro 2D vzhled hry
- **requestAnimationFrame** - Pro plynulé vykreslování (~60 FPS)

### Struktura kódu
- **Inicializace** - Vytvoření scény, kamery, rendereru
- **Herní objekty** - Pták (koule), překážky (krabice), země a strop
- **Herní smyčka** - Aktualizace pozic, detekce kolizí, vykreslování
- **Ovládání** - Obsluha klávesnice pro skok a restart

### Klíčové funkce
- `init()` - Inicializace Three.js scény
- `createBird()` - Vytvoření ptáka
- `createPipe()` - Generování překážek
- `updateBird()` - Aplikace gravitace a pohybu ptáka
- `updatePipes()` - Pohyb překážek a počítání skóre
- `checkCollisions()` - Detekce kolizí
- `animate()` - Hlavní herní smyčka

## Vlastnosti implementace

✅ Kompletní hra v jediném HTML souboru  
✅ Funguje lokálně v prohlížeči (vyžaduje internet pro Three.js)  
✅ Ovládání mezerníkem  
✅ Systém překážek s náhodnou mezerou  
✅ Recyklace překážek pro efektivitu  
✅ Detekce kolizí (pták vs překážky, pták vs hranice)  
✅ Systém skórování  
✅ HUD zobrazení skóre  
✅ Game Over obrazovka s možností restartu  
✅ Ortografická kamera pro 2D efekt  
✅ Jednoduché 3D tvary (SphereGeometry, BoxGeometry)  
✅ Detailní komentáře pro vzdělávací účely  
✅ Použití requestAnimationFrame pro plynulé vykreslování  

## Kompatibilita

Hra byla testována a funguje v:
- Google Chrome 90+
- Mozilla Firefox 88+
- Microsoft Edge 90+
- Safari 14+

## Poznámky pro vývojáře

Kód je důkladně komentován v češtině pro vzdělávací účely. Každá sekce kódu obsahuje:
- Popis účelu funkce
- Vysvětlení klíčových konceptů
- Komentáře k důležitým řádkům

Díky tomu může být kód použit jako výukový materiál pro:
- Základy programování ve JavaScriptu
- Práci s Three.js knihovnou
- Vytváření her v prohlížeči
- Použití requestAnimationFrame
- Detekci kolizí
- Správu herního stavu
