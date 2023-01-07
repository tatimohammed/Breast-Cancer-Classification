function malignancy() {
    console.log("Classify cancer presseed")
    var rds_mean = document.getElementById("f0")
    var prmtr_mean = document.getElementById("f1")
    var area_mean = document.getElementById("f2")
    var concvt_mean = document.getElementById("f3")
    var conc_pt_mean = document.getElementById("f4")
    var rds_wrst = document.getElementById("f5")
    var prmtr_wrst = document.getElementById("f6")
    var area_wrst = document.getElementById("f7")
    var concvt_wrst = document.getElementById("f8")
    var conc_pt_wrst = document.getElementById("f9")
    var diag = document.getElementById("diag")
    
    var url = "http://127.0.0.1:5000/predict"
    $.post(url, {
        f0:parseFloat(rds_mean.value),
        f1:parseFloat(prmtr_mean.value),
        f2:parseFloat(area_mean.value),
        f3:parseFloat(concvt_mean.value),
        f4:parseFloat(conc_pt_mean.value),
        f5:parseFloat(rds_wrst.value),
        f6:parseFloat(prmtr_wrst.value),
        f7:parseFloat(area_wrst.value),
        f8:parseFloat(concvt_wrst.value),
        f9:parseFloat(conc_pt_wrst.value)
      }, function (data, status) {
        if (data.predicted=="Malignant") {
            diag.innerHTML = "<span style='color:#8b0000'>M</span>"
        } else {
            diag.innerHTML = "<span style='color:yellow'>B</span>"
        }
        console.log(status)
      });
}
