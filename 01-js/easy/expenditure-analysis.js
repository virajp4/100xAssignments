/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let answers = [];
  let categories = {};

  transactions.forEach((element) => {
    const { category, price } = element;
    if (categories[category]) {
      categories[category] += price;
    } else {
      categories[category] = price;
    }
  });

  Object.keys(categories).map((category) => {
    const temp = {"category": category, "totalSpent": categories[category]}
    answers.push(temp)
  })

  return answers;
}

module.exports = calculateTotalSpentByCategory;
