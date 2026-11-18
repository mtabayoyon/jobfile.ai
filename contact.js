/* Contact forms: each form.jf-form posts to FormSubmit, which emails the
   entries to hello@jobfile.ai and then sends the visitor to /thanks/.
   The browser checks required fields first. This script only adds the
   sender's name and company to the subject, keeping the [Pilot], [General]
   or [Investor] tag in front so inquiries can be sorted, and stops double sends. */
(function () {
  document.querySelectorAll("form.jf-form").forEach(function (form) {
    form.addEventListener("submit", function () {
      var pick = function (sel) { var el = form.querySelector(sel); return el ? (el.value || "").trim() : ""; };
      var name = pick('[autocomplete="name"]');
      var org = pick('[autocomplete="organization"]');
      var subject = form.querySelector('input[name="_subject"]');
      if (subject && name) {
        subject.value = "[" + form.getAttribute("data-tag") + "] " + form.getAttribute("data-subject") +
          " from " + name + (org ? " (" + org + ")" : "");
      }
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
    });
  });
  // If the visitor comes back with the browser's back button, re-enable the button.
  window.addEventListener("pageshow", function () {
    document.querySelectorAll("form.jf-form button[type=submit]").forEach(function (b) { b.disabled = false; b.textContent = "Send"; });
  });
})();
