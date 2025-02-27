        let balance = 0; 
        let transactions = []; 

        // Function to update the balance display
        function updateBalance() {
            document.getElementById('balance').textContent = balance.toFixed(2);
        }

         // Function to update the transaction history display
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


