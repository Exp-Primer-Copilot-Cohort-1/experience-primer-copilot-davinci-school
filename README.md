<header>

<!--
  <<< Author notes: Course header >>>
  Read <https://skills.github.com/quickstart> for more information about how to build courses using this template.
  Include a 1280×640 image, course name in sentence case, and a concise description in emphasis.
  In your repository settings: enable template repository, add your 1280×640 social image, auto delete head branches.
  Next to "About", add description & tags; disable releases, packages, & environments.
  Add your open source license, GitHub uses the MIT license.
-->

# Code with GitHub Copilot

_GitHub Copilot can help you code by offering autocomplete-style suggestions right in VS Code and Codespaces._

</header>

<!--
  <<< Author notes: Step 1 >>>
  Choose 3-5 steps for your course.
  The first step is always the hardest, so pick something easy!
  Link to docs.github.com for further explanations.
  Encourage users to open new tabs for steps!
-->

## Step 1: Leverage Codespaces with VS Code for Copilot

_Welcome to "Develop With AI Powered Code Suggestions Using GitHub Copilot and VS Code"! :wave:_

GitHub Copilot is an AI pair programmer that helps you write code faster and with less work. It draws context from comments and code to suggest individual lines and whole functions instantly. GitHub Copilot is powered by OpenAI Codex, a generative pretrained language model created by OpenAI.

**Copilot works with many code editors including VS Code, Visual Studio, JetBrains IDE, and Neovim.**

Additionally, GitHub Copilot is trained on all languages that appear in public repositories. For each language, the quality of suggestions you receive may depend on the volume and diversity of training data for that language.

Using Copilot inside a Codespace shows just how easy it is to get up and running with GitHub's suite of [Collaborative Coding](https://github.com/features#features-collaboration) tools.

> **Note**
> This skills exercise will focus on leveraging GitHub Codespace. It is recommended that you complete the GitHub skill, [Codespaces](https://github.com/skills/code-with-codespaces), before moving forward with this exercise.

### :keyboard: Activity: Enable Copilot inside a Codespace

**We recommend opening another browser tab to work through the following activities so you can keep these instructions open for reference.**

Before you open up a codespace on a repository, you can create a development container and define specific extensions or configurations that will be used or installed in your codespace. Let's create this development container and add copilot to the list of extensions.

1. Navigating back to your **Code** tab of your repository, click the **Add file** drop-down button, and then click `Create new file`.
1. Type or paste the following in the empty text field prompt to name your file.
   ```
   .devcontainer/devcontainer.json
   ```
1. In the body of the new **.devcontainer/devcontainer.json** file, add the following content:
   ```
   {
       // Name this configuration
       "name": "Codespace for Skills!",
       "customizations": {
           "vscode": {
               # Flappy Pumpkin (Three.js)

               Jednoduchá webová hra inspirovaná Flappy Bird, napsaná v jednom souboru `index.html` s použitím Three.js.

               Hráč ovládá malou "dýni" (kouli s vyřezanou tváří) a prolétává mezi překážkami. Překážky byly upraveny na tvar "kosti" — středový válec s kulatými konci.

               ## Funkce

               - 2D/3D hybridní vzhled pomocí Three.js (ortografická kamera)
               - Překážky ve tvaru kostí (cylinder + sphere caps)
               - HUD zobrazuje aktuální skóre a nejlepší (lokální) rekord
               - Nejlepší skóre se ukládá do `localStorage` s fallbackem do cookie
               - Ovládání klávesou MEZERNÍK (stisk = skok, držení = tah)

               ## Ovládání

               - Stiskni MEZERNÍK (Space) pro start a skok
               - Držení MEZERNÍKU přidá kontinuální tah nahoru
               - Po smrti stiskni MEZERNÍK pro restart hry

               ## Jak spustit lokálně

               1. Otevři terminál ve složce projektu (kde je `index.html`).
               2. Spusť jednoduchý HTTP server (nutné pro korektní načítání některých zdrojů):

               ```bash
               python3 -m http.server 8000 --bind 0.0.0.0
               ```

               3. Otevři v prohlížeči URL:

               ```bash
               http://localhost:8000/index.html
               ```

               Tip: v devcontaineru nebo Codespaces použij proměnnou `$BROWSER` pokud je k dispozici:

               ```bash
               "$BROWSER" http://localhost:8000/index.html
               ```

               Po spuštění stiskni MEZERNÍK pro start a hraj.

               ## Ukládání skóre

               Hra ukládá nejlepší lokální skóre při dokončení hry. Implementace:

               - Primárně se používá `localStorage` (klíč `flappy_best`).
               - Pokud `localStorage` není dostupné (např. v některých soukromých módech), hra se pokusí načíst a uložit hodnotu také do cookie (`flappy_best`) jako fallback.

               Ukládání probíhá automaticky při konci hry, pokud hráč dosáhl lepšího skóre.

               ## Kde upravovat kód

               - Hlavní logika a UI jsou v `index.html`.
                 - Funkce pro překážky: `createBone(height)`
                 - Spawn trubek/překážek: `createPipe()`
                 - Detekce kolizí: `checkCollisions()`
                 - Ukládání rekordů: `loadBestScore()` / `saveBestScore()`

               ## Další nápady / vylepšení

               - Přidat tlačítko pro resetování rekordu
               - Přidat zvuky a vizuální efekty při kolizi nebo dosažení rekordu
               - Přidat backend (API nebo Firebase) pro sdílené žebříčky mezi zařízeními

               ## Licence

               Projekt používá licencí v kořenovém adresáři (viz `LICENSE`).

               ---

               Pokud chceš, můžu přidat tlačítko pro reset rekordu přímo do `index.html` (UI + funkce pro vymazání `localStorage` a cookie). 
