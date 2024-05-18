import React, { useEffect, useRef, useState } from "react";
import "./update.css";
import Button from "../../../../components/UIComponents/Button";
import CloseIcon from "../../../../components/UIComponents/icons/CloseIcon";
import Spinner from "../../../../utils/Spinner/Spinner";
import { MdOutlineCloudUpload } from "react-icons/md";
import { openFile } from "../../../../utils/helpers";

const UpdateProducts = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]); // for temporarily storing and viewing selected images
  const [images, setImages] = useState([]);
  const [formValues, setFormValues] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productDetails: "",
    productCategory: "",
    productGender: "",
    productSize: [],
    productColors: [],
    productImages: [],
    productComposition: [],
  });
  const fileRef = useRef();

  //  functions

  // to handle input values and then submission
  const handleFormChange = (e) => {
    setFormValues((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };
  // handling file select
  const handleSelectFile = async (e) => {
    const files = e.target.files;
    if (files) {
      // Convert FileList to Array
      // If only one file is selected, add it to the existing selectedFile array
      if (files.length === 1) {
        setSelectedFiles([...selectedFiles, files[0]]);
      } else {
        // If multiple files are selected, add the whole array
        setSelectedFiles([...selectedFiles, ...files]);
      }
    }
  };
  // remove the selected file
  const removeImgFile = (index) => {
    // Clear the input value
    if (fileRef.current) {
      fileRef.current.value = "";
      // If index is provided, remove the file at that index from the selectedFile array
      setSelectedFiles((prevSelectedFile) => {
        const updatedSelectedFile = [...prevSelectedFile];
        updatedSelectedFile.splice(index, 1);
        return updatedSelectedFile.length > 0 ? updatedSelectedFile : [];
      });
    }
  };

  return (
    <div>
      <form onChange={handleFormChange} className="form text-white">
        <section>
          {/*product name */}
          <div className="field-box">
            <label htmlFor="product-name">Product Name:</label>
            <br />
            <input type="text" id="product-name" name="product-name" required />
          </div>
          {/*product price */}
          <div className="field-box">
            <label htmlFor="price">Price:</label>
            <br />
            <input
              type="number"
              min="0.1"
              step="0.01"
              id="price"
              name="price"
              required
            />
          </div>
          {/* product details */}
          <div className="field-box">
            <label htmlFor="product-details">Product details:</label>
            <br />
            <input
              type="text"
              id="product-details"
              name="product-details"
              required
            />
          </div>
          {/*product description */}
          <div className="field-box">
            <label htmlFor="product-description">Product description:</label>
            <br />
            <input
              type="text"
              id="product-description"
              name="product-description"
              required
            />
          </div>
          {/*product size */}
          <div className="field-box">
            <label htmlFor="product-size">Product size:</label>
            <br />
            <input type="text" id="product-size" name="product-size" required />
          </div>
          {/*product colors */}
          <div className="field-box">
            <label htmlFor="product-colors">Product colors:</label>
            <br />
            <input
              type="text"
              id="product-colors"
              name="product-colors"
              required
            />
          </div>
          {/*product gender */}
          <div className="field-box">
            <label htmlFor="product-gender">Product gender:</label>
            <br />
            <select
              onChange={handleFormChange}
              value={formValues?.productGender}
              className="h-[46px] pl-3 w-full border-[1px] border-solid border-borderGray outline-none my-3 text-mediumGray"
              name="propertyType"
              id="propertyType"
            >
              <option
                className="hover:bg-primary-blue hover:text-white"
                value="house"
              >
                Gender
              </option>
              <option value="male">For Male</option>
              <option value="female">For Female</option>
            </select>
          </div>

          {/*product category */}
          <div className="field-box">
            <label htmlFor="product-category">Product category:</label>
            <br />
            <input
              type="text"
              id="product-category"
              name="product-category"
              required
            />
          </div>
          {/*product composition and care */}
          <div className="field-box">
            <label htmlFor="product-composition">
              Product composition and care:
            </label>
            <br />
            <input
              type="text"
              id="product-composition"
              name="product-composition"
              required
            />
          </div>
        </section>
        <input
          ref={fileRef}
          onChange={(e) => handleSelectFile(e)}
          type="file"
          name="uploadImages"
          multiple
          className="hidden"
          accept="image/*"
          id="uploadImages"
        />
        {selectedFiles.length > 0 && (
          <div className="relative flex flex-wrap gap-2 mr-auto mt-2 mb-4">
            {selectedFiles.map((selectedFile, index) => (
              <div className="relative max-h-[300px] max-w-[300px] object-cover">
                <span className="absolute right-5 top-2">
                  <CloseIcon
                    onClick={isUploading ? null : () => removeImgFile(index)}
                  />
                </span>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected picture"
                  className="mt-2 object-cover w-full h-full"
                />
              </div>
            ))}
            <div className="flex justify-center w-full">
              <Button
                className={"my-3 mx-auto w-full"}
                handleClick={() => openFile(fileRef)}
              >
                {isUploading ? <Spinner /> : "Add Image"}
              </Button>
            </div>
          </div>
        )}
        {/* when file is not selected then show the following(uploading file section) */}
        {selectedFiles?.length == 0 && (
          <label
            className="grid place-content-center max-w-[500px] mx-auto mt-3 py-2 cursor-pointer border-dashed border-2 border-primary-blue w-full"
            htmlFor="uploadImages"
          >
            <MdOutlineCloudUpload className="mx-auto text-4xl text-primary-blue" />
            <p className="mb-3 font-light">Drop you files here</p>
            <Button
              isDisabled={isUploading}
              handleClick={() => openFile(fileRef)}
            >
              {isUploading ? "uploading file" : "choose files"}
            </Button>
          </label>
        )}
        <Button className="rounded-none w-full mt-5">add product</Button>
      </form>
    </div>
  );
};

export default UpdateProducts;
