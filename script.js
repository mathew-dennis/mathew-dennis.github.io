const D={phosh:["Phosh","A mobile shell for Linux phones, part of the GNOME ecosystem.","Redesigned the navigation bar to align with the latest design trends in leading operating systems.","https://gitlab.gnome.org/World/Phosh/phosh/-/merge_requests/1206","View my merge request"],
phoenix:["Phoenix","An open-source code editor from phcode.dev that runs in the browser.","Identified visual inconsistencies and pushed fixes for them.","https://github.com/phcode-dev/phoenix/commits/main/?author=mathewdennis1","View my commits"],
droidian:["Droidian","A Linux distribution for Android phones, part of the Linux on mobile movement.","Ported and actively maintain device compatibility for the Redmi Note 7 Pro and Samsung S20 FE.","https://devices.droidian.org/#/devices/violet","View the device page"],
cutie:["Cutie Shell","An open-source, Qt-based shell for mobile Linux.","Developed a QML module for the shell and actively contribute to bringing its capabilities up to a mainstream level.","https://github.com/cutie-shell/libcutiedesktopfileparser","View my module on GitHub"]};
const dlg=document.getElementById("dlg");
document.querySelectorAll(".oss button").forEach(b=>b.addEventListener("click",()=>{const d=D[b.dataset.k];
dt.textContent=d[0];dw.textContent=d[1];dd.textContent=d[2];dl.href=d[3];dl.textContent=d[4];dlg.showModal()}));
dlg.querySelector(".x").addEventListener("click",()=>dlg.close());
dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
