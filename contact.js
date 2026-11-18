/* Contact forms: every form.jf-form opens the visitor's email app with the
   message filled in, addressed to the form's data-to. data-tag goes in front
   of the subject (e.g. [Pilot]) so inquiries can be sorted in the inbox.
   Nothing is sent from the site itself; the visitor presses send in their mail app. */
(function () {
  var EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  function labelFor(form, el) {
    var l = form.querySelector('label[for="' + el.id + '"]');
    if (!l) return el.name;
    var t = l.cloneNode(true);
    t.querySelectorAll("span").forEach(function (s) { s.remove(); });
    return t.textContent.trim();
  }
  document.querySelectorAll("form.jf-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fields = Array.prototype.filter.call(form.elements, function (el) {
        return el.name && /^(INPUT|SELECT|TEXTAREA)$/.test(el.tagName);
      });
      var val = function (el) { return (el.value || "").trim(); };
      var ok = fields.every(function (el) {
        if (el.required && !val(el)) return false;
        if (el.type === "email" && val(el) && !EMAIL.test(val(el))) return false;
        return true;
      });
      var err = form.querySelector(".form-error");
      if (err) err.hidden = ok;
      if (!ok) return;
      var get = function (n) { var el = form.elements[n]; return el ? val(el) : ""; };
      var message = "";
      var lines = [];
      fields.forEach(function (el) {
        if (el.name === "message") { message = val(el); return; }
        lines.push(labelFor(form, el) + ": " + (val(el) || "-"));
      });
      lines.push("", message, "", "Sent from the " + form.getAttribute("data-tag") + " form on jobfile.ai");
      var org = get("company") || get("firm");
      var subject = "[" + form.getAttribute("data-tag") + "] " + (form.getAttribute("data-subject") || "Inquiry") +
        " from " + get("name") + (org ? " (" + org + ")" : "");
      window.location.href = "mailto:" + form.getAttribute("data-to") +
        "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
    });
  });
})();
