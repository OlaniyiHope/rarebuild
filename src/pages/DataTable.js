import React from "react";

function DataTable() {
  // Sample data for the table
  const tableData = [
    {
      id: 1,
      name: "Graphics Designer",
      surname: "RKM/2024/07/233",
      description: "September 2025",
    },
    {
      id: 2,
      name: "Graphics Designer",
      surname: "RKM/2024/07/233",
      description: "September 2025",
    },
    {
      id: 3,
      name: "Graphics Designer",
      surname: "RKM/2024/07/233",
      description: "September 2025",
    },
    {
      id: 4,
      name: "Graphics Designer",
      surname: "RKM/2024/07/233",
      description: "September 2025",
    },
    {
      id: 5,
      name: "Graphics Designer",
      surname: "RKM/2024/07/233",
      description: "September 2025",
    },
    {
      id: 6,
      name: "Graphics Designer",
      surname: "RKM/2024/07/233",
      description: "September 2025",
    },
    {
      id: 7,
      name: "Graphics Designer",
      surname: "RKM/2024/07/233",
      description: "September 2025",
    },

    // Add more data as needed
  ];

  return (
    <section
      class="elementor-section elementor-top-section elementor-element elementor-element-57db4c6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="57db4c6"
      data-element_type="section"
      style={{ marginTop: "50px", marginBottom: "50px" }}
    >
      <div class="elementor-container elementor-column-gap-extended">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Role</th>
              <th>Code</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <style jsx>{`
          .data-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            margin: auto;
          }
          .data-table th,
          .data-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
          }
          .data-table th {
            background-color: #f4f4f4;
          }
          .data-table tr:hover {
            background-color: #f1f1f1;
          }
          .table-title {
            text-align: center;
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    </section>
  );
}

export default DataTable;
