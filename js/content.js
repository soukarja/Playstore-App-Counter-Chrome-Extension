chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    
    
    var existing_countsers = document.querySelectorAll('.app_counter');

    if (existing_countsers.length > 0)
    {
      existing_countsers.forEach(function(item, index){
          item.parentNode.removeChild(item);
      });
      // var prev = document.querySelector('.countchecked');
      // prev.className = prev.className.replace('countchecked', '');
    }
    else{
      
    // document.querySelector('.countchecked').remove();
    var prev = document.querySelector('.countchecked');
    if (prev != null)
    {
      prev.remove();
    }
    var apps = document.querySelectorAll(
      'c-wiz > div >div > div[class="uzcko"] > div'
    );
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
    var parentElim = apps[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    // apps[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    parentElim.className = parentElim.className + " countchecked";
  }
  }
});
// document.querySelectorAll('c-wiz > div >div > div[class="uzcko"] > div')[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();