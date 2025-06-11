import * as fs from 'fs';
import * as path from 'path';

// Функция для поиска файлов по имени и содержимому
function searchFiles(directory: string, searchTerm: string, searchInContent: boolean = false): void {
    // Проверяем, существует ли директория
    if (!fs.existsSync(directory)) {
        console.log(`Ошибка: директория ${directory} не существует.`);
        return;
    }

    // Читаем содержимое директории
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.log('Ошибка при чтении директории:', err);
            return;
        }

        // Перебираем файлы в директории
        files.forEach((file) => {
            const filePath = path.join(directory, file);

            // Проверяем, является ли это директорией или файлом
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.log('Ошибка при получении информации о файле:', err);
                    return;
                }

                if (stats.isDirectory()) {
                    // Если это директория, рекурсивно ищем в ней
                    searchFiles(filePath, searchTerm, searchInContent);
                } else {
                    // Если это файл, проверяем его имя
                    if (file.toLowerCase().includes(searchTerm.toLowerCase())) {
                        console.log(`Найден файл по имени: ${filePath}`);
                    }

                    // Если нужно искать по содержимому, открываем файл
                    if (searchInContent && stats.isFile()) {
                        fs.readFile(filePath, 'utf-8', (err, data) => {
                            if (err) {
                                console.log('Ошибка при чтении файла:', err);
                                return;
                            }

                            if (data.includes(searchTerm)) {
                                console.log(`Найден файл по содержимому: ${filePath}`);
                            }
                        });
                    }
                }
            });
        });
    });
}

// Вводные параметры
const directory = './testDirectory'; // Путь к директории для поиска
const searchTerm = 'example'; // Строка для поиска (по имени или содержимому)
const searchInContent = true; // Ищем ли по содержимому файлов?

// Запуск поиска
searchFiles(directory, searchTerm, searchInContent);
