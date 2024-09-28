// use("CrudDb");
// console.log(db);
// db.createCollection("new_course");

use("backend");
console.log(db);

db.createCollection("new_order");

// db.new_order.insertOne({
// 	name: "Abid Shahrier",
// 	price: 100,
// 	item: "burger"
// });

// db.new_order.insertMany([
// 	{
// 		name: "Abid Shahrier",
// 		price: 100,
// 		item: "burger",
// 		id: 1
// 	},
// 	{
// 		name: "Abid Shahrier",
// 		price: 600,
// 		item: "burger",
// 		id: 2
// 	},
// 	{
// 		name: "Abid Shahrier",
// 		price: 500,
// 		item: "burger",
// 		id: 3
// 	},
// 	{
// 		name: "Abid Shahrier",
// 		price: 100,
// 		item: "burger",
// 		id: 4
// 	},
// 	{
// 		name: "Abid Shahrier",
// 		price: 300,
// 		item: "burger",
// 		id: 5
// 	},
// 	{
// 		name: "Abid Shahrier",
// 		price: 200,
// 		item: "burger",
// 		id: 6
// 	}
// ]);

let a = db.new_order.find({ name: "Abid Shahrier" });
let b = db.new_order.find({ price: 100 });
console.log(a, b);
console.log(a.count());
