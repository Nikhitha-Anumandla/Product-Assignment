function validate() {
    var regName = /^[a-zA-Z]+$/;
    if ($("#pName").val()== "") {
        alert("Product Name is empty");
    }
    if (!regName.test($("#pName").val())) {
        alert("Product NAme id invalid");
    }
    if ($("#price").val() == "") {
        alert("enter price");
    }
    else if (parseInt($("#price").val()) < 1500 || parseInt($("#price").val()) > 3000) {
        alert("price must in between 1500 and 3000");
    }
    if ($("#brand").val() == "") {
        alert("enter brand");
    }
    if ($("#quantity").val() == "") {
        alert("enter quantity");
    }
    if ($("#rememberme").prop('checked') == false) {
        alert("select check box!");
    }
}