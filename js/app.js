const segmentedControls = document.querySelectorAll(".segmented-control");

segmentedControls.forEach((control) => {
  const segments = control.querySelectorAll(".segment");

  segments.forEach((segment) => {
    segment.addEventListener("click", () => {
      segments.forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-selected", "false");
      });

      segment.classList.add("is-active");
      segment.setAttribute("aria-selected", "true");
    });
  });
});
