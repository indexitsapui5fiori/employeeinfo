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

            // UI state model
            var oUIModel = new sap.ui.model.json.JSONModel({
                editMode: false
            });

            this.getView().setModel(oUIModel, "ui");

            // Location dropdown model
            var oLocationModel = new sap.ui.model.json.JSONModel();
            oLocationModel.loadData("model/locations.json");
            this.getView().setModel(oLocationModel, "locations");
        },
        onEditSavePress: function () {
            var oUIModel = this.getView().getModel("ui");
            var bEditMode = oUIModel.getProperty("/editMode");

            // Toggle mode
            oUIModel.setProperty("/editMode", !bEditMode);

            if (bEditMode) {
                // SAVE logic
                sap.m.MessageToast.show("Changes saved successfully");
            } else {
                // EDIT mode
                sap.m.MessageToast.show("Edit mode enabled");
            }
        }
    });
});
