function convertMinutes() {
    // Получаем значение из текстового поля ввода
    const input = document.querySelector(".enter-num").value;

    // Преобразуем значение в число
    const minutes = parseInt(input, 10);

    // Проверяем, что введенное значение является числом
    if (isNaN(minutes)) {
        document.querySelector(".result").textContent = "Введіть корректне число";
        return;
    }

    // Вычисляем количество дней, часов, минут и секунд
    const days = Math.floor(minutes / (60 * 24));
    const remainingMinutes = minutes % (60 * 24);
    const hours = Math.floor(remainingMinutes / 60);
    const mins = remainingMinutes % 60;

    // Время в секундах (если нужно)
    const seconds = 0;

    // Форматируем результат в виде "дн. 00:00:00"
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const resultText = `${days} дн. ${formattedTime}`;

    // Обновляем текстовое содержимое элемента .result
    document.querySelector(".result").textContent = resultText;
}

// Назначаем обработчик события на кнопку
document.querySelector(".enter-button").addEventListener("click", convertMinutes);

console.log(1);