var listStaff =[];


document.getElementById("btnThemNV").onclick = function createsStaff () {

var account = document.getElementById ("tknv" ).value;
var fullName = document.getElementById ("name" ).value;
var Email = document.getElementById ("email").value;
var position = document.getElementById ("chucvu").value;

var workDay =  document.getElementById ("datepicker").value;
var basicSalary = + document.getElementById ("luongCB").value;

var workingHoursPerMonth = + document.getElementById ("gioLam").value;
for ( var i =0; i< listStaff.length;i++){
    if (listStaff[i].account===account) {
        alert ("Tài khoản tồn tại");return;
    }
}
var staff = new Staff (account,fullName,Email,workDay,position,basicSalary,workingHoursPerMonth);
listStaff.push(staff);

renderStaff ()


    
    

}

function renderStaff (){
    var html = "";
    for (var i =0; i < listStaff.length;i++ ) {
         
        html +=`<tr> 
          <td>${listStaff[i].account}</td>
          <td>${listStaff[i].fullName}</td>
          <td>${listStaff[i].Email}</td>
          <td>${listStaff[i].workDay}</td>
          <td>${listStaff[i].basicSalary}</td>
          <td>${listStaff[i].workingHoursPerMonth}</td>
         
          </tr>`

    }
    document.getElementById('tableDanhSach').innerHTML = html;
}