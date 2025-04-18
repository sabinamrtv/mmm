var Student = /** @class */ (function () {
    function Student(name, birthDate, group, studentId, averageScore) {
        this.name = name;
        this.birthDate = birthDate;
        this.group = group;
        this.studentId = studentId;
        this.averageScore = averageScore;
    }
    // Геттеры
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getBirthDate = function () {
        return this.birthDate;
    };
    Student.prototype.getGroup = function () {
        return this.group;
    };
    Student.prototype.getStudentId = function () {
        return this.studentId;
    };
    Student.prototype.getAverageScore = function () {
        return this.averageScore;
    };
    // Сеттеры
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.setBirthDate = function (date) {
        this.birthDate = date;
    };
    Student.prototype.setGroup = function (group) {
        this.group = group;
    };
    Student.prototype.setStudentId = function (id) {
        this.studentId = id;
    };
    Student.prototype.setAverageScore = function (score) {
        this.averageScore = score;
    };
    // Возраст в годах
    Student.prototype.getAge = function () {
        var today = new Date();
        var age = today.getFullYear() - this.birthDate.getFullYear();
        var monthDiff = today.getMonth() - this.birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.birthDate.getDate())) {
            age--;
        }
        return age;
    };
    // Отличник?
    Student.prototype.isExcellentStudent = function () {
        return this.averageScore >= 4.8;
    };
    // Форматированный вывод
    Student.prototype.toString = function () {
        return "\n        <div class=\"student\">\n          <strong>\u0418\u043C\u044F:</strong> ".concat(this.name, "<br>\n          <strong>\u0412\u043E\u0437\u0440\u0430\u0441\u0442:</strong> ").concat(this.getAge(), "<br>\n          <strong>\u0413\u0440\u0443\u043F\u043F\u0430:</strong> ").concat(this.group, "<br>\n          <strong>\u0421\u0442\u0443\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0439 ID:</strong> ").concat(this.studentId, "<br>\n          <strong>\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043B\u043B:</strong> ").concat(this.averageScore.toFixed(2), "<br>\n          <strong>\u041E\u0442\u043B\u0438\u0447\u043D\u0438\u043A:</strong> ").concat(this.isExcellentStudent() ? "Да" : "Нет", "\n        </div>\n      ");
    };
    return Student;
}());
// Создание и вывод студентов
var students = [
    new Student("Ирина Петрова", new Date(2003, 4, 10), "ИС-22", 1001, 4.9),
    new Student("Андрей Смирнов", new Date(2002, 10, 5), "ПО-21", 1002, 4.3),
    new Student("Дмитрий Орлов", new Date(2004, 1, 28), "КБ-23", 1003, 4.95)
];
var output = document.getElementById("output");
students.forEach(function (student) {
    output.innerHTML += student.toString();
});
