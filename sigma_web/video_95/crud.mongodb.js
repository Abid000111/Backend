use("CrudDb");
console.log(db);
db.createCollection("new_course");

use("backend");
console.log(db);

db.createCollection("new_order");

db.new_order.insertOne({
	name: "Abid Shahrier",
	price: 100,
	item: "burger"
});

db.new_order.insertOne({
	name: "Abid Shahrier",
	price: 60,
	item: "snacks",
	id: 7
});

db.new_order.insertOne({
	name: "Abid Shahrier",
	price: 60,
	item: "snacks",
	id: 8
});

db.new_order.insertOne({
	name: "Abid Shahrier",
	price: 60,
	item: "snacks",
	id: 9
});

db.new_order.insertOne({
	name: "Abid Shahrier",
	price: 60,
	item: "snacks",
	id: 10
});

db.new_order.insertOne({
	name: "Abid Shahrier",
	price: 60,
	item: "snacks",
	id: 11
});

db.new_order.insertMany([
	{
		name: "Abid Shahrier",
		price: 100,
		item: "burger",
		id: 1
	},
	{
		name: "Abid Shahrier",
		price: 600,
		item: "burger",
		id: 2
	},
	{
		name: "Abid Shahrier",
		price: 500,
		item: "burger",
		id: 3
	},
	{
		name: "Abid Shahrier",
		price: 100,
		item: "burger",
		id: 4
	},
	{
		name: "Abid Shahrier",
		price: 300,
		item: "burger",
		id: 5
	},
	{
		name: "Abid Shahrier",
		price: 200,
		item: "burger",
		id: 6
	}
]);

let a = db.new_order.find({ name: "Abid Shahrier" });
let b = db.new_order.find({ price: 100 });
let _b = db.new_order.findOne({ price: 100 });
console.log(a);
console.log(a.toArray());
console.log(b);
console.log(_b);
console.log(a.count());
console.log(b.count());

db.new_order.updateOne({name: "Abid Shahrier"}, {$set:{name: "Mahadi Hasan"}});
db.new_order.updateMany({name: "Abid Shahrier"}, {$set:{name: "Fahim"}});

db.new_order.updateOne({id: 6, item: "snacks", price: 200}, {$set: {item: "pizza", price: 500}});

db.new_order.deleteOne({id: 7});

db.new_order.deleteMany({name: "Fahim"});