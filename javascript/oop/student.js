let StudentsArray = []
let id = 1

class Student {
    id = 0
    StudentName = ''
    GPA = 0
    year = 0
    StudentPresence = []
    StudentTest = []

    constructor(id, StudentName, GPA, year) {
        this.id = id
        this.StudentName = StudentName
        this.GPA = GPA
        this.year = year
    }

    setPresence(date, presence) {
        let ob = {
            date: date,
            presence: presence,
        }

        this.StudentPresence.push(ob)
    }

    setTest(testName, Grade, date) {
        let ob = {
            date: date,
            testName: testName,
            Grade: Grade,
        }

        this.StudentTest.push(ob)
    }
}

function onSubmit() {
    let student = new Student(id, nameDV.value, gpaDV.value, yearDV.value)
    StudentsArray.push(student)
    console.log(StudentsArray)
    id++
}

function addPresenceToStudent() {
    let id = idDV.value

    let studentObject = StudentsArray.find((student) => id == student.id)
    studentObject.setPresence(dateDV.value, presenceDV.value)
    console.log(StudentsArray)
}

function addTest() {
    let id = id1DV.value

    let testObject = StudentsArray.find((student) => id == student.id)
    testObject.setTest(testDV.value, GradeDV.value, date1DV.value)
    console.log(StudentsArray)
}