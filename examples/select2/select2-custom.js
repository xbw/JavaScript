$(document).ready(function() {
	console.log("length>>" + $("#select option").length);
	console.log("value>>" + $("#select").val());
	// $("#select option:first").prop("selected", 'selected');
	$("#select").select2({
		minimumResultsForSearch: -1, //去掉模糊搜索框
		maximumSelectionSize: 1
	});
	$("#select").on("change", function(e) {
		console.log("change>>" + $("#select").val());
	})
	$("#select").on("change.select2", function(e) {
		console.log("change.select2>>" + $("#select").val());
	})
	$("#select").on("click", function(e) { // only 4.x-
		console.log('click>>' + $("#select").val());
	})
	$("#select").on("click.select2", function(e) { // only 4.x-
		console.log('click.select2>>' + $("#select").val());
	})
	$("#select").on("select2-blur", function(e) {
		console.log('select2-blur>>' + $("#select").val());
	})
	$("#select").on("select2-clearing", function(e) {
		console.log('select2-clearing>>' + $("#select").val());
	})
	$("#select").on("select2:close", function(e) { // only 4.x+
		console.log('select2:close>>' + $("#select").val());
	})
	$("#select").on("select2-focus", function(e) {
		console.log('select2-focus>>' + $("#select").val());
	})
	$("#select").on("select2-highlight", function(e) {
		console.log('select2-highlight>>' + $("#select").val());
	})
	$("#select").on("select2-loaded", function(e) {
		console.log('select2-loaded>>' + $("#select").val());
	})
	$("#select").on("select2:open", function(e) { // only 4.x+
		console.log('select2:open>>' + $("#select").val());
	})
	$("#select").on("select2:opening", function(e) {
		console.log('select2:opening>>' + $("#select").val());
	})
	$("#select").on("select2-removed", function(e) {
		console.log('select2-removed>>' + $("#select").val());
	})
	$("#select").on("select2-removing", function(e) { // only 4.x+
		console.log('select2-removing>>' + $("#select").val());
	})
	$("#select").on("select2:selecting", function(e) {
		console.log('select2:selecting>>' + $("#select").val());
	})
	$("#select").on("select2:select", function(e) {
		console.log('select2:select>>' + $("#select").val());
	})
});
