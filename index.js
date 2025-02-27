        let balance = 0; 
        let transactions = []; 

        // Function to update the balance display
        function updateBalance() {
            document.getElementById('balance').textContent = balance.toFixed(2);
        }

         function updateTransactionHistory() {
            const historyList = document.getElementById('transaction-history');
            historyList.innerHTML = ''; 

             // Loop through transactions and display them
             transactions.forEach(transaction => {
                const listItem = document.createElement('li');
                listItem.className = 'p-2 border rounded bg-gray-50';
                listItem.textContent = `${transaction.date} - ${transaction.type}: $${transaction.amount} (Balance: $${transaction.newBalance})`;
                historyList.appendChild(listItem);
            });
        }

        //  add money to the balance
        function addMoney() {
            let amount = parseFloat(document.getElementById('amount').value); 
            if (isNaN(amount) || amount <= 0) {
                alert('Please enter a valid amount'); 
                return;
            }
            balance += amount; 

             //  transaction record
             transactions.unshift({
                date: new Date().toLocaleString(),
                type: 'Add',
                amount: amount.toFixed(2),
                newBalance: balance.toFixed(2)
            });

            updateBalance(); 
            updateTransactionHistory(); 
            document.getElementById('amount').value = ''; 
        }


         // withdraw money from the balance
         function withdrawMoney() {
            let amount = parseFloat(document.getElementById('amount').value); 
            if (isNaN(amount) || amount <= 0) {
                alert('Please enter a valid amount'); 
                return;
            }
            if (amount > balance) {
                alert('Insufficient funds'); 
                return;
            }
            balance -= amount; 

            transactions.unshift({
                date: new Date().toLocaleString(),
                type: 'Withdraw',
                amount: amount.toFixed(2),
                newBalance: balance.toFixed(2)
            });

            updateBalance(); 
            updateTransactionHistory(); 
            document.getElementById('amount').value = '';
        }



