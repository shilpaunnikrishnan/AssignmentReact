import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./folder.css";
import { contents } from "../../utils/content";
import folderIcon from "../../assets/icons/folder.png";
import sortIcon from "../../assets/icons/sort.png";
import TableComponent from "../common/table";
import { useDispatch, useSelector } from "react-redux";
import { getContents, selectContent } from "../features/content/contentSlice";
interface arrayElements {
  type?: string;
  name?: string;
  added?: string;
  files?: Array<{ [key: string]: any }>;
}

export const FolderList: React.FC = () => {
  const [itemArray, setItemArray] = useState<Array<arrayElements> | any>([]);
  const [isAsc, setIsAsc] = useState<boolean>(false);
  const [filteredArray, setfilteredArray] = useState<
    Array<arrayElements> | any
  >([]);
  const count = useSelector(selectContent);
  const dispatch = useDispatch();
  console.log("countt", count);
  useEffect(() => {
    dispatch(getContents());
    setItemArray(contents);
    setfilteredArray(contents);
  }, []);
  //   const onSelectFolder = (item: object) => {
  //     console.log("onselect", item);
  //   };
  const onSearch = (searchTerm: string) => {
    console.log("searchTerm", searchTerm);
    const duplicateArray = [...itemArray];
    const filteredArrayByUsingTerm = duplicateArray.filter(
      (item: arrayElements) =>
        !isAsc
          ? item.name &&
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          : item.name &&
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (searchTerm !== "") {
      setfilteredArray(filteredArrayByUsingTerm);
    } else {
      setfilteredArray(itemArray);
    }
    console.log("filteredArray", filteredArray);
    console.log("item", duplicateArray);
  };
  const onSortAscClick = (typeString: string) => {
    const newArray = [...filteredArray];
    let sortedArray: Array<object> = [];
    if (typeString === "name") {
      sortedArray = newArray.sort((folderA: any, folderB: any) =>
        isAsc
          ? folderA.name.toUpperCase() < folderB.name.toUpperCase()
            ? 1
            : -1
          : folderA.name.toUpperCase() > folderB.name.toUpperCase()
          ? 1
          : -1
      );
    } else if (typeString === "added") {
      let sorted = newArray.sort((a, b) => {
        let dateA = a["added"]
          ? new Date(a["added"])
          : new Date(8640000000000000);
        let dateB = b["added"]
          ? new Date(b["added"])
          : new Date(8640000000000000);
        return dateA.getTime() - dateB.getTime();
      });
      sortedArray = isAsc
        ? newArray.sort((a, b) => {
            let dateA = a["added"]
              ? new Date(a["added"])
              : new Date(8640000000000000);
            let dateB = b["added"]
              ? new Date(b["added"])
              : new Date(8640000000000000);
            return dateA.getTime() - dateB.getTime();
          })
        : newArray.sort((a, b) => {
            let dateA = a["added"]
              ? new Date(a["added"])
              : new Date(8640000000000000);
            let dateB = b["added"]
              ? new Date(b["added"])
              : new Date(8640000000000000);
            return dateB.getTime() - dateA.getTime();
          });
    } else {
      sortedArray = newArray.sort((folderA: any, folderB: any) =>
        isAsc
          ? folderA.size > folderB.size
            ? 1
            : -1
          : folderA.size < folderB.size
          ? 1
          : -1
      );
    }

    setfilteredArray(sortedArray);
    setIsAsc(!isAsc);
  };
  return (
    <div className="paddingSmall">
      <div>
        <input
          type="text"
          placeholder="Search here..."
          className="textBox"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <TableComponent
        data={filteredArray}
        isFromFolder={true}
        onSortAscClick={onSortAscClick}
      />
      {/* <div className="tableDiv">
        <table>
          <tr>
            <th>
              <div className="tableHeadDiv">
                {" "}
                <div>Name</div>
                <div>
                  <img
                    src={sortIcon}
                    style={{ height: "20px", width: "20px" }}
                    onClick={() => onSortAscClick("name")}
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="tableHeadDiv">
                <div>Date</div>
                <div>
                  <img
                    src={sortIcon}
                    style={{ height: "20px", width: "20px" }}
                    onClick={() => onSortAscClick("added")}
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="tableHeadDiv">
                <div>File Type</div>
                <div>
                  <img
                    src={sortIcon}
                    style={{ height: "20px", width: "20px" }}
                    onClick={() => onSortAscClick("size")}
                  />
                </div>
              </div>
            </th>
          </tr>

          {filteredArray.map((item: any) => (
            <tr>
              <td style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={folderIcon}
                  style={{ height: "35px", width: "35px" }}
                />
                <NavLink to={`/files/${item.name.trim()}`} className="linkDiv">
                  {" "}
                  <div onClick={() => onSelectFolder(item)}>{item.name}</div>
                </NavLink>
              </td>
              <td>{item.added}</td>
              <td>{item.type}</td>
            </tr>
          ))}
        </table>
      </div> */}
    </div>
  );
};
