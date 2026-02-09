sap.ui.define([], function () {
    "use strict";

    return {
        formatDate: function (sDate) {
            if (!sDate) {
                return "";
            }
            var oDate = new Date(sDate);
            return oDate.toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric"
            });
        },
        calculateHike:function(Salary){
            let hikeChange = 0;
            if(!Salary || !Salary ==''){
                if (Salary >=1100000)
                    hikeChange = 2;
                else if(Salary >=850000)
                    hikeChange =  5; 
                else if(Salary >=700000)
                    hikeChange = 10;
                else
                    hikeChange = 12;
            }
            let rSalary = Salary+((Salary/100)*hikeChange);
            return rSalary/100000 +" LPA";
        } 
    };
});
