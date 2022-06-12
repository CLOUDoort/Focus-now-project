const form = document.getElementById("form") as HTMLFormElement
const input = document.getElementById("input") as HTMLInputElement

form.addEventListener("submit", (e) => {
  e.preventDefault()

  if (input.value == "" || input.value == null) return

  const goal = input.value

  addGoalItem(goal)
})

function addGoalItem(goal: string) {
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  label.append(checkbox, goal)
  item.append(label)
}
