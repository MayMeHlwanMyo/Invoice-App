import { closeSideBar, productSideBar } from "./selectors.js";

export const manageInventoryBtnHandler =  () => {
    console.log(productSideBar.classList.remove("translate-x-full"));
    console.log(productSideBar.classList.remove("duration-300"));
}

export const closeSideBarHandler = () => {
    console.log(productSideBar.classList.add("translate-x-full"));
}

export const checkoutBtnHandler = () => {
    console.log("u checkout");
    window.print();
}

