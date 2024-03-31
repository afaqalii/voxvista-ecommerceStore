
// Function to check if user is on dashboard or not
export const isDashboard = (location) => {
    return location.pathname === "/dashboard" || location.pathname === "/dashboard/";
}
// open file input to add files, function to openFile whre the input is hidden and we need to upload file from our computer
export const openFile = (fileRef) => {
    fileRef.current.click();
};
