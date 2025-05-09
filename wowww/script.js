// Create 54 rows of dummy data
const data = Array.from({ length: 44 }, (_, i) => ({
    index: i + 1,
    status: Math.random() > 0.5 ? 'Active' : 'Inactive',
    name: `Name ${i + 1}`
  }));
  function renderTable(filteredData = data) {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";
    filteredData.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${row.index}</td><td>${row.status}</td><td>${row.name}</td>`;
      tbody.appendChild(tr);
    });
  }
  
  renderTable();

  function searchTable() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const filtered = data.filter(row =>
      row.index.toString().includes(input) ||
      row.name.toLowerCase().includes(input)
    );
    renderTable(filtered);
  }
  let sortDirections = [true, true, true];
  function sortTable(colIndex) {
    const key = colIndex === 0 ? "index" : "name";
    const direction = sortDirections[colIndex] ? 1 : -1;
    sortDirections[colIndex] = !sortDirections[colIndex];
    const sorted = [...data].sort((a, b) => {
      let aVal = a[key];
      let bVal = b[key];
      if (typeof aVal === "string") {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }
      return aVal > bVal ? direction : aVal < bVal ? -direction : 0;
    });
    renderTable(sorted);
  }
  