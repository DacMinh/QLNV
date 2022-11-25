var listStaff = [];

document.getElementById("btnThemNV").onclick = function createsStaff() {
  var account = document.getElementById("tknv").value;
  var fullName = document.getElementById("name").value;
  var Email = document.getElementById("email").value;
  var position = document.getElementById("chucvu").value;

  var workDay = document.getElementById("datepicker").value;
  var basicSalary = +document.getElementById("luongCB").value;

  var workingHoursPerMonth = +document.getElementById("gioLam").value;
  for (var i = 0; i < listStaff.length; i++) {
    if (listStaff[i].account === account) {
      alert("Tài khoản tồn tại");
      return;
    }
  }
  var staff = new Staff(
    account,
    fullName,
    Email,
    workDay,
    position,
    basicSalary,
    workingHoursPerMonth
  );
  listStaff.push(staff);

  renderStaff();
  saveLocalStorage();
};

function renderStaff() {
  var html = "";
  for (var i = 0; i < listStaff.length; i++) {
    html += `<tr> 
          <td>${listStaff[i].account}</td>
          <td>${listStaff[i].fullName}</td>
          <td>${listStaff[i].Email}</td>
          <td>${listStaff[i].workDay}</td>
          <td>${listStaff[i].position}</td>
          <td>${listStaff[i].totalSalary()}</td>
          <td>${listStaff[i].typeOfEmployee()}</td>
         
          </tr>`;
  }
  document.getElementById("tableDanhSach").innerHTML = html;
}
function saveLocalStorage() {
  var stafflistJson = JSON.stringify(listStaff);
  localStorage.setItem("key", stafflistJson);
}

function getStafflist() {
  var stafflistJson = localStorage.getItem("key");
  if (!stafflistJson) return [];
  return JSON.parse(stafflistJson);
}
function mapListStaff(local) {
  var result = [];
  for (var i = 0; i < local.length; i++) {
    var oldStaff = local[i];
    var newStaff = new Staff(
      oldStaff.account,
      oldStaff.fullName,
      oldStaff.Email,
      oldStaff.workDay,
      oldStaff.position,
      oldStaff.basicSalary,
      oldStaff.workingHoursPerMonth

    );
    result.push(newStaff);
  }
  return result;
}

window.onload = function () {
  var staffListFromLocal = getStafflist();
  listStaff = mapListStaff(staffListFromLocal);
  renderStaff();
};
