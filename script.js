
const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.todo-list')
const items = JSON.parse(localStorage.getItem('items')) || []

function addItem(event) {
   event.preventDefault()
  
       const text = (this.querySelector('[name=item]')).value
       const item = {
           text: text,
           done: false
       }
  
       items.push(item)
       populateList(items, itemsList)
       localStorage.setItem('items', JSON.stringify(items))
       this.reset()
   }

   
   function populateList(items = [], itemsList) {
    todoList.innerHTML = lists.map((list, i) => {
        
        return `
            <li> 
                <input type="checkbox" data-index=${i} id="item${i}" ${list.done ? 'checked' : ' '}  />
                <label for="">${list.text}</label>
            </li>
        `
    }).join('')
   }
/**
 * @typedef {index} index of data-index
 * @param {event} event 
 */
function toggleDone(event){
    if(!event.target.matches('input'))return
    const el = event.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}




/*KOLLA OM DETTA FUNKAR */
function removeTodoListener(event) {
    // Remove the li element from the DOM
    const li = event.target.parentElement
    li.remove()

    // Also update local storage
    const todoText = event.target.nextSibling.textContent
    removeTodo(todoText)
}
/*KOLLA OM DETTA FUNKAR */


addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)

populateList(items,itemsList)

function formatDate(date) {
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  

  document.getElementById('date').innerHTML = formatDate(new Date()) 

  let currentDate = new Date()
//   let currentMonth = today.getMonth();
  let lastDayOfMonth = new Date(currentDate.getFullYear(), 0 + 1, 0)
  let daysInCurrentMonth = lastDayOfMonth.getDate()
  let dayInWeek = new Date(currentDate.getFullYear(), 0 + 1, 1).getDay()

//   let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const calenderWrapper = document.querySelector('.calenderWrapper')

  console.log(dayInWeek)


  for(let i = 1; i <= dayInWeek; i++) {
      let dayCard = document.createElement('div')
      // class="days"
      dayCard.classList = 'days'
      calenderWrapper.appendChild(dayCard)         
  }

  for(let i = 1; i <= daysInCurrentMonth; i++) {
      let dayCard = document.createElement('div')
      dayCard.innerText = i
      // class="days"
      dayCard.classList = 'days'
      calenderWrapper.appendChild(dayCard)
  }

 
