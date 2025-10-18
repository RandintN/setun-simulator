/*
  Setun Simulator (Setun VS)
  License: MIT (see LICENSE file)
  Copyright (c) 2025 Robson Cassiano
*/

document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Switcher Logic ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.64 5.64c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.06 1.06c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L5.64 5.64zm12.72 12.72c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.06 1.06c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.06-1.06zM5.64 18.36c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.06-1.06zm12.72-12.72c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.06-1.06z"/></svg>`;
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>`;

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      themeToggleBtn.innerHTML = sunIcon;
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      themeToggleBtn.innerHTML = moonIcon;
      localStorage.setItem('theme', 'light');
    }
  };

  themeToggleBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(newTheme);
  });

  // --- End Theme Logic ---


  const translations = {
    en: {
      mainTitle: "Setun Ternary Computer Simulator",
      aboutTitle: "About Setun",
      componentsTitle: "Main Components",
      instructionsTitle: "Instruction Set",
      usageTitle: "How to Use",
      readingTitle: "How to Read the Results",
      ft1Label: "FT-1 (Program Input)",
      ft2Label: "FT-2 (Data Input)",
      printerLabel: "EUM-46 Printer",
      ft1Placeholder: "Enter ternary program here...",
      ft2Placeholder: "Enter ternary data here...",
      regS: "Adder",
      regR: "Multiplicand",
      regK: "Command",
      regC: "Command Counter",
      regF: "Modifier",
      regW: "ω",
      regMB: "MB Zone",
      switchNK: "Command Input",
      switchAO: "Stop Address",
      loadProgram: "Read Program Tape",
      loadData: "Read Data Tape",
      initialStart: "Load",
      start: "Start",
      step: "Step",
      stop: "Stop",
      remoteCmd: "Remote Command",
      aboutText: `"Setun VS" is a simulator of the Setun MCVM (a Soviet ternary computer). The main elements are RAM, registers, a control panel, and peripheral input (FT-1, FT-2) and output (EUM-46) devices.`,
      registersLabel: "Registers:",
      registersDesc: "Display the internal state of the machine.",
      regSLabel: "S (Result):",
      regSDesc: "18-trit register for operation results.",
      regRLabel: "R (Multiplier):",
      regRDesc: "18-trit register used in multiplication operations.",
      regFLabel: "F (Modification):",
      regFDesc: "5-trit modification register.",
      regCLabel: "C (Command Address):",
      regCDesc: "5-trit command address register.",
      regKLabel: "K (Command):",
      regKDesc: "9-trit command register that stores the current instruction.",
      regWLabel: "ω (w):",
      regWDesc: "Determines control transfer in conditional branches.",
      regMBLabel: "МБ (MB):",
      regMBDesc: "Address of the last accessed magnetic drum zone.",
      switchesLabel: "Switches (Command Input, Stop Address):",
      switchesDesc: "Allow manual entry of commands and addresses. Click to cycle through states (+1, 0, -1).",
      buttonsLabel: "Control Buttons:",
      btnLoadLabel: "Load:",
      btnLoadDesc: "Loads data from the FT-1 paper tape device into RAM.",
      btnStartLabel: "Start:",
      btnStartDesc: "Starts program execution.",
      btnStopLabel: "Stop:",
      btnStopDesc: "Halts program execution (not implemented).",
      btnRemoteLabel: "Remote Command:",
      btnRemoteDesc: "Executes the command entered manually on the switches.",
      ioLabel: "I/O Devices:",
      ioFtLabel: "FT-1 / FT-2:",
      ioFtDesc: "Simulate paper tape readers to load programs and data.",
      ioPrinterLabel: "EUM-46 Printer:",
      ioPrinterDesc: "Displays program output (partially implemented).",
      tableTh1: "Code (Ternary)",
      tableTh2: "Code (Novech)",
      tableTh3: "Operation Name",
      tableTh4: "Description",
      opName_30: "Send to S",
      opName_33: "Addition to S",
      opName_3x: "Subtraction from S",
      opName_40: "Multiplication 0",
      opName_43: "Multiplication +",
      opName_4x: "Multiplication -",
      opName_20: "Bitwise Multiplication",
      opName_23: "Send to R",
      opName_2x: "Stop",
      opName_10: "Conditional jump 0",
      opName_13: "Conditional jump +",
      opName_1x: "Conditional jump -",
      opName_00: "Unconditional jump",
      opName_x0: "Input-output",
      opName_y3: "Write from S",
      opName_zhx: "Halt (Unused)",
      opDesc_2x: "Stop; (A*)=>(R)",
      opDesc_10: "A*=>(C) when w=0",
      opDesc_13: "A*=>(C) when w=+",
      opDesc_1x: "A*=>(C) when w=-",
      opDesc_x0: "Input to Fa*. Output from Fa*",
      opDesc_zhx: "Halt execution",
      instructionsNote: "<i>Note: This is a simplified subset for demonstration. The original Setun machine had a more complete instruction set.</i>",
      usageLi1_1: "Load a Program:",
      usageLi1_2: "Enter the program into the FT-1 field and click 'Load Program'.",
      usageLi2: `<strong>Example Program:</strong> To load the number 10 and then add -4, resulting in 6.
<pre>
// Load 10 (...+0+) to address 2
000 000000000000000000
// Add -4 (...---) to address 3
000 000000000000000000
+00 000000000000000+0+
+0+ 000000000000000---
--- 000000000000000000
</pre>`,
      usageLi3: "",
      usageLi3_1: "Load to RAM:",
      usageLi3_2: "Click the <strong>'Load'</strong> button. This transfers data from the tape to memory.",
      usageLi4: "",
      usageLi4_1: "Execute:",
      usageLi4_2: "Click the <strong>'Start'</strong> button to begin execution.",
      usageLi5_1: "Observe:",
      usageLi5_2: "The lights of the 'S' register should show the ternary value for 6 (`...+--`).",
      readingContent: `<p>The key to reading the panel is to understand the <strong>balanced ternary system</strong>. Each pair of lights (bulbs) represents a "trit," which can have three values:</p><ul><li><strong>+1:</strong> The top light is on.</li><li><strong>0:</strong> Both lights are off.</li><li><strong>-1:</strong> The bottom light is on.</li></ul><p>To convert the value of a register to decimal, you must multiply the value of each trit (1, 0, or -1) by the power of 3 corresponding to its position, starting with 3<sup>0</sup> on the far right.</p><p><strong>Practical Example: Reading the number 10 in the Adder (S)</strong></p><p>Imagine the top lights at positions <strong>16</strong> and <strong>18</strong> are on. The reading would be:</p><ul><li>... (other trits are 0) ...</li><li><strong>Position 16 (+1):</strong> 1 × 3<sup>2</sup> = 9</li><li><strong>Position 17 (0):</strong> 0 × 3<sup>1</sup> = 0</li><li><strong>Position 18 (+1):</strong> 1 × 3<sup>0</sup> = 1</li></ul><p><strong>Total:</strong> 9 + 0 + 1 = 10.</p>`,
      logTape1Ready: "Program tape ready. Use 'Load' to load into RAM.",
      logTape2Ready: "Data tape ready.",
      logInitialStart: "Load: Loading program from FT-1 to RAM...",
      logProgramLoaded: "Program loaded. {count} instructions.",
      logRun: "Starting program execution.",
      logStop: "Execution halted by user.",
      logHalted: "Program halted. Press 'Load' to reload.",
      logEnd: "End of program or halt.",
      logStep: "PC {pc}: Transferred value {value} to S.",
      logStepExec: "Executing step at PC {pc}...",
      logAdd: "PC {pc}: Added value {value} to S. New value: {newValue}",
      logSub: "PC {pc}: Subtracted value {value} from S. New value: {newValue}",
      logStore: "PC {pc}: Stored value from S ({value}) to address {address}",
      logJump: "PC {pc}: Jump to address {address}",
      logHaltInstruction: "PC {pc}: Halt instruction found. Final value in S: {value}",
      logUnknown: "PC {pc}: Unknown instruction {opcode}",
      logRemote: "Executing remote command...",
      logRemoteExec: "Remote command {opcode} with operand {operand} executed.",
      footerLicense: "MIT License Robson Cassiano",
      footerMotto: "Live Long and Prosper 🖖🏻"
    },
    pt: {
      mainTitle: "Setun Simulador do Computador Ternário",
      aboutTitle: "Sobre o Setun",
      componentsTitle: "Componentes Principais",
      instructionsTitle: "Conjunto de Instruções",
      usageTitle: "Como Usar",
      readingTitle: "Como Ler os Resultados",
      ft1Label: "FT-1 (Entrada de Programa)",
      ft2Label: "FT-2 (Entrada de Dados)",
      printerLabel: "Impressora EUM-46",
      ft1Placeholder: "Insira o programa ternário aqui...",
      ft2Placeholder: "Insira dados ternários aqui...",
      regS: "Somador",
      regR: "Multiplicando",
      regK: "Comando",
      regC: "Contador de Comandos",
      regF: "Modificador",
      regW: "ω",
      regMB: "Zona MB",
      switchNK: "Entrada de Comando",
      switchAO: "Endereço de Parada",
      loadProgram: "Ler Fita do Programa",
      loadData: "Ler Fita de Dados",
      initialStart: "Carregar",
      start: "Iniciar",
      step: "Passo",
      stop: "Parar",
      remoteCmd: "Comando Remoto",
      aboutText: `"Setun VS" é um simulador do Setun MCVM, um computador ternário soviético. Os principais elementos são RAM, registradores, painel de controle e dispositivos periféricos de entrada (FT-1, FT-2) e saída (EUM-46).`,
      registersLabel: "Registradores:",
      registersDesc: "Exibem o estado interno da máquina.",
      regSLabel: "S (Resultado):",
      regSDesc: "Registrador de 18 trits para resultados de operações.",
      regRLabel: "R (Multiplicador):",
      regRDesc: "Registrador de 18 trits usado em operações de multiplicação.",
      regFLabel: "F (Modificação):",
      regFDesc: "Registrador de modificação de 5 trits.",
      regCLabel: "C (Endereço de Comando):",
      regCDesc: "Registrador de endereço de comando de 5 trits.",
      regKLabel: "K (Comando):",
      regKDesc: "Registrador de comando de 9 trits que armazena a instrução atual.",
      regWLabel: "ω (w):",
      regWDesc: "Determina a transferência de controle em desvios condicionais.",
      regMBLabel: "МБ (MB):",
      regMBDesc: "Endereço da última zona do tambor magnético acessada.",
      switchesLabel: "Interruptores (Entrada de Comando, Endereço de Parada):",
      switchesDesc: "Permitem a entrada manual de comandos e endereços. Clique para alternar entre os estados (+1, 0, -1).",
      buttonsLabel: "Botões de Controle:",
      btnLoadLabel: "Carregar:",
      btnLoadDesc: "Carrega dados da fita perfurada do dispositivo FT-1 para a RAM.",
      btnStartLabel: "Iniciar:",
      btnStartDesc: "Inicia a execução do programa.",
      btnStopLabel: "Parar:",
      btnStopDesc: "Encerra a execução do programa (não implementado).",
      btnRemoteLabel: "Comando Remoto:",
      btnRemoteDesc: "Executa o comando inserido manualmente nos interruptores.",
      ioLabel: "Dispositivos de E/S:",
      ioFtLabel: "FT-1 / FT-2:",
      ioFtDesc: "Simulam leitores de fita perfurada para carregar programas e dados.",
      ioPrinterLabel: "Impressora EUM-46:",
      ioPrinterDesc: "Exibe a saída do programa (parcialmente implementada).",
      tableTh1: "Código (Ternário)",
      tableTh2: "Código (Nove)",
      tableTh3: "Nome da Operação",
      tableTh4: "Descrição",
      opName_30: "Enviar para S",
      opName_33: "Adição a S",
      opName_3x: "Subtração a S",
      opName_40: "Multiplicação 0",
      opName_43: "Multiplicação +",
      opName_4x: "Multiplicação -",
      opName_20: "Multiplicação bit a bit",
      opName_23: "Enviar para R",
      opName_2x: "Parar",
      opName_10: "Salto condicional 0",
      opName_13: "Salto condicional +",
      opName_1x: "Salto condicional -",
      opName_00: "Salto incondicional",
      opName_x0: "Saída-entrada",
      opName_y3: "Escrever de S",
      opName_zhx: "Parar (Não utilizado)",
      opDesc_2x: "Parar; (A*)=>(R)",
      opDesc_10: "A*=>(C) quando w=0",
      opDesc_13: "A*=>(C) quando w=+",
      opDesc_1x: "A*=>(C) quando w=-",
      opDesc_x0: "Entrada para Fa*. Saída de Fa*",
      opDesc_zhx: "Para a execução",
      instructionsNote: "<i>Nota: Este é um subconjunto simplificado para demonstração. A máquina Setun original tinha um conjunto de instruções mais completo.</i>",
      usageLi1_1: "Carregar Programa:",
      usageLi1_2: "Insira o programa no campo FT-1 e clique em 'Carregar Programa'.",
      usageLi2: `<strong>Exemplo de Programa:</strong> Para carregar o número 10 e depois adicionar -4, resultando em 6.
<pre>
// Carrega 10 (...+0+) no Somador S
+00 000000000000000+0+
// Adiciona -4 (...0-+) ao Somador S
+0+ 0000000000000000-+
// Para o programa
--- 000000000000000000
</pre>`,
      usageLi3_1: "Carregar para a RAM:",
      usageLi3_2: "Clique no botão <strong>'Carregar'</strong>. Isso transfere os dados da fita para a memória.",
      usageLi4_1: "Executar:",
      usageLi4_2: "Clique no botão <strong>'Iniciar'</strong> para começar a execução.",
      usageLi5_1: "Observar:",
      usageLi5_2: "As luzes do registrador 'S' mostrarão o valor 6 (...+--).",
      readingContent: `<p>A chave para ler o painel é entender o <strong>sistema ternário balanceado</strong>. Cada par de luzes (bulbs) representa um "trit", que pode ter três valores:</p><ul><li><strong>+1:</strong> A luz de cima está acesa.</li><li><strong>0:</strong> Ambas as luzes estão apagadas.</li><li><strong>-1:</strong> A luz de baixo está acesa.</li></ul><p>Para converter o valor de um registrador para decimal, você deve multiplicar o valor de cada trit (1, 0 ou -1) pela potência de 3 correspondente à sua posição, começando com 3<sup>0</sup> na extrema direita.</p><p><strong>Exemplo prático: Lendo o número 10 no Somador (S)</strong></p><p>Imagine que as luzes superiores nas posições <strong>16</strong> e <strong>18</strong> estão acesas. A leitura seria:</p><ul><li>... (outros trits são 0) ...</li><li><strong>Posição 16 (+1):</strong> 1 × 3<sup>2</sup> = 9</li><li><strong>Posição 17 (0):</strong> 0 × 3<sup>1</sup> = 0</li><li><strong>Posição 18 (+1):</strong> 1 × 3<sup>0</sup> = 1</li></ul><p><strong>Total:</strong> 9 + 0 + 1 = 10.</p>`,
      logTape1Ready: "Fita de programa pronta. Use 'Carregar' para carregar na RAM.",
      logTape2Ready: "Fita de dados pronta.",
      logInitialStart: "Carregar: Carregando programa da FT-1 para a RAM...",
      logProgramLoaded: "Programa carregado. {count} instruções.",
      logRun: "Iniciando execução do programa.",
      logStop: "Execução interrompida pelo usuário.",
      logHalted: "Programa parado. Pressione 'Carregar' para recarregar.",
      logEnd: "Fim do programa ou halt.",
      logStep: "PC {pc}: Transferido valor {value} para S.",
      logStepExec: "Executando passo no PC {pc}...",
      logAdd: "PC {pc}: Adicionado valor {value} a S. Novo valor: {newValue}",
      logSub: "PC {pc}: Subtraído valor {value} de S. Novo valor: {newValue}",
      logStore: "PC {pc}: Armazenado valor de S ({value}) no endereço {address}",
      logJump: "PC {pc}: Salto para o endereço {address}",
      logHaltInstruction: "PC {pc}: Instrução de parada encontrada. Valor final em S: {value}",
      logUnknown: "PC {pc}: Instrução desconhecida {opcode}",
      logRemote: "Executando comando remoto...",
      logRemoteExec: "Comando remoto {opcode} com operando {operand} executado."
    }
  };

  const setun = {
    registers: { S: Array(18).fill(0), R: Array(18).fill(0), F: Array(5).fill(0), C: Array(5).fill(0), K: Array(9).fill(0), W: [0], MB: Array(4).fill(0) },
    ram: Array(243 * 2).fill(0), // 243 addresses, each with opcode and operand
    pc: 0,
    running: false,
    halted: false,
    registerSizes: { S: 18, R: 18, F: 5, C: 5, K: 9, W: 1, MB: 4 },
    switchSetSizes: { 'nk': 18, 'ao': 5 },
    manualSwitches: { nk: Array(18).fill(0), ao: Array(5).fill(0) },
    currentLang: 'pt',
    translations: translations,

    init() {
      // Initialize language from URL query parameter (?lang=en-us or ?lang=pt-br)
      const urlLang = this.getLangFromUrl();
      if (urlLang) {
        this.currentLang = urlLang;
      }

      this.buildUI();
      this.attachEventListeners();
      this.setLanguage(this.currentLang); // This will re-build and re-attach
      this.updateUI();
      this.initAccordion();
      this.updateButtonStates();

      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
      applyTheme(initialTheme);
    },

    initAccordion() {
      const accordionItems = document.querySelectorAll('.accordion-item');
      accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        header.addEventListener('click', () => {
          accordionItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
              otherItem.classList.remove('active');
              otherItem.querySelector('.accordion-content').style.display = 'none';
            }
          });
          item.classList.toggle('active');
          content.style.display = item.classList.contains('active') ? 'block' : 'none';
        });
      });
    },

    // Read and normalize language from URL (?lang=en-us|pt-br|en|pt)
    getLangFromUrl() {
      try {
        const params = new URLSearchParams(window.location.search);
        const raw = (params.get('lang') || '').toLowerCase();
        if (["en", "en-us", "en_us", "en-gb", "en-uk"].includes(raw)) return 'en';
        if (["pt", "pt-br", "pt_br", "pt-pt"].includes(raw)) return 'pt';
        return null;
      } catch (_) {
        return null;
      }
    },

    // Update the URL query parameter to reflect the chosen language without reloading
    updateLangInUrl(lang) {
      try {
        const params = new URLSearchParams(window.location.search);
        // Use explicit locale in URL as per requirement examples
        params.set('lang', lang === 'pt' ? 'pt-br' : 'en-us');
        const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
        window.history.replaceState({}, '', newUrl);
      } catch (_) {
        // noop if URL manipulation fails
      }
    },

    // Normalize and apply language; also reflect it in document.lang
    setLanguage(lang) {
      this.currentLang = lang;
      document.documentElement.lang = (lang === 'pt') ? 'pt-BR' : 'en-US';

      document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        const translation = this.translations[lang][key];
        if (translation) {
          if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
            el.placeholder = translation;
          } else if (el.dataset.htmlContent === 'true') {
            el.innerHTML = translation;
          } else {
            el.textContent = translation;
          }
        }
      });

      document.getElementById('lang-pt').classList.toggle('active', lang === 'pt');
      document.getElementById('lang-en').classList.toggle('active', lang === 'en');

      // Re-build UI to update labels inside dynamic components
      this.buildUI();
      this.attachEventListeners(); // Re-attach listeners after rebuilding
      this.updateUI(); // Refresh UI state
    },

    buildUI() {
      const container = document.getElementById('setun-emulator');

      const createIndicatorComponent = (name, langKey, size) => {
        let indicatorsHTML = '';

        const createTritHTML = (tritIndex) => {
          return `<div class="trit" id="${name.toLowerCase()}-trit-${tritIndex}">
                            <div class="bulb bulb-pos"></div>
                            <div class="bulb bulb-neg"></div>
                            <div class="trit-label">${tritIndex + 1}</div>
                        </div>`;
        };

        if (name === 'K') {
          let opcodeTrits = '';
          for (let i = 0; i < 3; i++) {
            opcodeTrits += createTritHTML(i);
          }

          let operandTrits = '';
          for (let i = 3; i < size; i++) {
            operandTrits += createTritHTML(i);
          }
          indicatorsHTML = `<div class="opcode-group">${opcodeTrits}</div>${operandTrits}`;
        } else {
          for (let i = 0; i < size; i++) {
            indicatorsHTML += createTritHTML(i);
          }
        }

        const labelText = this.translations[this.currentLang][langKey] || langKey;
        const displayName = (name === 'W' || name === 'MB') ? '' : ` (${name})`;
        return `<div class="component indicator-component" id="indicator-${name.toLowerCase()}">
                                <div class="component-label" data-lang-key="${langKey}">${labelText}${displayName} ${ name==='S' ? '<span class="digital-display" id="display-s">0</span>' : (name==='K' ? '<span class="digital-display" id="display-k">---</span>' : '') }</div>
                                <div class="indicator-row">${indicatorsHTML}</div>
                            </div>`;
      };

      const createSwitchComponent = (name, langKey, size) => {
        let switches = '';
        for (let i = 0; i < size; i++) {
          switches += `<div class="switch" data-value="${this.manualSwitches[name.toLowerCase()][i]}" data-direction="up" id="${name.toLowerCase()}-switch-${i}">
                                        <div class="switch-body">
                                            <div class="switch-knob">
                                                <span class="switch-value">${this.manualSwitches[name.toLowerCase()][i]}</span>
                                            </div>
                                        </div>
                                        <div class="trit-label">${i + 1}</div>
                                    </div>`;
        }
        return `<div class="component switch-component" id="switch-${name.toLowerCase()}">
                                <div class="component-label" data-lang-key="${langKey}">${this.translations[this.currentLang][langKey]}</div>
                                <div class="switch-row">${switches}</div>
                            </div>`;
      };

      const createButton = (id, langKey) => {
        const label = this.translations[this.currentLang][langKey];
        return `<button class="button" id="${id}">
                                <div class="icon"></div>
                                <span data-lang-key="${langKey}">${label}</span>
                            </button>`;
      };

      let html = `
                    <div class="pult">
                        <div class="register-group">
                            ${createIndicatorComponent('S', 'regS', this.registerSizes.S)}
                            ${createIndicatorComponent('R', 'regR', this.registerSizes.R)}
                        </div>
                        <div class="register-group">
                            ${createIndicatorComponent('K', 'regK', this.registerSizes.K)}
                            ${createIndicatorComponent('C', 'regC', this.registerSizes.C)}
                            ${createIndicatorComponent('F', 'regF', this.registerSizes.F)}
                            <div style="display: flex; gap: 20px; justify-content: center;">
                                ${createIndicatorComponent('W', 'regW', 1)}
                                ${createIndicatorComponent('MB', 'regMB', this.registerSizes.MB)}
                            </div>
                        </div>
                        <div class="register-group">
                            ${createSwitchComponent('nk', 'switchNK', this.switchSetSizes.nk)}
                            ${createSwitchComponent('ao', 'switchAO', this.switchSetSizes.ao)}
                        </div>
                    </div>
                    <div class="control-panel">
                        ${createButton('btn-initial-start', 'initialStart')}
                        ${createButton('btn-start', 'start')}
                        ${createButton('btn-step', 'step')}
                        ${createButton('btn-stop', 'stop')}
                        ${createButton('btn-remote-cmd', 'remoteCmd')}
                    </div>
                `;

      container.innerHTML = html;

      document.getElementById('btn-start').style.backgroundColor = 'var(--button-start-bg)';
      document.getElementById('btn-stop').style.backgroundColor = 'var(--button-stop-bg)';
    },

    attachEventListeners() {
      const container = document.getElementById('setun-emulator');

      document.getElementById('lang-en').addEventListener('click', () => { this.updateLangInUrl('en'); this.setLanguage('en'); });
      document.getElementById('lang-pt').addEventListener('click', () => { this.updateLangInUrl('pt'); this.setLanguage('pt'); });

      container.querySelector('#btn-initial-start').addEventListener('click', () => this.initialStart());
      container.querySelector('#btn-start').addEventListener('click', () => this.run());
      container.querySelector('#btn-step').addEventListener('click', () => {
        if (!this.running && !this.halted) {
          this.step();
        }
      });
      container.querySelector('#btn-stop').addEventListener('click', () => this.stop());
      container.querySelector('#btn-remote-cmd').addEventListener('click', () => this.executeRemoteCommand());

      document.getElementById('ft1-load').addEventListener('click', () => this.logMessage("logTape1Ready"));
      document.getElementById('ft2-load').addEventListener('click', () => this.logMessage("logTape2Ready"));

      document.getElementById('clear-printer-btn').addEventListener('click', () => {
        document.getElementById('printer-output').textContent = '';
      });

      Object.keys(this.switchSetSizes).forEach(setName => {
        for (let i = 0; i < this.switchSetSizes[setName]; i++) {
          const sw = container.querySelector(`#${setName}-switch-${i}`);
          sw.addEventListener('click', () => {
            let value = parseInt(sw.dataset.value);
            let direction = sw.dataset.direction;

            if (value === 0 && direction === 'up') {
              value = 1;
            } else if (value === 1) {
              value = 0;
              direction = 'down';
            } else if (value === 0 && direction === 'down') {
              value = -1;
            } else if (value === -1) {
              value = 0;
              direction = 'up';
            }

            this.manualSwitches[setName][i] = value;
            sw.dataset.value = value;
            sw.dataset.direction = direction;
            sw.querySelector('.switch-value').textContent = value;
          });
        }
      });
    },

    updateButtonStates() {
      const startBtn = document.getElementById('btn-start');
      const stepBtn = document.getElementById('btn-step');
      const stopBtn = document.getElementById('btn-stop');

      if (!startBtn || !stepBtn || !stopBtn) return;

      if (this.running) {
        startBtn.disabled = true;
        stepBtn.disabled = true;
        stopBtn.disabled = false;
      } else if (this.halted) {
        startBtn.disabled = true;
        stepBtn.disabled = true;
        stopBtn.disabled = true;
      } else { // Idle, ready to start
        startBtn.disabled = false;
        stepBtn.disabled = false;
        stopBtn.disabled = true;
      }
    },

    updateUI() {
      Object.keys(this.registers).forEach(reg => {
        const size = this.registerSizes[reg];
        for (let i = 0; i < size; i++) {
          const tritEl = document.getElementById(`${reg.toLowerCase()}-trit-${i}`);
          if (tritEl) {
            const val = this.registers[reg][i] || 0;
            const bulbPos = tritEl.querySelector('.bulb-pos');
            const bulbNeg = tritEl.querySelector('.bulb-neg');
            bulbPos.classList.toggle('on', val === 1);
            bulbNeg.classList.toggle('on', val === -1);
          }
        }
      });

      // Update digital displays for S and K
      const sDisplay = document.getElementById('display-s');
      if (sDisplay) {
        const sDecimal = this.tritArrayToNumber(this.registers.S);
        sDisplay.textContent = sDecimal.toString();
      }

      const kDisplay = document.getElementById('display-k');
      if (kDisplay) {
        const opcodeTrits = this.registers.K.slice(0, 3);
        const opcodeStr = opcodeTrits.map(t => t === 1 ? '+' : (t === -1 ? '-' : '0')).join('');
        const name = this.getOpcodeName(opcodeStr);
        kDisplay.textContent = name ? `${name} (${opcodeStr})` : opcodeStr;
      }
    },

    logMessage(key, params = {}) {
      const output = document.getElementById('printer-output');
      const time = new Date().toLocaleTimeString();
      let msg = this.translations[this.currentLang][key] || key;

      for (const p in params) {
        msg = msg.replace(`{${p}}`, params[p]);
      }

      output.textContent += `[${time}] ${msg}\n`;
      output.scrollTop = output.scrollHeight;
    },

    parseTritString(str) {
      return str.toUpperCase().split('').map(char => {
        if (char === '1' || char === '+') return 1;
        if (char === 'T' || char === '-') return -1;
        return 0;
      });
    },

    initialStart() {
      this.logMessage("logInitialStart");
      const programText = document.getElementById('ft1-input').value;
      const lines = programText.split(/[\n\r]+/).filter(line => line.trim() !== '' && !line.trim().startsWith('//'));

      this.ram.fill(0);
      let memAddress = 0;
      lines.forEach(line => {
        const parts = line.trim().split(/\s+/);
        if (parts.length >= 1) { // Can be just an opcode or data
          const instruction = this.parseTritString(parts[0]);
          const data = parts.length > 1 ? this.parseTritString(parts[1]) : Array(18).fill(0);

          if ((memAddress * 2) < this.ram.length) {
            this.ram[memAddress * 2] = { type: 'opcode', value: instruction };
            this.ram[memAddress * 2 + 1] = { type: 'operand', value: data };
            memAddress++;
          }
        }
      });

      this.pc = 0;
      this.halted = false;
      this.running = false;
      this.registers.S.fill(0);
      this.registers.R.fill(0);
      this.registers.C.fill(0);
      this.registers.K.fill(0);

      this.logMessage("logProgramLoaded", {count: lines.length});
      this.updateUI();
      this.updateButtonStates();
    },

    run() {
      if (this.halted || this.running) return;
      this.running = true;
      this.logMessage("logRun");
      this.updateButtonStates();

      const executeCycle = () => {
        if (!this.running || this.halted) {
          this.running = false; // Ensure running is false if loop stops
          this.updateButtonStates();
          return;
        }
        this.step();
        setTimeout(executeCycle, 250);
      };
      executeCycle();
    },

    stop() {
      this.running = false;
      this.halted = true;
      this.logMessage("logStop");
      this.updateButtonStates();
    },

    getEffectiveAddress(operand) {
      const addressTrits = operand.slice(-5); // Get the last 5 trits for the address
      const baseAddress = this.tritArrayToNumber(addressTrits);
      const modifier = this.tritArrayToNumber(this.registers.F);
      return (baseAddress + modifier);
    },

    step() {
      if (this.halted) return;

      const ramIndex = this.pc * 2;

      if (ramIndex >= this.ram.length || !this.ram[ramIndex]) {
        this.running = false;
        this.halted = true;
        if (!this.ram[ramIndex]) this.logMessage("logEnd");
        this.updateUI();
        this.updateButtonStates();
        return;
      }

      this.logMessage("logStepExec", { pc: this.pc });
      this.registers.C = this.numberToTritArray(this.pc, 5);

      const instruction = this.ram[ramIndex];
      const operandEntry = this.ram[ramIndex + 1];

      if (!instruction || instruction.type !== 'opcode' || !operandEntry) {
        this.pc += 1;
        this.updateUI();
        this.updateButtonStates();
        return;
      }

      const opcodeStr = instruction.value.map(t => ({ '1': '+', '0': '0', '-1': '-' })[t]).join('');

      this.registers.K.fill(0);
      instruction.value.forEach((trit, i) => this.registers.K[i] = trit);

      let pcModified = false;

      let valueToOperateOn = operandEntry.value;
      let effectiveAddress;

      switch(opcodeStr) {
        case '+00':
          this.registers.S = valueToOperateOn.slice();
          this.logMessage("logStep", {pc: this.pc, value: this.tritArrayToNumber(valueToOperateOn)});
          break;
        case '+0+':
          this.registers.S = this.ternaryAdd(this.registers.S, valueToOperateOn);
          this.logMessage("logAdd", {pc: this.pc, value: this.tritArrayToNumber(valueToOperateOn), newValue: this.tritArrayToNumber(this.registers.S)});
          break;
        case '+0-':
          const negatedVal = valueToOperateOn.map(t => -t);
          this.registers.S = this.ternaryAdd(this.registers.S, negatedVal);
          this.logMessage("logSub", {pc: this.pc, value: this.tritArrayToNumber(valueToOperateOn), newValue: this.tritArrayToNumber(this.registers.S)});
          break;
        case '-++':
          effectiveAddress = this.getEffectiveAddress(operandEntry.value);
          if (this.ram[effectiveAddress * 2 + 1]) {
            this.ram[effectiveAddress * 2 + 1].value = this.registers.S.slice();
            this.logMessage("logStore", {pc: this.pc, value: this.tritArrayToNumber(this.registers.S), address: effectiveAddress});
          }
          break;
        case '000':
          effectiveAddress = this.getEffectiveAddress(operandEntry.value);
          this.pc = effectiveAddress;
          pcModified = true;
          this.logMessage("logJump", {pc: this.pc, address: effectiveAddress});
          break;
        case '0++':
          effectiveAddress = this.getEffectiveAddress(operandEntry.value);
          if(this.registers.W[0] === 1) {
            this.pc = effectiveAddress;
            pcModified = true;
            this.logMessage("logJump", {pc: this.pc, address: effectiveAddress});
          }
          break;
        case '0+-':
          effectiveAddress = this.getEffectiveAddress(operandEntry.value);
          if(this.registers.W[0] === -1) {
            this.pc = effectiveAddress;
            pcModified = true;
            this.logMessage("logJump", {pc: this.pc, address: effectiveAddress});
          }
          break;
        case '0+0':
          effectiveAddress = this.getEffectiveAddress(operandEntry.value);
          if(this.registers.W[0] === 0) {
            this.pc = effectiveAddress;
            pcModified = true;
            this.logMessage("logJump", {pc: this.pc, address: effectiveAddress});
          }
          break;
        case '+--':
        case '---':
          this.halted = true;
          this.running = false;
          this.logMessage("logHaltInstruction", {pc: this.pc, value: this.tritArrayToNumber(this.registers.S)});
          break;
        default:
          this.logMessage("logUnknown", {pc: this.pc, opcode: opcodeStr});
          this.halted = true;
          this.running = false;
          break;
      }

      const s_val = this.tritArrayToNumber(this.registers.S);
      this.registers.W[0] = s_val > 0 ? 1 : (s_val < 0 ? -1 : 0);

      if (!this.halted && !pcModified) {
        this.pc += 1;
      }

      this.updateUI();
      this.updateButtonStates();
    },

    ternaryAdd(arrA, arrB) {
      let carry = 0;
      const result = Array(18).fill(0);
      for (let i = 17; i >= 0; i--) {
        const sum = (arrA[i] || 0) + (arrB[i] || 0) + carry;
        switch (sum) {
          case 3: result[i] = 0; carry = 1; break;
          case 2: result[i] = -1; carry = 1; break;
          case 1: result[i] = 1; carry = 0; break;
          case 0: result[i] = 0; carry = 0; break;
          case -1: result[i] = -1; carry = 0; break;
          case -2: result[i] = 1; carry = -1; break;
          case -3: result[i] = 0; carry = -1; break;
          default: result[i] = 0; carry = 0;
        }
      }
      return result;
    },

    tritArrayToNumber(arr) {
      let num = 0;
      let power = 1;
      for(let i = arr.length - 1; i >= 0; i--) {
        num += (arr[i] || 0) * power;
        power *= 3;
      }
      return num;
    },

    numberToTritArray(num, size) {
      const arr = Array(size).fill(0);
      let n = num;
      // Using balanced ternary representation
      for (let i = size - 1; i >= 0 && (n !== 0 || i === size - 1) ; i--) {
        let rem = ((n % 3) + 3) % 3;
        n = Math.floor(n / 3);
        if (rem === 2) {
          rem = -1;
          n++;
        }
        arr[i] = rem;
      }
      return arr;
    },

    getOpcodeName(opcodeStr) {
      const map = {
        '+00': 'opName_30',
        '+0+': 'opName_33',
        '+0-': 'opName_3x',
        '++0': 'opName_40',
        '+++': 'opName_43',
        '++-': 'opName_4x',
        '+-0': 'opName_20',
        '+-+': 'opName_23',
        '+--': 'opName_2x',
        '0+0': 'opName_10',
        '0++': 'opName_13',
        '0+-': 'opName_1x',
        '000': 'opName_00',
        '-00': 'opName_x0',
        '-++': 'opName_y3',
        '---': 'opName_zhx'
      };
      const key = map[opcodeStr];
      if (!key) return null;
      return this.translations[this.currentLang][key] || null;
    },

    executeRemoteCommand() {
      this.logMessage("logRemote");
      const opcode = this.manualSwitches.nk.slice(0, 9);
      const operand = this.manualSwitches.nk.slice(9);

      this.ram[0] = {type: 'opcode', value: opcode};
      this.ram[1] = {type: 'operand', value: Array(18).fill(0)}; // Dummy operand, address comes from manual switches
      this.ram[1].value.splice(4, 5, ...this.manualSwitches.ao);

      this.ram[2] = {type: 'opcode', value: [-1,-1,-1]}; // Halt
      this.ram[3] = {type: 'operand', value: Array(18).fill(0)};

      this.pc = 0;
      this.halted = false;
      this.running = false;
      this.step(); // Execute just one command and then halt
    }
  };

  setun.init();
});
