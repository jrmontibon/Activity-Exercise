class AppUser {
  constructor(userAge) { this.userAge = userAge; }
  checkAdultStatus() {
    if (this.userAge >= 18) return true;
    return false;
  }
}
class StudentUser extends AppUser {
  constructor(userAge, examGrade) {
    super(userAge);
    this.examGrade = examGrade;
  }
  checkPassingStatus() {
    if (this.examGrade >= 75) return true;
    return false;
  }
}
const collegeStudent = new StudentUser(19, 80);
console.log("User:", "Adult:", collegeStudent.checkAdultStatus(), "Passed:", collegeStudent.checkPassingStatus());