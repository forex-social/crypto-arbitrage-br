var ccxt = require ('ccxt');
var checkArb = require('./check-arb');

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

let foxbit = new ccxt.foxbit ();
let mercado = new ccxt.mercado ();
let flowbtc = new ccxt.flowbtc ();

let prices = [];


async function fetchData() {

    try {

        let markets1 = await foxbit.fetchTicker('BTC/BRL')
        let final1 = {
        	name: 'foxbit',
        	cost: 0.005,
        	bid: markets1.bid,
        	ask: markets1.ask
        }
        prices.push(final1);


        let markets2 = await mercado.fetchTicker('BTC/BRL')
        let final2 = {
        	name: 'mercado',
        	cost: 0.007,
        	bid: markets2.bid,
        	ask: markets2.ask
        }
        prices.push(final2);


        let markets3 = await flowbtc.fetchTicker('BTC/BRL')
        let final3 = {
        	name: 'flowbtc',
        	cost: 0.0035,
        	bid: markets3.bid,
        	ask: markets3.ask
        }
        prices.push(final3);



        checkArb(prices);
    }

    catch (err) {

    }
    // arbitro(prices[0], prices[1]);
    // arbitro(prices[0], prices[2]);
    // arbitro(prices[1], prices[2]);

    
}

fetchData();


