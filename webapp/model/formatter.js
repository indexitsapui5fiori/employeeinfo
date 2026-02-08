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
        }
    };
});
