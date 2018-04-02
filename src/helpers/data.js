const sortTransactionData = () =>{
	const data = [
  {
    "timestamp": "2018-03-22T19:44:36.543Z",
    "toAddress": "Alice",
    "amount": "50"
  },
  {
    "timestamp": "2018-03-22T19:44:36.553Z",
    "fromAddress": "Alice",
    "toAddress": "Bob",
    "amount": "12.5"
  },
  {
    "timestamp": "2018-03-23T16:59:25.051Z",
    "toAddress": "olson1sonja@gmail.com",
    "amount": "50"
  },
  {
    "timestamp": "2018-03-26T23:53:25.076Z",
    "fromAddress": "olson1sonja@gmail.com",
    "toAddress": "Bob",
    "amount": "12"
  },
  {
    "timestamp": "2018-03-28T19:27:22.356Z",
    "fromAddress": "Bob",
    "toAddress": "Alice",
    "amount": "1"
  },
  {
    "timestamp": "2018-03-28T19:52:40.142Z",
    "fromAddress": "Alice",
    "toAddress": "Bob",
    "amount": "3"
  },
  {
    "timestamp": "2018-03-28T19:52:40.167Z",
    "fromAddress": "Alice",
    "toAddress": "Bob",
    "amount": "3"
  },
  {
    "timestamp": "2018-03-28T19:57:28.836Z",
    "fromAddress": "Alice",
    "toAddress": "Bob",
    "amount": "1"
  }
];

return data.map((x) => {
return {ts: x.timestamp, amt: x.amount};
})

}

module.exports = {sortTransactionData}