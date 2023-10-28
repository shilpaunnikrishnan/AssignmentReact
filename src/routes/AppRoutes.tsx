import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import { FolderList } from "../components/folder/folderList";
import { FileList } from "../components/file/fileList";
import { Header } from "../components/common/header";
export const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/folders" element={<FolderList />}></Route>
      <Route path="/files/:name" element={<FileList />}></Route>
    </Routes>
  );
};
