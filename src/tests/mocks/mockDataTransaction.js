const dataReponse = {
		id: 1,
		name: "m3gan eu sou robô",
		lastName: null,
		email: "test@test.com",
		hashPassword: "$2a$10$ct.1ZS11o6b10aASci3sIe826wQWN/6Rxl.e0XT.y48ZwWGuE3Rt.",
		createdAt: "2023-07-07",
		transactions: [
			{
				amount: 100.00,
				description: "Smartband XYZ 3.0",
				paymentMethod: "debit_card",
				cardNumber: 2345678912345678,
				cardHolderName: "m3gan eu sou robô",
				cardExpirationDate: "2021-12",
				cardCvv: 123,
			},
		]
};

const dataReponsePayable = {
	id: 1,
	name: "m3gan eu sou robô",
	lastName: null,
	email: "test@test.com",
	hashPassword: "$2a$10$ct.1ZS11o6b10aASci3sIe826wQWN/6Rxl.e0XT.y48ZwWGuE3Rt.",
	createdAt: "2023-07-07",
	transactions: [
		{
			amount: 100.00,
			description: "Smartband XYZ 3.0",
			paymentMethod: "debit_card",
			cardNumber: 2345678912345678,
			cardHolderName: "m3gan eu sou robô",
			cardExpirationDate: "2021-12",
			cardCvv: 123,
			payable: {
				transactionId: 1,
				status: "paid",
				paymentDate: "2023-07-07",
				amount: 97.00
			}
		},
	]
};

const outputPayable = {
	message: "Ballance successfully",
	status: "paid",
	balance: 97.00,
}

const inputTransaction = {
	amount: 100.00,
	description: "Boneco power ranger",
	paymentMethod: "debit_card",
	cardNumber: 2345678912345678,
	cardHolderName: "m3gan eu sou robô",
	cardExpirationDate: "2021-12",
	cardCvv: 874,
}

const User = {
	id: 1,
	name: "m3gan eu sou robô",
	lastName: null,
	email: 'test@test.com'
}

module.exports = {
	dataReponse,
	dataReponsePayable,
	inputTransaction,
	outputPayable,
	User
};