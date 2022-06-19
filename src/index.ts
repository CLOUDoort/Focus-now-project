const form = document.getElementById("form") as HTMLFormElement
const input = document.getElementById("input") as HTMLInputElement

form.addEventListener("submit", (e) => {
  e.preventDefault()

  if (input.value == "" || input.value == null) return

  const goal = input.value

  addGoalItem(goal)
})

function addGoalItem(goal: string) {
  const todoItemList = document.getElementById("todoItemList") as HTMLUListElement

  const item = document.createElement("li")

  item.innerHTML = goal
  todoItemList.append(item)
}
