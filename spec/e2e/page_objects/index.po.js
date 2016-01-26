// ./spec/e2e/page_objects/upload.po.js

var index = {
    directive: element(by.tagName("gr-index-directive")),
    menuButton: element(by.id("menuButton")),
    uploadButton: element(by.id("uploadButton")),
    infoButton: element(by.id("infoButton")),
    uiView: element(by.tagName("ui-view")),
    openMenu: openMenu,
    linkTo: linkTo,
    checkMenu: checkMenu
};

function openMenu(){
    index.menuButton.click();
}

function linkTo(view){
    var views = {
        upload: index.uploadButton.click(),
        info: index.infoButton.click()
    }
}

function checkMenu(){
    expect(index.menuButton.isPresent()).toBeTruthy();
    index.openMenu();
    expect(index.uploadButton.isPresent()).toBeTruthy();
    expect(index.infoButton.isPresent()).toBeTruthy();
}

module.exports = index;
