# Projeto Weather Forecast

## Visão geral

- Este é um sistema que realiza a previsão do tempo da cidade de Guarapuava
- Com ele, é possível visualizar as temperatuas máxima e mínima, o índice ultravioleta (UV) e a condição atual do clima (exemplo: parcialmente nublado)
- Também está disponível a funcionalidade de verificar a previsão para os próximos 6 dias, sendo mostradas as mesmas informações citadas anteriormente

## Principais bibliotecas utilizadas

- ReactJS (Interfaces e lógica)
- Axios (Consumo de APIs)
- React Toastify (Exibir alertas na tela)
- TailwindCSS (Estilizaçã)
- TypeScript (Tipagem estática)
- Material UI (Componentes. Somente o Loading, nesse caso)

## Organização

### Pastas

- src: Código fonte principal do projeto
- components: Ficam armazenados os componente da aplicação, utilizados para reaproveitamento ou separação do código
- services: Fica a instância do axios, usada para criar as suas configurações
- types: Armazena as tipagens das funções, propriedades, variáveis e estados
- utils: Guarda funções utilitárias, usadas repetitivamente, como formatações
- Fora de src ficam configurações gerais do projeto, tais como configuração de git, tailwind, documentação, dependências e outros

## Funcionamento

### Geral

- Inicialmente tem os arquivo main.tsx, que chama o app.tsx e o renderiza com o React
- Há também o index.css, onde são importadas configurações de estilização do TailwindCSS

### Lógica principal

#### App

- A lógica principal acontece dentro de App.tsx
- Primeiramente temos as importações de funções, hooks e componentes que serão utilizados
- Em seguida, é iniciada a função App, que inicializa dois useState
- O primeiro, guarda o estado do clima atual, que virá da API, enquanto o segundo armazena o carregamento, o qual será usado no memento em que a busca dos dados estiver sendo realizada
- Posteriormente, é implementado um useEffect, responsável por executar quando a página carrega
- Este contém uma IIFE (Immediately Invoked Function Expression), uma função que é invocada no mesmo momento em que é criada. Isso é necessário pois não é possível passar uma função assíncrona para o useEffect
- Dentro da IIFE, o estado do loading é alterado para true, causando uma rerenderização no componente, fazendo com que um spinner seja mostrado na tela
- Na sequência, há uma estrutura trycatch, a qual executará um trecho de código (o que está dentro do bloco try), contudo, em caso de erro, chamará outro trecho (contido no bloco catch). Por fim, vai executar o finally, uma parte que acontecerá independente de havar erros ou não.
- Dentro do try, é feita uma requisição com o intuito de trazer informações sobre a cidade de Guarapuava
- Após, outra chamada à API é feita, a fim de trazer informações sobre o clima se valendo das informações de Guarapuava recebidas anteriormente
- Então, o valor do estado que guarda as informações climáticas é alterado, com o propósito de armazenar os dados obtidos da segunda consulta.
- Em caso de erro em alguma das chamadas, o código dentro do catch será executado, o qual mostra um alerta de erro na tela
- Dentro do bloco finally, o loading retorna para o seu valor inicial (false) para remover o spinner da tela
- A função criada abaixo serve para remover a primeira posição dos itens no array de clima e retorná-lo
- No return, estão as tags jsx, que serão renderizadas em tela
- primeiramente temos um header, mostrando o título do sistema
- Na sequência, há a main, onde será mostrado o spinner, caso o estado de loading seja true
- Logo abaixo, caso não esteja carregando, o nome da cidade e a sigla do Estado serão mostrados, vindos da API
- O card principal, de hoje, será exibido, sendo usado a primeira posição do array que a API retorna
- Os demais cards seão mostrados usando a função que remove o primeiro elemento da lista de climas, e renderizados com o map
