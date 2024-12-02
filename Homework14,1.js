class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.courses = {}; 
    }

    // add students course
    addCourse(course) {
        if (!this.courses[course]) {
            this.courses[course] = { grades: [], attendance: [] };
        } else {
            console.log(`${this.firstName} вже навчається на курсі ${course}.`);
        }
    }

    // remove students course
    removeCourse(course) {
        if (this.courses[course]) {
            delete this.courses[course];
        } else {
            console.log(`${this.firstName} не записаний на курс ${course}.`);
        }
    }

    // add students grade
    addGrade(course, grade) {
        if (this.courses[course]) {
            this.courses[course].grades.push(grade);
        } else {
            console.log(`Курс ${course} не знайдено.`);
        }
    }

    // add students attendance 
    addAttendance(course, attended) {
        if (this.courses[course]) {
            this.courses[course].attendance.push(attended);
        } else {
            console.log(`Курс ${course} не знайдено.`);
        }
    }

    // average grade
    getAverageGrade(course) {
        if (this.courses[course] && this.courses[course].grades.length > 0) {
            const grades = this.courses[course].grades;
            return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
        }
        return 0;
    }

    // average attendance
    getAverageAttendance(course) {
        if (this.courses[course] && this.courses[course].attendance.length > 0) {
            const attendance = this.courses[course].attendance;
            return (
                attendance.filter((a) => a).length / attendance.length
            );
        }
        return 0;
    }

    // all
    getInfo() {
        return {
            name: `${this.firstName} ${this.lastName}`,
            birthYear: this.birthYear,
            courses: this.courses,
        };
    }
}

class Group {
    constructor() {
        this.students = [];
    }

    
    addStudent(student) {
        if (student instanceof Student) {
            this.students.push(student);
        } else {
            console.log("Об'єкт не є студентом.");
        }
    }

    removeStudent(firstName, lastName) {
        this.students = this.students.filter(
            (student) =>
                student.firstName !== firstName ||
                student.lastName !== lastName
        );
    }

    // Student performance ranking
    getGradeRanking(course) {
        return this.students
            .map((student) => ({
                name: `${student.firstName} ${student.lastName}`,
                averageGrade: student.getAverageGrade(course),
            }))
            .sort((a, b) => b.averageGrade - a.averageGrade);
    }

    // Student attendance ranking
    getAttendanceRanking(course) {
        return this.students
            .map((student) => ({
                name: `${student.firstName} ${student.lastName}`,
                averageAttendance: student.getAverageAttendance(course),
            }))
            .sort((a, b) => b.averageAttendance - a.averageAttendance);
    }
}
