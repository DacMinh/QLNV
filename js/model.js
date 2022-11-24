function  Staff (account,fullName,Email,workDay,position,basicSalary,workingHoursPerMonth) {
    this.account = account;
    this.fullName = fullName;
    this.Email = Email;
    this.position= position;
   
    this.workDay = workDay;
    this.basicSalary = basicSalary;
    
    this.workingHoursPerMonth = workingHoursPerMonth;
    this.totalSalary = function(){
        var basicSalary = + document.getElementById ("luongCB").value;
        var position =document.getElementById("chucvu").value; 
       
        

        var  totalSalary=0
        if(Manger.check ===true) {
            totalSalary = basicSalary*3
        } else if (manger.check ===true){
            totalSalary = basicSalary*2
        }else{totalSalary = basicSalary*1}

    }

    
    this.typeOfEmployee = function(){
        var workingHoursPerMonth = + document.getElementById ("gioLam").value;
       var typeOfEmployee ="";

        if(workingHoursPerMonth >= 192 ){
            typeOfEmployee = "nhân viên xuất sắc"

        }else if (workingHoursPerMonth >= 176 ) {
            typeOfEmployee = "nhân viên giỏi"
        }else if (workingHoursPerMonth >= 160) {
            typeOfEmployee = "nhân viên khá"
        }else {typeOfEmployee = "nhân viên trung bình"};
         

    }

    


}