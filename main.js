const os = require('os');
let cpus = os.cpus();

let computer = {
  "cores":cpus.length,
  "model":cpus[0]['model'],
  "arch":os.arch(),
  "memory":`${(os.totalmem()/1073741824).toFixed(2)} Gb`,
  "freemen": `${(os.freemem()/1073741824).toFixed(2)} Gb`,

}



document.getElementById('computer').innerHTML=`<strong>Processor Cores : </strong>  ${computer['cores']}
  <strong>Processor Model: </strong> ${computer['model']}
  <strong>Architecture: </strong> ${computer['arch']}
  <strong>RAM :</strong> ${computer['memory']}
  <strong>Free RAM :</strong> ${computer['freemen']}  `;

let system = {
  "type":os.type(),
  "hostname":os.hostname(),
  "version":os.release(),

  "temp":os.tmpdir(),
}

document.getElementById('os').innerHTML=`<strong>Type: </strong>
  ${system['type']} <strong>Version</strong>${system['version']}
  <strong>Hostname: </strong> ${system['hostname']}
  <strong>Temp</strong> ${system['temp']}`;

let networkInterfaces =os.networkInterfaces();

function showInterfaces(object) {
    let result = "";
    let interface, its;
    for (let ob in object) {

      if (object.hasOwnProperty(ob)) {

          result += `<strong>${ob} </strong> <hr>`;
          interface = object[ob];

          for (let info in interface) {
            if (interface.hasOwnProperty(info)) {
              result+="<hr> <ul>";
              its =interface[info];

            for (let it in its) {
              result += `<li>${it} :  ${its[it]}</li>`;
              }
            }
            result+="</ul>";

          }
          }
      }

    return result;
  }
document.getElementById('network').innerHTML = showInterfaces(networkInterfaces);
