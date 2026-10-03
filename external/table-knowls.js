// Keep the reference table's activity expansions beside the row that uses them.
// PreTeXt still owns fetching, math, nested solutions, labels, and animation.
(() => {
  if (typeof LinkKnowl === "undefined" || LinkKnowl.prototype.tableKnowlsInstalled) return;
  const defaultLocation = LinkKnowl.prototype.findOutputLocation;
  const invalidParents = "table, mjx-container, div.tabular-box, .runestone > .parsons";

  LinkKnowl.prototype.findOutputLocation = function () {
    const reference = this.linkElement.closest("#tab-u2-ref-back-substitution-uses");
    const table = reference?.querySelector(":scope > .tabular-box > table");
    if (!table || !table.contains(this.linkElement)) {
      return defaultLocation.call(this);
    }

    // A reference inside an expanded activity stays inside its full-width cell,
    // including when it must open outside a nested matrix or table.
    const expandedCell = this.linkElement.closest(".math345-knowl-cell");
    if (expandedCell) {
      let location = this.linkElement.parentElement;
      for (let ancestor = location; ancestor !== expandedCell; ancestor = ancestor.parentElement) {
        if (ancestor.matches(invalidParents)) location = ancestor;
      }
      return location;
    }

    const sourceRow = this.linkElement.closest("tr");
    let expansion = sourceRow.nextElementSibling;
    if (!expansion?.classList.contains("math345-knowl-row")) {
      expansion = document.createElement("tr");
      expansion.className = "math345-knowl-row";
      const cell = document.createElement("td");
      cell.className = "math345-knowl-cell";
      cell.colSpan = [...sourceRow.cells].reduce((total, item) => total + item.colSpan, 0);
      expansion.append(cell);
      sourceRow.after(expansion);
    }

    // Multiple links in one source row share the same expansion row. Each
    // retains its own native output element and independent open/close state.
    const marker = document.createElement("span");
    marker.hidden = true;
    expansion.cells[0].append(marker);
    return marker;
  };
  LinkKnowl.prototype.tableKnowlsInstalled = true;
})();
