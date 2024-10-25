const eventDate = new Date('2024-10-26T14:10:00'); // Задайте нужную дату и время

        // Функция для обновления таймера
        function updateCountdown() {
            const now = new Date();
            const timeRemaining = eventDate - now;

            if (timeRemaining > 0) {
                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                document.getElementById('days').textContent = String(days).padStart(2, '0');
                document.getElementById('hours').textContent = String(hours).padStart(2, '0');
                document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
                document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
            } else {
                document.getElementById('countdown-timer').textContent = 'Событие началось!';
            }
        }

        // Обновлять таймер каждую секунду
        setInterval(updateCountdown, 1000);