import { checkoutBtnHandler, closeSideBarHandler, manageInventoryBtnHandler } from "./handlers.js";
import { addNewProductBtnHandler } from "./inventory.js";
import { createRecordFormHandler, recordGroupHandler } from "./record.js";
import {
  addNewProductBtn,
  checkoutBtn,
  closeSideBar,
  createRecordForm,
  manageInventoryBtn,
  recordGroup,
} from "./selectors.js";

const listener = () => {
  manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
  closeSideBar.addEventListener("click", closeSideBarHandler);
  addNewProductBtn.addEventListener("click", addNewProductBtnHandler);
  createRecordForm.addEventListener("submit", createRecordFormHandler);
  recordGroup.addEventListener("click", recordGroupHandler);
  checkoutBtn.addEventListener("click",checkoutBtnHandler);
};
export default listener;
