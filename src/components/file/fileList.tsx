import React, { useState, useEffect } from "react";
import fileIcon from "../../assets/icons/fileIcon.png";
import { contents } from "../../utils/content";
import { NavLink, useParams } from "react-router-dom";
import TableComponent from "../common/table";
interface fileProps {
  files?: Array<{ [key: string]: any }>;
}
export const FileList: React.FC = ({ ...props }) => {
  const [fileDetails, setFileDetails] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    console.log("name", name);

    const filteredArray = contents.filter((item: any) => item.name === name);
    const fileArray: any = filteredArray
      .flatMap((item) => item.files)
      .filter((item) => item !== undefined);
    console.log("nameFiltered", filteredArray);
    console.log("fileArray", fileArray);
    if (fileArray.length > 0) {
      setFileDetails(fileArray);
    }
  }, []);

  return (
    <div>
      {fileDetails.length > 0 ? (
        <TableComponent isFromFolder={false} data={fileDetails}/>
        // <div className="tableDiv">
        //   <table>
        //     <tr>
        //       <th>
        //         <div className="tableHeadDiv"> Name</div>
        //       </th>
        //       <th>
        //         <div className="tableHeadDiv">Date</div>
        //       </th>
        //       <th>
        //         <div className="tableHeadDiv">File Type</div>
        //       </th>
        //     </tr>

        //     {fileDetails.map((item: any) => (
        //       <tr>
        //         <td style={{ display: "flex", alignItems: "center" }}>
        //           <img
        //             src={fileIcon}
        //             style={{ height: "35px", width: "35px" }}
        //           />
        //           <div>{item.name}</div>
        //         </td>
        //         <td>{item.added}</td>
        //         <td>{item.type}</td>
        //       </tr>
        //       //   </div>
        //     ))}
        //     {/* </tr> */}
        //   </table>
        // </div>
      ) : (
        "No Items"
      )}
    </div>
  );
};
