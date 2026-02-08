/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/employeeinfo/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
