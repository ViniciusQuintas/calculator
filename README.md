# Calculadora em TypeScript
Este projeto é uma calculadora básica criada em TypeScript com recursos de Programação Orientada a Objetos (POO). Ela foi desenvolvida para fins educacionais, demonstrando a utilização de TypeScript e a interação com o DOM para criar uma interface interativa.
<br>
<br>
![page](src/assets/screenshot/page.png)

# Design e Funcionalidade
A calculadora apresenta uma interface simples com uma entrada de texto que exibe a expressão matemática inserida pelo usuário e botões para os dígitos, operadores e outras funcionalidades. Os botões são organizados em linhas, simulando o layout de uma calculadora real.

Principais funcionalidades:

- **Adição de Dígitos:** O usuário pode adicionar dígitos clicando nos botões numéricos de 0 a 9.
- **Operadores Aritméticos:** Os operadores aritméticos (+, -, *, /) podem ser adicionados à expressão para realizar operações matemáticas.
- **Limpar a Expressão:** O botão "C" limpa a expressão, permitindo que o usuário comece uma nova operação.
- **Backspace:** O botão com o ícone de seta para a esquerda remove o último caractere da expressão.
- **Resultado:** O botão "=" avalia a expressão e exibe o resultado na entrada de texto.
- **Tratamento de Erros:** A calculadora exibe uma mensagem de erro com um alerta visual usando a biblioteca **SweetAlert2** caso a expressão seja inválida ou resulte em "Infinity".

# Tecnologias
As tecnologias utilizadas neste projeto foram:

- **TypeScript:** A linguagem de programação utilizada para desenvolver a calculadora. O TypeScript adiciona tipagem estática e outros recursos ao JavaScript, tornando o código mais robusto e fácil de entender.
- **expr-eval:** Uma biblioteca utilizada para analisar e avaliar expressões matemáticas em formato de string. Ela é usada para avaliar a expressão inserida pelo usuário e obter o resultado.
- **sweetalert2:** Uma biblioteca utilizada para exibir o alerta visual de erro quando a expressão é inválida ou o resultado é "Infinity".
- **HTML e CSS:** Utilizados para criar a estrutura e o estilo da interface da calculadora.
- **Webpack:** Utilizado para empacotar e criar um único arquivo JavaScript (bundle.js) que contém todo o código necessário para a calculadora funcionar corretamente no navegador.

