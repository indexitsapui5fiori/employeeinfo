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
        //    if(!Salary)
        //    {
        //     return "";
        //    }
        //    let hikePercnt=0;
        //    if(Salary<=700000)
        //    {
        //     hikePercnt=10
        //    }
        //    elseif(Salary<=1000000)
        //    {
        //    hikePercnt=8
        //    }
        //    return hikePercnt+"%"    
        }
    };
});
