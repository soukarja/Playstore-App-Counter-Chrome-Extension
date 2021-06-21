chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {

    var apps = document.querySelectorAll(
      'c-wiz > div >div > div[class="uzcko"] > div'
    );

    var existing_countsers = document.querySelectorAll('.app_counter');

    if (existing_countsers.length > 0)
    {
      existing_countsers.forEach(function(item, index){
          item.parentNode.removeChild(item);
      });
    }
    else{
    apps.forEach(function (item, index) {
      var temp = item.innerHTML;
      var box = document.createElement("span");
      box.innerHTML =
        '<span class="app_counter" style="font-size: 1.3rem;user-select: none;font-weight: bolder;color: white;margin: 10px;padding: 10px;position: absolute;z-index: 99;height: 30px;width: 30px;background: #ff0043;border-radius: 50%;text-align: center;align-items: center;justify-content: center;display: flex;flex-direction: column;">' +
        (index + 1) +
        "</span>";
      temp = box.innerHTML + temp;
      item.innerHTML = temp;

      //item.appendChild(box);
    });
  }
  }
});
