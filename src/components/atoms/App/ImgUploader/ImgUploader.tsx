import React, { useState } from "react";
import { message, Upload } from "antd";
import type { GetProp, UploadProps } from "antd";
import { ReactComponent as Camera } from "../../../../assets/svg/camera.svg";

import "./style.scss";

type ImgUploaderProps = {
  defaultUrl?: string;
  defaultIcon?: boolean;
};

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const ImgUploader: React.FC<ImgUploaderProps> = ({
  defaultUrl,
  defaultIcon,
}) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  return (
    <Upload
      name="avatar"
      listType="picture-circle"
      className="avatar-uploader"
      showUploadList={false}
      style={{width: 10, height: 10}}
      action="/api/img"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="avatar" />
      ) : (
        <img
          src={defaultUrl}
          className="uploader--default-img"
        />
      )}
      <Camera className="hover-svg" />
    </Upload>
  );
};

export default ImgUploader;
