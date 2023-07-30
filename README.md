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

# Como foi construída a calculadora
A calculadora foi construída seguindo uma abordagem de Programação Orientada a Objetos (POO) com TypeScript. Foi criada uma classe `Calculator` que encapsula toda a lógica e funcionalidades da calculadora. A classe possui métodos para adicionar dígitos à expressão, realizar operações matemáticas, limpar a expressão, avaliar o resultado e exibir mensagens de erro quando necessário.

Os elementos da interface da calculadora são selecionados utilizando o DOM em conjunto com os seletores do CSS. Os eventos de clique nos botões são configurados para chamar os métodos apropriados da classe `Calculator`, permitindo que a interação do usuário seja devidamente tratada.

O projeto utiliza as funcionalidades do TypeScript, como tipagem de variáveis e retorno de funções, para tornar o código mais legível, seguro e fácil de manter.

# Como executar o projeto
Para utilizar esse projeto na sua máquina local siga estas etapas:
- Certifique-se de ter o **Node.js** e o **npm** instalados em sua máquina.
- Clone o repositório para sua máquina local utilizando o seguinte comando:
```bash
  git clone https://github.com/ViniciusQuintas/calculator.git
```
- Após clonar o repositório, navegue até o diretório do projeto no terminal:
```bash
  cd calculator
```
- Instale todas as dependências do projeto listadas no arquivo `package.json` com o seguinte comando:
```bash
  npm install
```
- Após a instalação das dependências, execute o seguinte comando para compilar o código TypeScript e criar o arquivo `bundle.js` necessário para a execução da calculadora.
```bash
  npm run build
```
- Por fim, abra o arquivo `index.html` no seu navegador para utilizar a calculadora.

## Observações
- A calculadora é uma implementação simples e básica, projetada para fins de aprendizado e prática. Ela pode não incluir todas as funcionalidades de uma calculadora completa e avançada.
- O projeto pode ser melhorado e expandido de várias maneiras, como a adição de operações mais avançadas, tratamento de casos especiais, melhorias de estilo e layout, entre outros.

# Contribuição
Se você deseja contribuir para o desenvolvimento desse projeto, siga os seguintes passos:

 1️⃣ Faça um fork deste repositório. 
<br>
<br>
 2️⃣ Crie uma nova branch para sua contribuição. 
<br>
<br>
 3️⃣ Faça suas alterações no código. 
<br>
<br>
 4️⃣ Certifique-se de que suas alterações não quebram o funcionamento existente do projeto. 
<br>
<br>
 5️⃣ Faça um pull request com suas alterações. 
<br>
<br>

# Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.
