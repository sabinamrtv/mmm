class Student {
    private name: string;
    private birthDate: Date;
    private group: string;
    private studentId: number;
    private averageScore: number;

    constructor(
        name: string,
        birthDate: Date,
        group: string,
        studentId: number,
        averageScore: number
    ) {
        this.name = name;
        this.birthDate = birthDate;
        this.group = group;
        this.studentId = studentId;
        this.averageScore = averageScore;
    }

    getName() {
        return this.name;
    }

    getBirthDate() {
        return this.birthDate;
    }

    getGroup() {
        return this.group;
    }

    getStudentId() {
        return this.studentId;
    }

    getAverageScore() {
        return this.averageScore;
    }

    setName(name: string) {
        this.name = name;
    }

    setBirthDate(date: Date) {
        this.birthDate = date;
    }

    setGroup(group: string) {
        this.group = group;
    }

    setStudentId(id: number) {
        this.studentId = id;
    }

    setAverageScore(score: number) {
        this.averageScore = score;
    }

    getAge() {
        const today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();
        const monthDiff = today.getMonth() - this.birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.birthDate.getDate())) {
            age--;
        }
        return age;
    }

    isExcellentStudent() {
        return this.averageScore >= 4.8;
    }

    toString() {
        return `
        <div class="student">
          <strong>Имя:</strong> ${this.name}<br>
          <strong>Возраст:</strong> ${this.getAge()}<br>
          <strong>Группа:</strong> ${this.group}<br>
          <strong>Студенческий ID:</strong> ${this.studentId}<br>
          <strong>Средний балл:</strong> ${this.averageScore.toFixed(2)}<br>
          <strong>Отличник:</strong> ${this.isExcellentStudent() ? "Да" : "Нет"}
        </div>
      `;
    }
}

const students = [
    new Student("Ирина Петрова", new Date(2003, 4, 10), "22ИЭ", 1001, 4.9),
    new Student("Андрей Смирнов", new Date(2002, 10, 5), "20ИД", 1002, 4.3),
    new Student("Дмитрий Орлов", new Date(2004, 1, 28), "23ИС", 1003, 4.95)
];

const output = document.getElementById("output");
students.forEach(student => {
    output!.innerHTML += student.toString();
});
