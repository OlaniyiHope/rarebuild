import React from "react";

function DataTable() {
  // Sample data for the table
  const tableData = [
    {
      id: 1,
      name: "Finger Print Commission",
      surname: "Finger Print Commission",
      description: "Restoring the body of Christ to the desire and ",
    },
    {
      id: 2,
      name: "The Shade Network",
      surname: "The Shade Network",
      description: "Empowering communities through support and education.",
    },
    {
      id: 3,
      name: "Lebana Academy",
      surname: "Lebana Academy",
      description: "Promoting holistic education and character development.",
    },
    // Add more data as needed
  ];

  return (
    <section
      class="elementor-section elementor-top-section elementor-element elementor-element-57db4c6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="57db4c6"
      data-element_type="section"
    >
      <div class="elementor-container elementor-column-gap-extended">
        <div className="data-table-wrapper">
          <h3 className="table-title">Course Information</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Sur Name</th>
                <th>Description</th>
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
      </div>
    </section>
  );
}

export default DataTable;
