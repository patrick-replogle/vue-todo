export function generateTodayDateString() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
}

export function generateDateStringForTodo(inputDate) {
  const dateArr = String(new Date(inputDate)).split(' ');

  return `${dateArr[1]} ${dateArr[2]} ${dateArr[3]}`;
}

export function initTodoState() {
  const localStorageTodos = window.localStorage.getItem('todos');

  if (localStorageTodos) {
    return JSON.parse(localStorageTodos);
  }
  return [];
}
