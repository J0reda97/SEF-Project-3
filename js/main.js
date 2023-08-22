var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

let copies = document.querySelectorAll(".copy");

copies.forEach(function (copy) {
  copy.onclick = function () {
    copy.setAttribute("data-bs-original-title", "Copied");
    var tooltip = bootstrap.Tooltip.getInstance(copy);
    tooltip._config.title = "Copied";
    tooltip._fixTitle();
    tooltip.show();

    setTimeout(function () {
      alert("Copied");
    }, 100);
  };
});
