// THIS CODE IS SO SHITY. But idc.
if (true) { //Date.now() < 1583010000000
    nextAct();

    function openMap(x,z,server) {
        window.open("https://earthmc.net/map/?worldname=earth&mapname=flat&zoom=7&x="  + x  + "&y=64&z=" + z, "_blank");
    }
    function toFull(num) {
        if (num.toString().length == 1){
            return "0"+num.toString()
        }
        return num.toString()

    }

    function nextAct(){
        let targetPlace = document.getElementById('targetPlace');
        let cantFind = document.getElementById('cantFind');
        let btn = document.getElementById('findBtn');
        let input = document.getElementById('name_field');
        let table = document.getElementById('table');

        //
        var date = new Date(info.timestamp);
        console.log(info.timestamp);
        let dateCont = document.getElementById("dateCont");
        dateCont.innerText = `${toFull(date.getHours())}:${toFull(date.getMinutes())}  ${toFull(date.getDate())}/${toFull(date.getMonth()+1)}/${toFull(date.getFullYear())} (D/M/Y)`;


        //
        btn.addEventListener('click', function () {
            targetPlace.textContent = "";
            let unpackedCords;
            let server;
            unpackedCords = info.sets["townyPlugin.markerset"].areas;
            server = 1;
            cantFind.innerText = "Can't find anything";
            table.innerHTML = '';
            let target = input.value.toUpperCase();
            let i = 0;
            let name = false;

            for (let [key, value] of Object.entries(unpackedCords)) {
                if (value.label.toUpperCase().substr(0, target.length) == target) {
                    name = value.label;
                }
            }
            console.log("End: ", name);
            target = name;
            if (name !== false ){
                console.log(name);
                for (let [key, value] of Object.entries(unpackedCords)) {
                    if (value.label.toUpperCase() == target.toUpperCase()) {
                        if (i == 0) {
                            targetPlace.innerText = target;
                            cantFind.innerText = "";
                            table.style.display = 'table';
                            let newThread = document.createElement("thead");
                            let newTr = document.createElement('tr');
                            let newTh = document.createElement('th');
                            newTh.textContent = "   #  ";
                            newTr.appendChild(newTh);
                            newTh = document.createElement('th');
                            newTh.textContent = "  x  ";
                            newTr.appendChild(newTh);
                            newTh = document.createElement('th');
                            newTh.textContent = "  z  ";
                            newTr.appendChild(newTh);
                            newThread.appendChild(newTr);
                            newTh = document.createElement('th');
                            newTh.textContent = "link";
                            newTr.appendChild(newTh);
                            newThread.appendChild(newTr);
                            table.appendChild(newThread);

                        }
                        if (key.substring(key.length-4, key.length) != "Shop") {
                            let newThread = document.createElement("thead");
                            let newTr = document.createElement('tr');
                            let newTd = document.createElement('td');
                            newTd.textContent = i;
                            newTr.appendChild(newTd);
                            newTd = document.createElement('td');
                            newTd.textContent = value.x[0];
                            newTr.appendChild(newTd);
                            newTd = document.createElement('td');
                            newTd.textContent = value.z[0];
                            newTr.appendChild(newTd);
                            newTd = document.createElement('td');
                            newTd.textContent = 'On map';
                            newTd.style.color = "#E27D60";
                            newTd.setAttribute('onclick', "openMap(" + value.x[0] + "," + value.z[0] + "," + server + ")");
                            newTr.appendChild(newTd);
                            newThread.appendChild(newTr);
                            table.appendChild(newThread);
                        }
                        i++;


                    }
                }
            } else {
                table.style.display = 'none';
                table.innerHTML = "";
            }

        });

    }

}
