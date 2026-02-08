/*global QUnit*/

sap.ui.define([
	"com/employeeinfo/controller/EmployeeTable.controller"
], function (Controller) {
	"use strict";

	QUnit.module("EmployeeTable Controller");

	QUnit.test("I should test the EmployeeTable controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
