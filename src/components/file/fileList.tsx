import React, { useState, useEffect } from "react";
import { contents } from "../../utils/content";
import { useParams } from "react-router-dom";
import TableComponent from "../common/table";
interface fileProps {
  files?: Array<{ [key: string]: any }>;
}
export const FileList: React.FC<fileProps> = () => {
  const [fileDetails, setFileDetails] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    const filteredArray = contents.filter((item: any) => item.name === name);
    const fileArray: any = filteredArray
      .flatMap((item) => item.files)
      .filter((item) => item !== undefined);

    if (fileArray.length > 0) {
      setFileDetails(fileArray);
    }
  }, []);

  return (
    <div>
      {fileDetails.length > 0 ? (
        <TableComponent isFromFolder={false} data={fileDetails} />
      ) : (
        "No Items"
      )}
    </div>
  );
};
