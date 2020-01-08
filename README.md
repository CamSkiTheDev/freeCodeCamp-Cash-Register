# freeCodeCamp-Cash-Register

### Final Project in The JavaScript Algorithms and Data Structures Projects

# To-Do

Design a cash register drawer function <code>checkCashRegister()</code> that accepts purchase price as the first argument (<code>price</code>), payment as the second argument (<code>cash</code>), and cash-in-drawer (<code>cid</code>) as the third argument.

<code>cid</code> is a 2D array listing available currency.

The <code>checkCashRegister()</code> function should always return an object with a <code>status</code> key and a change key.

Return <code>{status: "INSUFFICIENT_FUNDS", change: []}</code> if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return <code>{status: "CLOSED", change: [...]}</code> with cash-in-drawer as the value for the key <code>change</code> if it is equal to the change due.

Otherwise, return <code>{status: "OPEN", change: [...]}</code>, with the change due in coins and bills, sorted in highest to lowest order, as the value of the <code>change</code> key.