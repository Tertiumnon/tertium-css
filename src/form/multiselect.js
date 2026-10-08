const initialized = new WeakSet();

export function initMultiSelect(root) {
  const summary = root?.querySelector("[data-multiselect-label]");
  const search = root?.querySelector(".multi-select__search");
  const options = [...(root?.querySelectorAll(".multi-select__option") || [])];
  const empty = root?.querySelector(".multi-select__empty");
  if (!summary || !search || !options.length) {
    throw new TypeError("Expected a searchable .multi-select element");
  }
  if (initialized.has(root)) return;
  initialized.add(root);

  const placeholder = summary.textContent.trim();
  const updateSummary = () => {
    const selected = options
      .filter(
        (option) => option.querySelector('input[type="checkbox"]').checked,
      )
      .map((option) => option.querySelector("span").textContent.trim());
    summary.textContent = selected.length ? selected.join(", ") : placeholder;
  };
  const filterOptions = () => {
    const query = search.value.trim().toLocaleLowerCase();
    let matches = 0;
    options.forEach((option) => {
      option.hidden = !option.textContent.toLocaleLowerCase().includes(query);
      if (!option.hidden) matches++;
    });
    if (empty) empty.hidden = matches !== 0;
  };

  search.addEventListener("input", filterOptions);
  root.addEventListener("change", (event) => {
    if (event.target.matches('input[type="checkbox"]')) updateSummary();
  });
  root.addEventListener("toggle", () => {
    if (root.open) search.focus();
    else {
      search.value = "";
      filterOptions();
    }
  });
  root.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !root.open) return;
    root.open = false;
    root.querySelector("summary").focus();
  });
  const closeOutside = (event) => {
    if (!root.contains(event.target)) root.open = false;
  };
  root.ownerDocument.addEventListener("pointerdown", closeOutside, true);
  root.ownerDocument.addEventListener("focusin", closeOutside);

  updateSummary();
  filterOptions();
}
