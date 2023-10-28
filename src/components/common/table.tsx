import * as React from "react";
import sortIcon from "../../assets/icons/sort.png";
import folderIcon from "../../assets/icons/folder.png";
import fileIcon from "../../assets/icons/fileIcon.png";
import pdfIcon from "../../assets/icons/pdf.png";
import csvIcon from "../../assets/icons/csv.png";
import { NavLink } from "react-router-dom";
interface tableProps {
  isFromFolder?: boolean;
  data?: Array<object>;
  onSortAscClick?: (name: string) => void;
}
const TableComponent: React.FC<tableProps> = ({
  isFromFolder,
  data,
  onSortAscClick,
}) => {
  return (
    <div className="tableDiv">
      <table>
        <tr>
          <th>
            <div className="tableHeadDiv">
              {" "}
              <div>Name</div>
              {isFromFolder ? (
                <div>
                  <img
                    src={sortIcon}
                    alt="sort"
                    style={{ height: "20px", width: "20px" }}
                    onClick={() => {
                      if (onSortAscClick) {
                        onSortAscClick("name");
                      }
                    }}
                  />
                </div>
              ) : null}
            </div>
          </th>
          <th>
            <div className="tableHeadDiv">
              <div>Date</div>
              {isFromFolder ? (
                <div>
                  <img
                    src={sortIcon}
                    alt="sort"
                    style={{ height: "20px", width: "20px" }}
                    onClick={() => {
                      if (onSortAscClick) {
                        onSortAscClick("added");
                      }
                    }}
                  />
                </div>
              ) : null}
            </div>
          </th>
          <th>
            <div className="tableHeadDiv">
              <div>File Size</div>
              {isFromFolder ? (
                <div>
                  <img
                    src={sortIcon}
                    alt="sort"
                    style={{ height: "20px", width: "20px" }}
                    onClick={() => {
                      if (onSortAscClick) {
                        onSortAscClick("size");
                      }
                    }}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </th>
        </tr>

        {data &&
          data.map((item: any) => (
            <tr>
              <td style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={
                    isFromFolder
                      ? item.type === "pdf"
                        ? pdfIcon
                        : item.type === "csv"
                        ? csvIcon
                        : folderIcon
                      : fileIcon
                  }
                  alt="type"
                  style={{ height: "35px", width: "35px" }}
                />
                {isFromFolder ? (
                  <NavLink
                    to={`/files/${item.name.trim()}`}
                    className="linkDiv"
                  >
                    {" "}
                    <div>{item.name}</div>
                  </NavLink>
                ) : (
                  <div>{item.name}</div>
                )}
              </td>
              <td>{item.added}</td>
              <td>{item.size}mb</td>
            </tr>
            //   </div>
          ))}
        {/* </tr> */}
      </table>
    </div>
  );
};

export default TableComponent;
