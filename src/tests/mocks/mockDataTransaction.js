const dataReponse = {
		id: 1,
		name: "John Doe",
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
				cardHolderName: "John Doe",
				cardExpirationDate: "2021-12",
				cardCvv: 123,
			}
		]
};

module.exports = dataReponse;