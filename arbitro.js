function checkOpportunity (exchange1, exchange2) {	

	let amount = 0.1

	// TODO:
	// Check avaliabiality on order book

	// Gross arbitrage possible?
	if (exchange1.bid > exchange2.ask || exchange2.bid > exchange1.ask) {
		
		console.log('Possíveis Oportunidades. Verificando custo para comprar '+amount+' bitcoins....');
		
		// If exchnage 1 sell price > exchange 2 buy price
		if (exchange1.bid > exchange2.ask) {
			
			var priceDifference = (exchange1.bid * amount) - (exchange2.ask * amount);
			console.log('Ganha-se na arbitragem: R$', priceDifference.toFixed(2), 'comprando na', exchange2.name, 'e vendendo na',exchange1.name);

			var buyCost = exchange2.ask * amount * exchange2.cost;
			// console.log('Custo Compra: ', buyCost);
			var sellCost = exchange1.bid * amount * exchange1.cost;
			// console.log('Custo Venda: ', sellCost);
			var totalCost = buyCost + sellCost;
			console.log('Custo Total de taxas: ', totalCost.toFixed(2));

			if (totalCost < priceDifference)  {
				console.log('Buy on ', exchange2.name, 'and Sell on ', exchange1.name );
			} else {
				console.log('O custo não justifica', '\n\n');
			}

		}
		// If exchnage 2 sell price > exchange 1 buy price
		if (exchange2.bid > exchange1.ask) {
			
			var priceDifference = (exchange2.bid * amount) - (exchange1.ask * amount);
			console.log('Ganha-se na arbitragem: R$', priceDifference.toFixed(2), 'comprando na',exchange1.name, 'e vendendo na',exchange2.name);

			var buyCost = exchange1.ask * amount * exchange1.cost;
			// console.log('Custo Compra: ', buyCost);
			var sellCost = exchange2.bid * amount * exchange2.cost;
			// console.log('Custo Venda: ', sellCost);
			var totalCost = buyCost + sellCost;
			console.log('Custo Total de taxas: ', totalCost.toFixed(2));

			if (totalCost < priceDifference)  {
				console.log('Buy on ', exchange1.name, 'and Sell on ', exchange2.name );
			} else {
				console.log('O custo não justifica', '\n\n');
			}

		}
	} else {
		console.log('Não há oportunidades', '\n\n')
	}


}

module.exports = checkOpportunity;



// For testing

// var prices = {

// 	foxbit: {
// 		name: 'foxbit',
// 		cost: 0.005,
// 		bid: 11826,
// 		ask: 11897.5
// 	},

// 	mercado: {
// 		name: 'mercado',
// 		cost: 0.007,
// 		bid: 11970,
// 		ask: 11997
// 	},

// 	flowbtc: {
// 		name: 'flowbtc',
// 		cost: 0.0035,
// 		bid: 11610,
// 		ask: 11998.99
// 	}
// }
// var prices = {

// 	foxbit: {
// 		name: 'foxbit',
// 		cost: 0.005,
// 		bid: 1,
// 		ask: 2
// 	},

// 	mercado: {
// 		name: 'mercado',
// 		cost: 0.007,
// 		bid: 3,
// 		ask: 4,
// 	},

// 	flowbtc: {
// 		name: 'flowbtc',
// 		cost: 0.0035,
// 		bid: 5,
// 		ask: 6,
// 	}
// }


// checkOpportunity(prices.foxbit, prices.flowbtc);

