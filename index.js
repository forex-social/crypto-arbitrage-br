"use strict";

const ccxt = require ('ccxt');
const checkArb = require('./check-arb');

// Taker
// const costs = {
//  foxbit : 0.005,
//  mercado : 0.007,
//  flowbtc : 0.0035
// }

// Maker
// const costs = {
// 	foxbit : 0.0025,
// 	mercado : 0.003,
// 	flowbtc : 0.0035
// }

async function fetchDataFoxBit() {

  const foxbit = new ccxt.foxbit ();

  const market = await foxbit.fetchTicker('BTC/BRL');

  return {
      name: 'foxbit',
      cost: 0.005,
      bid: market.bid,
      ask: market.ask
  };
};

async function fetchDataMercadoBitcoin() {

  const mercado = new ccxt.mercado();

  const market = await mercado.fetchTicker('BTC/BRL');

  return {
      name: 'mercado',
      cost: 0.007,
      bid: market.bid,
      ask: market.ask
  };
};

async function fetchDataFlowBTC() {

  const flowbtc = new ccxt.flowbtc();

  const market = await flowbtc.fetchTicker('BTC/BRL');

  return {
      name: 'flowbtc',
      cost: 0.0035,
      bid: market.bid,
      ask: market.ask
  };
};

async function fetchData() {

    console.log('Procurando oportunidades....');

    try {

        const dataFoxBit = await fetchDataFoxBit();
        const dataMercadoBitcoin = await fetchDataMercadoBitcoin();
        // const dataFlowBTC = await fetchDataFlowBTC();

        Promise.all([
          await fetchDataFoxBit(), 
          await fetchDataMercadoBitcoin(), 
          // await fetchDataFlowBTC()
          ])
          .then((response) => {
              checkArb(response);
              console.log('Aguardando 1 minuto para procurar oportunidade novamente.')
              setTimeout(fetchData, 60000);
          })
          .catch((err)=> {
              console.error(err.message);
              console.log('Aguardando 1 minuto para procurar oportunidade novamente.')
              setTimeout(fetchData, 60000);
          });
    }

    catch (err) {
        console.error(err.message);
        setTimeout(fetchData, 60000);
    }
    
}

fetchData();