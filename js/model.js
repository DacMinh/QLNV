function Staff(
  account,
  fullName,
  Email,
  workDay,
  position,
  basicSalary,
  workingHoursPerMonth
) {
  this.account = account;
  this.fullName = fullName;
  this.Email = Email;
  this.position = position;

  this.workDay = workDay;
  this.basicSalary = basicSalary;

  this.workingHoursPerMonth = workingHoursPerMonth;
  this.totalSalary = function () {
    var basicSalary = +document.getElementById("luongCB").value;
    var positionSelect = document.getElementById("chucvu").value;

    var totalSalary = 0;

    if (positionSelect === "Sếp") {
      totalSalary = basicSalary * 3;
    } else if (positionSelect === "Trưởng phòng") {
      totalSalary = basicSalary * 2;
    } else {
      totalSalary = basicSalary * 1;
    }return totalSalary
  }; 
  
this.typeOfEmployee = function () {
    var workingHoursPerMonth = +document.getElementById("gioLam").value;
    var typeOfEmployee1 = " ";
  
    if (workingHoursPerMonth >= 192) {
      typeOfEmployee1 = "nhân viên xuất sắc";
    } else if (workingHoursPerMonth >= 176) {
      typeOfEmployee1 = "nhân viên giỏi";
    } else if (workingHoursPerMonth >= 160) {
      typeOfEmployee1 = "nhân viên khá";
    } else {
      typeOfEmployee1 = "nhân viên trung bình";
    } return typeOfEmployee1
  };
}

