let tickets = [];
let duration = 7;

function getTicket() {
  const item = {
    id: tickets.length > 0 ? 1 + tickets.at(-1).id : 1,
    date: new Date(),
    waiters: tickets.length,
  };
  tickets.push(item);
  console.log(tickets);

  document.getElementById("ticket").innerHTML = `
    <p>Welcome to EshmatBank!</p>
    <h4 class="display-4">Your ticket number is #${item.id}</h4> 
    <p>
    Before you ${
      item.waiters
    } clients are waiting. Your turn will come in approximately ${
    item.waiters * duration
  } minutes.
    </p>
    <p>${item.date}</p>
  `;
}
