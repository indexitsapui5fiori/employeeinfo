sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
], function (Controller, JSONModel, formatter) {
    "use strict";

    return Controller.extend("com.employeeinfo.controller.EmployeeTable", {

        formatter: formatter,

        onInit: function () {
            var oModel = new JSONModel();
            oModel.loadData("model/employees.json");
            this.getView().setModel(oModel);
        }
    });
});
