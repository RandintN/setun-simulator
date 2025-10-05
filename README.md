# Setun Simulator (Setun VS)

Live site: https://randintn.github.io/setun-simulator/

This repository contains a browser-based simulator (emulator UI) of the Soviet ternary computer Setun (MCVM), implemented as a static web application using HTML, CSS, and vanilla JavaScript.

---

## English

### Overview
- Purpose: Provide an interactive, educational simulator for the Setun ternary computer with UI components for registers, control switches/buttons, memory view, and simple I/O devices (FT-1, FT-2, and a printer panel).
- Stack: Static site — HTML, CSS, and JavaScript (no build tools or package manager).
- Entry point: `index.html`
- Main script: `js/main.js`
- Styles: `css/styles.css`

### Requirements
- A modern web browser (Chrome, Firefox, Edge, Safari). No installation required.
- Optional: A local static HTTP server if you prefer serving files instead of opening `index.html` directly.

### Setup and Run
- Quick start (open from filesystem):
  - Double‑click `index.html` or open it in your browser.
- Serve with a simple static server (optional examples):
  - Python 3: `python -m http.server 8080` and navigate to `http://localhost:8080/`
  - Node npm http-server (if available): `npx http-server -p 8080` then open `http://localhost:8080/`
  - Any other static server will work similarly.

### Scripts (Project Commands)
There is no package.json or build system. The term "scripts" here refers to runtime UI actions available in the app:
- Language switch: EN/PT buttons in the top bar.
- Theme toggle: switch between light/dark (icon button at the top right).
- Load program/data: buttons to read FT‑1 (program) and FT‑2 (data) into memory.
- Start/Stop/Remote: control the execution of the currently loaded program or a manual command entered via switches.

### Environment Variables
- None required for running the static site.
- TODO: Document any optional configuration flags if they are added in the future.

### Tests
- No automated tests are present in this repository.
- TODO: Consider adding basic UI tests (e.g., with Playwright) and unit tests for the emulator logic.

### Project Structure
```
C:/Coding/setun-simulator
├─ css/
│  └─ styles.css
├─ js/
│  └─ main.js
├─ index.html
├─ robots.txt
├─ site.webmanifest
├─ setun-simulator.iml
└─ setun-simulator.zip   (archive; not used by the site at runtime)
```

### Development Notes
- The app is fully client‑side. All logic is in `js/main.js` and UI in `index.html` with styles in `css/styles.css`.
- The footer mentions "License MIT Robson Cassiano"; however, no `LICENSE` file is present at the root.

### License
- MIT is indicated in the footer of `index.html` ("License MIT Robson Cassiano").
- TODO: Add a standard `LICENSE` file with the MIT text and the appropriate copyright holder.

---

## Português (PT-BR)

### Visão Geral
- Propósito: Fornecer um simulador interativo e educacional do computador ternário Setun, com componentes de UI para registradores, botões/chaves de controle, visão de memória e dispositivos simples de E/S (FT‑1, FT‑2 e painel de impressora).
- Stack: Site estático — HTML, CSS e JavaScript (sem ferramentas de build ou gerenciador de pacotes).
- Ponto de entrada: `index.html`
- Script principal: `js/main.js`
- Estilos: `css/styles.css`

### Requisitos
- Um navegador moderno (Chrome, Firefox, Edge, Safari). Não é necessária instalação.
- Opcional: Um servidor HTTP estático local, caso prefira servir os arquivos em vez de abrir `index.html` diretamente.

### Configuração e Execução
- Início rápido (abrindo do sistema de arquivos):
  - Dê duplo clique em `index.html` ou abra o arquivo no seu navegador.
- Servir com um servidor estático simples (exemplos opcionais):
  - Python 3: `python -m http.server 8080` e acesse `http://localhost:8080/`
  - Node http-server (se disponível): `npx http-server -p 8080` e abra `http://localhost:8080/`
  - Qualquer outro servidor estático também funciona.

### Scripts (Ações no Projeto)
Não há `package.json` nem sistema de build. Aqui, "scripts" refere‑se às ações da interface em tempo de execução:
- Troca de idioma: botões EN/PT na barra superior.
- Alternância de tema: claro/escuro (botão com ícone no canto superior direito).
- Carregar programa/dados: botões para ler FT‑1 (programa) e FT‑2 (dados) para a memória.
- Iniciar/Parar/Remoto: controlar a execução do programa carregado ou de um comando manual inserido pelas chaves.

### Variáveis de Ambiente
- Nenhuma é necessária para executar o site estático.
- TODO: Documentar flags de configuração opcionais, caso venham a ser adicionadas.

### Testes
- Este repositório não possui testes automatizados.
- TODO: Considerar adicionar testes básicos de UI (por exemplo, com Playwright) e testes unitários da lógica do emulador.

### Estrutura do Projeto
```
C:/Coding/setun-simulator
├─ css/
│  └─ styles.css
├─ js/
│  └─ main.js
├─ index.html
├─ robots.txt
├─ site.webmanifest
├─ setun-simulator.iml
└─ setun-simulator.zip   (arquivo; não é usado pelo site em tempo de execução)
```

### Notas de Desenvolvimento
- O aplicativo é totalmente client‑side. Toda a lógica está em `js/main.js` e a UI em `index.html`, com estilos em `css/styles.css`.
- O rodapé menciona "License MIT Robson Cassiano"; contudo, não há arquivo `LICENSE` na raiz.

### Licença
- MIT é indicado no rodapé do `index.html` ("License MIT Robson Cassiano").
- TODO: Adicionar um arquivo `LICENSE` com o texto padrão da MIT e o titular de direitos apropriado.
