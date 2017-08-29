# Crypto Arbitrage BR

A basic bot to find arbitrage oppotunities on brazilian crypto exchanges.

Um robô simples para encontrar oportunidades de arbitragem em exchanges (bolsas) de criptomoedas brasileiras.

## Sobre o projeto

Por enquanto esse "robô" é apenas um teste de conceito e não leva custos de saques ou depóositos em consideração (que são caros nessas exchanges).

Custos com comissões são levados em consideração

O tipo de arbitragem implementada é bem simples e leva apenas preços de bid e ask em consideração.

## Instalação

### Pré-requisitos
Você precisa ter Node 6 ou superior instalado

### Como instalar

1. Clone ou baixe o zip desse projeto.
2. Entre no diretório do projeto no terminal e instale as dependências usando o npm install:

`$ npm install`

## Usando

Entre no diretório do projeto no terminal e execute o index.js

`$ node index`

## To do
Esse projeto pode ser muito melhorado. Algumas funcionalidades que podem ser implementadas no futuro:
- Lidar melhor com erros de timeout (hoje o sicript não se não consegue conectar na API de uma exchange não dá erros)
- Toda a automatização de um estratégia que execute essas ordens de arbitragem
-- Autenticação com chave de API nas exchanges
-- Analisar balanço das contas nas exchanges (R$ e BTC)
-- Abrir ordens com tamanhos diferentes dependo da "profundidade" dos livros de oferta em consideração. 

## Contribuindo

Por favor contribua com o projeto e nos ajude a criar um robô mais robusto. Se você quiser conversar sobre o projeto entre contato conosco pelo forex@forex-social.com

1. Faça um Fork no projeto
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Créditos
Esse projeto não teria sido possível sem essa excelente biblioteca: [CCXT – CryptoCurrency eXchange Trading Library](https://github.com/kroitor/ccxt)